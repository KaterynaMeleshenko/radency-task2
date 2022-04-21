
import React, { FunctionComponent } from "react";
import type { RootState } from "../../redux/reduxConfig";
import { State } from "../../redux/reducers/task-reducer";
import { useSelector } from 'react-redux';
import { BodyProps } from "../Archive/BodyArchive";
import StyledCatIcon from "../Styles/Icons";

type BodyCatProps = {
  id: number,
  icon: any, 
  name: string, 
}

export function countTasks(data: BodyProps[], status: Boolean, category: string) {

  let total: number = 0;
  data.forEach(task => {
    if (task.isActive === status && task.category === category) {
        total = total + 1
    }
  })

  return total;
}

const Body: FunctionComponent<BodyCatProps> = ({id, icon, name}) : JSX.Element => {

  let data: State = useSelector((state: RootState) => state.taskReducer);

  return (
    <div id="category-body">
      <div className="body">
        <div className="column1">
          <StyledCatIcon src={icon} alt="icon"/>
        </div>
        <div className="column2">{name}</div>
        <div className="column3">{countTasks(data.stateTasks, true, name)}</div>
        <div className="column4">{countTasks(data.stateTasks, false, name)}</div>
      </div>
    </div>
    )
}

export default Body;