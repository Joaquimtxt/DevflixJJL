import React, { useEffect, useState } from "react";
import MovieSelect from "../../components/movieSelect/MovieSelect";

const Series = ({ apiUrl, options }) => {
  const [scifiMovies, setSciFiSeries] = useState([]);
  const [dramaSeries, setDramaSeries] = useState([]);
  const [animeSeries, setAnimeSeries] = useState([]);
  const [animationSeries, setAnimationSeries] = useState([]);
  const [adultAnimationSeries, setAdultAnimationSeries] = useState([]);
  const [comedySeries, setComedySeries] = useState([]);

  const searchByGenre = async (
    genreId,
    setSeries,
    keyword = "",
    startDate = "",
    endDate = "",
    minVoteAverage = ""
  ) => {
    const url = `${apiUrl}discover/tv?with_genres=${genreId}&language=pt-br&page=1${
      keyword ? `&with_keywords=${keyword}` : ""
    }${startDate ? `&first_air_date.gte=${startDate}` : ""}${
      endDate ? `&first_air_date.lte=${endDate}` : ""
    }&vote_average.gte=${minVoteAverage}`;
    const response = await fetch(url, options);
    const data = await response.json();
    setSeries(data.results);
  };
  useEffect(() => {
    searchByGenre(16, setAnimationSeries, "6513", "", "", "8.0");
    searchByGenre(16, setAdultAnimationSeries, "161919");
    searchByGenre(
      35,
      setComedySeries,
      "193171",
      "1990-01-01",
      "2010-12-31",
      "7.5"
    );
    searchByGenre(10765, setSciFiSeries, "", "", "8.5");
    searchByGenre(18, setDramaSeries, "", "1990-01-01", "8.5");
    searchByGenre(16, setAnimeSeries, "210024", "2000-01-01", "", "8.5");
  }, [apiUrl, options]);

  return (
    <div>
      <h1 className='text-light text-center'>Séries</h1>
      <MovieSelect Titulo="Animação" series={animationSeries} />
      <MovieSelect Titulo="Comédia" series={comedySeries} />
      <MovieSelect Titulo="Animação para adultos" series={adultAnimationSeries} />
      <MovieSelect Titulo="Ficção Científica" series={scifiMovies} />
      <MovieSelect Titulo="Animes" series={animeSeries} />
      <MovieSelect Titulo="Drama" series={dramaSeries} />
    </div>
  );
};

export default Series;
