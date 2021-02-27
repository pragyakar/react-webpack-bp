import axios from 'src/utils/axios';

export function fetchSampleAPI(payload: string) {
  return axios
    .get('/sample/api', { params: payload })
    .then(({ data }) => data)
    .catch(error => {
      throw error;
    });
}
