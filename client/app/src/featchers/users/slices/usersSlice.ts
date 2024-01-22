import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useQuery } from '@apollo/client';
import { User } from '../utils/interfaces/interface';
import { GET_ALL_USERS } from '../../global/apolloclient/graphQL_querys';


interface UserState {
  users: User[];
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    console.log('giuygli');
  const { loading, error, data } = useQuery(GET_ALL_USERS);

  if (loading) return [];
  if (error) throw new Error(error.message);
  return data.users; 
});

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch users';
      });
  },
});

export default userSlice.reducer;
