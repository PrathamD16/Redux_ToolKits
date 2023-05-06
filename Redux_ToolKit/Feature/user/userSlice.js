const createSlice = require("@reduxjs/toolkit").createSlice;

const axios = require("axios");

const createAsyncThunk = require("@reduxjs/toolkit").createAsyncThunk;

const initialState = {
  loading: false,
  users: [],
  error: "",
};

//Generate pending, fulfilled and rejected action types.
const fetchUsers = createAsyncThunk("user/fetchUser", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.data.map((user) => user.id));
});

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message;
    });
  },
});


module.exports = userSlice.reducer,
module.exports.fetchUser = fetchUsers