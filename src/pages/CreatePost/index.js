import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Header from '../../components/Header'
import dateFormat from "dateformat"

function Create() {
    const [optionProvince, setOptionProvince] = useState([]);
    const [optionType, setOptionType] = useState([]);
    const history = useHistory();

    const getProvince = async () => {
        await axios.get("http://localhost:3001/api/province").then(res => {
            setOptionProvince(res.data)
        })
    }
    const getType = async () => {
        await axios.get("http://localhost:3001/api/attraction_type").then(res => {
            setOptionType(res.data)
        })
    }

    useEffect(() => {
        getProvince()
        getType()
    }, [])

    const [Name, setName] = useState("");
    const [ProvinceID, setProvinceID] = useState(null);
    const [AttractionTypeID, setAttractionTypeID] = useState(null);
    const [ImageURL, setImageURL] = useState("");
    const [Description, setDescription] = useState("");

    const formatDate = () => {
        let now = new Date()
        now = dateFormat(now, "yyyy-mm-dd HH:MM:ss")
        return now
    }

    const addData = async () => {
        const data = {
            Name: Name,
            ProvinceID: ProvinceID,
            AttractionTypeID: AttractionTypeID,
            ImageURL: ImageURL,
            Description: Description,
            Created: formatDate(),
            Modified: formatDate()
        }

        await axios.post("http://localhost:3001/api/create", data).then(() => {
            console.log("Add Successful")
            history.push("/")
        })
    }

    const onChangeName = (e) => {
        setName(e.target.value)
    }

    const onChangeProvinceID = (e) => {
        setProvinceID(e.target.value)   
    }

    const onChangeAttractionTypeID = (e) => {
        setAttractionTypeID(e.target.value)  
        
    }

    const onChangeImageURL = (e) => {
        setImageURL(e.target.value)   
    }

    const onChangeDescription = (e) => {
        setDescription(e.target.value)   
    }

    const form = (e) => {
        e.preventDefault()
    }
    return (
        <>
            <Header title="เพิ่มข้อมูล"/>
            <div className="w-full flex justify-center mt-10 mb-10">
                <form className="w-5/6 grid grid-cols-1 justify-center gap-y-10" onSubmit={form}>
                    <h1>Add Page Title</h1>
                    <div>
                        <label><h2>Province :</h2></label>
                        <select className="select select-bordered w-full col-span-full mt-2" name="ProvinceID" onChange={onChangeProvinceID} defaultValue="-- Please select --">
                            <option disabled="disabled">-- Please select --</option> 
                            {optionProvince && (
                                optionProvince.map(data => {
                                    return <option value={data.ID} key={data.ID}>{data.Name}</option> 
                                })
                            )}
                        </select>
                    </div>
                    <div>
                        <label><h2>Type :</h2></label>
                        <select className="select select-bordered w-full col-span-full mt-2" name="AttractionTypeID" onChange={onChangeAttractionTypeID} defaultValue="-- Please select --">
                            <option disabled="disabled">-- Please select --</option> 
                            {optionType && (
                                optionType.map(data => {
                                    return <option value={data.ID} key={data.ID}>{data.Name}</option> 
                                })
                            )}
                        </select>
                    </div>
                    <div>
                        <label><h2>Name :</h2></label>
                        <input type="text" className="input input-bordered w-full mt-2" name="Name" onChange={onChangeName}/>
                    </div>
                    <div>
                        <label><h2>Description :</h2></label>
                        <textarea className="textarea h-24 textarea-bordered w-full mt-2" name="Description" onChange={onChangeDescription}/>
                    </div>
                    <div>
                        <label><h2>Image Url :</h2></label>
                        <input type="text" className="input input-bordered w-full mt-2" name="ImageURL" onChange={onChangeImageURL}/>
                    </div>
                    <div className="flex justify-center">
                        <button className="btn btn-success mr-5" onClick={addData}>Add</button> 
                        <Link to="/">
                            <button className="btn btn-warning">Back</button> 
                        </Link>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Create
