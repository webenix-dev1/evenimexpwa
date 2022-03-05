import { mediaQueries } from "../../utils/mediaQuery";
import styled, {CSS} from 'styled-components';
export const HeaderComponentWrapper = styled.div`
   
    .menu-navbar.navbar-light{
        padding: 0;
        background-color: rgba(0,0,0,.8) !important;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 99;
    }

    .menu-navbar .navbar-brand{
        padding-bottom: 0;
    }


   
    .menu-navigation{

        margin: 50px;

        ${mediaQueries("md")`
            
        `}

    }

    .menu-navbar.navbar-light .navbar-nav .nav-link{
        color: #fff !important;

    }


   

`;