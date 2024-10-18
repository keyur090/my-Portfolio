import { SiAirchina } from "react-icons/si";
import { menu } from "../../data";
import "./navbar.css";
import { useEffect, useState, useRef } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  const [Showslider, SetShowslider] = useState(false);
  const [Visible, setVisible] = useState(false);

  const handleScroll = () => {
    const currentScrollpos = window.scrollY;
    if (currentScrollpos > 145) {
      return setVisible(true);
    }
    return setVisible(false);
  };

  const handleRedirect = () => {
    const recipientProfileID = 'keyur-vaghasiya-50338b215'; 
        const linkedInMessageURL = `https://www.linkedin.com/messaging/compose/?recipients=${recipientProfileID}`;
        window.location.href = linkedInMessageURL;
};

  

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const container = useRef(null); 
  gsap.registerPlugin(useGSAP);
  useEffect(() => {
    if (Visible) {
      gsap.fromTo(
        ".navbar__container",
        {
          y: -250,
          width: "100%",
        },
        {
          y: 0,
          top: 0,
          zIndex: 100,
        }
      );
    }
  }, [Visible]);

  useGSAP(
    () => {
      const timeline = gsap.timeline();
      timeline.from(".tab__item", { opacity: 0, stagger: 0.5 });
    },
    { scope: container }
  );

  return (
    <nav
      className={`navbar__container ${Visible ? "visible" : ""}`}
      ref={container}
    >
      {Showslider ? (
        <div
          className="overlay"
          onClick={() => SetShowslider(!Showslider)}
        ></div>
      ) : (
        ""
      )}
      <div
        className="logo__container"
        onClick={() => scroll.scrollToTop({ duration: 500 })}
      >
        <SiAirchina />  
      </div>
      <div className={`tab__group ${Showslider ? "show" : ""}`}>
        <span
          className="icon__container close__btn"
          onClick={() => SetShowslider(!Showslider)}
        >
          <FaTimes />
        </span>
        {menu.map((list, index) => (
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
      </div>
      <div className="nav__buttons__group">
        <button onClick={handleRedirect} className="btn btn__primary" >
          Hire Me &nbsp; <FaArrowUpRightFromSquare />
        </button>
        <FaBarsStaggered
          className="menu"
          onClick={() => SetShowslider(!Showslider)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
