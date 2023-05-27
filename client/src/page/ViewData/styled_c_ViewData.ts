import styled from "styled-components";

export const ViewContainerData = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 700px;
  z-index: 1;
  top: 0px;
  iframe{
    width: 100%;
    height: 600px;
    border: 10px solid #e3e3e3;
    border-radius: 5px;
    box-shadow: 10px 10px 15px #1f1f1f;
  }
`

export const GenerateAbout = styled.div`
  display: flex;
  gap:50px;
  textarea{
    padding:10px;
    font-size:1rem
  }
  label{
    padding: 10px 0;
  }
  div{
    display: flex;
    flex-direction: column;
  }
`