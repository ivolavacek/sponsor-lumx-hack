import React, { useState } from 'react';

const App = () => {
  const [language, setLanguage] = useState('en');

  const text = language === 'en' ? {
    title1: 'Manage copyright for any type of media',
    title2: 'Films, series, videos and audio',
    bullets: [
      { text: 'Tokenize your content with Blockchain' },
      { text: 'Track your earnings and royalties distribution' },
      { text: 'Get transparent contracts with your coworkers' },
    ],
  } : {
    title1: 'Gerencie direitos autorais para qualquer tipo de mídia',
    title2: 'Filmes, séries, vídeos e áudio',
    bullets: [
      { text: 'Tokenize seu conteúdo com Blockchain' },
      { text: 'Monitore seus ganhos e distribuição de royalties' },
      { text: 'Obtenha contratos transparentes com seus colegas' },
    ],
  };

  return (
    <div className="div1">
      <div className="container-div1">
        <img src={logo} alt="logo" className="logo-div" />
        <img src={name} alt="name" className="name-div" />
      </div>
      <div className="text1">{text.title1}</div>
      <div className="text2">{text.title2}</div>
      <div className="bullets">
        {text.bullets.map((bullet, index) => (
          <div className="square" key={index}>
            <p>{bullet.text}</p>
          </div>
        ))}
      </div>
      <button onClick={() => setLanguage(language === 'en' ? 'pt' : 'en')}>
        Switch to {language === 'en' ? 'Portuguese' : 'English'}
      </button>
    </div>
  );
}

export default App;