import fetch from 'isomorphic-fetch';

export const composeApiRequestSpec = (data, userContext) => ({
  data,
  userContext,
  clientInterface: '',
  fields: [],
  context: {},
});

const composeApiRequestData = (data, userContext) => ({
  headers: {
    'Content-Type': 'application/json',
  },
  method: 'POST',
  body: JSON.stringify(composeApiRequestSpec(data, userContext)),
});

const composeUploadApiRequestData = data => ({
  headers: {},
  method: 'POST',
  body: data,
});

export const post = (url, data, userContext = {}) =>
  fetch(url, data, userContext).then(res => res.json()).then(res => res);

export const generateServiceActionInvoker = (url, spec) => (dispatch, getState) => new Promise(resolve => {
  const state = getState();
  const userContext = {
    accessToken: state.oidc && state.oidc.token ? state.oidc.token.accessToken : null,
    userEmail: state.oidc && state.oidc.token ? state.oidc.token.userEmail: null,
  };
  post(url, composeApiRequestData(spec, userContext))
    .then(
      results => {
        resolve(results);
      },
      error => {
        console.log("error");
        resolve(null);
      }
    )
    .catch(error => {
      console.log("error");
      resolve(error);
    });
});

export const generateUploadServiceActionInvoker = (url, spec) => dispatch => new Promise(resolve => {
  post(url, composeUploadApiRequestData(spec))
    .then(
      results => {
        resolve(results);
      },
      error => {
        console.log("error");
        resolve(null);
      }
    )
    .catch(error => {
      resolve(null);
    });
});