import React from "react";

export default function Body(){
   const date = new Date();
   const hours = date.getHours()
   let dayTime;
     if(hours < 12){
        dayTime = "Morning"
     }
     else if (hours >= 12 && hours < 17 ){
       dayTime = "Afternoon"
     }
     else {
       dayTime = "Night"
     }
   return(
      <div className="body">
         <h1>Now the time is { new Date().getHours() % 12 } o'clock!</h1>
          <h1>Good {dayTime}</h1>
                 <ol>
               <li>It is wall paying field of study.</li>
               <li>It is easy to learn (doesn't require collage degree )</li>
               <li>It links me with the technology</li>
               <li>And all my friends are developers</li>
         </ol>
      </div>
   )
}
