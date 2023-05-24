import { Link } from 'react-router-dom'
import logo from '../../VS_logo.svg3.png'
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
				</ul>
					<li className="nav-item">
					<button className="btn btn-primary mt-2" onClick={toggleDarkMode}>{ darkMode ? 'Mode Jour':'Mode Nuit'}</button>
					</li>
				
				</div>
			</div>
		</nav>
        
	)
}

export default Navigation
