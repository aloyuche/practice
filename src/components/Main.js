import Cards from "./Cards";
// import img1 from "./images/pc3.jpg";
import img2 from "./images/pc4.jpg";
// import img3 from "./images/pc8.jpg";
// import Jokes from "./Jokes";

const Main = () => {
  return (
    <div className="content">
      {/* <div className="mains">
        <h2>Reason I am excited to Learn React</h2>
        <ol className="reason">
          <li>It's a popular library, so I will be able to learn</li>
          <li>I'm more likely to get a job as a developer if I know React'</li>
          <li>React can be used to control parts of HTML page</li>
          <li>It's a Learn and focused component based UI library</li>
        </ol>
        <h2>Reason I am excited to Learn React</h2>
        <ol className="reason">
          <li>It's a popular library, so I will be able to learn</li>
          <li>I'm more likely to get a job as a developer if I know React'</li>
          <li>React can be used to control parts of HTML page</li>
          <li>It's a Learn and focused component based UI library</li>
        </ol>
        <h2>Reason I am excited to Learn React</h2>
        <ol className="reason">
          <li>It's a popular library, so I will be able to learn</li>
          <li>I'm more likely to get a job as a developer if I know React'</li>
          <li>React can be used to control parts of HTML page</li>
          <li>It's a Learn and focused component based UI library</li>
        </ol>
      </div> */}
      <div className="my_cards">
        <Cards
          image="./images/pc8.jpg"
          title="Adminstrator"
          descr="Note that the development build is not optimized. To create a production build"
        />
        <Cards
          image={img2}
          title="IT Manager"
          descr="A map is the standard JavaScript function, and also a type of data collection."
        />
        <Cards
          image="./images/pc6.jpg"
          title="Human Resources"
          descr="Note that the development build is not optimized. To create a production build"
        />
        <Cards
          image="./images/pc7.jpg"
          title="IT Manager"
          descr="A map is the standard JavaScript function, and also a type of data collection."
        />
        {/* <Cards
          image={img3}
          title="Human Resources"
          descr="Note that the development build is not optimized. To create a production build"
        />
        <Cards
          image={img2}
          title="IT Manager"
          descr="Note that the development build is not optimized. To create a production build"
        />
        <Cards
          image={img2}
          title="IT Manager"
          descr="Note that the development build is not optimized. To create a production build"
        />
        <Cards
          image={img3}
          title="Human Resources"
          descr="Note that the development build is not optimized. To create a production build"
        />
        <Cards
          image={img3}
          title="Human Resources"
          descr="Note that the development build is not optimized. To create a production build"
        /> */}
        <Cards
          image="./images/pc3.jpg"
          title="IT Manager"
          descr="A map is the standard JavaScript function, and also a type of data collection."
        />
      </div>

      {/* <Jokes
        title=" A friend who cares"
        sect="'Dont look for someone who will solve all your problems but look for someone who wont let you face them alone.'"
      />
      <Jokes
        title="Every body is important in life"
        sect="'If you think nobody cares if youre alive, just borrow money from people and miss the date of payment.....'"
      />
      <Jokes
        title="Women cant help you"
        sect="'One who relies on a woman to provide for him usually take his supper very late......'"
      />
      <Jokes
        title="Be careful to seek solution"
        sect="If a young man is not prudent in seeking what killed his father, what killed his father may also kill him.."
      />
      <Jokes
        title="Hustle for yourself"
        sect="A man who drives his fathers car is not entitled to speak in a council of men who own bicycles.."
      />
      <Jokes
        title="Dont waste time in procastination"
        sect="A man who hangs around a beautiful girl without saying a word ends up fetching water for guests at her wedding.."
      />
      <Jokes
        title="Join others do what they do"
        sect="Those who are too smart to engage in politics are punished by being governed by those who are dumber"
      /> */}

      <hr />
    </div>
  );
};

export default Main;
