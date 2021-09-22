import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'

function Edit() {
    const form = (e) => {
        e.preventDefault()
    }
    return (
        <>
            <Header title="แก้ไขข้อมูล"/>
            <div className="w-full flex justify-center mt-10 mb-10">
                <form className="w-5/6 grid grid-cols-1 justify-center gap-y-10" onClick={form}>
                    <h1>Add Page Title</h1>
                    <div>
                        <label><h2>Province :</h2></label>
                        <select className="select select-bordered w-full col-span-full mt-2">
                            <option disabled="disabled" selected="selected">-- Please select --</option> 
                            <option>telekinesis</option> 
                            <option>time travel</option> 
                            <option>invisibility</option>
                        </select>
                    </div>
                    <div>
                        <label><h2>Type :</h2></label>
                        <select className="select select-bordered w-full col-span-full mt-2">
                            <option disabled="disabled" selected="selected">-- Please select --</option> 
                            <option>telekinesis</option> 
                            <option>time travel</option> 
                            <option>invisibility</option>
                        </select>
                    </div>
                    <div>
                        <label><h2>Name :</h2></label>
                        <input type="text" className="input input-bordered w-full mt-2"/>
                    </div>
                    <div>
                        <label><h2>Description :</h2></label>
                        <textarea className="textarea h-24 textarea-bordered w-full mt-2" />
                    </div>
                    <div>
                        <label><h2>Image Url :</h2></label>
                        <input type="text" className="input input-bordered w-full mt-2"/>
                    </div>
                    <div className="flex justify-center">
                        <button className="btn btn-success mr-5">Update</button> 
                        <button className="btn btn-error mr-5">Delete</button>
                        <Link to="/">
                            <button className="btn btn-warning">Back</button> 
                        </Link> 
                    </div>
                </form>
            </div>
        </>
    )
}

export default Edit
