import { Header } from "./components/Header/Header.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { Banner } from "./components/Banner/Banner.jsx";
import { Catalog } from "./components/Catalog/Catalog.jsx";

export function App() {
  return (
    <div className="layout">
      <Header />
      <Banner />
      <Catalog />
      <Footer />
    </div>
  )
}
