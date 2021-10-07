import styled from 'styled-components'

export const Container = styled.div`
    border: 1px solid #555;
    border-radius: 15px;
    padding: 10px;
    margin-top: 20px;
    display: flex;
    align-items: center;

    .image {
        margin-right: 10px;
        font-weight: bold;
        color: #FFF;
    }

    input {
        border: none;
        background: transparent;
        outline: 0;
        color: #FFF;
        font-size: 14px;
        flex: 1;
    }
`