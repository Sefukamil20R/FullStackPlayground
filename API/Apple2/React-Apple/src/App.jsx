import Header from "./components/Header";
import Alert from "./components/Alert";
import FirstSec from "./components/FirstSec";
import SecondSec from "./components/SecontSec";
import ThirdSec from "./components/ThirdSec";
import FourthSec from "./components/FourthSec";
import FifthSec from "./components/FifthSec";
import SixthSec from "./components/SixthSec";
// import Phones from "./components/Phones";
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
      {/* <Routes> */}
      {/* <Route path="/" exact component={Main} />
          <Route path="/mac" exact component={Mac} /> */}
      {/* <Route path="/Phones" element={<Phones />} /> */}
      {/* <Route path="/iphone/:pid" exact component={Productpage} /> */}
      {/* <Route path="/" component={Four04} /> */}
      {/* </Routes> */}

      <Footer />
    </>
  );
}

export default App;
