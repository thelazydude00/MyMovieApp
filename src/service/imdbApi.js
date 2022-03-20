import apiClient, {transformRequestUrl} from './client';

export const fetchDiscovery = () => {
  return new Promise((resolve, reject) => {
    let top250MoviesUrl = transformRequestUrl('/Top250Movies');
    let top250TVsUrl = transformRequestUrl('/Top250TVs');
    let mostPopularMovieUrl = transformRequestUrl('/MostPopularMovies');
    let mostPopularTVsUrl = transformRequestUrl('/MostPopularTVs');
    let inTheatersUrl = transformRequestUrl('/InTheaters');

    const concurrentReq = [
      apiClient.get(`${top250MoviesUrl}`),
      apiClient.get(`${top250TVsUrl}`),
      apiClient.get(`${mostPopularMovieUrl}`),
      apiClient.get(`${mostPopularTVsUrl}`),
      apiClient.get(`${inTheatersUrl}`),
    ];

    // TODO - change to allSettled
    Promise.all(concurrentReq)
      .then(result => {
        const data = [];
        const top250MovieData = result[0].data;
        if (!top250MovieData.errorMessage && top250MovieData.items.length > 0) {
          data.push({
            title: 'Top 250 Movies',
            list: top250MovieData.items,
          });
        }

        const top250TVsData = result[1].data;
        if (!top250TVsData.errorMessage && top250TVsData.items.length > 0) {
          data.push({
            title: 'Top 250 TVs',
            list: top250TVsData.items,
          });
        }

        const mostPopularMovieData = result[2].data;
        if (
          !mostPopularMovieData.errorMessage &&
          mostPopularMovieData.items.length > 0
        ) {
          data.push({
            title: 'Most Popular Movie',
            list: mostPopularMovieData.items,
          });
        }

        const mostPopularTVsData = result[3].data;
        if (
          !mostPopularTVsData.errorMessage &&
          mostPopularTVsData.items.length > 0
        ) {
          data.push({
            title: 'Most Popular TVs',
            list: mostPopularTVsData.items,
          });
        }

        const inTheatersData = result[4].data;
        if (!inTheatersData.errorMessage && inTheatersData.items.length > 0) {
          data.push({
            title: 'In Theaters',
            list: inTheatersData.items,
          });
        }

        resolve(data);
      })
      .catch(err => {
        console.log(err);
        reject(err);
      });
  });
};

export const fetchTitle = async id => {
  const url = transformRequestUrl('/Title');

  const response = await apiClient.get(`${url}/${id}`);

  return response.data;
};

export const searchMovie = async keyword => {
  const url = transformRequestUrl('/SearchMovie');

  const response = await apiClient.get(`${url}/${keyword}`);

  return response.data;
};

export default {
  fetchDiscovery,
  fetchTitle,
  searchMovie,
};
