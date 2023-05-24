import React, { useState } from 'react'
import Navigation from '../components/Navigation/navigation'
const Layout = ({ children }) => {
	const [dark, setDark] = useState(0)
	const darkmode = () =>{
        if(dark === 1){
            setDark(0);
        }else{
            setDark(1);
        }
    }
	let test;
	if(dark){
		test = "dark"
	}else{
		test = ""
	}
	return (
		<>
			<header className='App-header'>
				<Navigation darkMode={dark} toggleDarkMode={darkmode}></Navigation>
			</header>

			<main className={'App-main '+test}>{children}</main>

			{/* <footer>
				<p>Je suis un footer</p>
			</footer> */}
		</>
	)
}

export default Layout
