import styled from "@emotion/styled";

export const FilterWrapper = styled.div`
    border: 1px solid darkblue;
    margin-bottom: 40px;
    margin-left: 20px;
    padding: 16px;
    max-width: 320px;
`

export const FilterLabel = styled.label`
    display: flex;
    flex-direction: column;
    font-size: 24px;
    color: darkblue;
`

export const FilterInput = styled.input`
    font-size: 20px;
    padding: 8px;
    margin-top: 4px;
    outline: none;
    border: 1px solid darkblue;
    color: darkblue;

    &:focus {
        border: 1px solid blue;
    }
`