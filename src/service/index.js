import apiClient, {transformRequestUrl} from './client';

export const fetchDiscovery = () => {
  return new Promise((resolve, reject) => {
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
        const data = [];

        data.push({
          title: 'Top 250 Movies',
          list: result[0].data.items,
        });

        data.push({
          title: 'Top 250 TVs',
          list: result[1].data.items,
        });

        data.push({
          title: 'Most Popular Movie',
          list: result[2].data.items,
        });

        data.push({
          title: 'Most Popular TVs',
          list: result[3].data.items,
        });

        data.push({
          title: 'In Theaters',
          list: result[4].data.items,
        });

        resolve(data);
      })
      .catch(err => {
        console.log(err);
        reject(err);
      });
  });
};

export const fetchTrailer = async id => {
  let url = transformRequestUrl('/Trailer');
  const response = await apiClient.get(`${url}/${id}`);

  console.log('response', response);
};
