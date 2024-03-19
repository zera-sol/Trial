import Services from "./compnents/Services";
import "./styles/services.css"
import ShowDetail from "./compnents/showDetail";
import 'react-toastify/dist/ReactToastify.css';
import { data } from "./file";
import { useState } from "react";
import {toast } from 'react-toastify';

function RenderServices(){
    const [value, setValue] = useState(''); 
    const [isOn, setIsOn]   = useState(false);
 
    function addValue(){
       setIsOn(false)
  } 

  function showService(text){  
    if(!value && !isOn){
        setValue(text)
        setIsOn(true)
    }
    else{
        setValue("")
        setIsOn(false)
    }
   }
 
    return(
        <div>
            <div className="service_container">
                   {
                        data.map((a) => {
                            return(
                                <Services 
                                    index= {a.index}
                                    time= {a.time}
                                    id= {a.id}
                                    image = {a.image}
                                    title= {a.title}
                                    class={a.class}
                                    text = {a.text}
                                    btnText = {a.btnText}
                                    name = { a.name }
                                    handleClick = {() => showService(a.name)}/>
                            )
                        })
                   }
             </div>
             <div >
                {
                    data.filter((a) => a.name === value).map((a) => {
                       return(
                          <ShowDetail
                               title={a.title}
                               detail ={a.detail} 
                               handleClick={addValue}/>
                       )
                        
                    })
                }
                    
             </div>
            
        </div>
        
    )
}
export default RenderServices;