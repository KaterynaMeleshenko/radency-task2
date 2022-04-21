import { buttonStyle } from "./MainButton";
import StyledButton from "./Styles/Button";


const Submit = ({onToggle} : {onToggle : any}) : JSX.Element => {
  return(
    <StyledButton>
      <button type="submit" value="Submit" id="submit-add-button" onClick={onToggle} style={buttonStyle}>Submit</button>
    </StyledButton>
  )
}

export default Submit;