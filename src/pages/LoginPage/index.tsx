import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ErrorMsg, Input, Label, LoginForm, LoginFormContainer, LoginPageContainer, SubmitButton } from "./styles";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/authentication/token/new?api_key=${process.env.REACT_APP_API_KEY}`
      );

      const { request_token } = response.data;

      const loginResponse = await axios.post(
        `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${process.env.REACT_APP_API_KEY}`,
        {
          username: email,
          password,
          request_token,
        }
      );

      const { success, request_token: authenticatedToken } = loginResponse.data;

      if (success) {
        const sessionResponse = await axios.post(
          `https://api.themoviedb.org/3/authentication/session/new?api_key=${process.env.REACT_APP_API_KEY}`,
          {
            request_token: authenticatedToken,
          }
        );

        const { session_id } = sessionResponse.data;

        localStorage.setItem("sessionId", session_id);

        navigate("/movies");
      } else {
        setError("Invalid username or password");
      }
    } catch (error) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const isFormValid = email !== "" && password.length >= 6;

  
  return (
    <LoginPageContainer>
        <LoginFormContainer>
            <LoginForm onSubmit={handleSubmit}>
                <Label htmlFor="email">Emaill</Label>
                <Input
                    type="text"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                />
                <Label htmlFor="password">Password</Label>
                <Input
                    type="password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                />
                {error && <ErrorMsg>{error}</ErrorMsg>}
                <SubmitButton disabled={!email || !password || isLoading}>
                    {isLoading ? "Loading..." : "Login"}
                </SubmitButton>
            </LoginForm>
        </LoginFormContainer>
    </LoginPageContainer>
    );
};

export default LoginPage;
