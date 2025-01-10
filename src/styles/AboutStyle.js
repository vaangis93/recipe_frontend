import styled from "styled-components";


export const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 columns per row */
  gap: 16px; /* space between images */
  padding: 20px;
  justify-items: center; /* center images horizontally in each grid cell */
`

export const ImageStyle = styled.img`
  width: 100%;
  max-width: 200px; /* maximum width of each image */
  height: auto;
  border-radius: 8px; /* optional: rounded corners for the images */

`