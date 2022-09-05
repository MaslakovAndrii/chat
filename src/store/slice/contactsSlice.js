import { createSlice } from '@reduxjs/toolkit';
import Josefina from '../../assets/image/1.jpg';
import Alice from '../../assets/image/2.jpeg';
import Velazquez from '../../assets/image/3.jpeg';
import Barrera from '../../assets/image/4.jpeg';

const contactsSlice = createSlice({
     name: 'contactList',
     initialState: {
          contacts: [
               { id: 1, firstName: 'Josefina', lastName: '', avatar: Josefina, lastActivity: new Date('2022-08-20T08:01+03:00').getTime(), isActive: true, },
               { id: 2, firstName: 'Alice', lastName: 'Freeman', avatar: Alice, lastActivity: new Date('2022-08-21T20:02+03:00').getTime(), isActive: true, },
               { id: 3, firstName: 'Velazquez', lastName: '', avatar: Velazquez, lastActivity: new Date('2022-08-23T22:01+03:00').getTime(), isActive: true, },
               { id: 4, firstName: 'Barrera', lastName: '', avatar: Barrera, lastActivity: new Date('2022-08-24T12:04+03:00').getTime(), isActive: false, },
          ],
          searchedContacts: [],
     },
     reducers: {
          searchContacts(state, action) {
               state.searchedContacts = state.contacts.filter(contact => {
                    const fullName = `${contact.firstName} ${contact.lastName}`;
                    return fullName.toLowerCase().includes(action.payload.toLowerCase()) && contact;
               })
          },
          setLastActivity(state, action) {
               const [id, time] = action.payload;
               state.contacts.forEach(element => {
                    if (element.id === id) {
                         element.lastActivity = time;
                    }
               });
          },
          changeSequence(state, action) {
               const idx = state.contacts.findIndex(contact => contact.id === action.payload);
               const item = state.contacts.splice(idx, 1);
               state.contacts.unshift(item[0]);
          }
     }
})


export const { searchContacts, setLastActivity, changeSequence } = contactsSlice.actions;
export default contactsSlice.reducer;