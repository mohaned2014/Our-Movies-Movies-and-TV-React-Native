export const fetchTrendingMovies = async () => {
  fetch(
    "https://api.themoviedb.org/3/trending/movie/week?api_key=9778501916f7669fa647087905e68025"
  )
    .then(respone => respone.json())
    .then(({ results }) => {
      return results;
      //   this.setState({ trendingMovies: results });
    });
};

const fetchTrendingTVShows = () => {
  fetch(
    "https://api.themoviedb.org/3/trending/tv/week?api_key=9778501916f7669fa647087905e68025"
  )
    .then(respone => respone.json())
    .then(({ results }) => {
      results = results.map(res => ({ ...res, title: res.name }));
      return results;
      //   this.setState({ trendingTVShows: results });
    });
};
