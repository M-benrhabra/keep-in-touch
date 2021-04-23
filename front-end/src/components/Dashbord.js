import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Dashbord = () => {
    const [messages, setMessage] = useState([]);
    const [dateValue, setDateValue] = useState('')

    useEffect(() => {
        axios.get('http://localhost:5000/api/getMessage')
        .then(response => {
            const Data = response.data
            // console.log(response)
          setMessage(Data)
        })
        .catch((error) => {
          console.log(error);
        })  
    }, []);

    const changeDate = (e) => {
        setDateValue(e.target.value)
    }

    const saveDate = (e) => {
        e.preventDefault()
        axios.post("http://localhost:5000/api/messageDate", {dateValue})
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
            <form onSubmit={saveDate}>
                <input type="date" className="form-control mb-5" value={dateValue} onChange={changeDate} style={{ width: '40%' }}/>
                <p>{dateValue}</p>
                <button type="submit">SEND</button>
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
                        <td><button type="button" className="btn btn-outline-dark">Response</button></td>
                    </tr>
                    })}

                    
                </tbody>
            </table>
        </div>
    )
}

export default Dashbord
