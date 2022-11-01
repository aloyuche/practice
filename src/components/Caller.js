import React from "react";
import Yes from "../Yes";
import Contact from "./Contact";
import UsingTerniary from "./UsingTerniary";

const Caller = () => {
  const firstName = "Agnes";
  const lastName = "Mathew";
  const age = 32;
  const date = new Date();
  const hours = date.getHours();

  let timeOfTheDay;
  if (hours < 12) {
    timeOfTheDay = "AM";
  } else {
    timeOfTheDay = "PM";
  }
  return (
    <div className="contact-elemnt">
      <div className="array-pract">
        <h2>
          Hello {firstName} {lastName} you are {age}
          <p>
            The time is {hours}: {date.getMinutes()} {timeOfTheDay}
          </p>
        </h2>

        {/* Counter add */}
        <p className="yes-content">
          <UsingTerniary />
        </p>
        <p className="yes-content">
          <Yes />
        </p>
      </div>
      <div className="contacts">
        <Contact
          img="./images/girls-removebg-preview.png"
          name="Michael Henry"
          phone="+234 701 2392 980"
          email="info@cheloy.com"
        />
        <Contact
          img="./images/pregnant-woman-with-her-husband.jpg"
          name="Uche Ogbodo"
          phone="+234 811 2392 984"
          email="info@superlife.com"
        />
        <Contact
          img="./images/girl-removebg-preview.png"
          name="Mary Nwankwo"
          phone="+234 813 2192 984"
          email="mary@superlife.com"
        />
        <Contact
          img="./images/pregnant-woman-with-her-husband.jpg"
          name="Marybest Stanley"
          phone="+234 813 4392 234"
          email="maryzobo@gmail.com"
        />
      </div>
    </div>
  );
};

export default Caller;
