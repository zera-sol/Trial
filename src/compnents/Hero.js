export default function Hero(){
    return(
        <div className="hero">
            <div>
                <div className="img-section">
                    <img src={require("../images/zera.png")} alt="laa"/>
                </div>
            </div>
            <div>
                <div className="hero_text" >
                    <h4>Hey</h4>
                    <h2>I'm Zerihun Solomon</h2>
                    <h3>Full-Stack <span>Software Developer</span></h3>
                    <p>A highly motivated student studying Artificial Intelligence and Machine Learning. Actively seeking opportunities to apply my skills and knowledge to real-world projects and contribute to the advancement of the industry.</p>
                </div>
            </div>         
        </div>
    )
}