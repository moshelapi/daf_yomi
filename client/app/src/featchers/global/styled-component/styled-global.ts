import styled from 'styled-components';


interface StyledTypographyProps {
    font?: string; 
  }

  type DivProps = {
    width?: string;
    height?: string;
  };
  
  export const CenteredDiv = styled.div<DivProps>`
    display: flex;
    align-items: center; 
    justify-content: space-around; 
    height: ${({ height }) => height||'auto'}; 
    width: ${({ width }) => width||'auto'}; 
  `;
  
export const StyledTypography = styled.p<StyledTypographyProps>`
  font-size: ${( {font} ) => font || '14px'};
  margin-bottom: 12px;
  color: #333;
`;


export const StyledCardMedia = styled.img`
  align-items: center;
  width: 80%;
  height: 40%;
  border-radius: 50%;
  object-fit: cover;
`;


export const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: #7dc0a1bd; 
  color: white;
  width: 180px;
  height: 60px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 24px;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    transform: scale(1.05); 
  }

  &:active {
    transform: scale(0.95); 
  }

  &:focus {
    outline: none; /* Removes the default focus outline */
  }
`;
