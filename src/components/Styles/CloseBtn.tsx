import styled from "styled-components";

const CloseBtn = styled.div`
display: flex;
justify-content: flex-end;
`

function StyledClose(props: any) {
  return <CloseBtn {...props}/>
}

export default StyledClose;