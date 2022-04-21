import styled from "styled-components";

const Button = styled.div`
display: flex;
justify-content: flex-end;
margin-bottom: 20px;
margin-top: 20px;
`

function StyledButton(props: any) {
  return <Button {...props}/>
}

export default StyledButton;