import styled from 'styled-components';

export type DivProps = {
    width?: string;
    height?: string;
  };

const CenteredDiv = styled.div<DivProps>`
display: flex;
align-items: center; 
justify-content: space-around; 
height: ${({ height }) => height||'auto'}; 
width: ${({ width }) => width||'auto'}; 
`;

export default CenteredDiv