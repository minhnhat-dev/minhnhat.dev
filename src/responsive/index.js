import { css } from "styled-components";

export const mobile = (props) => {
  return css`
     @media only screen and (max-width: 768px) {
      ${props}
    }
  `;
};

export const tablet = (props) => {
  return css`
    @media only screen and (max-width: 992px) {
      ${props}
    }
  `;
};

export const DeviceSize = {
  mobile: 768,
  tablet: 992,
  laptop: 1324,
  desktop: 2024,
};

