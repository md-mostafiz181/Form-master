

const SimpleForm = () => {

    const handleFormSubmit = e =>{
        e.preventDefault();
        const form = e.target;
        const name =form.name.value;
        const email=form.email.value;
        const phone =form.email.value;
        const totaldata = {name,email,phone};
        console.log(totaldata)
        
    }
    return (
        <div>
            <h1>Its a simple form</h1>
            <form onSubmit={handleFormSubmit}>
                <input type="text" name="name" id="name" placeholder="Name" />
                <br />
                <input type="email" name="email" id="email" placeholder="Email" />
                <br />
                <input type="number" name="phone" id="phone" placeholder="Phone" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;