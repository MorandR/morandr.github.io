import "./Person.css";
import richard from "./images/richard.jpeg";
import Layout from "./Layout";

export default function Person() {
  return (
    <>
      <Layout />
      <div id="content">
        <img src={richard} alt="person's face" id="picture" />
        <div id="name"> Richard Morand</div>
      </div>
    </>
  );
};