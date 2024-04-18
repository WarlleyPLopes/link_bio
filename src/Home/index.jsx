import { Footer } from "../components/Footer";
import { LinksSocial } from "../components/LinksSocial";
import { Nav } from "../components/Nav";
import { Profile } from "../components/Profile";
import { ToggleTheme } from "../components/ToggleTheme";
import Avatar from "../assets/avatar.png";
import { Container } from "./styles";
import { ThemeProvider } from "styled-components";
import GlobalStyle from '../styles/global'
import { useState } from "react";
import {lightTheme, darkTheme} from '../styles/styles.js'




export function Home() {
  const [theme, setTheme] = useState(lightTheme);
  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme)
    console.log(theme)
  }
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyle />

        <Profile foto={Avatar} description={"@warlleylopes.dev"} />
        <ToggleTheme toggleTheme={toggleTheme} />
        <Nav />
        <LinksSocial />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}
