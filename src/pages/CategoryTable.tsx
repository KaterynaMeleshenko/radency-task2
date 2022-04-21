import CatHead from "../components/Category/CategoryHead";
import Body from "../components/Category/CategoryBody";
import { categories } from "../redux/data";

const Categories = () : JSX.Element => {
  return <>
  <CatHead />
    { 
      categories.map(({ id, icon, name }) => (
        <Body
          key = {id}
          id = {id}
          name = {name}
          icon = {icon}
        />
      ))
      } 
  </>
}

export default Categories;