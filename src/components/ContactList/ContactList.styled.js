import styled from "@emotion/styled";

export const ContactsList = styled.ul`
    margin-top: 0;
    margin-left: 20px;
    padding-left: 0;
`

export const ContactItem = styled.li`
    font-size: 24px;
    list-style: square;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 500px;
    border: 1px solid darkblue;
    padding: 8px;

    &:not(:last-child) {
        margin-bottom: 8px;
    }
`

export const ContactName = styled.p`
    font-size: 20px;
    margin: 0;
    color: darkblue;
`

export const ContactNumber = styled.p`
    font-size: 20px;
    margin: 0;
    color: darkblue;
`

export const DeleteButton = styled.button`
    display: inline-block;
    font-size: 16px;
    min-width: 150px;
    min-height: 40px;
    padding: 4px;
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