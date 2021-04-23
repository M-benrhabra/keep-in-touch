import React, { useState } from 'react';
import axios from 'axios';

const initialState = {email :'' , response :'' }
const Response = () => {
    const [responses, setResponses] = useState(initialState);

    const onChangeValue = (e) => {
        setResponses ({
            ...responses,
            [e.target.name] : e.target.value
        })
    }

    const onSubmitFunc = (e) => {
        e.preventDefault();
        
        axios.post("http://localhost:5000/api/sendresponse", responses)
        
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
            <div className="card border-secondary container" style={{width: "75%"}}>
                <div className="card-header ">
                    Add Contact 
                </div>

                <form onSubmit={onSubmitFunc}>
                    <div className="mb-3 ml-3 mr-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email"  name='email' value={responses.email}  className="form-control" id="email" placeholder="Email..." onChange={onChangeValue} />
                    </div>
                    <div className="mb-3 ml-3 mr-3">
                        <label htmlFor="response" className="form-label ">Response</label>
                        <textarea type="text"  name='response' value={responses.response} className="form-control" id="response" rows="2" placeholder="Message..." onChange={onChangeValue} />
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
