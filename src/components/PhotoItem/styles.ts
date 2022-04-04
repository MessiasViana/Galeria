import styled from "styled-components";

export const Container = styled.div`
    background-color: #3D3F43;
    border-radius: 15px;
    padding: 10px;
    display:flex;
    flex-direction:column;
    text-align: center;

    img {
        max-width: 100%;
        max-height: 200px;
        display: block;
        margin-bottom: 10px;
        border-radius: 10px;
        object-fit: cover;
    }

    input[type=button] {
        background-color: #F00;
        border: 0;
        color: #FFF;
        padding: 8px 16px;
        font-size: 15px;
        border-radius: 10px;
        margin: 10px 20px;
        cursor: pointer;

        &:hover {
            opacity: .9;
        }
    }

`