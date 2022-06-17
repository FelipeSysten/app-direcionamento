import logo from './logo512.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
        Felipe de Souza
        </h2>
        <h4>
        Desenvolvedor Full Stack   </h4>
        <p>ReactJS | React Native | NodeJS | Javascript | Typescript</p>
        <a
          className="App-link"
          href="https://web.whatsapp.com/send?phone=5573988433532"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open in WhatsApp
        </a>
        <a
          className="App-link"
          href="https://portf-lio-pessoal-kkpbnbydj-felipesysten.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open in Portfólio
        </a>
      </header>
    </div>
  );
}

export default App;
