import React, {useState} from 'react'

const games = [
  'Mines', 'MiMines', 'Lucky Jet', 'Aviamasters',
  'Chicken Road', 'Rabbit Road', 'Tower Rush', 'Knife Drop',
  'Happy Bird', 'Figoal', 'Play Me', 'Bombucks'
]

const translations = {
  ru: 'Скоро будет доступно!',
  en: 'Coming soon!',
  es: '¡Próximamente!',
  de: 'Demnächst verfügbar!',
  fr: 'Bientôt disponible!'
}

export default function App(){
  const [lang, setLang] = useState('ru')
  return (
    <div className="app">
      <header className="header">
        <div className="logo">PWA Games</div>
        <div className="flags">
          <button onClick={()=>setLang('ru')} aria-label="ru">🇷🇺</button>
          <button onClick={()=>setLang('en')} aria-label="en">🇬🇧</button>
          <button onClick={()=>setLang('es')} aria-label="es">🇪🇸</button>
          <button onClick={()=>setLang('de')} aria-label="de">🇩🇪</button>
          <button onClick={()=>setLang('fr')} aria-label="fr">🇫🇷</button>
        </div>
      </header>

      <main className="grid">
        {games.map((g, i)=> (
          <article key={g} className="card" onClick={()=>alert(translations[lang])}>
            <img src={`./images/game_${i%4+1}.png`} alt={g} />
            <div className="meta">
              <h3>{g}</h3>
            </div>
          </article>
        ))}
      </main>

      <footer className="footer">PWA demo — click any game image</footer>
    </div>
  )
}
