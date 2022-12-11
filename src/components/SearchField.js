import React from 'react';

export default function SearchField({value, setValue})
{
   return <div>
      <input className='input' value={value} type="text"
         onChange={e => {
               setValue(e.target.value);
         }}
         placeholder="Type a name, e.g. 'Java'"></input>
   </div>;
}