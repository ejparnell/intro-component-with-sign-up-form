import styled from 'styled-components'

export const AppContainer = styled.div`
    background-image: url('/assets/bg-intro-mobile.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-color: ${({ theme }) => theme.colors.red};
    height: 100vh;
    font-family: ${({ theme }) => theme.typography.fontFamily};
    padding: 70px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        background-image: url('/assets/bg-intro-desktop.png');
        flex-direction: row;
        justify-content: center;
    }
`

export const ContentContainer = styled.div`
    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        width: 550px;
    }
`
