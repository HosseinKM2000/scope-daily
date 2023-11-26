import Toastify from "toastify-js";

export function toastAction(attributes){
    let {
        text,
        type
    } = attributes;
    
    Toastify({
        text,
        position:"center",
        duration:3000,
        className:"toastStyle " + type
    }).showToast();
}