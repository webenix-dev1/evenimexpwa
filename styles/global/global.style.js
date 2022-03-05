import styled, { createGlobalStyle } from "styled-components";
import theme from "../global/theme";

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-weight: 400;
        height: 100%;
        font-size: 14px;
        line-height: 1.5;
        display: flex;
        min-height: 100vh;
        flex-direction: column;
        overflow-x: hidden;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #000;
        background: #fff;
        appearance: auto;
        -moz-appearance: auto;
        -webkit-appearance: auto;
        /* font-family: ${theme.font.fontFamilyCircularStd}; */
        font-family: 'Montserrat', sans-serif;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    a,
    ul{
        margin: 0;
        padding: 0;
        line-height: normal;
        list-style-type: none;
        text-decoration: none !important;
    }
    a{
        transition: all 0.3s ease-in-out;
        &:hover{
		    opacity: 0.8;
	    }
    }
    .react-responsive-modal-modal{
        padding: 50px 30px;
        border-radius: 4px;
        .react-responsive-modal-closeButton{
            left: 25px;
            top: 20px;
            right:auto;
            transition: all 0.3s ease-in-out;
            path{
                fill: #27292C;
            }
            &:hover{
                opacity: 0.7;
            } 
        } 

        form{
            h3{
                margin: 10px 0px;
            }
            button{
                margin: 20px 0px;
            }
        }
    }
    .pagination{
        display: inline-flex;
        padding: 15px 0;
        li{
            border: 1px solid #D8D8D8;
            position:relative;
            cursor:pointer;
            a{
                font-size: 14px;
                padding: 10px 20px;
                font-weight: normal;
                display: inline-flex;
                font-family: ${theme.font.fontFamilyCircularStd};
                outline: none;
                box-shadow: none;
            }
        }
        li.active{
            color: ${theme.color.primary};
        }
        li.active:before{
            background: ${theme.color.primary};
            
        }
        li:before{
            position: absolute;
            content: "";
            background: transparent;
            width: 100%;
            height: 2px;
            bottom: 0;
            right: 0;
            left: 0;
        }
    }
    .gmnoprint{
        ${
          "" /* background: #fff;
        padding: 10px 20px; */
        }
        .gm-style-mtc{
            button{
                box-shadow: none !important;
            }
        }
    }
    .mapbox-checkbox{
        position: relative;
        justify-content: center;
        display: flex;
        top: 25px;
        > div{
            display: flex;
            width: auto;
            padding: 0;
            label{
                flex-basis: 100%;
                max-width: 100%;
                display: flex;
                background: white;
                padding: 8px;
                align-items: center;
                border-radius: 4px;
                span{
                    z-index: 0;
                    font-weight: 500;
                }
            }
        }
    }
    
`;

// export default GlobalStyle;
