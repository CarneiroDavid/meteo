import { useState } from 'react';
import logo from '../VS_logo.svg.png'
import logo2 from '../VS_logo.svg2.png'
import SearchForm from '../components/SearchForm/searchForm';
import Layout from "../layouts/layouts";

function Home() {
	
    const [data,setData] = useState(true)
	console.log(typeof data);
    return(
		<div className='App'>
			<Layout>
				<SearchForm data={data} setData={setData}></SearchForm>
				
				{ typeof data === "boolean" && data === false  ? <p>No Result Found.</p>:null}
				{ typeof data === "object" ?<p>{"["+data.sys.country+"] "}{data.name}</p>:null}
			</Layout>
		</div>
    )
}

export default Home