import { Container } from "./styles";
import { FaGithub, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa6";

export function LinksSocial() {
  return (
    <Container>
      <a href="https://github.com/WarlleyPLopes" target="_blank">
        <FaGithub />
      </a>

      <a href="https://github.com/WarlleyPLopes" target="_blank">
        <FaInstagram />
      </a>

      <a href="https://www.youtube.com/" target="_blank">
        <FaYoutube />
      </a>

      <a
        href="https://www.linkedin.com/in/warlley-lopes-00b40a217/"
        target="_blank"
      >
        <FaLinkedin />
      </a>
    </Container>
  );
}