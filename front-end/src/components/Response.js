import React, {useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';

const Response = (props) => {
    const {id } = useParams()
    const initialState = {email :'' , response :'' }
    const [responses, setResponses] = useState(initialState)
    const [infos, setInfos] = useState([])
    
    

    useEffect(() => {
        console.log(id);
        axios.get(`http://localhost:5000/api/userInfos/${id}`)
        .then(response => {
            const Data = response.data
             console.log(Data)
          setInfos(Data)
        })
        .catch((error) => {
          console.log(error);
        })  
    }, [id]);

    // console.log(infos);

    const onChangeValue = (e) => {
        setResponses ({
            ...responses,
            [e.target.name] : e.target.value
        })
    }

    const onSubmitFunc = (e) => {
        e.preventDefault();
        
        axios.post(`http://localhost:5000/api/sendresponse/${id}`, responses)
        
        console.log(responses);
        
        setResponses({
            email: '',
            message: '',
        });
    
        // console.log(`the Email is ${email} and the response is ${response}`);
    }
    
    return (
        <>
            <h2 className='text-center mb-5'>  Send <span className="font-weight-bold ">RESPONSE</span> </h2>
            <div className="card border-secondary container" style={{width: "80%"}}>
                <div className="card-header ">
                    Add Contact 
                </div>
               
                    <h5 className="card-title mt-3">Username : {infos.username} </h5>
                    <p className="card-text">Email : {infos.email} </p>
                    <p className="card-text">Phone : {infos.phone} </p>
                    <p className="card-text">Message : {infos.message} </p>
                
                

                <form onSubmit={onSubmitFunc}>
                  
                    <div className="mb-3 ml-3 mr-3">
                        <label htmlFor="response" className="form-label ">Response</label>
                        <textarea type="text"  name='response'  className="form-control" id="response" rows="2" placeholder="Message..." onChange={onChangeValue} />
                    </div>
                    <hr/>
                    
                    <button  className="btn btn-light float-right mb-3 mr-3 ">
                     Send Response </button>
                </form>

            </div>
        </>
    )
}

export default Response
