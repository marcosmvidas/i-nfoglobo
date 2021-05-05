import styled from "styled-components";

export const Div = styled.div`
    text-align: right;
    margin: 25px;

    a {
        border-radius: 10px;
        text-decoration: none;
        padding: 15px 25px;
        background-color: #004561;
        color: #fff;
        font-weight: bold;
        border: none;
    }
`;

export const CreateContainer = styled.div`
    margin: 25px;

    button {
        margin: 25px auto;
        float: right;
        border-radius: 10px;
        text-decoration: none;
        padding: 15px 25px;
        background-color: #004561;
        color: #fff;
        font-weight: bold;
        border: none;
    }

    .MuiFormControl-root {
        margin-bottom: 10px;
    }

    .MuiPaper-root {
        padding: 50px;
    }
`;
