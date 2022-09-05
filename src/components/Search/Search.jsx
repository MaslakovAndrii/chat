import React, { useEffect, useState } from 'react';
import './Search.scss';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { useDebounce } from '../../hooks/useDebounce';
import { searchContacts } from '../../store/slice/contactsSlice';

const Search = () => {
     const [search, setSearch] = useState('');
     const contacts = useSelector(state => state.contactsListReducer.contacts);
     const debounced = useDebounce(search, 250);
     const dispatch = useDispatch();

     function cleanForm() {
          setSearch('');
     }

     useEffect(() => {
          dispatch(searchContacts(debounced));
     }, [debounced, dispatch, contacts])

     return (
          <div className='search'>
               <input className='search__input' value={search} onBlur={cleanForm} onChange={e => setSearch(e.target.value)} placeholder='Search or start new chat' />
               <SearchIcon className='search__button' fontSize='small' />
          </div>
     );
};

export default Search;