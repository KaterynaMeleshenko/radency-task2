import { FunctionComponent } from "react";
import { useDispatch } from "react-redux";
import unarchive_icon from "../../assets/unarchive.svg";
import { UNARCHIVE_TASK } from "../../redux/types";
import {categories} from "../../redux/data";
import StyledCatIcon, { StyledActIcon } from "../Styles/Icons";

export type BodyProps = {
  id: number, 
  category: string, 
  name: string, 
  created: string, 
  content: string, 
  isActive: boolean,
}

export function chooseIcon(iconName: string) {
  let icon;

    categories.forEach(category => {
        if (category.name === iconName) {
          icon = category.icon;  
        }
    })
    return icon;
}

export function findDates(inputText: string) {
  const wordsInString = inputText.split(' ');
  const regex = /(\d{1,2})\/(\d{1,2})\/(\d{4})/;
  const dates = wordsInString.filter(word => word.match(regex)).join(', ');

  return dates;
}

const BodyArchive: FunctionComponent<BodyProps> = ({id, category, name, created, content, isActive }) : JSX.Element => {
  const dispatch = useDispatch();

  const catIcon: any = chooseIcon(category);
  const unarchiveIconId: string = `unarchive-${id}`;

  const unarchiveTaskAction = ({
    type: UNARCHIVE_TASK,
    taskId: id,    
  })

  return (
    <div className="body">
      <div className="column1"><StyledCatIcon src={catIcon} alt="icon"/></div>
      <div className="column2">{name}</div>
      <div className="column3">{created}</div>
      <div className="column4">{category}</div>
      <div className="column5">{content}</div>
      <div className="column6">{findDates(content)}</div>
      <div className="column7">
        <StyledActIcon 
          src={unarchive_icon} 
          id={unarchiveIconId} 
          className="action-icon" 
          alt="unarchive icon"
          onClick={() => {
            dispatch(unarchiveTaskAction)
          }}/>
      </div>
    </div>
  )
}

export default BodyArchive;