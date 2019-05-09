import Typography from "typography";
import Wordpress2016 from "typography-theme-wordpress-2016";

Wordpress2016.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
      textDecoration: `none`
    },

    "a:hover": {
      textDecoration: `none`
    },

    "a.anchor": {
      boxShadow: "none"
    },

    'a.anchor svg[aria-hidden="true"]': {
      stroke: "var(--textLink)"
    },

    "p code": {
      fontSize: "1rem"
    },

    "h1 code, h2 code, h3 code, h4 code, h5 code, h6 code": {
      fontSize: "inherit"
    },

    "li code": {
      fontSize: "1rem"
    },

    blockquote: {
      color: "inherit",
      borderLeftColor: "inherit",
      opacity: "0.8"
    },

    "blockquote.translation": {
      fontSize: "1em"
    },

    "h1, h2, h3": {
      fontWeight: 700,
      lineHeight: 1.2,
      fontFamily: "Nunito, Noto Sans KR",
      color: "hsl(0, 0%, 21%)"
    },

    "h4, h5, h6": {
      fontWeight: 700,
      lineHeight: 1.2,
      fontFamily: "Nunito, Noto Sans KR",
      color: "hsl(0, 0%, 21%)"
    }
  };
};

delete Wordpress2016.googleFonts;

const typography = new Typography(Wordpress2016);

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
