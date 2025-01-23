import styled from 'styled-components'

export const FreeTrialFormContainer = styled.form`
    background-color: ${({ theme }) => theme.colors.white};
    width: 327px;
    height: 442px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 8px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        width: 540px;
    }
`

export const InputWrapper = styled.div`
    position: relative;
    width: 100%;
    text-align: center;
`

export const FreeTrialFormInput = styled.input`
    width: 279px;
    height: 56px;
    border: 1px solid ${({ theme, $isError }) => $isError ? theme.colors.red : theme.colors.gray};
    border-radius: 4px;
    text-indent: 10px;

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        width: 460px;
    }
`

export const FreeTrialFormSubmit = styled.input`
    width: 279px;
    height: 56px;
    border: 1px solid ${({ theme }) => theme.colors.green};
    background-color: ${({ theme }) => theme.colors.green};
    border-radius: 4px;
    text-align: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: ${({ theme }) => theme.colors.white};

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        width: 460px;
    }
`

export const FreeTrialFormText = styled.p`
    font-size: ${({ theme }) => theme.typography.fontSize.subText};
    font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
    text-align: center;
    color: ${({ theme }) => theme.colors.gray};
`

export const ErrorIcon = styled.img`
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    color: ${({ theme }) => theme.colors.red};

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        right: 40px;
        top: 30px;
    }
`

export const ErrorText = styled.p`
    font-size: ${({ theme }) => theme.typography.fontSize.subText};
    font-weight: ${({ theme }) => theme.typography.fontWeight.regular};
    color: ${({ theme }) => theme.colors.red};
    text-align: right;
    margin-right: 10px;

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        margin-right: 20px;
    }
`

export const EmailExistsText = styled.p`
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    color: ${({ theme }) => theme.colors.red};

    @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
        left: 40px;
    }
`