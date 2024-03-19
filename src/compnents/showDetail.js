import "../styles/services.css"
import {toast } from 'react-toastify';

function ShowDetail({title, detail, handleClick}){
     return(
     <div id="notify">
           {toast(
        <div id="notify_div">
            <h2>{title}</h2>
            <p>{detail}</p>
            <button>Contact Me</button>
        </div>
        , {
          position: "top-center",
          autoClose: false,
          closeButton : true,
          onClose : handleClick,
      }
      )}
    </div>
     
    )
}

export default ShowDetail