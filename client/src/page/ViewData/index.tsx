import React, { useEffect, useState } from "react";
import { GenerateAbout, ViewContainerData } from "./styled_c_ViewData";
import { formCv } from "../../interfaces";
import { Btm } from "../styled_componet";
import useFetchRequest from "../../hooks/useFetch";

const FormDataDisplay = (data: formCv) => {
  const [id, setId] = useState("");
  const { request, messageError, response } = useFetchRequest("https://generador-cv.vercel.app/generateCv", "post");
  const { request:requestIA, response:responseIA } = useFetchRequest("https://generador-cv.vercel.app/generatorAbout", "post");
  
  const [dataIA,setDataIA]=useState({
    wordKey:[],
    about:""
  })
  const [formIA,setFormIA] = useState({
    prompt:"",
    about:""
  });
  const [previewUrl, setPreviewUrl] = useState("");

  useEffect(()=>{
    if(!responseIA) return;
    setDataIA({...dataIA,about: responseIA.data.data});
  },[responseIA])


  const handleChangeTextarea = (event: React.ChangeEvent<HTMLTextAreaElement>)=>{
    const {name, value} = event.target
    setFormIA((prevFormIA:any) => ({
      ...prevFormIA,
      [name]: value
    }));
  }
  const viewCv = async () => {
    if (!data) return;
    if (id) {
      request({ ...data, _id: id });
      return;
    }
    request(data);
  };

  useEffect(() => {
    if (response && !id) {
      localStorage.setItem("idCv", JSON.stringify({ id: response.data.data._id }));
    }
    if (response) {
    setPreviewUrl(`https://generador-cv.vercel.app/viewCv/${id}`);
      
    }
  }, [messageError, response]);

  useEffect(() => {
    const dataLocal = localStorage.getItem("idCv");
    const dataCv = dataLocal && JSON.parse(dataLocal);
    setPreviewUrl(`https://generador-cv.vercel.app/viewCv/${dataCv.id}`);
    setId(dataCv.id);
  }, []);

  const updatePreview = () => {
    setPreviewUrl("")
    viewCv()
  };

  return (
    <ViewContainerData>
      <div>
        <iframe src={previewUrl&&`https://docs.google.com/gview?url=${encodeURIComponent(previewUrl)}&embedded=true`} frameBorder={0} />
      </div>
      <Btm>
        <a href={`https://generador-cv.vercel.app/viewCv/${id}`}>Descargar CV</a></Btm>
      <Btm onClick={updatePreview}>Actualizar vista previa</Btm>
      <h2>Generar about con iA</h2>
      <GenerateAbout>
        <div>
          <label>Mi about</label>
          <textarea onChange={handleChangeTextarea} name="about" cols={58} rows={10}  />
          <label>Descripción del trabajo</label>
          <textarea onChange={handleChangeTextarea} name="prompt" cols={58} rows={10} />
          <Btm onClick={()=>{requestIA(formIA)}}>Generar</Btm>
        </div>
        <div>
            <label>Resultado </label>
            <textarea value={dataIA.about} cols={58} rows={10}  />
            <label>Palabras claves</label>
            {}
        </div>
      </GenerateAbout>
    </ViewContainerData>
  );
};

export default FormDataDisplay;
