import styled from 'styled-components'

export const PromoCardContainer = styled.section`
    background-color: ${({ theme }) => theme.colors.purple};
    border-radius: 8px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    width: 327px;
    text-align: center;
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.typography.fontSize.p};
    margin-bottom: 30px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-weight: 100;

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        width: 540px;
        flex-direction: row;
        justify-content: center;
    }
`

export const PromoCardSpan = styled.span`
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    margin-right: 5px;
`