import React from "react";
import { TbBrandRedux } from "react-icons/tb";
import { SiJavascript } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import "./service.css";
import { redux } from "../../images";
import { JSCertificate } from "../../images";
import { react } from "../../images";

function Certificates() {
  return (
    <section id="certificates">
      <div className="section__wrapper certificates__wrapper">
        <div className="section__header center">
          <h2 className="primary__title"> Certificates </h2>
         
          <br/>
        </div>
        <div className="certificates__group">
          <article className="service">
            <div className="certificates__inner">
              <div className="service__top">
                <div className="icon__container">
                  <SiJavascript className="iconn"/>
                </div>
                <h3 className="title">JavaScript</h3>
              </div>
              <div className="service__middle">
                <img src={JSCertificate} alt=""></img>
              </div>
              <div className="service__bottom">
                <a href="https://www.kgcoding.in/verify-certificate?serialno=V0WPJGQB" className="btn btn__primary">Show Credential</a>
              </div>
            </div>
          </article>

         
          <article className="service" style={{ "--color-primary": "var(--color-skyblue)" }}>
            <div className="certificates__inner">
              <div className="service__top">
                <div className="icon__container">
                  <TbBrandReactNative className="iconr" />
                </div>
                <h3 className="title">React</h3>
              </div>
              <div className="service__middle">
              <img src={react} alt=""></img>
                
              </div>
              <div className="service__bottom">
                <a href="https://www.kgcoding.in/verify-certificate?serialno=EKAXQOSZ" className="btn btn__primary">Show Credential</a>
              </div>
            </div>
          </article>
          <article
            className="service"
            
          >
            <div className="certificates__inner">
              <div className="service__top">
                <div className="icon__container">
                  <TbBrandRedux className="iconr" />
                </div>
                <h3 className="title">Redux Toolkit</h3>
              </div>
              <div className="service__middle">
              <img src={redux} alt=""></img>
              </div>
              <div className="service__bottom">
                <a href="https://www.linkedin.com/learning/certificates/02d19e722185dad62581d7f8ff2054db7590ea1696ba38c4f669390a0a606824?u=92695330" className="btn btn__primary">Show Credential</a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Certificates;
