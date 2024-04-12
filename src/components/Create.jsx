import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const Create = () => {

    const navigate = useNavigate()
    const [createData, setCreateData] = useState({
        name: "",
        email: ""
      })
    
      const handleChange = (e) => {
    
        setCreateData({ ...createData, [e.target.name]: e.target.value })
      }

    const handleClick = (e) => {
        e.preventDefault()
        axios.post("https://6617c9eded6b8fa43483c99a.mockapi.io/crud-operation-in-react", createData)
            .then((resolve) => {
                console.log(resolve)
                navigate('/read')
            })
        alert(`name : ${createData.name} && email : ${createData.email}`)
       
    }

    return (
        <>
            <form>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name='name'
                        value={createData.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input name='email' type="email" value={createData.email} onChange={handleChange} className="form-control" />

                </div>

                <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
            </form>
        </>
    )
}

export default Create
