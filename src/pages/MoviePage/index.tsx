import React, { useState, useEffect } from "react";
import axios from "axios";
import { Movie } from "../../models/Movie";
import { MovieContainer, MovieDetails, MovieImage, MovieOverview, MoviePageContainer, MovieTitle, Rating, ReleaseDate, Title } from "./styles";


const MoviePage: React.FC = () => {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/latest?api_key=${process.env.REACT_APP_API_KEY}`
      );
      setMovie(response.data);
    };

    fetchMovie();
  }, []);

  return (
    <MoviePageContainer>
      <Title>Último lançamento</Title>
      <MovieContainer>
        <MovieImage
          src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
          alt={`Poster do filme ${movie?.title}`}
        />
        <MovieTitle>{movie?.title}</MovieTitle>
        <MovieOverview>{movie?.overview}</MovieOverview>
        <MovieDetails>
          <ReleaseDate>{movie?.release_date}</ReleaseDate>
          <Rating>{movie?.vote_average}/10</Rating>
        </MovieDetails>
      </MovieContainer>
    </MoviePageContainer>
  );
};

export default MoviePage;
