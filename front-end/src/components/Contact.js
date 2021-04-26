import React, {useState} from 'react';
import axios from 'axios'
import { FaMapMarkedAlt,FaPhoneAlt, FaMailBulk } from 'react-icons/fa';



const Contact = (props) => {
    const initialState ={ username: '', email: '', phone: '', message: '' };
    const [form, setForm] = useState(initialState);

    const changeValue = (e) => {
        setForm({
            ...form,
            [e.target.name] : e.target.value
        })
    }

    const handlOnSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:5000/api/addMessage', form)
        // .then(
        //     res => console.log(res.form)
        //     );
        // console.log(form);
        if(form){
            props.history.push('/dashboard')
        }
       

        // setForm({ username: '', email: '', phone: '', message: ''})
    }

    return (
        <div className="mb-4">
             <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
            <p className="text-center w-responsive mx-auto mb-5">
                Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                a matter of hours to help you.
            </p>

            <div className=" row mx-5" style= {{width : '80%'}}>
          
                <div className="col-md-9 mb-md-0 mb-5 ">
                    <form id="contact-form" name="contact-form" onSubmit = {handlOnSubmit}>

                        
                        <div className="row">
                            <div className="col-md-6">
                                <div className="md-form mb-0">
                                    <input type="text" id="name" name="username"  className="form-control" onChange= {changeValue} />
                                    <label htmlFor="name" className="">Your name</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="md-form mb-0">
                                    <input  type="text" id="email" name="email" className="form-control" onChange= {changeValue} />
                                    <label htmlFor="email" className="">Your email</label>
                                </div>
                            </div>

                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className="md-form mb-0">
                                    <input  type="text" id="phone" name="phone" className="form-control" onChange= {changeValue} />
                                    <label htmlFor="phone" className="">Your Phone</label>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">

                                <div className="md-form">
                                    <textarea  type="text" id="message" name="message" rows="2"  className="form-control md-textarea" onChange= {changeValue}></textarea>
                                    <label htmlFor="message">Your message</label>
                                </div>

                            </div>
                        </div>
                        <button type='submit' className="btn btn-primary text-center text-md-left">
                            Send
                        </button>

                    </form>

                    <div className="status"></div>
                </div>
                <div className="col-md-3 text-center">
                    <ul className="list-unstyled mb-0">
                        <li> <FaMapMarkedAlt />
                            <p>San Francisco, CA 94126, USA</p>
                        </li>

                        <li> <FaPhoneAlt />
                            <p>+ 01 234 567 89</p>
                        </li>

                        <li> <FaMailBulk />
                            <p>contact@mdbootstrap.com</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default Contact
