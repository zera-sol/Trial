import "../styles/services.css"
import {toast } from 'react-toastify';

function ShowDetail({title, detail, handleClick}){
     return(
     <div id="notify">
           {toast(
        <div>
            <h2>{title}</h2>
            <p>{detail}</p>
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