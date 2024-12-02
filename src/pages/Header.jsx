import { Link, link } from "react-router-dom";
import "./navbar.css"

const Header = () => {
    return(
        <div className="container">
            <div className="row">
                
            <h2 className="text-end">"Proyecto 2"</h2>
                <div className="col">
                    <img src="https://scontent.fgdl1-3.fna.fbcdn.net/v/t39.30808-6/467747649_122179274690155995_5430674784116070677_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=103&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=azeE1OcgmoMQ7kNvgFUkkN-&_nc_zt=23&_nc_ht=scontent.fgdl1-3.fna&_nc_gid=AqSGd93j5xXxqdEV57axR5V&oh=00_AYCrcg0NEkGXrLSuxK5bsxYDiX8A_ckoY5mTTFcS4DPYAw&oe=6752BAC5" alt="udgvirtual"
                    width={180}/>
                   
                </div>
                <div className="text-end">
                    <h2 className="text-end">"Producto integrador"</h2>
                    <p>Asesor:Deisy Acosta</p>
                    <p>Alumno:Jesus Antonio Parra</p>
                </div>

             <div className="text-center">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/pagina2">Actividades Realizadas</Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to="/pagina4">Codigos Fuente</Link>
                            </li>
                            <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle"  id="agencias"  role="button" data-bs-toggle="dropdown" aria-expanded="false">Sistemas implementados</a>
                            <ul className="dropdown-menu" aria-labelledby="agencias" id="navbar">
                                <li><a className="dropdown-item" href="#">Gamerteca:<br></br><a className="text-center" href="https://lgsus1998.github.io/gamerteca/" target="_blank">Gamerteca</a></a></li>
                                <li><a className="dropdown-item" href="#">Mecanicorp:<br></br><a className="text-center" href="https://lgsus1998.github.io/Mecanicorp/" target="_blank">Mecanicorp</a></a></li>
                            </ul>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/reporte">Reporte de Modificaciones</Link>
                            </li>
                        </ul>
    </div>
  </div>
</nav>
                    
                    </div>
            </div>

        </div>

    )
}
export default Header;