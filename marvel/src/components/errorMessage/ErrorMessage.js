import img from "./Error.gif"
const ErrorMessage = () => {    

    return(
        // how to get the same element from public folder
        // <img src={process.env.PUBLIC_URL + "/Error.gif"} alt="error"/>
        <img style={{display: "block", alignItems: "center", objectFit: "contain", margin: "0 auto", width:"100px", height:"100px"}} src={img} alt="error message"/>
    )

}

export default ErrorMessage;