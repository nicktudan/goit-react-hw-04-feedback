import styled from 'styled-components';

export const BtnList = styled.ul`
    display: flex;
    justify-content: center;
    gap: 12px;
`;

export const Button = styled.button`
    min-width: 100px;
    padding: 12px 16px;
    border: 1px solid black;
    border-radius: 4px;
    background-color: #dcdcdc;
    text-transform: capitalize;
    cursor: pointer;

    :hover,
    :focus {
        background-color: #fffafa;
        border-color: #1e90ff;
        color: #1e90ff;
    }
`;
