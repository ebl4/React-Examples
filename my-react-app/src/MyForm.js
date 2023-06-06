import { useState } from "react";

function MyForm() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Entre com o seu nome:
                <input 
                  type="text"
                  name="username"
                  value={inputs.username || ""}
                  onChange={handleChange}>
                </input>
            </label>
            <label>
                Entre com a sua idade:
                <input 
                  type="text"
                  name="age"
                  value={inputs.age || ""}
                  onChange={handleChange}>
                </input>
            </label>
            <input type="submit"></input>
        </form>
    )
}

export default MyForm;