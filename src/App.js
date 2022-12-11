import React, {useState} from 'react';

import SearchField from './components/SearchField';
import LanguageList from './components/LanguageList';
import data from './data/languages.json';

function App() {
   const [searchFieldValue, setSearchFieldValue] = useState('');

   const newData = searchFieldValue ? data.filter(languageName => {
      return languageName.toLowerCase().includes(searchFieldValue.toLowerCase());
   }) : data;

   return <main>
      <h1>Search for a language</h1>
      <SearchField value={searchFieldValue} setValue={setSearchFieldValue}/>
      <LanguageList searchFieldValue={searchFieldValue} data={newData}/>
   </main>
}

export default App;
