import styled from "styled-components";

export const ViewContainer = styled.div`
  display: flex;
  gap: 150px;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 514px;
  gap: 28px;
  margin: 50px;
  div {
    display: flex;
    flex-direction: column;
  }
  input {
    background-color: #3a3a3a;
    border: 1px solid #525156;
    outline: none;
    height: 50px;
    padding: 18px;
    &:focus {
      outline: none;
    }
  }
  textarea{
    list-style-type: disc;
    padding: 25px ;
    font-size:1rem;
    height:200px
  }
`;
export const DivSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 50px;
  width: 514px;
  padding: 20px 20px;
  background-color: #1f1f1f;
  input,
  textarea {
    margin-bottom: 20px;
    font-size:1rem

  }
`;

export const Select = styled.div`
  background-color: #1f1f1f;
  line-height: 1.25rem;
  border-top-left-radius: 0.625rem;
  border-top-right-radius: 0.625rem;
  width: 514px;
  border: thin solid #444746;
  border-radius: 0.5rem;
  div {
    border-bottom: thin solid #444746;
    border-top-right-radius: 0.5rem;
  }
  label {
    display: flex;
    justify-content: space-between;
    color: #e3e3e3;
    font-weight: 500;
    cursor: pointer;
    outline: none;
    font-size: 1rem;
    padding: 0.875rem 1rem 0.875rem 1.75rem;
    span,
    .activeIcon {
      transition: all 0.2s;
      img {
        width: 30px;
      }
    }
    .activeIcon {
      transition: all 0.2s;
      transform: rotate(180deg);
    }
  }
  .lista {
    transition: all 0.4s;
    background-color: #525156;
    overflow: hidden;
    max-height: 0px;
    animation: a 1 0.4s ease-in-out;
    li {
      display: flex;
      font-size: 0.875rem;
      line-height: 1.5rem;
      margin: 0;
      list-style: none;
      padding: 0.5rem 1.75rem;
      cursor: pointer;
      span {
        display: flex;
        padding-right: 18px;
        transition: all 0.2s;
        img {
          width: 28px;
        }
      }
    }
    li:hover {
      background-color: #fb6112;
    }
  }
  .active {
    transition: all 0.4s;
    max-height: 500px;
  }
`;

export const DivAddItems = styled.div`
  margin: 10px 0;
  background-color: #fb6112;
  display: flex;
  flex-direction: row !important;
  justify-content: space-between;
  align-items: center;
  img {
    padding: 0 10px;
    cursor: pointer;
  }
  span {
    padding: 18px 12px;
    border-radius: 5px;
  }


  -webkit-animation: ${(p)=>p.theme} 0.45s
    cubic-bezier(0.755, 0.05, 0.855, 0.06) both;
  animation: ${(p)=>p.theme} 0.45s
    cubic-bezier(0.755, 0.05, 0.855, 0.06) both;

  @-webkit-keyframes slide-out-blurred-right {
    0% {
      -webkit-transform: translateX(0) scaleY(1) scaleX(1);
      transform: translateX(0) scaleY(1) scaleX(1);
      -webkit-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
      -webkit-filter: blur(0);
      filter: blur(0);
      opacity: 1;
    }
    100% {
      -webkit-transform: translateX(1000px) scaleX(2) scaleY(0.2);
      transform: translateX(1000px) scaleX(2) scaleY(0.2);
      -webkit-transform-origin: 0% 50%;
      transform-origin: 0% 50%;
      -webkit-filter: blur(40px);
      filter: blur(40px);
      opacity: 0;
    }
  }
  @keyframes slide-out-blurred-right {
    0% {
      -webkit-transform: translateX(0) scaleY(1) scaleX(1);
      transform: translateX(0) scaleY(1) scaleX(1);
      -webkit-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
      -webkit-filter: blur(0);
      filter: blur(0);
      opacity: 1;
    }
    100% {
      -webkit-transform: translateX(1000px) scaleX(2) scaleY(0.2);
      transform: translateX(1000px) scaleX(2) scaleY(0.2);
      -webkit-transform-origin: 0% 50%;
      transform-origin: 0% 50%;
      -webkit-filter: blur(40px);
      filter: blur(40px);
      opacity: 0;
    }
  }
`;

export const DivAddAchievements = styled.div`
  display: flex;
  flex-direction: row !important;
  justify-content: space-between;
  align-items: center;
  background-color: #525156;
  margin: 10px 0;
  padding: 12px;
  overflow: hidden;
  p {
    white-space: pre-line;
    overflow: hidden;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    text-overflow: ellipsis;
  }

  
  -webkit-animation: ${(p)=>p.theme} 0.45s
    cubic-bezier(0.755, 0.05, 0.855, 0.06) both;
  animation: ${(p)=>p.theme} 0.45s
    cubic-bezier(0.755, 0.05, 0.855, 0.06) both;

  -webkit-animation: ${(p)=>p.theme} 0.45s
    cubic-bezier(0.755, 0.05, 0.855, 0.06) both;
  animation: ${(p)=>p.theme} 0.45s
    cubic-bezier(0.755, 0.05, 0.855, 0.06) both;

  @-webkit-keyframes slide-out-blurred-right {
    0% {
      -webkit-transform: translateX(0) scaleY(1) scaleX(1);
      transform: translateX(0) scaleY(1) scaleX(1);
      -webkit-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
      -webkit-filter: blur(0);
      filter: blur(0);
      opacity: 1;
    }
    100% {
      -webkit-transform: translateX(1000px) scaleX(2) scaleY(0.2);
      transform: translateX(1000px) scaleX(2) scaleY(0.2);
      -webkit-transform-origin: 0% 50%;
      transform-origin: 0% 50%;
      -webkit-filter: blur(40px);
      filter: blur(40px);
      opacity: 0;
    }
  }
  @keyframes slide-out-blurred-right {
    0% {
      -webkit-transform: translateX(0) scaleY(1) scaleX(1);
      transform: translateX(0) scaleY(1) scaleX(1);
      -webkit-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
      -webkit-filter: blur(0);
      filter: blur(0);
      opacity: 1;
    }
    100% {
      -webkit-transform: translateX(1000px) scaleX(2) scaleY(0.2);
      transform: translateX(1000px) scaleX(2) scaleY(0.2);
      -webkit-transform-origin: 0% 50%;
      transform-origin: 0% 50%;
      -webkit-filter: blur(40px);
      filter: blur(40px);
      opacity: 0;
    }
  }
`;

export const Btm = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #525156;
  cursor: pointer;
  border: none;
  outline: 1px solid #e3e3e3;
  margin: 10px 0;
  border-radius: 100px;
  padding: 8px 5px;
  p {
    padding: 8px 15px;
    font-size: 24px;
  }
`;

export const BtmAdd = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fb6112;
  cursor: pointer;
  border: none;
  margin: 10px 0;
  border-radius: 50px;
  padding: 18px 5px;
  font-size: 24px;
  font-family: Arial, Helvetica, sans-serif;
`;


export const DivRelations=styled.div`
  display: flex;
  padding:20px;
  margin:5px 10px;
  width:400px;
  outline: 1px solid #e3e3e3;
`

export const SpanBtm=styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap:15px;
  padding:20px;
  margin:10px 0px;
  width:200px;
  outline: 1px solid #e3e3e3;
  border-radius: 100px;
  img{
    width:40px
  }
`

