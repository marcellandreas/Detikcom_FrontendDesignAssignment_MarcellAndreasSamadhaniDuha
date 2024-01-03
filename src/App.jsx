import "./App.css";
import Banner from "./components/banner";
import Navbar from "./components/navbar";
import About from "./components/organisms/about";
import Sponsors from "./components/organisms/sponsors";
import Gallery from "./components/organisms/gallery";
import News from "./components/organisms/news";
import Footer from "./components/organisms/footer";
function App() {
  return (
    <main>
      <Navbar />
      <Banner />
      <About />

      <Sponsors />
      <Gallery />
      <News />
      <Footer />
    </main>
  );
}

export default App;
