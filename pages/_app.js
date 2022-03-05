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
                <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>

<script
  src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
  crossorigin></script>

<script
  src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
  crossorigin></script>

<script>var Alert = ReactBootstrap.Alert;</script>
                </>
          
    );
}

export default (MyApp);
