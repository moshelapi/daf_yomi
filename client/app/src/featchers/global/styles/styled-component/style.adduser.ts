
import styled from 'styled-components';

export const StyledBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 60vw;
  height: auto;
  padding: 16px;
  direction: rtl;
`;

export const StyledButton = styled.button`
  padding: 8px 16px;
  background-color: blue;
  color: white;
  width: 10vw;
  height: 5vh;
  border: none;
  cursor: pointer;
  margin-bottom: 16px;
`;

export const StyledPaper = styled.div`
  padding: 16px;
  margin-top: 16px;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const StyledTypography = styled.h4`
  margin-bottom: 16px;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const StyledTextField = styled.input`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;

  &:focus {
    outline: none;
    border-color: blue;
  }

  &::placeholder {
    color: #aaa;
  }
`;
