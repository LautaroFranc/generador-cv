export interface Project {
  title: string;
  area: string;
  summary:string;
  endDate: dateTime;
  startDate: dateTime;
  company: string;
  link: string;
}


interface dateTime{
  year?: number;
  month?:number;
}


export interface experiences {
  isCurrent: boolean;
  achievement:string[];
  title: string;
  endDate: dateTime;
  startDate: dateTime;
  company:  string;
}

export interface education {
    degree: string;
    fieldOfStudy: string;
    notes:string[];
    schoolName: string;
    startDate:  dateTime;
    endDate:  dateTime;
}

export interface skills {
  name: string;
}

export interface language{
  name: string;
}


export interface infoUser {
  name:string,
  stack:string, 
  about:string,
  phoneNumber: string;
  profileUrl: string;
  email: string;
  Address:string
}
export interface  formCv{
  skills:skills[],
  languages:language[],
  db:skills[],
  tools:skills[],
  infoUser:infoUser|{}
  experiences: experiences[],
  educations: education[],
  projects: Project[],
}