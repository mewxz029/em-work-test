import React from 'react'
import { Link } from 'react-router-dom'

function Region(props) {
    const { title } = props
    return (
        <>
            <Link to="/edit">
                <div className="cursor-pointer">
                    <img 
                        src="https://www.khaosod.co.th/wpapp/uploads/2020/06/%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B9%81%E0%B8%81%E0%B9%89%E0%B8%A7.jpg"  
                        alt="วัดพระแก้ว"
                        className="rounded-md h-48 object-cover w-full"
                    />
                    <p className="text-center mt-2">พระบรมมหาราชวังและวัดพระแก้ว</p>
                </div>  
            </Link>    
        </>
    )
}

export default Region
