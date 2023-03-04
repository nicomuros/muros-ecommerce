import { useEffect } from "react"

const ConsumiendoApi = () => {
    useEffect(( ) => {
        const getData = fetch("https://jsonplaceholder.typicode.com/posts");
        getData
            .then( response => response.json())
            .then( res => console.log(res))
            .catch( error => console.log("error: " + error))
    },[])
  return (
    <div>
        API CONNECTION
    </div>
  )
}

export default ConsumiendoApi