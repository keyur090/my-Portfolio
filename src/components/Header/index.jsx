import React from "react";
import { useRef } from "react";
import "./header.css";
import Facts from "./Facts";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const PDF__FILE__URL = "http://localhost:3000/Keyur's Resume.pdf";

function Header() {

  const [text] = useTypewriter({
    words: ["I'M A FRONTEND DEVELOPER"],
    loop: true,
    typeSpeed: 90,
    deleteSpeed: 80,
    delaySpeed: 8000,
  })

  const [word] = useTypewriter({
    words: ["Keyur Vaghasiya."],
    loop: true,
    typeSpeed: 40,
    deleteSpeed: 80,
    delaySpeed: 5000,
  })



  const container = useRef(null);
  gsap.registerPlugin(useGSAP);

  const downloadCVurl = (url) => {
    const filename = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", filename);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  useGSAP(
    () => {
      gsap.fromTo(
        ".profile__photo__container",
        {
          scale: 0.5,
          duration: 1,
          opacity: 0.5,
        },
        {
          scale: 1,
          duration: 1,
          ease: "sine.in",
          opacity: 1,
        }
      );
      gsap.from(".intro__text", {
        fontSize: 100,
        duration: 1,
        delay: 1,
        ease: "sine.in",
      });

      const timeline = gsap.timeline();
      timeline
        .from(".header__info__top", {
          opacity: 0,
        })
        .from(".header__title", {
          opacity: 0,
          y: -30,
        })
        .from(".header__description", {
          opacity: 0,
        })
        .from(".btn", {
          x: -40,
          opacity: 0,
          stagger: 0.5,
        });
    },
    { scope: container }
  );

  return (
    <header id="header" className="blur__effect">
      <div className="stroke__text intro__text"></div>
      <div className="section__wrapper header__container">
        <div className="column intro__container blur__effect">
          <div className="header__info">
            <div className="header__info__top">
              Hello There! I'm{" "}
              <span className="color__primary">{word}</span>
              <Cursor cursorColor='skyblue' />
            </div>
            <div className="header__info__middle">
              <h1 className="primary__title header__title">
                {text}
              </h1>              
              <p className="text__muted header__description">
                I dissect intricate user experience challenges to engineer
                integrity-focused solutions that{" "}
                <span className="scenter">
                  resonate with billions of users.
                </span>
              </p>
            </div>
            <Facts />
            <div className="header__info__bottom">
              <button
                className="btn"
                onClick={() => {
                  downloadCVurl(PDF__FILE__URL);
                }}
              >
                Download CV
              </button>
              <a
                href="mailto:vaghasiyakeyur825@gmail.com"
                className="btn"
                id="btnb"
              >
                Email Me
              </a>
            </div>
          </div>
        </div>
        {/* <div className="column profile__wrapper">
              <div className="profile__photo__container">
                <img src={profile1} className="profile__photo" alt="" />
              </div>
            </div> */}
      </div>
    </header>
  );
}

export default Header;
