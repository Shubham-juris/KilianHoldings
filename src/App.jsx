import "./App.css";
import TopHeader from "./Components/TopHeader/TopHeader";
import Navbar from "./Components/Navbar/Navbar";


import AppRouter from "./Router/AppRouter";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <TopHeader />
      <Navbar />
      <AppRouter />
      <Footer />
    </>
  );
}

export default App;
