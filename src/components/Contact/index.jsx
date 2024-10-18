import React, { useState } from "react";
import "./contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { TfiSkype } from "react-icons/tfi";
import { BsWhatsapp } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";

function Contact() {
  const [input, setInput] = useState('');
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    toast.success("Message Sent Successfully ");
    console.log("clicktoast");
    setInput('');
  
          
    emailjs
      .sendForm("service_b5jgrmk", "template_ksak16z", form.current, {
        publicKey: "LVE2GVYQTnjSHndaJ",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          console.log("message sent");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contact">
      <div className="section__wrapper contact__container">
        <div className="section__header">
          <h2 className="primary__title">Contact Me</h2>
          <p className="text__muted description">
            Ready to take your digital presence to the next level? Whether
            you're looking to launch a new website, revamp an existing one, or
            need expert advice on the best web technologies, I'm here to help.
            Reach out to discuss your project, ask questions, or just say hello.
          </p>
        </div>
        <div className="contact__group">
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className="contact__icon" />
              <h3>Email</h3>
              <h5>vaghasiyakeyur825@gmail.com</h5>
              <a
                href="mailto:vaghasiyakeyur825@gmail.com"
                target="blank"
                className="btn"
              >
                Send a message
              </a>
            </article>
            <article className="contact__option">
              <TfiSkype className="contact__icon" />
              <h3>Skype</h3>
              <h5>Keyur Vaghasiya</h5>
              <a
                href="https://join.skype.com/invite/sM7e64Klj612"
                target="blank"
                className="btn"
              >
                Send a message
              </a>
            </article>
            <article className="contact__option">
              <BsWhatsapp className="contact__icon" />
              <h3>Whatsapp</h3>
              <h5>+91 9313147262</h5>
              <a
                href="https://wa.me/919313147262"
                target="blank"
                className="btn"
              >
                Send a message
              </a>
            </article>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="your full name"
              placeholder="Your full name"
              required
            />
            <input
              type="email"
              name="your Email"
              placeholder="Your Email"
              required
            />
            <textarea rows={7} name="Message" placeholder="Message" required />
            <button
              // onClick={ofhandleclick()}
              type="submit"
              className="new btn"
            >
              Send Message
            </button>{" "}
            <ToastContainer />
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
