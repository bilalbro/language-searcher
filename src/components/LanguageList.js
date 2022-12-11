import React from 'react';

function LanguageList({data}) {
    return <div className='languages'>
        <p>({data.length || 'No results found 🧐.'})</p>
        <ol className='language-list'>
            {data.map((languageName, i) =>
                <li onClick={(e) => {
                    window.open('https://www.google.com/search?q=' + encodeURIComponent(languageName + ' programming'), '_blank');
                }} data-title={languageName} className='language' key={languageName + i}>
                    <div className='language_inner'>
                        <div className='language_text'>{languageName}</div>
                    </div>
                </li>
            )}
        </ol>
    </div>
}

export default LanguageList;