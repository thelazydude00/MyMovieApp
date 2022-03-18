import apiClient, {transformRequestUrl} from './client';

export const fetchDiscovery = async id => {
  let top250MoviesUrl = transformRequestUrl('/Top250Movies');
  let top250TV2Url = transformRequestUrl('/Top250TVs');
  let mostPopularMovieUrl = transformRequestUrl('/MostPopularMovies');
  let mostPopularTVsUrl = transformRequestUrl('/MostPopularTVs');
  let inTheatersUrl = transformRequestUrl('/InTheaters');

  const concurrentReq = [
    apiClient.get(`${top250MoviesUrl}`),
    apiClient.get(`${top250TV2Url}`),
    apiClient.get(`${mostPopularMovieUrl}`),
    apiClient.get(`${mostPopularTVsUrl}`),
    apiClient.get(`${inTheatersUrl}`),
  ];

  // TODO - change to allSettled
  Promise.all(concurrentReq)
    .then(result => {
      console.log('result', result);
    })
    .catch(err => {
      console.log(err);
    });

  const data = {
    top250Movies: [],
    top250Tvs: [],
    mostPopularMovies: [],
    mostPopuarTVs: [],
    inTheaters: [],
  };

  return data;
};

export const fetchTrailer = async id => {
  let url = transformRequestUrl('/Trailer');
  const response = await apiClient.get(`${url}/${id}`);

  console.log('response', response);
};
