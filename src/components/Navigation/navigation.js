import { Link } from 'react-router-dom'
import logo from '../../VS_logo.svg.png'
function Navigation({darkMode,toggleDarkMode}) {
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
			<div className="container-fluid">
				<img src={logo} className='App-logo' alt='logo' />
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav me-auto mb-2 mb-lg-0">
					<li className="nav-item">
						<Link className='nav-link active' aria-current="page" to='/'>Accueil</Link>
					</li>
					<li className="nav-item">
					<button className="btn btn-primary mt-2" onClick={toggleDarkMode}>{ darkMode ? 'Mode Jour':'Mode Nuit'}</button>
					</li>
				</ul>
				<form className="d-flex" role="search">
					<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
					<button className="btn btn-outline-success" type="submit">Search</button>
				</form>
				</div>
			</div>
		</nav>
        
	)
}

export default Navigation