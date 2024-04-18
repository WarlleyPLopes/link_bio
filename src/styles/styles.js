
import bg_mobile from '../assets/bg-mobile.jpg'
import bg_mobile_light from '../assets/bg-mobile-light.jpg'
import bg_desktop from '../assets/dragon.jpg'
import bg_desktop_light from '../assets/bg-desktop-light.jpg'
import sun from '../assets/Sun.svg'
import moon from '../assets/Moon.svg'

export const darkTheme = {
  COLORS: {
    Text: "#fff",
    Background: bg_desktop,
    Background_mobile: bg_mobile,
    Stroke: "rgba(255, 255, 255, 0.5)",
    Surface: "rgba(0, 0, 0, 0.05)",
    Surface_hover: "rgba(0, 0, 0, 0.02)",
    Highlight: "rgba(255, 255, 255, 0.2)",
    Switch_bg_url: moon,
    keyframes: "slideBack"
  },
};

export const lightTheme = {
  COLORS: {
    Text: "#000",
    Background:bg_desktop_light,
    Background_mobile:  bg_mobile_light,
    Stroke: "rgba(0, 0, 0, 0.5)",
    Surface: "rgba(255, 255, 255, 0.05)",
    Surface_hover: "rgba(0, 0, 0, 0.02)",
    Highlight: "rgba(0, 0, 0, 0.1)",
    Switch_bg_url: sun,
    keyframes: "slideIn"
  },
};