import React from 'react'
import "./skills.css";
import Skillcard from './Skillcard';
import {experience} from "../../data"

function Skills() {
  return (
    <section id='skill'>
    <div className='section__wrapper'>
      <div className='section__header center'>
        <h2 className='primary__title'>My Skills</h2>
      </div>
     <div className='flex'>

      <div className='skill__container'>
      {
        experience.map((list,index) => (
        <Skillcard
        {...list}
        key={index}
        />
        ) )
        }

      </div>
     </div>
    </div>
    

    </section>
  )
}

export default Skills