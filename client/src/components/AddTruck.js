import React, {useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import Layout from './Layout';
import axios from 'axios';
import {ToastContainer, toast} from 'react-toastify';
import {authenticate, isAuth} from './helpers';
import 'react-toastify/dist/ReactToastify.min.css';

const AddTruck = () => {
    const [values, setValues] = useState({
        name: '', 
        address: '',
        zipcode: '',
        hoursMon: '',
        hoursTue: '',
        hoursWed: '',
        hoursThu: '',
        hoursFri: '',
        hoursSat: '',
        hoursSun: '',
        phone_number: '',
        email_address: '',
        website_url: '',
        image_url: '',
        currentLocation: '',
        owner: '',
        username: '', 
        buttonText: 'Submit'
    });
    
    const {name, address, zipcode, hoursMon, hoursTue, hoursWed, hoursThu, hoursFri, hoursSat, hoursSun, 
            phone_number, email_address, website_url, image_url, currentLocation, owner, username, 
            buttonText } = values;
    
    const handleChange = name => event => {
        console.log(event.target.value);
        setValues({...values, [name]: event.target.value});
    };
    
    const clickSubmit = event => {
        event.preventDefault(); //keeps page from reload
        setValues({...values, buttonText: 'Submitting'});
        axios({
            method: 'POST',
            url: `/api/truck`,
            // url: `${process.env.REACT_APP_API}/signup`,
            data: {name, address, zipcode, hoursMon, hoursTue, hoursWed, hoursThu, hoursFri, hoursSat, hoursSun, 
                phone_number, email_address, website_url, image_url, currentLocation, owner, username}
        })
        .then(response => {
            console.log('TRUCK ADD SUCCESS', response);
            setValues({...values, 
                name: '', 
            address: '',
            zipcode: '',
            hoursMon: '',
            hoursTue: '',
            hoursWed: '',
            hoursThu: '',
            hoursFri: '',
            hoursSat: '',
            hoursSun: '',
            phone_number: '',
            email_address: '',
            website_url: '',
            image_url: '',
            currentLocation: '',
            owner: '',
            username: '',  
            buttonText: 'Submitted'});
            toast.success(response.data.message);
        })
        .catch(error => {
            console.log('TRUCK ADD ERROR', error.response.data);
            setValues({...values, buttonText: 'Submit'});
            toast.error(error.response.data.error);
        })         
    };
    
    const truckForm = () => (
            <form>
                <div className="form-group">
                    <input className="form-control" type="text" name="name" onChange={handleChange('name')} value={name} placeholder="Truck name"></input>
                </div>
                <div className="form-group">
                    <input className="form-control" type="text" name="address" onChange={handleChange('address')} value={address} placeholder="Address"></input>
                </div>
                <div className="form-group">
                    <input className="form-control" type="text" name="zipcode" onChange={handleChange('zipcode')} value={zipcode} placeholder="Zipcode"></input>
                </div>
                <div className="form-group">
                    <label for="hours">Hours</label>
                    <input className="form-control" type="text" name="hoursMon" onChange={handleChange('hoursMon')} value={hoursMon} placeholder="Monday"></input>
                    <input className="form-control" type="text" name="hoursTue" onChange={handleChange('hoursTue')} value={hoursTue} placeholder="Tuesday"></input>
                    <input className="form-control" type="text" name="hoursWed" onChange={handleChange('hoursWed')} value={hoursWed} placeholder="Wednesday"></input>
                    <input className="form-control" type="text" name="hoursThu" onChange={handleChange('hoursThu')} value={hoursThu} placeholder="Thursday"></input>
                    <input className="form-control" type="text" name="hoursFri" onChange={handleChange('hoursFri')} value={hoursFri} placeholder="Friday"></input>
                    <input className="form-control" type="text" name="hoursSat" onChange={handleChange('hoursSat')} value={hoursSat} placeholder="Saturday"></input>
                    <input className="form-control" type="text" name="hoursSun" onChange={handleChange('hoursSun')} value={hoursSun} placeholder="Sunday"></input>
                </div>
                <div className="form-group">
                    <input className="form-control" type="text" name="phone_number" onChange={handleChange('phone_number')} value={phone_number} placeholder="Phone number"></input>
                </div>
                <div className="form-group">
                    <input className="form-control" type="text" name="email_address" onChange={handleChange('email_address')} value={email_address} placeholder="Email address"></input>
                </div>
                <div className="form-group">
                    <input className="form-control" type="text" name="website_url" onChange={handleChange('website_url')} value={website_url} placeholder="Website"></input>
                </div>
                <div className="form-group">
                    <input className="form-control" type="text" name="image_url" onChange={handleChange('image_url')} value={image_url} placeholder="truck image URL"></input>
                </div>
                <div className="form-group">
                    <input className="form-control" type="text" name="currentLocation" onChange={handleChange('currentLocation')} value={currentLocation} placeholder="currentLocation"></input>
                </div>
                <div className="form-group">
                    <input className="form-control" type="text" name="username" onChange={handleChange('username')} value={username} placeholder="username"></input>
                </div>
                <div className="form-group">
                    <input className="form-control" type="text" name="owner" onChange={handleChange('owner')} value={owner} placeholder="owner"></input>
                </div>
                <div className="form-group">
                    <button className="btn btn-lg btn-primary btn-block" onClick={clickSubmit}>{buttonText}</button>
                </div>
                <Link to="/">Go back</Link>
            </form>
    )
    
  return (
    <Layout>
        {JSON.stringify(isAuth())}
        <ToastContainer />
        <h1>Add Truck Information Page</h1>
        {truckForm()}
    </Layout>
    )
};

export default AddTruck;