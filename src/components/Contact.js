// import img from "./images/girl-removebg-preview.png";
import img1 from "./images/icons/call.png";
import img2 from "./images/icons/envelo.png";

const Contact = (prop) => {
  return (
    <div className="contact-card">
      <img src={prop.img} alt="" />
      <h3>{prop.name}</h3>
      <div className="class-info">
        <img src={img1} width="30px" alt="" />
        <p>{prop.phone}</p>
      </div>
      <div className="class-info">
        <img src={img2} width="30px" alt="" />
        <p>{prop.email}</p>
      </div>
    </div>
  );
};

export default Contact;
