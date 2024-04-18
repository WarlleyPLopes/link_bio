import { Container } from "./styles"

export function Profile({foto, description}){
    return(
        <Container>
            <img src={foto} alt="foto do usuario" />
            <p>{description}</p>
        </Container>
    )
}   