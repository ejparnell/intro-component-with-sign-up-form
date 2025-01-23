import styled from 'styled-components'

export const TextContainer = styled.p`
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.typography.fontSize.p};
    font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
    text-align: center;

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        text-align: left;
        margin-top: 40px;
    }
`