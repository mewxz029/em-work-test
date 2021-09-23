import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { Link,  useParams, useHistory} from 'react-router-dom'
import Header from '../../components/Header'
import dateFormat from "dateformat"

function Edit() {
    const { id } = useParams();
    const history = useHistory();
    // console.log(id)
    const [Name, setName] = useState("");
    const [ProvinceID, setProvinceID] = useState(null);
    const [AttractionTypeID, setAttractionTypeID] = useState(null);
    const [ImageURL, setImageURL] = useState("");
    const [Description, setDescription] = useState("");
    const [optionProvince, setOptionProvince] = useState([]);
    const [optionType, setOptionType] = useState([]);
    const formRef = useRef();

    useEffect(() => {
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

        const getData = async () => {
            await axios.get(`http://localhost:3001/api/attraction/${id}`).then((res) => {
            // console.log(res.data[0].Name)
                setName(res.data[0].Name)
                setProvinceID(res.data[0].ProvinceID)
                setAttractionTypeID(res.data[0].AttractionTypeID)
                setImageURL(res.data[0].ImageURL)
                setDescription(res.data[0].Description)
            })
        }
        
        getProvince();
        getType();
        getData();
    }, [id])

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

    const data = {
        ID: id,
        Name: Name,
        ProvinceID: ProvinceID,
        AttractionTypeID: AttractionTypeID,
        ImageURL: ImageURL,
        Description: Description,
        Modified: dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss")
    }
    
    const updateData = async () => {
        await axios.put("http://localhost:3001/api/update", data).then((res) => {
            history.push("/")
            console.log("Update Successful")
        })
    }
    
    const deleteData = async () => {
        await axios.delete(`http://localhost:3001/api/delete/${id}`).then((res) => {
            history.push("/")
            console.log("Delete Successful")
        })
    }



    const form = (e) => {
        e.preventDefault()
    }
    return (
        <>
            <Header title="แก้ไขข้อมูล"/>
            <div className="w-full flex justify-center mt-10 mb-10">
                <form className="w-5/6 grid grid-cols-1 justify-center gap-y-10" onClick={form} ref={formRef}>
                    <h1>Update Page Title</h1>
                    <div>
                        <label><h2>Province :</h2></label>
                        <select className="select select-bordered w-full col-span-full mt-2" onChange={onChangeProvinceID} defaultValue={ProvinceID}>
                            {optionProvince && (
                                optionProvince.map(data => {
                                    if (data.ID === ProvinceID) {
                                        return <option value={data.ID} key={data.ID} selected="selected">{data.Name}</option> 
                                    } else {
                                        return <option value={data.ID} key={data.ID} >{data.Name}</option>
                                    }
                                })
                            )}
                        </select>
                    </div>
                    <div>
                        <label><h2>Type :</h2></label>
                        <select className="select select-bordered w-full col-span-full mt-2" onChange={onChangeAttractionTypeID} defaultValue={AttractionTypeID}>
                            {optionType && (
                                optionType.map(data => {
                                    if (data.ID === AttractionTypeID) {
                                        return <option value={data.ID} key={data.ID} selected="selected">{data.Name}</option> 
                                    } else {
                                        return <option value={data.ID} key={data.ID} >{data.Name}</option>
                                    }
                                })
                            )}
                        </select>
                    </div>
                    <div>
                        <label><h2>Name :</h2></label>
                        <input type="text" className="input input-bordered w-full mt-2" value={Name} onChange={onChangeName}/>
                    </div>
                    <div>
                        <label><h2>Description :</h2></label>
                        <textarea className="textarea h-24 textarea-bordered w-full mt-2" value={Description} onChange={onChangeDescription}/>
                    </div>
                    <div>
                        <label><h2>Image Url :</h2></label>
                        <input type="text" className="input input-bordered w-full mt-2" value={ImageURL} onChange={onChangeImageURL}/>
                    </div>
                    <div className="flex justify-center">
                        <button className="btn btn-success mr-5" onClick={updateData}>Update</button> 
                        <button className="btn btn-error mr-5" onClick={deleteData}>Delete</button>
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
