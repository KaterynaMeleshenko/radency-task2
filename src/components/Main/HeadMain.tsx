import archive_white_icon from "../../assets/archive-white.svg";
import delete_white_icon from "../../assets/delete-white.svg";
import { StyledActIcon } from "../Styles/Icons";

const HeadMain = () : JSX.Element => {
  return(
    <div className="head">
      <div className="column1"></div>
      <div className="column2">Name</div>
      <div className="column3">Created</div>
      <div className="column4">Category</div>
      <div className="column5">Content</div>
      <div className="column6">Dates</div>
      <div className="column7">
        <StyledActIcon src={archive_white_icon} alt='archive-icon' id="archieve-all-active"/>
        <StyledActIcon src={delete_white_icon} alt='delete-icon' id="delete-all-active"/>
      </div>
    </div>
  )
}

export default HeadMain;