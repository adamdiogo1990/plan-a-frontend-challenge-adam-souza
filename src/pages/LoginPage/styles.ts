import styled from "styled-components";

export const LoginPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 16px;
  border: 2px solid #e2e8f0;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;

  &:focus {
    outline: none;
    border-color: #667eea;
  }
`;

export const ErrorMsg = styled.span`
  color: #e53e3e;
  margin-bottom: 16px;
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  background-color: #667eea;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover:not(:disabled) {
    background-color: #5a67d8;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;