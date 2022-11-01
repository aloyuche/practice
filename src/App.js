// import Props from "./components/Props";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import Array from "./javaScriptComponents/Array";
import Caller from "./components/Caller";
import Jokes from "./components/Jokes";
import jokeData from "./components/jokeData";
import AddingButton from "./AddingButton";
import TodoAdd from "./components/TodoAdd";
import Class from "./javaScriptComponents/Class";
// import TodoAdd from "./TodoAdd";
// import AliceCarousel from 'react-alice-carousel';

function App() {
  const jokeElement = jokeData.map((joke) => {
    return <Jokes setup={joke.setup} punchline={joke.punchline} />;
  });
  return (
    <div className="App">
      <Header />
      <Main />
      <hr></hr>

      <Array />
      <TodoAdd />
      {jokeElement}
      <Caller />
      <Welcome />
      <Class />
      <AddingButton />
      <Footer />
    </div>
  );
}

export default App;
