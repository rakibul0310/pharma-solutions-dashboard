import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userServices } from "../services/userServices";

export const getUsers = createAsyncThunk("users/getUsers", async (thunkApi) => {
  try {
    return await userServices.getUsersService();
  } catch (error) {
    let msg = "";
    if (error.response.data.message) {
      msg = error.response.data.message;
    } else {
      msg = error.message;
    }

    return thunkApi.rejectWithValue(msg);
  }
});
export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (id, thunkApi) => {
    try {
      return await userServices.deleteUserService(id);
    } catch (error) {
      let msg = "";
      if (error.response.data.message) {
        msg = error.response.data.message;
      } else {
        msg = error.message;
      }

      return thunkApi.rejectWithValue(msg);
    }
  }
);

// Then, handle actions in auth reducers:
export const userSlice = createSlice({
  name: "users",
  initialState: {
    isLoading: false,
    data: {},
    error: null,
  },

  /*
     ? details: Users reducer
  */
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = null;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.data = {};
      state.error = action.payload;
    });

    builder.addCase(deleteUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = null;
    });
    builder.addCase(deleteUser.rejected, (state, action) => {
      state.isLoading = false;
      state.data = {};
      state.error = action.payload;
    });
  },
});

export default userSlice.reducer;
