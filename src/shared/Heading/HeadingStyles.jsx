import styled from 'styled-components'

export const HeadingContainer = styled.h1`
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.typography.fontSize.h1};
    font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
    text-align: center;
    font-weight: ${({ theme }) => theme.typography.fontWeight.semiBold};

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        font-size: ${({ theme }) => theme.typography.fontSize.h1Desktop};
        text-align: left;
    }
`