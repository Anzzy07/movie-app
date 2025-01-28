const API_KEY = "d168021cf3c186a1a531870f4e9188ba";

export const loginGuest = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/authentication/guest_session/new?api_key=${API_KEY}`,
    {
      headers: {
        accept: "application/json",
        Authorization:
          "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMTY4MDIxY2YzYzE4NmExYTUzMTg3MGY0ZTkxODhiYSIsIm5iZiI6MTcxNzExMzcyOS4xMDgsInN1YiI6IjY2NTkxMzgxYTJjZmE1ZmI0YTc0ZjNiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.16Odk-XAUmoKjI3ysUF-AfFjBiLRW512JEV5dMI_rwM",
      },
    }
  );

  return response.json();
};

export const fetchPopularMovies = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
  );
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results;
};
