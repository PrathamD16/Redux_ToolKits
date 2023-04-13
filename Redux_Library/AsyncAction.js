//Installing axios
//Install redux-thunk which defines async action creator and act as middleware
const { applyMiddleware } = require("@reduxjs/toolkit");
const redux = require("@reduxjs/toolkit");
const axios = require('axios')
const thunkMiddleWare = require('redux-thunk').default

// const applyMiddleWare = redux.applyMiddleware


const initialState = {
  loading: false,
  users: [],
  error: "",
};

const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED";
const FETCH_USERS_SUCCEEDED = "FETCH_USERS_SUCCEEDED";
const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";

const fetchUserRequest = () => {
  return {
    type: FETCH_USERS_REQUESTED,
  };
};

const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCEEDED,
    payload: users,
  };
};

const fetchUserFailuer = (error) => {
  return {
    type: FETCH_USERS_FAILED,
    payload: error,
  };
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCEEDED:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    case FETCH_USERS_FAILED:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
  }
};


const fetchUsers = () => {
  return function(dispatch){
    dispatch(fetchUserRequest())
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
      const users = response.data.map((user) => user.id)
      dispatch(fetchUserSuccess(users))
    })
    .catch(err => {
      console.log(err)
      dispatch(fetchUserFailuer(err.message))
    })
  }
}

const store = redux.configureStore({reducer:UserReducer},applyMiddleware(thunkMiddleWare))

store.subscribe(() => console.log("Updated State: ",store.getState()))
store.dispatch(fetchUsers())
