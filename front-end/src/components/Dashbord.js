import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Dashbord = () => {
    const [messages, setMessage] = useState([]);
    const [inputValue, setInputValue] = useState({ email: '', date: ''})

    useEffect(() => {
        axios.get('http://localhost:5000/api/getMessage')
        .then(response => {
            const Data = response.data
            // console.log(Data)
          setMessage(Data)
        })
        .catch((error) => {
          console.log(error);
        })  
    }, []);

    const changeValue = (e) => {
        setInputValue({
            [e.target.name] : e.target.value
        })
    }

    const onSubmitForm = (e) => {
        e.preventDefault()
        axios.post("http://localhost:5000/api/searchMessage", inputValue)
        .then(response => {
            // console.log(response);
            const Dataa = response.data
            console.log(Dataa);
            setMessage(Dataa)
        })
        .catch((error) => {
            console.log(error);
        })

    }

    
    return (
        <div>
            <h2 className="mb-5 text-center">List of All <span className="font-weight-bold">MESSAGES</span></h2>
            <form onSubmit={onSubmitForm}>
                <div className="row g-3 align-items-center container">
                    <div className="col-auto">
                        <input type="date" className="form-control col-auto mb-5" name="date" onChange={changeValue}  />
                    </div>
                    <div className="col-auto">
                        <input type="text" className="form-control col-auto mb-5" name="email" onChange={changeValue} />
                    </div>
                    <div className="col-auto">
                        <button className="btn btn-primary mb-5" type="submit">Search</button>
                    </div>
                </div>
                
            </form>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Message</th>
                    </tr>
                </thead>
                <tbody>

                    {messages.map((message, index) => {
                        return <tr key= {index}>
                        <td>{message.username}</td>
                        <td>{message.email}</td>
                        <td>{message.message}</td>
                        <td>
                           <Link to={`/response/${message._id}`} > 
                            <button type="button" className="btn btn-outline-dark">Response</button>
                           </Link>
                        </td>
                    </tr>
                    })}

                    
                </tbody>
            </table>
        </div>
    )
}

export default Dashbord
