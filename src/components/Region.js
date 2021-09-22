import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Region(props) {
    const [attraction, setAttraction] = useState([]);
    const { title } = props

    const getAttraction = () => {
        axios.get("http://localhost:3001/api/attraction").then((res) => {
            setAttraction(res.data)
        })
    }
    // console.log(attraction)
    const attractionFilter = attraction.filter((data) => data.RegionName === title)

    useEffect(() => {
        getAttraction()
    }, [])
    return (
        <>  
            {attractionFilter.length > 0 ? (
                attractionFilter.map(data => {
                    return (
                        <Link to={`/edit/${data.ID}`} key={data.ID}>
                            <div className="cursor-pointer">
                                <img 
                                    src={data.ImageURL}  
                                    alt="วัดพระแก้ว"
                                    className="rounded-md h-48 object-cover w-full"
                                />
                                <p className="text-center mt-2">{data.Name}</p>
                            </div>  
                        </Link> 
                    )
                })
            ) : (
                <>
                    <div className="flex justify-center col-span-full">
                        <h1>No Data !</h1>
                    </div>
                </>
            )}  
        </>
    )
}

export default Region
