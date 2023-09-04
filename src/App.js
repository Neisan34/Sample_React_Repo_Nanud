import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from "./components/Navigation Bar";
import Banner from "./components/Banner";
import Image1 from "./a/dbzsuper01.jpg";
import Image2 from "./a/hxh.jpg";
import Image3 from "./a/FT.jpg";
import Image4 from "./a/OP.jpg";
import Image5 from "./a/naruto.png";
import GridItems from "./components/GridItems";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavigationBar />
      <Banner></Banner>
  
      <div className="bg-dark">
        <div className="container">
          <h1 className="text-warning">Top Anime</h1>
        </div>
        <div className= "row g-5 justify-content-center">
          <GridItems name="Dragon Ball Super" imageFile ={Image1} desc ="Jabol"></GridItems>
          <GridItems name="Hunter X Hunter" imageFile ={Image2}desc ="Jabol"></GridItems>
          <GridItems name="Fairytail" imageFile ={Image3}desc ="Jabol"></GridItems>
          <GridItems name="One Piece" imageFile ={Image4}desc ="Jabol"></GridItems>
          <GridItems name="Naruto" imageFile ={Image5}desc ="Jabol"></GridItems>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;






