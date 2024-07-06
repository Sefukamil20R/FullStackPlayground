import Header from "./components/Header";
import Alert from "./components/Alert";
import FirstSec from "./components/FirstSec";
import SecondSec from "./components/SecontSec";
import ThirdSec from "./components/ThirdSec";
import FourthSec from "./components/FourthSec";
import FifthSec from "./components/FifthSec";
import SixthSec from "./components/SixthSec";
import Appleyoutube from "./components/Appleyoutube";
import Footer from "./components/Footer";

// css
import "./resource/css/bootstrap.css";
import "./resource/css/styles.css";
import "./resource/css/utube.css";

function App() {
  return (
    <>
      <Header />
      <Alert />
      <FirstSec />
      <SecondSec />
      <ThirdSec />
      <FourthSec />
      <FifthSec />
      <SixthSec />
      <Appleyoutube />
      <Footer />
    </>
  );
}

export default App;
