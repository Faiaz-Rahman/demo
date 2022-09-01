import './App.css'
import {
    StyledButton,
    FancyButton,
    SubmitButton,
    DarkButton,
} from './components/Button/Button'
import { AnimatedLogo } from './components/Button/Button.styles'

import { ThemeProvider, createGlobalStyle } from 'styled-components'

const theme = {
    dark: {
        primary: '#000',
        text: '#fff',
    },
    light: {
        primary: '#fff',
        text: '#000',
    },
    fontFamily: 'Arial-black',
}
// Here we can declare styles that is applicable for all...
const GlobalStyle = createGlobalStyle`
    /* Inside this, we still have the access of themes */
    button {
        font-family: ${(props) => props.theme.fontFamily};
    }
`

function App() {
    return (
        <ThemeProvider theme={theme}>
            {/* Calling the GlobalStyle */}
            <GlobalStyle />
            {/* <img
                src={'https://cdn-icons-png.flaticon.com/512/7675/7675012.png'}
                className="App-logo"
            ></img> */}
            <AnimatedLogo
                src={'https://cdn-icons-png.flaticon.com/512/7675/7675012.png'}
            />
            <div className="App">
                <StyledButton>Styled Button</StyledButton>
            </div>
            <div className="App">
                <StyledButton variant="outline">Styled Button</StyledButton>
            </div>
            <div className="App">
                {/* Implementing the polymorphic prop with styled 
                components */}
                <FancyButton as="a">Fancy Button</FancyButton>
            </div>
            <div className="App">
                <SubmitButton variant="outline">Submit Button</SubmitButton>
            </div>
            <div className="App">
                <DarkButton>Dark Theme</DarkButton>
            </div>
        </ThemeProvider>
    )
}

export default App
