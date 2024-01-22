import styled from 'styled-components';

export const StyleUserCard = styled.div`
  display: flex;
  border: 2px solid red;
  flex-basis: 100%;
  box-sizing: border-box;
  padding: 8px;
  max-width: 345px;
  margin: 16px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  overflow: hidden;
  @media (min-width: 600px) {
    flex-basis: 50%;
  }
  @media (min-width: 960px) {
    flex-basis: 33.33%;
  }
  @media (min-width: 1200px) {
    flex-basis: 25%;
  }
`;


export const StyledCardContent = styled.div`
  padding: 16px;
`;


export const StyledBox = styled.div`
  color: #666;
`;
