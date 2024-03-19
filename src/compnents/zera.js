import '../styles/Hero.css'
import { Cursor, useTypewriter } from "react-simple-typewriter"

function Hero(){
    const [text] = useTypewriter({
        words: ['Web designer & Developer', 'Passionate about development.', 'Eager to learn more.', 'Excited to innovate solutions.'],
        loop:{},
        typeSpeed:100,
        deleteSpeed:120
    })
    return(
        <>
        <div id='hero'>
              <div id='hero_text'>
                    <h4>Hello there, my name is</h4>
                    <h1>Zerihun <span id="kaku">Solomon</span></h1>
                    <p id='generated'>{text} <Cursor /></p>
              </div>
              <div id="hero_image">
                    <img src={require("../images/voo.jpg")}  alt='' />
              </div>
        </div>
        <p id='saks'> 
            <span>50+ projects</span>
            <span>30+ satisfied clients</span>
            <span>2years of Experiance</span>
        </p>
        </>
    )
}
export default Hero;