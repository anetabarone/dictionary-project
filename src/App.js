import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <p>Search an English word in the dictionary:</p>

          <Dictionary />
        </main>
        <footer className="App-footer">
          <smaller>
            Coded by Aneta Barone.{" "}
            <a href="https://github.com/anetabarone/dictionary-project">
              See the source on GitHub.
            </a>
          </smaller>
        </footer>
      </div>
    </div>
  );
}
