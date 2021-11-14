import React from 'react';

const GetStyle = (title)=>{
    switch(title){
        case "DOWNLOAD":
            return {
                backgroundColor : "rgb(126, 148, 2)"
            }
        case "HOME":
            return {
                backgroundColor : "rgb(230, 61, 125)"
            }
        case "JOIN US":
            return {
                backgroundColor : "rgb(8, 136, 158)"
            }
        case "SETTINGS":
            return {
                backgroundColor : "rgb(86, 131, 131)"
            }
        case "HELP":
            return {
                backgroundColor : "rgb(74, 48, 122)"
            }
        case "SEARCH":
            return {
                backgroundColor : "rgb(56, 78, 20)"
            }
        case "LOGIN":
            return {
                backgroundColor : "rgb(153, 100, 2)"
            }
        case "CONTACT US":
            return {
                backgroundColor : "rgb(88, 21, 21)"
            }
        default:
            {};
    }
}

const CreateCard = (props) =>{
    const {title} = props;
    const style = GetStyle(title);
    return (
    <div>
        <button className="hero-btn" style={style}>{title}</button>
    </div>
    )
}
export default CreateCard;