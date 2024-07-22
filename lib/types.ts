export type Subscription = {
  billing_cycle_start: string;
  billing_cycle_end: string;
  customer_information: {
    firstname: string;
    lastName: string;
    email: string;
    username: string;
    password: string;
  };
  subscription_type: string;
  subscription_service: string;
  active: boolean;
};

export type IconWithText = {
  icon: JSX.Element;
  externalLink: boolean;
  text: string;
  link: string;
};

export type MovieData = {
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
};

export type MovieAPIResponse = {
  page: number;
  results: MovieData[];
};
