import { useRef, useEffect, useState } from "react";
import Modal from 'react-modal';
import "../styles/services.css";

function Services(props) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [modal, setModal] = useState(false);

  function closeModal(){
    setModal(false)
  }
  function openModal(){
    setModal(true)
  }

   const modalStyle = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      transition: 'background-color 0.3s ease-in-out' 
    },
    content: {
      backgroundColor: '#2FB4CE',
      width:"500px",
      margin: "0px auto"
    }
   }

   const modalStyle_mobile = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      transition: 'background-color 0.3s ease-in-out' 
    },
    content: {
      backgroundColor: '#2FB4CE',
      width:"300px",
      margin: "0px auto"
    }
   }
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    });

    observer.observe(ref.current);

    return () => {
      observer.unobserve(ref.current);
    };
  }, []);

  const delayTime = props.time * props.index; // Calculate delay time based on time variable and index

  return (          
            <div
                id={props.id}
                className={`${props.class} ${isVisible ? "animate" : ""}`}
                ref={ref}
                style={{ animationDelay: `${delayTime}ms` }} // Apply calculated delay time as animation delay
            >
            <div id="object">
                <div className="service_img">
                        {props.image && <img src={props.image} alt="" />}
                </div>
                <div className="service_text">
                    <h4>{props.title}</h4>
                    <p>{props.text}</p>
                    {props.btnText && <button onClick={openModal}>{props.btnText}</button>}
                </div>
            </div>
            <Modal
                style={window.innerWidth > 768? modalStyle : modalStyle_mobile}
                isOpen={modal}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
            >
              <div id="modal-container">
                 <button id="close_modal" onClick={closeModal}>close</button>
                 <h2>{props.title}</h2>
                 <p>{props.detail}</p>
                 <button id="contact-me">Contact Me</button>
              </div>
            </Modal>
    </div>
  );
}

export default Services;
