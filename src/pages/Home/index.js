import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import { Link } from 'react-router-dom'
import CollapseBox from '../../components/CollapseBox'
import axios from 'axios'

function Home() {
    const [region, setRegion] = useState([]);


    const getQuery = async () => {
        await axios.get("http://localhost:3001/api/region").then((response) => {
            setRegion(response.data)
        });
    };

    useEffect(() => {
        getQuery();
    }, [])
    

    return (
        <>
            <Header title="แสดงข้อมูลแหล่งท่องเที่ยว"/>
            <div className="w-full flex justify-end">
                <Link to="/create">
                    <button className="btn mt-10 mr-2 sm:mr-10 bg-green-400 px-4 py-1 text-white shadow hover:bg-green-700 border-0">
                        <span>Add</span>
                    </button>
                </Link>    
            </div>
            <div className="mb-10">
                {region.map((data) => {
                    return <CollapseBox title={data.Name} key={data.ID}/>
                })}
                
            </div>
        </>
    )
}

export default Home
