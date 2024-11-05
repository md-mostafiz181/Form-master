import { useState } from "react";
import "./StateFulForm.css"


const StateFulForm = () => {
    const [name,setName]=useState(null)
    const [email,setEmail]= useState(null)
    const [number,setNumber]=useState(null)
    const [password,setPassword]=useState(null)

    const handleSubmit = e =>{
        e.preventDefault();
        console.log(name,email,number,password)
    }

    const handleSubmitName = e =>{
        e.preventDefault();
        setName(e.target.value)
        
    }

    const handleSubmitEmail = e =>{
        e.preventDefault();
        setEmail(e.target.value)
        
    }

    const handleSubmitNumber = e =>{
        e.preventDefault();
        setNumber(e.target.value)
        
    }

    const handleSubmitPassword = e =>{
        e.preventDefault();
        setPassword(e.target.value)
        
    }
    return (
        <div className="state-full">
            <h1>Its a state full form</h1>
            <form onSubmit={handleSubmit}>
                <input
                onChange={handleSubmitName}
                 type="text" className="type" name="name" placeholder="Name" />
                <br />
                <input
                onChange={handleSubmitEmail}
                 type="email" className="type" name="email" placeholder="Email" />
                <br />
                <input
                onChange={handleSubmitNumber}
                 type="number" className="type" name="number" placeholder="Phone" />
                <br />
                <input onChange={handleSubmitPassword} type="password" className="type" name="password" placeholder="Password" />
                <br />
                <input type="submit" className="submit" value={"Submit"}/>
            </form>
        </div>
    );
};

export default StateFulForm;