import { useEffect, useRef } from "react";
import "./RefForm.css"

const RefForm = () => {

    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const numberRef = useRef(null)

    useEffect(()=>{
        nameRef.current.focus()
    },[])

    const handleFormSubmit = e =>{
        e.preventDefault();
        // console.log(e.target.value)
        console.log(nameRef.current.value)
        console.log(emailRef.current.value)
        console.log(numberRef.current.value)
        
    }
    return (
        <div className="ref-form">
            <h1>Its is Ref Form</h1>
            <form onSubmit={handleFormSubmit}>
                <input ref={nameRef} type="text" name="name" id="name" placeholder="Name" />
                <br />
                <input ref={emailRef} type="email" name="email" id="email" placeholder="Email" defaultValue={"mosta@gmail.com"} />
                <br />
                <input ref={numberRef} type="number" name="phone" id="phone" placeholder="Phone" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default RefForm;