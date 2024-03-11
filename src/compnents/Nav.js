import React  from "react"
export default function NavBar(){
    return(
        <div className="nav_bar">
            <ul>
                <li><a href='/contact'>Contact</a></li>
                <li><a href='/resume'>Resume</a></li>
                <li><a href='/about'>About</a></li>
                <li><a href='/certificate'>Certificate</a></li>
                <li><a href='/projects'>Projects</a></li>
            </ul>
        </div>
    )
}