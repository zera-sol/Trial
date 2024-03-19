import { useRef, useEffect, useState } from "react";
import "../styles/services.css";

function Services(props) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
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
                    {props.btnText && <button onClick={props.handleClick}>{props.btnText}</button>}
                </div>
            </div>
    </div>
  );
}

export default Services;
