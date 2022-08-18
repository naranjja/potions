import "../styles/globals.css";
import { ThemeProvider } from "@mui/material";
import { theme } from "../utils/theme";
import createEmotionCache from "../utils/createEmotionCache";
import { CacheProvider } from "@emotion/react";
import NextNProgress from 'nextjs-progressbar';

const clientSideEmotionCache = createEmotionCache();

function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <NextNProgress
          color="#fff"
          height={5}
        />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;