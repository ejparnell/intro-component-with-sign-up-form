import styled from 'styled-components'

export const Container = styled.div`
    position: fixed;
    bottom: 20px;
    left: 20px;
    background-color: #2d89ef;
    color: white;
    padding: 10px 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: transform 0.3s ease;
    display: flex;
    align-items: center;

    &:hover {
        background-color: #1e73d8;
    }
`

export const FoldOutContainer = styled.div`
    position: fixed;
    bottom: 60px;
    left: 20px;
    background-color: white;
    color: #333;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    width: 250px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const ContactInfo = styled.div`
    margin-top: 20px;
    font-size: 14px;
    line-height: 1.6;

    a {
        color: #2d89ef;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }
`