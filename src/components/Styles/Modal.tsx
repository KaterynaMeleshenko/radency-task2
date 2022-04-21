import styled from "styled-components";

const Modal = styled.div`
background-color: #fefefe;
margin: 15% auto; 
padding: 20px;
border: 1px solid #888;
width: 40%; 
`

function StyledModal(props: any) {
  return <Modal {...props}/>
}

export default StyledModal;