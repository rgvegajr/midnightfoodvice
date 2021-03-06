import React, {useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import Layout from './archivedcomponents/Layout';
import axios from 'axios';
import {authenticate, isAuth} from './helpers';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';


const Signin = () => {
    const [values, setValues] = useState({
        email: '',
        password: '',
        buttonText: 'Submit'
    });
    
    const {email, password, buttonText } = values;
    
    const handleChange = name => event => {
        console.log(event.target.value);
        setValues({...values, [name]: event.target.value});
        
    };
    
    const clickSubmit = event => {
        event.preventDefault(); //keeps page from reload
        setValues({...values, buttonText: 'Submitting'});
        axios({
            method: 'POST',
            url: `/api/signin`,
            data: {email, password}
        })
        .then(response => {
            console.log('SIGNIN SUCCESS', response);
            authenticate(response, () => {
            //save the response (user, token) to localstorage/cookie
                setValues({...values, name: '', email: '', password: '', buttonText: 'Submitted'});
                toast.success(`Welcome back to midnight food vice ${response.data.user.name}!`);                
            });
        })
        .catch(error => {
            console.log('SIGNIN ERROR', error.response.data);
            setValues({...values, buttonText: 'Submit'});
            toast.error(error.response.data.error);
        });
    };
    
    const signinForm = () => (
        <form>            
            <div className="form-group">
            <label className="text-muted">Email</label>
            <input onChange={handleChange('email')} value={email} type="email" className="form-control"/>
            </div>
            
            <div className="form-group">
            <label className="text-muted">Password</label>
            <input onChange={handleChange('password')} value={password} type="password" className="form-control"/>
            </div>
            
            <div>
            <button className="btn btn-primary" onClick={clickSubmit}>{buttonText}</button>
            </div>
        </form>
        );
    return (
    <Layout>
        {JSON.stringify(isAuth())}
        <div className="col-md-6 offset-md-3">
        <ToastContainer />
        {isAuth() ? <Redirect to="/AddTruck"/> : null}
        {JSON.stringify({email, password})}
        <h1 className="p-5 text-center">Signin</h1>
        {signinForm()}
        </div>
    </Layout>
    );
};

export default Signin;