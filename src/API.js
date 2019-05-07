export const getTopRatedTVShows = async () => {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated?api_key=9778501916f7669fa647087905e68025&language=en-US&page=1"
    );
    const res = await response.json();
    let results = await res.results;
    results = results.map(res => ({ ...res, title: res.name }));
    return results;
  } catch {
    alert("please check your internet connection");
  }
};

export const getTrandingTVShows = async () => {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/trending/tv/week?api_key=9778501916f7669fa647087905e68025"
    );
    const res = await response.json();
    let results = await res.results;
    results = results.map(res => ({ ...res, title: res.name }));
    return results;
  } catch {
    alert("please check your internet connection");
  }
};

export const getTrandingMovies = async () => {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/trending/movie/week?api_key=9778501916f7669fa647087905e68025"
    );
    const results = await response.json();
    const res = await results.results;
    return res;
  } catch {
    alert("please check your internet connection");
  }
};
export const getTopRatedMovies = async () => {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=9778501916f7669fa647087905e68025&language=en-US&page=1"
    );
    const results = await response.json();
    const res = await results.results;
    return res;
  } catch {
    alert("please check your internet connection");
  }
};
