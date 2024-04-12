import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const Update = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [updateData, setUpdateData] = useState({
        name: "",
        email: ""
    })

    useEffect(() => {
        const fetchData = () => {
            try {
                axios.get(`https://6617c9eded6b8fa43483c99a.mockapi.io/crud-operation-in-react/${id}`).then((response) => {
                    setUpdateData(response.data)
                })
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [id])

    const handleChange = (e) => {
        setUpdateData({ ...updateData, [e.target.name]: e.target.value })
    }

    const handleUpdate = async(e) => {
        e.preventDefault()
        try {
            await axios.put(`https://6617c9eded6b8fa43483c99a.mockapi.io/crud-operation-in-react/${id}`, updateData)
            navigate('/read')
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name='name'
                        value={updateData.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input name='email' type="email" value={updateData.email} onChange={handleChange} className="form-control" />

                </div>

                <button type="submit" className="btn btn-primary" onClick={handleUpdate}>Update</button>
            </form>
        </div>
    )
}

export default Update
