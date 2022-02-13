import styled from 'styled-components';

function App(){
    return(
      <>
        <div>
          Unstyled Div
        </div>
        <RedDiv>
          Styled Div
        </RedDiv>
        <RedDiv>
          Second Styled Div
        </RedDiv>
        <BlueDiv>
          Third Styled Div
        </BlueDiv>
      </>
    )
  }

  export default App;

  const RedDiv = styled.div `
    color: red;
  `

  const BlueDiv = styled.div `
    color: blue;
    font-weight: bold;
    font-style: italic;
  `