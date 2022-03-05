import { mediaQueries } from "../../utils/mediaQuery";
import styled, {CSS} from 'styled-components';
export const FooterComponentWrapper = styled.section`
   background-color: #1B1B1B;
   border-top: 4px solid #6787bf;
   padding: 30px 0 0;
`;
export const FooterMenuMain = styled.div`
   

`;
export const FooterMenuUl = styled.ul`
   padding-left: 0;
   
`;
export const FooterMenuli = styled.li`
   display: inline-block;

   a{
      color: #6A6A6A;
      font-size: 14px;
      font-weight: bold;
      margin-right: 15px;
      display: inline-block;
      text-decoration: none;
      padding: 0 0 .28em 0 !important;
   }
   a:hover{
      color: #6787bf;
   }
   a.active{
      border-bottom: 4px solid #6787bf;
   }

`;


export const FooterSoicalMain = styled.div`
   

`;
export const FooterSoicalUl = styled.ul`
   padding-left: 0;
`;
export const FooterSoicalli = styled.li`
   display: inline-block;

   a{
      background-color: #6A6A6A;
      font-size: 18px;
      margin-right: 5px;
      display: inline-block;
      text-decoration: none;
      padding: 0 0 .28em 0 !important;
      transition: all 0.3s ease;
      -webkit-transition: all 0.3s ease;
      width: 28px;
      height: 28px;
      text-align: center;
      line-height: 28px;
      color: #fff;
   }
   a:hover{
      color: #ddd;
   }



`;

export const FooterBoxTitle = styled.h3`
   color: #6787BF;
   font-weight: 700;
   font-size: 15px;
   text-transform: uppercase;
   letter-spacing: 1px;
   margin: 0 0 12px;
`;

export const NewsletterBox = styled.div`
   
   .newsletter-submit{
      background-color: #34548F!important;
      text-transform: uppercase;
      padding: 7px 16px;
      color: #fff;
      border-radius: 0;
      border: none;
      font-size: 15px;
   }

   .input-group>.form-control{
      border: none;
      border-radius: 0;
   }

`;

export const FooterCopyWrapper = styled.div`
   display: flex;
   justify-content: space-between;
   background-color: rgb(20, 20, 20);
   color: #a2abb7;
   font-size: 12px;
   font-weight: 300;
   padding: 15px 0;
`;
export const FooterCopyrightText = styled.p`
   text-align:left;
   margin: 0;
`;

export const FooterPrivacyPolicy = styled.div`
   text-align:right;

   a{
      color: #6A6A6A;
      font-size: 11px;
      margin-left: 15px;
      display: inline-block;
      text-decoration: none;
      padding: 0;
      transition: all 0.3s ease;
      -webkit-transition: all 0.3s ease;
   }
   a:hover{
      color: #fff;
   }
`;













