import styled from "@emotion/styled";

export const FormWrapper = styled.div`
    border: 1px solid darkblue;
    max-width: 350px;
    margin-bottom: 40px;
    margin-left: 20px;
`

export const AddForm = styled.form`
    padding: 16px;
    display: flex;
    flex-direction: column;
`

export const AddLabel = styled.label`
    display: flex;
    flex-direction: column;
    font-size: 24px;
    color: darkblue;
`

export const AddInput = styled.input`
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

export const AddButton = styled.button`
    font-size: 24px;
    max-width: 200px;
    padding: 8px;
    margin-top: 12px;
    cursor: pointer;
    color: white;
    background-color: darkblue;
    box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);
    border-radius: 4px;
    border: 1px solid rgba(0,0,0,0);
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
            background-color: blue;
    }
`