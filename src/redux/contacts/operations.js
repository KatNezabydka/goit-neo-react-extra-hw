import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'

// axios.defaults.baseURL = 'https://678225aac51d092c3dce61f9.mockapi.io'
//
// export const fetchContacts = createAsyncThunk(
//   'contacts/fetchAll',
//   async (_, thunkAPI) => {
//     try {
//       const {data} = await axios('/contacts')
//       return data
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   })
//
// export const addContact = createAsyncThunk(
//   'contacts/addContact',
//   async (request, thunkAPI) => {
//     try {
//       const {data} = await axios.post('/contacts', request)
//       return data
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   })
//
// export const deleteContact = createAsyncThunk(
//   'contacts/deleteContact',
//   async (id, thunkAPI) => {
//     try {
//       const {data} = await axios.delete(`/contacts/${id}`)
//       return data
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   })

axios.defaults.baseURL = 'https://connections-api.goit.global'

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const {data} = await axios('/contacts')
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  })

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (request, thunkAPI) => {
    try {
      const {data} = await axios.post('/contacts', request)
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  })

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const {data} = await axios.delete(`/contacts/${id}`)
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  })
