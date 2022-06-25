import React, {useState} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import ReactDOM  from 'react-dom';


function useInputWithValidate (initialValue) {
    const [value, setValue] = useState(initialValue);


    const onChange = event => {
        setValue(event.target.value);
    }
    const validateInput = () => {
    
        // return text.search(/\d/) >= 0 ? true : false
        // same as 
        return value.search(/\d/) >= 0
    }

    // value: value, onCHange: onCHange
    return {value, onChange, validateInput}
}


const Form = () => {
    // const [text, setText] = useState("");
    // const [textArea, setTextArea] = useState(``);


    const input = useInputWithValidate("");
    const textArea = useInputWithValidate("");

    // const validateInput = (text) => {
    
    //     // return text.search(/\d/) >= 0 ? true : false
    //     // same as 
    //     return text.search(/\d/) >= 0
    // }

    // const handleClick = () => {
    //     console.log("click");
    // }

    const color = input.validateInput() ? "text-danger" : null

        return (
            <Container>
                <form  className="w-50 border mt-5 p-3 m-auto" 
                style={{'overflow': 'hidden', 
                        'position': 'relative'}}>
                    <div className="mb-3">

                        <input value={`${input.value} / ${textArea.value}`} type="text" className='form-control' readOnly/>
                        <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
                        <input  
                            onChange={input.onChange}  
                            type="email"
                            value={input.value} 
                            className={`form-control  ${color}`}
                            id="exampleFormControlInput1" 
                            placeholder="name@example.com"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                        <textarea 
                        onChange={textArea.onChange}
                        value={textArea.value}
                        className="form-control" 
                        id="exampleFormControlTextarea1" 
                        rows="3"></textarea>
                    </div>
                    {/* <Portal>
                        <Msg/>
                    </Portal> */}
                </form>
            </Container>
        )
    
}


const Portal  = (props) => {
    const node = document.createElement("div");
    document.body.appendChild(node);

    return ReactDOM.createPortal(props.children, node);

}

const Msg = () => {
    return (
        <div 
            style={{'width': '500px', 
                'height': '150px', 
                'backgroundColor': 'red', 
                'position': 'absolute', 
                'right': '0', 
                'bottom': '0'}}>
            Hello
        </div>
    );
}

function App() {
    return (
        <Form/>
    );
}

export default App;