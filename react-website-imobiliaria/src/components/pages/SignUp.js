import React from 'react';
import '../../App.css';
import { useState } from 'react';
import axios from 'axios';

export default function SignUp() {
  const [formValues, setFormValues] = useState({});

  function enviarDados() {
    axios
      .post("http://localhost:3000/posts", {
        nome: formValues.name,
      })
      .then((dados) => console.log(dados))
      .catch((error) => console.log(error));
    }

    axios
     .delete("http://localhost:3000/posts/10")
     .then((dados) => console.log(dados))
     .catch((error) => console.log(error));

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const isCheckbox = type === 'checkbox';

    const data = formValues[name] || {};
    if (isCheckbox) {
      data[value] = checked;
    }
    const newValue = isCheckbox ? data : value;
    setFormValues({ ...formValues, [name]: newValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log('*** handleSubmit', data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Nome" onChange={handleInputChange} value={formValues.name || ''} />
      <input type="text" name="email" placeholder="Email" onChange={handleInputChange} value={formValues.email || ''} />

      <select name="Serviços" onChange={handleInputChange} value={formValues.language || ''}>
        <option value="javascript">Compra</option>
        <option value="php">Alugar</option>
        <option value="ruby">Venda</option>
        <option value="ruby">AirBnB</option>
      </select>

      <div className="radios">
        <label>
          <input
            type="radio"
            value="cafe"
            name="drink"
            onChange={handleInputChange}
            checked={formValues.drink === 'cafe'}
          />
          Casa
        </label>
        <label>
          <input
            type="radio"
            value="cha"
            name="drink"
            onChange={handleInputChange}
            checked={formValues.drink === 'cha'}
          />
        Apartamento
        </label>
      </div>

      <div className="checks">
        <label>
          <input
            type="checkbox"
            name="social"
            value="twitter"
            onChange={handleInputChange}
            checked={formValues.social && formValues.social.twitter}
          />
 Centro Urbano
        </label>
        <label>
          <input
            type="checkbox"
            name="social"
            value="instagram"
            onChange={handleInputChange}
            checked={formValues.social && formValues.social.instagram}
          />
      Interior
        </label>
        <label>
          <input
            type="checkbox"
            name="social"
            value="facebook"
            onChange={handleInputChange}
            checked={formValues.social && formValues.social.facebook}
          />
       Praia
        </label>
      
      <label>
          <input
            type="checkbox"
            name="social"
            value="linkedin"
            onChange={handleInputChange}
            checked={formValues.social && formValues.social.Linkedin}
          />
       Campo
        </label>
        <label>
          <input
            type="checkbox"
            name="social"
            value="twich"
            onChange={handleInputChange}
            checked={formValues.social && formValues.social.Twich}
          />
       Serra
        </label>
        </div>
      <textarea name="bio" onChange={handleInputChange} value={formValues.bio || ''}></textarea>

      <button onClick={() => enviarDados()} type="submit">
        Enviar
      </button> 
    </form>
  );
}
