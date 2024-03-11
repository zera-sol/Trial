import { useState } from "react"

export default function SideBar(){
    const [isZero, setIsZero] = useState(false)
    const myStyle = {
        width: 0,
        transition: "2s"
    }
    function removeWidth(){
        setIsZero(true)
    }
    function addWidth(){
        setIsZero(false)
    }
    return(
        <div>
            <div className="menubar" onClick={addWidth}>
                 <i class="fa-solid fa-bars"></i>
            </div>
            <div className="sidebar" style={isZero ? myStyle:console.log("The width is not zro")}>
                  <div className="sidebar_icon_close">
                        <i class="fa-solid fa-xmark" onClick={removeWidth}></i>
                        <ul>
                            <li><a href='/contact'>Contact</a></li>
                            <li><a href='/resume'>Resume</a></li>
                            <li><a href='/about'>About</a></li>
                            <li><a href='/certificate'>Certificate</a></li>
                            <li><a href='/projects'>Projects</a></li>
                        </ul>         
                </div>
            </div>
        </div>
        
    )
}