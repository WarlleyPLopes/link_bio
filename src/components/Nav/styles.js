import styled from "styled-components";

export const Container = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px 0;
`;

export const Link = styled.li`
    > a {
        display: flex;
        justify-content: center;
        align-items: center;

        padding: 16px 24px;

        background: ${({ theme }) => theme.COLORS.Surface};
        border: 1px solid ${({ theme }) => theme.COLORS.Stroke};
        border-radius: 8px;
        backdrop-filter: blur(4px);

        text-decoration: none;
        font-weight: 500;

        transition: background .2s;
    }

    > a:hover {
        background: ${({ theme }) => theme.COLORS.Surface_hover};
        border: 1.5px solid ${({ theme }) => theme.COLORS.Text};
    }
`;