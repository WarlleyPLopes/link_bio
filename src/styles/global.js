import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 * {
         margin: 0;
         padding: 0;
         box-sizing: border-box;
     } 

body {
        background: url(${({ theme }) => theme.COLORS.Background_mobile}) no-repeat top center/cover;
        color: ${({ theme }) => theme.COLORS.Text};

        -webkit-font-smoothing: antialiased;
    } 

    body * {
         font-family: "Inter", sans-serif;
         color: ${({ theme }) => theme.COLORS.Text};
         }

         @media (min_width:700px) {
            background: url(${({ theme }) => theme.COLORS.Background}) no-repeat top center/cover;
         }
`;