import '../styles/globals.css'

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { AppProvider } from '@components/AppContext';
import "@fontsource/press-start-2p"

const colors = {
  brand: {
    50: "#ecefff",
    100: "#cbceeb",
    200: "#a9aed6",
    300: "#888ec5",
    400: "#666db3",
    500: "#4d5499",
    600: "#3c4178",
    700: "#2a2f57",
    800: "#181c37",
    900: "#080819"
  }
};
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false
};

const theme = extendTheme({ colors, config, 
    fonts: {
      heading: 'press-start-2p, monospace',
      body: 'press-start-2p, monospace',
    } 
});


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </ChakraProvider>
  )
}

export default MyApp
