import Services from "./compnents/Services";
import "./styles/services.css"
import { data } from "./file";

let serviceSection = data.map((a) => {
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
            name = { a.name }/>
    )
})
function RenderServices(){
    return(
        <div>
            <div className="service_container">
                   {serviceSection}
             </div>
             
        </div>
        
    )
}
export default RenderServices;