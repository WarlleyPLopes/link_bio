import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 24px 0;

    font-size: 24px;

    > a {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 16px;

        transition: background 0.2s;
        border-radius: 50%;
    }

    > a:hover {
        background: ${({theme}) => theme.COLORS.Highlight};
    }
`;