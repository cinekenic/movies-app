export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  revenue: number;
  runtime: number;
  status: string;
  genres: Genre[];
}

export interface MovieDto {
  page: number;
  results: Movie[];
  total_results: number;
  total_pages: number;
}

export interface Genre {
  id: number;
  name: string;
}
export interface MovieVideoDto {
  id: number;
  results: MovieVideo[];
}
export interface MovieVideo {
  site: string;
  key: string;
}

export interface movieImages {
  backdrops: {
    aspect_ratio: number;
    file_path: string;
    height: number;
    iso_639_1: null;
    vote_average: number;
    vote_count: number;
    width: number;
  }[];
}
export interface MovieCredits {
  cast: {
    name: string;
    profil_path: string;
  }[];
}

export interface SimilarMovies {
  results: {
    title: string;
    poster_path: string;
  }[];
}
