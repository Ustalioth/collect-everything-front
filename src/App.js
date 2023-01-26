import { HomePage } from "pages/Site/Home/HomePage";
import { Logo } from "components/Logo/Logo";
import { Navbar } from "components/Navbar/Navbar";

function App() {
  const title = "Collect&verything";

  return (
    <>
      <Logo />
      <Navbar />
      <HomePage />
    </>
  );
}

export default App;
