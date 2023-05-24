import React, { useState, useEffect} from 'react'
import axios from 'axios'

export default function SearchForm({data,setData}){
    const [search,setSearch] = useState('')
    const [go,setGo] = useState(0)

    function toggleGo(){
        if(go === 1){
           setGo(0) 
        }else{
            setGo(1)
        }
    }
    function doSearch(evt){
        setSearch(evt.target.value)
    }

    useEffect(() => {
        if(search.length > 0){
            fetchData()
        }
    }, [go]);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?q='+search+'&lang=fr&units=metric&appid=baf6839fd81690d95680d68f248e401a') 
            setData(response.data)
        } catch (error) {
            console.error(error);
            setData(false)
        }
    }
    return(
        <>
            <input onChange={doSearch}></input><button onClick={toggleGo}>Search !</button>
        </>
    )
}