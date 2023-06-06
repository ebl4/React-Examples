import { useState } from "react";

function MyForm() {
    const [name, setName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`O nome que você entrou foi: ${name}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Entre com o seu nome:
                <input 
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}>
                </input>
            </label>
            <input type="submit"></input>
        </form>
    )
}

export default MyForm;