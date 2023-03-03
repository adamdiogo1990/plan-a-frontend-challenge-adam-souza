import styled from "styled-components";

export const MoviePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  background-color: #f5f5f5;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 32px;
`;

export const MovieContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
`;

export const MovieImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 16px;
`;

export const MovieTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;
`;

export const MovieOverview = styled.p`
  font-size: 14px;
  margin-bottom: 16px;
`;

export const MovieDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ReleaseDate = styled.p`
  font-size: 12px;
  font-weight: bold;
`;

export const Rating = styled.p`
  font-size: 16px;
  font-weight: bold;
`;