// token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNTQzZTI3MDA4YWUzYmIxNDRhMDRiYmQ5N2E1ZDM3MSIsIm5iZiI6MTc1ODcwMTk5Mi40MjUsInN1YiI6IjY4ZDNhOWE4ZTE2OWM5MjcwODg0MDBhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4p80UGT9tu-zbO6dieHE5Jy_EvKSVj1vCRGQJ5BGcAU"

// key = 'f543e27008ae3bb144a04bbd97a5d371'

export const Now_Playing_movies = "https://api.themoviedb.org/3/movie/now_playing" 
 export const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNTQzZTI3MDA4YWUzYmIxNDRhMDRiYmQ5N2E1ZDM3MSIsIm5iZiI6MTc1ODcwMTk5Mi40MjUsInN1YiI6IjY4ZDNhOWE4ZTE2OWM5MjcwODg0MDBhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4p80UGT9tu-zbO6dieHE5Jy_EvKSVj1vCRGQJ5BGcAU'
    }
  };
  export const Popular_Movie = "https://api.themoviedb.org/3/movie/popular"

  export const Top_Rated = "https://api.themoviedb.org/3/movie/top_rated"

export const Upcoming = "https://api.themoviedb.org/3/movie/upcoming"

export const Banner_url = "https://image.tmdb.org/t/p/w500"