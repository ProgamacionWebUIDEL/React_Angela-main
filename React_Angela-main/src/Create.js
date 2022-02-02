import React, { useState } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
var qs = require('qs');
export default function Create() {
  const [nombre, setnombre] = useState('');
  const [raza, setRaza] = useState('');
  const [tamaño, setTamaño] = useState('');
  const [color, setColor] = useState(''); 
  

  const enviarDatos = () => {
      console.log(nombre);
      console.log(raza);
      console.log(tamaño);
      console.log(color);


      
      var data = qs.stringify({
          'nombre': nombre,
          'Raza': raza,
          'Tamaño': tamaño,
          'Color': color
        
        });
      var config = {
          method: 'post',
          url: 'https://uide-crud.herokuapp.com/clinica/crearclinica',
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
          },
          data: data
      };

      axios(config)
          .then(function (response) {
              window.alert("Medicamento y Mascota GUARDADO")
              window.alert("Mascota  GUARDADO")
              console.log(JSON.stringify(response.data));
          })
          .catch(function (error) {
              window.alert("OCURRIO UN ERROR")
              console.log(error);
          });

  }
return(


<Form>
    <Form.Field>
      <label>Medicamento</label>
      <input placeholder="medicamento"onChange={(e) => setMedicamento(e.target.value)}></input>
      
    </Form.Field>
    <Form.Field>
      <label>Nombre</label>
      <input placeholder="Nombre" onChange={(e) => setNombre(e.target.value)}></input>
    </Form.Field>
    <Form.Field>
        <label>Precio</label>
        <input type="number" placeholder="Horas Trabajadas"onChange={(e) => setprecio(e.target.value)}></input>
      </Form.Field>
      <Form.Field>
      <label>Marca</label>
      <input placeholder="Ciudad"onChange={(e) => setMarca(e.target.value)}></input>
    </Form.Field>
    <Form.Field>
      <label>Tipo</label>
      <input placeholder="Tipo" onChange={(e) => setTipo(e.target.value)}></input>
    </Form.Field>
      
    <h2><label>MASCOTA</label></h2>
    <Form.Field>
        <label>Nombre</label>
        <input placeholder="Nombre"onChange={(e) => setnombre(e.target.value)}></input>
      </Form.Field>
      <Form.Field>
        <label>Raza</label>
        <input placeholder="Raza"onChange={(e) => setRaza(e.target.value)}></input>
      </Form.Field>
      <Form.Field>
      <Form.Field>
        <label>Tamaño</label>
        <input placeholder="Tamaño"onChange={(e) => setTamaño(e.target.value)}></input>
      </Form.Field>
      <Form.Field>
        <label>Color</label>
        <input placeholder="Color"onChange={(e) => setColor(e.target.value)}></input>
      </Form.Field>
        <label>Raza</label>
        <select value ="Seleccione  la Raza" onChange={(e) => setRaza(e.target.value)}>
          <option>Shitzu</option>
          <option>Pitbull</option>
          <option>Chiguagua</option>
        </select>
      </Form.Field> 
      <Form.Field>
        <label>Tamaño</label>
        <select value ="Seleccione tamaño" onChange={(e) => setTamaño(e.target.value)}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
      
        </select>
      </Form.Field> 
      <Form.Field>
        <label>Color</label>
        <input placeholder="COLOR"onChange={(e) => setColor(e.target.value)}></input>
      </Form.Field>
      <Button onClick={enviarDatos} type="submit">Guardar</Button>
</Form>

)
}
