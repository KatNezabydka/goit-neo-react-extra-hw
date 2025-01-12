import { createSelector } from '@reduxjs/toolkit';
import { selectNameFilter } from '../filters/selectors.js';

export const selectContacts = (state) => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, nameFilter) => {
    return contacts?.filter((el) => el.name.toLowerCase().includes(nameFilter.toLowerCase()))
  })

export const selectContactsLoading = (state) => state.contacts.loading
export const selectContactsError = (state) => state.contacts.error