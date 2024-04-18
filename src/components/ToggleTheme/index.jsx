import { Container } from "./styles";

export function ToggleTheme({toggleTheme}){
    return(
        <Container onClick={toggleTheme} >
            <button>

            </button>
            <span></span>
        </Container>
    );
}