import React from 'react'
import Header from '../../components/Header'
import { Link } from 'react-router-dom'
import CollapseBox from '../../components/CollapseBox'

function Home() {
    return (
        <>
            <Header title="แสดงข้อมูลแหล่งท่องเที่ยว"/>
            <div className="w-full flex justify-end">
                <Link to="/create">
                    <button className="btn mt-10 mr-2 sm:mr-10 bg-green-400 px-4 py-1 text-white shadow hover:bg-green-700">
                        <span>Add</span>
                    </button>
                </Link>    
            </div>
            <div className="mb-10">
                <CollapseBox title="ภาคกลาง"/>
                <CollapseBox title="ภาคเหนือ"/>
                <CollapseBox title="ภาคใต้"/>
                <CollapseBox title="ภาคตะวันออก"/>
                <CollapseBox title="ภาคตะวันออกเฉียงเหนือ"/>
            </div>
        </>
    )
}

export default Home
