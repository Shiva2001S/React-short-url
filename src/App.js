import { Routes, Route, Link, useParams } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import { useEffect, useState } from "react";
import shortid from "shortid";
import Temp from "./Components/Temp";
function App() {
  const [url, setUrl] = useState("");
  const [obj, setObj] = useState({});
  const [shortId, setShortId] = useState("");

  useEffect(() => {
    if (url !== "") {
      const generatedShortId = shortid.generate();
      setShortId(generatedShortId);

      // Update the object with the new URL and short ID
      setObj((prevObj) => ({
        ...prevObj,
        [generatedShortId]: url,
      }));
      // Clear the URL
      // setUrl("");
    }
  }, [url]);
  console.log(obj);
  return (
    <>
      <div>
        Your shortId : {shortId}
      </div>
      <li>
        <Link to='/'>
          Home
        </Link>
      </li>
      <li>
        <Link to='/about'>
          About Us
        </Link>
      </li>
      <li>
        <Link to='/contact'>
          Contact Us
        </Link>
      </li>
      <li>
        <Link to={`/${shortId}`}>
          Temp
        </Link>
      </li>
      <Routes>
        <Route exaxt path="/" element={<Home urlHandle={setUrl} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route exaxt path={'/:url'} element={<Temp obj={obj} />} />
        {/* <Route exaxt path={`/:${url}`} element={<Temp />} /> */}
      </Routes>
    </>
  );
}

export default App;
