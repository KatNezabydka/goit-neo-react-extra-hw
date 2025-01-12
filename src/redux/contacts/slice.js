import {createSlice} from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations.js';

const initialState = {
  items: [],
  loading: false,
  error: null

};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  extraReducers: (builder) =>
    builder
      .addCase(fetchContacts.fulfilled, (state, {payload}) => {
        state.loading = false
        state.items = payload
      })
      .addCase(addContact.fulfilled, (state, {payload}) => {
        state.loading = false
        state.items.push(payload)
      })
      .addCase(deleteContact.fulfilled, (state, {payload}) => {
        state.loading = false
        state.items = state.items.filter((el) => el.id !== payload.id)
      })
      .addMatcher(
        (action) => action.type.endsWith('/pending'),
        (state) => {
          state.loading = true
          state.error = false
        }
      )
      .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        (state) => {
          state.error = true
          state.loading = false
        }
      ),
});


export const contactsReducer = contactsSlice.reducer