import { mediaQueries } from "../../utils/mediaQuery";
import styled, { CSS } from "styled-components";
export const HomeBannerWrapper = styled.div`
  position: relative;
  .carousel {
    height: 650px;
    overflow: hidden;
  }
  .carousel .carousel-control-prev,
  .carousel .carousel-control-next,
  .carousel .carousel-indicators {
    display: none;
  }
  .carousel img {
    width: 100%;
  }

  ${mediaQueries("lg")`
        padding:0;
    `}
`;

export const HomeBannerContent = styled.div`
  position: absolute;
  bottom: 100px;
  right: 0;
  left: 0;
  margin: 0 auto;
  text-align: center;
  z-index: 2;
`;
export const Title = styled.h1`
  font-weight: 300;
  font-size: 5.4em;
  text-align: center;
  color: #fff;
  margin-bottom: 0.1em;
  text-shadow: 2px 4px 3px rgb(0 0 0 / 30%);
`;
export const Descipition = styled.p`
  font-weight: 300;
  font-size: 2.4em;
  text-align: center;
  color: #fff;
  margin-bottom: 0.75em;
  margin-top: 0;
  text-shadow: 2px 4px 3px rgb(0 0 0 / 30%);
`;

export const BannerSearchboxwarpper = styled.div`
   display: flex;
   justify-content: space-between;
    width: 100%;
    max-width: 60%;
    margin: 0 auto;

    .form-select,
    .form-control,
    .react-datepicker__input-container input,
    .react-datepicker__input-container,
    select{
        width: 100%;
        border: none;
        border-radius: 0;
        height: 42px;
        min-height: 42px !important;
    }
   .react-datepicker__input-container input{
    border: none;
    padding: 6px 8px;
    border-radius: 0;
   }
   *[class*="col-md"] {padding-left: 0px !important;padding-right: 0px !important;}


   .equiryform-btn{
        background-color: #34548F!important;
        text-transform: uppercase;
        padding: 7px 16px;
        color: #fff;
        border-radius: 0;
        border: none;
        font-size: 15px;
        width: 100%;
   }
   input[type="number"]{
    appearance: none;
    &:focus{
        box-shadow: none;        
   }
   
`;
