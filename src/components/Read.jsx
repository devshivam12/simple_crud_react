import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Read = () => {
  const [readData, setReadData] = useState([])

  const fetchReadData = async () => {
    try {
      const response = await axios.get("https://6617c9eded6b8fa43483c99a.mockapi.io/crud-operation-in-react")
      setReadData(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleClick = (id) => {
    axios.delete(`https://6617c9eded6b8fa43483c99a.mockapi.io/crud-operation-in-react/${id}`).then(() => {
      fetchReadData()
      alert("deleted succusessfully")
    })
  }

  useEffect(() => {
    fetchReadData()
  }, [])

  return (

    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className='d-flex '>
          <h2>Read operation</h2>
          <Link to='/'>
            <button className='btn btn-success '>Add data</button>
          </Link>
        </div>
        <div className="col">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>

              {readData.map((data, index) => (
                <tr key={index}>
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>
                    <Link to={`/update/${data.id}`}>
                      <button type="button" className="btn btn-success me-2">Edit</button>
                    </Link>
                    <button type="button" className="btn btn-danger" onClick={() => handleClick(data.id)}>Delete</button>
                  </td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Read;
