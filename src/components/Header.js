// import logo from '.react-logo.png'
import img1 from "./images/MyLogo.png";
import { useState, useEffect } from "react";

const Header = () => {
  const [clockState, setclockState] = useState();

  useEffect(() => {
    setInterval(() => {
      const d = new Date();
      setclockState(d.toLocaleTimeString());
    }, 1000);
  }, []);

  function Greeting(name) {
    name = prompt("What your name?");
    const date = new Date();
    const hours = date.getHours();

    let timeOfDay;
    if (hours >= 0 && hours < 12) {
      timeOfDay = "Good Morning";
    } else if (hours >= 12 && hours < 16) {
      timeOfDay = "Good Afternoon";
    } else {
      timeOfDay = "Good Evening";
    }
    return `Welcome  ${name}, ${timeOfDay} it's already ${clockState}`;
  }

  return (
    <header>
      <nav>
        <div className="logo">
          <img src={img1} width="110" alt="" />
          <h1 className="title">Welcome</h1>
        </div>
        <h3> {Greeting()}</h3>
        <ul>
          <li>Pricing</li>
          <li>About Us</li>
          <li>Contacts</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
