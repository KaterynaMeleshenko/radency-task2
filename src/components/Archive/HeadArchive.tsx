import unarchive_white_icon from "../../assets/unarchive-white.svg";
import { StyledActIcon } from "../Styles/Icons";

const Head = () : JSX.Element => {
  return(
    <div className="head">
      <div className="column1"></div>
      <div className="column2">Name</div>
      <div className="column3">Created</div>
      <div className="column4">Category</div>
      <div className="column5">Content</div>
      <div className="column6">Dates</div>
      <div className="column7">
        <StyledActIcon src={unarchive_white_icon} alt='archive-icon' id="archieve-all-active"/>
      </div>
    </div>
  )
}

export default Head