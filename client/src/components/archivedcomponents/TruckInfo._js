import React, {useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import Layout from './Layout';
import axios from 'axios';
import {ToastContainer, toast} from 'react-toastify';
import {authenticate, isAuth} from './helpers';
import 'react-toastify/dist/ReactToastify.min.css';

    const TruckInfo = ({history}) => {
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
            id: '5e701ad394e3c7149fa374e5'
        });    

        const {name, address, zipcode, hoursMon, hoursTue, hoursWed, hoursThu, hoursFri, hoursSat, hoursSun, 
            phone_number, email_address, website_url, image_url, currentLocation, owner, username, 
            id } = values;
        
        const searchUrl = '/api/truckinfo/' + id;

        axios({
            method: 'GET',
            url: searchUrl
        })
        .then(response => {
            console.log('TRUCK READ SUCCESS', response);
            const {name, address, zipcode, hoursMon, hoursTue, hoursWed, hoursThu, hoursFri, hoursSat, hoursSun, 
                phone_number, email_address, website_url, image_url, currentLocation, owner, username, 
                id } = response.data;
            setValues({...values, name, address, zipcode, hoursMon, hoursTue, hoursWed, hoursThu, hoursFri, hoursSat, hoursSun, 
            phone_number, email_address, website_url, image_url, currentLocation, owner, username, 
            id});
            toast.success(response.data.message);
        })
        .catch(error => {
            console.log('TRUCK READ ERROR', error.response.data);
            // toast.error(error.response.data.error);
        });  
        
        const truckView = () => (
        <div className="container">
            <div className="row">
                <p className="">Truck name:  {name}</p>
            </div>
            <div className="row">
                <p className="" >Address:  {address}</p>
            </div>
            <div className="row">
                <p className="">Zipcode:  {zipcode}</p>
            </div>
            <div className="row">
                <p className=""> Monday:  {hoursMon}</p>
                <p className=""> Tuesday:  {hoursTue}</p>
                <p className=""> Wednesday:  {hoursWed}</p>
                <p className=""> Thursday:  {hoursThu}</p>
                <p className=""> Friday:  {hoursFri}</p>
                <p className=""> Saturday:  {hoursSat}</p>
                <p className=""> Sunday:  {hoursSun}</p>
            </div>
            <div className="row">
            <p className=""> Phone number:  {phone_number} </p>
            </div>
            <div className="row">
            <p className="">Email:  {email_address} </p>
            </div>
            <div className="row">
            <p className="">Website: <a href={website_url}>{website_url}</a></p>
            </div>
            <div className="row">
            <p className="">Image url:  {image_url} </p>
            </div>
            <div className="row">
            <p className="">Current Location  {currentLocation} </p>
            </div>
            <div className="row">
            <p className="">Username  {username} </p>
            </div>
            <div className="row">
            <p className="">Owner  {owner} </p>
            </div>
            <Link to="/">Go back</Link>
        </div>
    )

  return (
    <Layout>
        {JSON.stringify(isAuth())}
        <ToastContainer />
        <h1>Truck Information Page</h1>
        {truckView()}
    </Layout>
    )
};

export default TruckInfo;