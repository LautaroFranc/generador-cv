import { FormEvent, useState,useEffect } from "react";
import {
  Project,
  education,
  experiences,
  formCv,
  infoUser,
} from "../interfaces";
import { databases, frameworks, programmingLanguages, dataLanguages, dataTools } from "../constant/dataSelec";
import { Btm, BtmAdd, DivAddItems, DivRelations, DivSubContainer, Form, Select, SpanBtm, ViewContainer } from "./styled_componet";
import down from "../assets/down.svg";
import circle from "../assets/circle.svg";
import disc from "../assets/disc.svg";
import addCircle from "../assets/add-plus-circle.svg";
import deleteIcon from "../assets/close-sm-svgrepo-com.svg";
import FormDataDisplay from "./ViewData";
const GeneratorCv = () => {
  const [overFlowActive, setOverFlowActive] = useState(0)
  const [addProject, setAddProject] = useState(false)
  const [onDelete, setDelete] = useState<string[]>([])
  const [addExp, setAddExp] = useState(false)
  const [addEducation, setAddEducation] = useState(false)

  const [contact, setContact] = useState<infoUser|null>(null)

  const [education, setEducation] = useState<education>({
    degree: "",
    fieldOfStudy: "",
    notes: [],
    schoolName: "",
    endDate: {},
    startDate: {},
  })

  const [projects, setProjects] = useState<Project>({
    area: "",
    title: "",
    company: "",
    endDate: {},
    startDate: {},
    summary: "",
    link: ""
  })

  const [exp, setExp] = useState<experiences>({
    achievement: [],
    company: "",
    isCurrent: false,
    startDate: { month: 0, year: 0 },
    endDate: {},
    title: ""
  })


  const [formData, setFormData] = useState<formCv>({
    skills: [],
    db:[],
    tools:[],
    languages: [],
    infoUser: {about:"",Address:"",email:"",name:"",phoneNumber:"",profileUrl:"",stack:""},
    experiences: [],
    educations: [],
    projects: [],
  })

  useEffect(()=>{
    const dataLocal = localStorage.getItem("data_Cv");
    const dataCv:formCv = dataLocal && JSON.parse(dataLocal);

    if (!dataCv) return
    setFormData(dataCv)
    setContact(dataCv?.infoUser)
  },[])

  useEffect(() =>{
    if (!contact) return
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      infoUser: contact
    }));
   },[contact])


  const handleInputChange = (setState: any) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setState((prevFormData: any) => ({
      ...prevFormData,
      [name]: value
    }));    
  };


  

  const handleInputDate = (setState: any) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, id } = event.target;
    let month: number
    let year: number
    if (id !== "date_education") {
      month = Number(value.split("-")[1])
      year = Number(value.split("-")[0])
    }
    setState((prevFormData: any) => ({
      ...prevFormData,
      [name]: id == "date_education" ? { year: +value } : { month, year }
    }));
  };


  const handleAddItems = (setState: any) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value, id, name } = event.target
    let addItems: string[] = []
    addItems = (name == "achievement" ? [...exp.achievement] : [...education.notes])
    addItems.splice(Number(id), 1, value)
    setState((prevExp: any) => ({
      ...prevExp,
      [name]: addItems
    }));
  }
  const handleSelector = (value: string, name: "skills" | "db" | "languages" | "tools") => {
    setFormData((prevFormData: any) => {
      const existingValues = prevFormData[name].some((obj: { name: string; }) => obj.name === value)
      
      if (existingValues) {
        return {
          ...prevFormData,
          [name]: prevFormData[name].filter((item: any) => item.name !== value)
        };
      } else {
        return {
          ...prevFormData,
          [name]: [...prevFormData[name], { name: value }]
        };
      }
    });
  };
  

  


  const onClickAdd = (name: string) => {
    switch (name) {
      case "Education":
        setAddEducation(!addEducation)
        setFormData((prevFormData) => ({
          ...prevFormData,
          educations: [...prevFormData.educations, education]
        }));
        setEducation({
          degree: "",
          fieldOfStudy: "",
          notes: [],
          schoolName: "",
          endDate: {},
          startDate: {},
        })
        break;
      case "Exp":
        setAddExp(!addExp);
        setFormData((prevFormData) => ({
          ...prevFormData,
          experiences: [...prevFormData.experiences, exp]
        }));
        setExp({
          achievement: [],
          company: "",
          endDate: {},
          isCurrent: false,
          startDate: {},
          title: ""
        });
        break;
      default:
        setAddProject(!addProject);
        setFormData((prevFormData) => ({
          ...prevFormData,
          projects: [...prevFormData.projects, projects]
        }));
        setProjects({
          area: "",
          title: "",
          company: "",
          endDate: {},
          startDate: {},
          summary: "",
          link: ""
        });
        break;
    }
  }

  const handleDeleteItem = (item: string, index: "project" | "Exp" | "education") => {
    switch (index) {
      case "project":
        setDelete([...onDelete, item])
        setTimeout(() => {
          setFormData((prevFormData) => ({
            ...prevFormData,
            projects: prevFormData.projects.filter(e => e.title !== item)
          }));
        }, 450)
        break;
      case "Exp":
        setDelete([...onDelete, item])
        setTimeout(() => {
          setFormData((prevFormData) => ({
            ...prevFormData,
            experiences: prevFormData.experiences.filter(e => e.title !== item)
          }));
        }, 450)
        break;
      case "education":
        setDelete([...onDelete, item])
        setTimeout(() => {
          setFormData((prevFormData) => ({
            ...prevFormData,
            educations: prevFormData.educations.filter(e => e.schoolName !== item)
          }));
        }, 450)
        break;
      default:
        break;
    }
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem("data_Cv", JSON.stringify(formData));
  };

  return (
    <ViewContainer>
      <Form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input onChange={handleInputChange(setContact)} type="text" value={formData?.infoUser.name} id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="stack">Stack:</label>
          <input onChange={handleInputChange(setContact)} type="text" id="stack" value={formData?.infoUser.stack} name="stack" required />
        </div>
        <div>
          <label htmlFor="address">Dirección:</label>
          <input onChange={handleInputChange(setContact)} type="text" id="address" value={formData?.infoUser.Address} name="Address" required />
        </div>
        <div>
          <label htmlFor="phone">Teléfono:</label>
          <input onChange={handleInputChange(setContact)} type="tel" id="phone" value={formData?.infoUser.phoneNumber} name="phoneNumber" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input onChange={handleInputChange(setContact)} type="email" id="email" value={formData?.infoUser.email} name="email" required />
        </div>
        <div>
          <label htmlFor="LinkedIn">LinkedIn:</label>
          <input onChange={handleInputChange(setContact)} type="text" id="linkedin" value={formData?.infoUser.profileUrl} name="profileUrl" required />
        </div>
        <div>
          <label htmlFor="about">Sobre mí:</label>
          <textarea onChange={handleInputChange(setContact)} id="about" name="about" value={formData?.infoUser.about} required></textarea>
        </div>
        <div>
          <label>Proyectos:</label>
          {formData.projects.map((item, i) => (
            <DivAddItems theme={onDelete.includes(item.title) && "slide-out-blurred-right"} key={i}>
              <span>{item.title}</span>
              <img src={deleteIcon} onClick={() => handleDeleteItem(item.title, "project")} />
            </DivAddItems>
          ))}
          {addProject ?
            <DivSubContainer>
              <label>area:</label>
              <input onChange={handleInputChange(setProjects)}  type="text" id="area" name="area" required />
              <label>nombre del proyecto:</label>
              <input onChange={handleInputChange(setProjects)} type="text" id="title" name="title" required />
              <label>Empresa:</label>
              <input onChange={handleInputChange(setProjects)} type="text" id="company" name="company" required />
              <label>fecha:</label>
              <DivRelations>
                <label>inicial</label>
                <input onChange={handleInputDate(setProjects)} type="month" id="project_date" name="startDate" required />
                <label>finalizado</label>
                <input onChange={handleInputDate(setProjects)} type="month" id="project_date" name="endDate" required />
              </DivRelations>
              <label>descripción del proyecto:</label>
              <textarea onChange={handleInputChange(setProjects)} id="" name="summary" required></textarea>
              <label>link del repo:</label>
              <input onChange={handleInputChange(setProjects)} type="text" id="link" name="link" required />
              <BtmAdd onClick={() => onClickAdd("project")}>Agregar</BtmAdd>
            </DivSubContainer>
            : <>
              {formData.projects.length < 3 ?
                <Btm onClick={() => setAddProject(!addProject)}>
                  <p>añadir proyecto {formData.projects.length + 1} </p>
                  <img src={addCircle} />
                </Btm>
                : <></>
              }
            </>
          }
        </div>
        <div>
          <label>Experiencia:</label>
          {formData.experiences.map((item, i) => (
            <DivAddItems theme={onDelete.includes(item.title) && "slide-out-blurred-right"} key={i}>
              <span>{item.title}</span>
              <img src={deleteIcon} onClick={() => handleDeleteItem(item.title, "Exp")} />
            </DivAddItems>
          ))}
          {addExp ?
            <DivSubContainer>
              <label>Titulo:</label>
              <input onChange={handleInputChange(setExp)} type="text" id="title" name="title" required />
              <label>Empresa:</label>
              <input onChange={handleInputChange(setExp)} type="text" id="company" name="company" required />
              <label>Fecha:</label>
              <DivRelations>
                <label>inicial</label>
                <input onChange={handleInputDate(setExp)} type="month" id="exp" name="startDate" required />
                <label>finalizado</label>
                <input onChange={handleInputDate(setExp)} type="month" id="exp" name="endDate" required />
                <SpanBtm onClick={()=>setExp({...exp, isCurrent:!exp.isCurrent})}>
                  Actual
                  <img src={exp.isCurrent?disc:circle}/>
                </SpanBtm>

              </DivRelations>
              <label>Logros:</label>
              <textarea onChange={handleAddItems(setExp)} id="0" name="achievement" required></textarea>
              <textarea onChange={handleAddItems(setExp)} id="1" name="achievement" required></textarea>
              <textarea onChange={handleAddItems(setExp)} id="2" name="achievement" required></textarea>
              <BtmAdd onClick={() => onClickAdd("Exp")}>Agregar</BtmAdd>
            </DivSubContainer>
            :
            <>
              {exp.title.length < 3 ?
                <Btm onClick={() => setAddExp(!addExp)}>
                  <p>Añadir experiencia</p>
                  <img src={addCircle} />
                </Btm>
                : <></>
              }
            </>
          }
        </div>
        <div>
          <label>Educación:</label>
          {formData.educations.map((item, i) => (
            <DivAddItems theme={onDelete.includes(item.schoolName) && "slide-out-blurred-right"} key={i}>
              <span>{item.schoolName}</span>
              <img src={deleteIcon} onClick={() => handleDeleteItem(item.schoolName, "education")} />
            </DivAddItems>
          ))}
          {addEducation ?
            <DivSubContainer>
              <label>Nombre de escuela:</label>
              <input onChange={handleInputChange(setEducation)} type="text" id="" name="schoolName" required />
              <label>grado:</label>
              <input onChange={handleInputChange(setEducation)} type="text" id="" name="degree" required />
              <label>Campo de estudio:</label>
              <input onChange={handleInputChange(setEducation)} type="text" id="" name="fieldOfStudy" required />
              <label>fecha:</label>
              <DivRelations>
                <label>inicial</label>
                <input onChange={handleInputDate(setEducation)} type="number" min="2000" max="2024" id="date_education" name="startDate" required />
                <label>finalizado</label>
                <input onChange={handleInputDate(setEducation)} type="number" min="2000" max="2024" id="date_education" name="endDate" required />
              </DivRelations>
              <label>resumen:</label>
              <textarea onChange={handleAddItems(setEducation)} id="0" name="notes" required />
              <textarea onChange={handleAddItems(setEducation)} id="1" name="notes" required />
              <textarea onChange={handleAddItems(setEducation)} id="2" name="notes" required />
              <BtmAdd onClick={() => onClickAdd("Education")}>Agregar</BtmAdd>
            </DivSubContainer>
            :
            <Btm onClick={() => setAddEducation(!addEducation)}>
              <p>Añadir Educación</p>
              <img src={addCircle} />
            </Btm>
          }
        </div>
        <Select>
          <div>
            <label onClick={() => setOverFlowActive(overFlowActive == 1 ? 0 : 1)}>
              <p>Lenguajes de programación</p>
              <span className={`${overFlowActive == 1 ? "activeIcon" : ""}`}><img src={down} /></span>
            </label>
            <ul className={`lista ${overFlowActive == 1 ? "active" : "none"}`} >
              {programmingLanguages.map((language) => (
                <li onClick={() => handleSelector(language, "skills")} key={language} >
                  <span><img src={formData.skills.some((obj) => obj.name === language)? disc : circle} /></span>
                  {language}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <label onClick={() => setOverFlowActive(overFlowActive == 2 ? 0 : 2)}>
              <p>Frameworks</p>
              <span className={`${overFlowActive == 2 ? "activeIcon" : ""}`}><img src={down} /></span>
            </label>
            <ul className={`lista ${overFlowActive == 2 ? "active" : ""}`} >
              {frameworks.map((framework) => (
                <li onClick={() => handleSelector(framework, "skills")} key={framework}>
                  <span><img src={formData.skills.some((obj) => obj.name === framework) ? disc : circle} /></span>
                  {framework}
                </li>
              ))}
            </ul>
          </div>
          <div id="dbLanguages" >
            <label onClick={() => setOverFlowActive(overFlowActive == 3 ? 0 : 3)}>
              <p>Lenguajes de bases de datos</p>
              <span className={`${overFlowActive == 3 ? "activeIcon" : ""}`}><img src={down} /></span>
            </label>
            <ul className={`lista ${overFlowActive == 3 ? "active" : ""}`} >
              {databases.map((database) => (
                <li onClick={() => handleSelector(database, "db")} key={database}>
                  <span><img src={formData.db.some((obj) => obj.name === database) ? disc : circle} /></span>
                  {database}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <label onClick={() => setOverFlowActive(overFlowActive == 4 ? 0 : 4)}>
              <p>Idiomas</p>
              <span className={`${overFlowActive == 4 ? "activeIcon" : ""}`}><img src={down} /></span>
            </label>
            <ul className={`lista ${overFlowActive == 4 ? "active" : ""}`} >
              {dataLanguages.map((idioma) => (
                <li onClick={() => handleSelector(idioma, "languages")} key={idioma}>
                  <span><img src={formData.languages.some((obj) => obj.name === idioma) ? disc : circle} /></span>
                  {idioma}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <label onClick={() => setOverFlowActive(overFlowActive == 5 ? 0 : 5)}>
              <p>Herramientas</p>
              <span className={`${overFlowActive == 5 ? "activeIcon" : ""}`}><img src={down} /></span>
            </label>
            <ul className={`lista ${overFlowActive == 5 ? "active" : "none"}`} >
              {dataTools.map((tools) => (
                <li onClick={() => handleSelector(tools, "tools")} key={tools} >
                  <span><img src={formData.tools.some((obj) => obj.name === tools) ? disc : circle} /></span>
                  {tools}
                </li>
              ))}
            </ul>
          </div>
        </Select>
        <Btm type="submit">Guardar</Btm>
      </Form >
      <FormDataDisplay {...formData} />
    </ViewContainer>
  )
}


export default GeneratorCv