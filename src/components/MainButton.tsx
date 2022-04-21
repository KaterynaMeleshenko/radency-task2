import { FunctionComponent } from "react";
import StyledButton from "./Styles/Button";

type Button = {
  onToggle: any,
  title: string,
  id: string
}

export const buttonStyle = {
  borderRadius: '10%',
  width: '100px',
}

const MainButton:  FunctionComponent<Button> = ({onToggle, title, id}) : any => {

  return (
    <StyledButton >
      <button id={id} onClick={onToggle} style={buttonStyle}>{title}</button>  
    </StyledButton>
  )
}

export default MainButton;