import styled from "styled-components";

const CatIcon = styled.img`
  width: 30px;
  height: 30px;
`
const ActIcon = styled.img`
padding-left: 5px;
cursor: pointer;
`

function StyledCatIcon(props: any) {
  return <CatIcon {...props}/>
}

export function StyledActIcon(props: any) {
  return <ActIcon {...props}/>
}

export default StyledCatIcon;