
// install styled component using vite and te command is: npm install styled-components

import styled from 'styled-components' // import the styled components

const HeaderStyle  = styled.h1 `
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
`;

function StyledComponents_1(){
    return (
        <>
            <br />
            <h2>styled components</h2>
            <br />
            <HeaderStyle>Welcome User</HeaderStyle>
        </>
    )

}

// Using the props to make the styles dynamic
const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: ${props => props.btntype === 'primary' ? '#007bff' : '#6c757d'};
  color: white;
  cursor: pointer;
`;

function StyledComponents_2() {
  return (
    
    <div>
        <br />
        <br />
      <Button btntype="primary">Primary Button</Button>
      <br />
      <br />
      <Button>Secondary Button</Button>
    </div>
  );
}


// extending the styles
const NewButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  color: white;
  cursor: pointer;
`;

const PrimaryButton = styled(Button)`
  background-color: #007bff;
`;

const SuccessButton = styled(Button)`
  background-color: #28a745;
`;

function StyledComponents_3(){
    return (
        <div>
            <br />
            <br />
            <h2>Extended styles</h2>
            <PrimaryButton>Primary</PrimaryButton>
            <SuccessButton>Success</SuccessButton>
        </div>
    )
}

// Global Styles can also be used 

// import {createGlobalStyles}  from 'styled-components'

// const GlobalStyle = createGlobalStyles `
//     h1 {
//     color: white;
//     background-color: purple;
//     font-family: Arial, sans-serif;
//   }

//   .myparagraph {
//     font-family: courier, monospace;
//     color: blue;
//   }
// `
// global syles are not working properly - 
// function StyledComponents_4(){
//     return (
//         <>
//             <GlobalStyle />
//             <h1>Welcome User!</h1>
//             <p className='myParagraph'></p>
//         </>
//     )
// }

export {StyledComponents_1, StyledComponents_2, StyledComponents_3, /*StyledComponents_4*/};