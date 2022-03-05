import Layout from "../components/Layout";
import { GlobalStyle } from "../styles/global/global.style";
import { ThemeProvider } from "styled-components";
import theme from "../styles/global/theme";



function MyApp({ Component, pageProps }) {
 
    return (
      <>
                <GlobalStyle />
                <ThemeProvider theme={theme}>
                    <Layout>
                   
                            <Component {...pageProps} />
                      
                    </Layout>
                </ThemeProvider>
                </>
          
    );
}

export default (MyApp);
