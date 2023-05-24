import { useState } from 'react';
import SearchForm from '../components/SearchForm/searchForm';
import Layout from "../layouts/layouts";
import WeatherDisplay from "../components/WeatherDisplay/weatherDisplay"

function Home() {
	
    const [data,setData] = useState(true)
    return(
		<div className='App'>
			<Layout>
				<SearchForm data={data} setData={setData}></SearchForm>
				
				{ typeof data === "boolean" && data === false  ? <p>No Result Found.</p>:null}
				{ typeof data === "object" ?<WeatherDisplay dict={data}/>:null}
				
			</Layout>
		</div>
    )
}

export default Home