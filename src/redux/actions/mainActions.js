import { INFO_SUCCESS, INFO_ERROR } from '../types';

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
  Accept: 'application/json'
};

const baseUrl = `https://`;

export const getInfo = () => (dispatch) =>
  fetch(`${baseUrl}`, { ...headers })
    .then((res) => res.json())
    .then((data) => {
      data.result
        ? dispatch({ type: INFO_SUCCESS, payload: data.result })
        : dispatch({ type: INFO_ERROR, payload: data.error });
    })
    .catch((err) => console.error('Error: ', err));
