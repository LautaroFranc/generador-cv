import { useState } from "react"
import axios from "axios"

const useFetchRequest = (URL_API:string, method:"post"|"get") =>{
  const [response, setResponse] =useState<any>()
  const [messageError, setMessageError] =useState()

    const request =async (data:object) =>{
    
    try {
      let bodyContent = JSON.stringify(data);
    
      let headersList = {
        "Accept": "*/*",
        "Content-Type": "application/json" 
       }
       
      let reqOptions = {
        url: URL_API,
        method: method,
        headers: headersList,
        data: bodyContent,
      }

      let result = await axios.request(reqOptions)
      setResponse(result)

      } catch (error:any) {
       setMessageError(error)
      }
    }
  return {response,messageError, request}
}





export default useFetchRequest