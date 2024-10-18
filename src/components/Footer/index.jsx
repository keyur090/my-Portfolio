import React from 'react'
import "./footer.css";
import { Link } from 'react-scroll';
import { menu, socialHandles } from '../../data';

function Footer() {
  return (
    
    <footer id='footer'>
    
      <div className='section__wrapper'>
        <ul className='nav__link__container'>
          {
           menu.map((list, index) => (
          <Link
            activeClass="active"
            className="tab__item name"
            to={list.name.toLowerCase()}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            key={index}
          >
            {list.name}
          </Link>
        ))}
          
        </ul>
        <div className='social__handles__container'>
        {
          socialHandles.map((list,index) =>(
            <a  href={list.link} className='icon__container social__handles' target='blank' key={index}> {list.icon}
            </a>
          ))
        }

        </div>
      
        
        <div className='copyright__container'>
          <h3>Copyright &copy; All right reserved  | 2024</h3>
          <p className='text__muted'> Made with ❤️ by Keyur Vaghasiya</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer