import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./pages/Header";
import Pagina2 from "./pages/Pagina2";
import Pagina3 from "./pages/pagina3";
import Pagina4 from "./pages/Pagina4";
import Reporte from "./pages/Reporte";




function App() {
  return (
    <div className="text-ligth bg-white vh-100">
<BrowserRouter>
<Header />
<Routes>
    <Route path="/reporte" element={<Reporte/>} />
    <Route path="/pagina2" element={<Pagina2/>} />
    <Route path="/pagina3" element={<Pagina3/>} />
    <Route path="/pagina4" element={<Pagina4/>} />

</Routes>


</BrowserRouter>
      

    </div>
  );
}

export default App;
