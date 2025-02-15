import Footer from "./components/Footer";
import Header from "./components/Header";
import Instruction from "./components/Instruction";
import Main from "./components/Main";

function App() {
  return (
    <>
      <Header />
      <div className="px-[15px]">
        <Main />
        <Instruction />
      </div>
      <Footer />
    </>
  );
}

export default App;
