import React from "react"
import { Cursor, useTypewriter } from "react-simple-typewriter"
export default function Hero(){
    const [text] = useTypewriter({
        words: ['Software developer', 'Ui/Ux designer', 'Freelancer'],
        loop:{},
        typeSpeed:100,
        deleteSpeed:120
    })
    return(
        <div className="hero">
            <div>
                <div className="img-section">
                    <img src={require("../images/zera.png")} alt="laa"/>
                </div>
            </div>
            <div>
                <div className="hero_text" >
                    <h4>Hey, this is Zerihun</h4>
                    <h2>I'm a <span>{text} <Cursor /></span></h2>
                    <p>A highly motivated student studying Artificial Intelligence and Machine Learning. Actively seeking opportunities to apply my skills and knowledge to real-world projects and contribute to the advancement of the industry.</p>
                </div>
            </div>         
        </div>
    )
}