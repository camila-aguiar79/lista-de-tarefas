import styled from 'styled-components'

type ContainerProps = {
    done: boolean;
}

export const Container = styled.div(({ done }: ContainerProps) => (
    `
    display: flex;
    background-color: #20212C;
    padding: 10px;
    border-radius: 10px;
    margin-top: 20px;
    margin-bottom: 10px;
    align-items: center;

    input {
        width: 15px;
        height: 15px;
        margin-right: 10px;
    }

    label {
        color: #FFF;
        font-size: 16px;
        text-decoration: ${done ? 'line-through' : 'initial'};
    }
`
))