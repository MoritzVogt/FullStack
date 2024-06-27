import "../App.css";

export function Heading({text,number}){
    return(
        <h1 className="heading-basic">{text} - {number}</h1>
    )
}