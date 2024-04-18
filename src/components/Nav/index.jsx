import { Container, Link } from "./styles";

export function Nav() {
  return (
    <Container>
      <Link>
        <a href="#">Inscreva-se já</a>
      </Link>
      <Link>
        <a href="">Mande uma mensagem</a>
      </Link>
      <Link>
        <a href="">Veja meu portfólio</a>
      </Link>
      <Link>
        <a href="">Conheca o Explorer</a>
      </Link>
    </Container>
  );
}
