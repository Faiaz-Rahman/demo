import styled, { keyframes } from 'styled-components'

//Applying Styled-Components
const StyledButton = styled.button`
    border: 2px solid #4caf50;
    background-color: ${(props) =>
        props.variant === 'outline' ? '#FFF' : '#4caf50'};
    color: ${(props) => (props.variant === 'outline' ? '#4caf50' : '#fff')};
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    transition: 4.5 all ease-out;

    /* adding extra functionality on hover */
    /* &:hover {
        background-color: ${(props) =>
        props.variant !== 'outline' ? '#FFF' : '#4caf50'};
        color: ${(props) => (props.variant !== 'outline' ? '#4caf50' : '#fff')};
    } */
`

//Adding extra features on an existing custom styled component
export const FancyButton = styled(StyledButton)`
    background-image: linear-gradient(to right, #f6d365 0%, #fda085 100%);
    border: none;
`

export { StyledButton }

export const SubmitButton = styled(StyledButton).attrs({
    type: 'submit',
})`
    box-shadow: 0 9px #999;
    &:active {
        background-color: ${(props) =>
            props.variant !== 'outline' ? '#FFF' : '#4caf50'};
        color: ${(props) => (props.variant !== 'outline' ? '#4caf50' : '#fff')};
        box-shadow: 0 5px #666;
        transform: translateY(4px);
    }
`

const rotate = keyframes`
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`

export const AnimatedLogo = styled.img`
    height: 40vmin;
    pointer-events: none;
    animation: ${rotate} infinite 2s linear;
`
// Created with ThemeProvider of styled-components
export const DarkButton = styled(StyledButton)`
    border: 2px solid ${(props) => props.theme.dark.primary};
    background-color: ${(props) => props.theme.dark.primary};
    color: ${(props) => props.theme.dark.text};
`
