import { useState } from "react";
import axios from "axios";


export function Home({texto}){
    const [getSalidas, setSalidas] = useState([]);
    const [getTexto, setTexto] = useState("");

    function llamadaApi(){
        axios
            .get("http://localhost:4000/salida").then(
                (response) =>{
                    setSalidas(response.data.salidas);
                });
    }

    function analizar(){
        console.log(getTexto);
        let body = {entrada: getTexto};
        axios
            .post("http://localhost:4000/analizar", body)
            .then((response) => {
                console.log(response.data.message);
            });
    }


    return (<>
        <h1>{texto}</h1>
        <textarea onChange={(e) => {setTexto(e.target.value)}}></textarea> <br />
        <button onClick={llamadaApi}>Llamada Get</button>
        <button onClick={analizar}>Llamada Post</button>

        {
            getSalidas.map(elemento =>{
                return(
                    <li>{elemento}</li>
                );
            })
        }
    </>);
}

