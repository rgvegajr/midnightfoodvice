import React, {useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import Layout from '../Layout';
import axios from 'axios';
import {ToastContainer, toast} from 'react-toastify';
import {authenticate, isAuth} from '../helpers';
import 'react-toastify/dist/ReactToastify.min.css';

//in udemy this is the Private page
const Owner = () => {
    const [values, setValues] = useState({
        name: "", 
        address: "",
        zipcode: "",
        hours: {
            mon: "",
            tue: "",
            wed: "",
            thu: "",
            fri: "",
            sat: "",
            sun: ""
            },
        phone_number: "",
        email_address: '',
        website_url: "",
        image_url: "",
        currentLocation: "",
        owner: "", 
        buttonText: 'Submit'
    });
    
    const {name, address, zipcode, hours, 
            phone_number, email_address, website_url, image_url, currentLocation, owner,  
            buttonText } = values;
    
    const handleChange = name => event => {
        //event.target.value
        
    };
    
    const clickSubmit = event => {
        //event.target.value
        
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
                    <input className="form-control" type="text" name="zipcode" onChange={handleChange('zipcode')} value={name} placeholder="Zipcode"></input>
                </div>
                <div className="form-group">
                    <label for="hours">Hours</label>
                    <input className="form-control" type="text" name="hours.Mon" onChange={handleChange('hours.mon')} value={hours.mon} placeholder="Monday"></input>
                    <input className="form-control" type="text" name="hours.Tue" onChange={handleChange('hours.tue')} value={hours.tue} placeholder="Tuesday"></input>
                    <input className="form-control" type="text" name="hours.Wed" onChange={handleChange('hours.wed')} value={hours.wed} placeholder="Wednesday"></input>
                    <input className="form-control" type="text" name="hours.Thu" onChange={handleChange('hours.thu')} value={hours.thu} placeholder="Thursday"></input>
                    <input className="form-control" type="text" name="hours.Fri" onChange={handleChange('name.fri')} value={hours.fri} placeholder="Friday"></input>
                    <input className="form-control" type="text" name="hours.Sat" onChange={handleChange('name.sat')} value={hours.sat} placeholder="Saturday"></input>
                    <input className="form-control" type="text" name="hours.Sun" onChange={handleChange('name.sun')} value={hours.sun} placeholder="Sunday"></input>
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
        <ToastContainer />
        {JSON.stringify(isAuth())}
        {/* <h1 style="text-align: center">Truck Information Page</h1> */}
        <h1>Truck Owner Information Page</h1>

        {truckForm()}
    </Layout>
    )
};

export default Owner;