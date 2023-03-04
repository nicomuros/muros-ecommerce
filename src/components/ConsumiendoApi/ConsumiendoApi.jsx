import { useEffect, useState } from "react"

const ConsumiendoApi = () => {

    /*
    //PETICIÓN TIPO GET

    const [ post, setPost ] = useState([]);

    //Tengo que manejar la promesa del fetch y despues la promesa del json
    useEffect(( ) => {
        const getData = fetch("https://jsonplaceholder.typicode.com/posts");
        getData
            .then( response => response.json())
            .then( res => setPost(res))
            .catch( error => console.log("error: " + error))
            .finally(console.log("No importa como termine, yo me ejecuto"))
    },[]); 

   console.log(post)
    */
    //PETICIÓN TIPO POST
    const [isCreated, setIsCreated ] = useState(false);
    //Tengo que manejar la promesa del fetch y despues la promesa del json
    useEffect(( ) => {
        const createPost = fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            //envio cadena de texto, el backend la recibe, la convierte a objeto y la manipula
            body: JSON.stringify({
                title: "esta es una prueba de front",
                userId: 2,
                body: "prueba del verbo post"
            })
        });
        createPost
            .then( response => setIsCreated(true) )
            
    },[]); 

    console.log(isCreated)
  return (
    <div>
        API CONNECTION
    </div>
  )
}

export default ConsumiendoApi