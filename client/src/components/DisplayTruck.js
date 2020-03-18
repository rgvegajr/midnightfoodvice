import React, {useState, Fragment} from 'react';
// import {Link} from 'react-router-dom';
import axios from 'axios';
import {ToastContainer, toast} from 'react-toastify';
import {isAuth} from './helpers';
import 'react-toastify/dist/ReactToastify.min.css';

// reactstrap components
import {
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import HomeNavbar from "./HomeNavbar";
import HomePageHeader from "./Headers/HomePageHeader";
import DefaultFooter from "./Footers/DefaultFooter";



// function landingpagetest() {
  // const AddTruck = () => {
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

    // const handleChange = name => event => {
    //     console.log(event.target.value);
    //     setValues({...values, [name]: event.target.value});
    // };
    
    // const clickSubmit = event => {
    //     event.preventDefault(); //keeps page from reload
    //     setValues({...values, buttonText: 'Submitting'});
    //     axios({
    //         method: 'POST',
    //         url: `/api/addtruck`,
    //         // url: `${process.env.REACT_APP_API}/signup`,
    //         data: {name, address, zipcode, hoursMon, hoursTue, hoursWed, hoursThu, hoursFri, hoursSat, hoursSun, 
    //             phone_number, email_address, website_url, image_url, currentLocation, owner, username}
    //     })
    //     .then(response => {
    //         console.log('TRUCK ADD SUCCESS', response);
    //         setValues({...values, 
    //             name: '', 
    //         address: '',
    //         zipcode: '',
    //         hoursMon: '',
    //         hoursTue: '',
    //         hoursWed: '',
    //         hoursThu: '',
    //         hoursFri: '',
    //         hoursSat: '',
    //         hoursSun: '',
    //         phone_number: '',
    //         email_address: '',
    //         website_url: '',
    //         image_url: '',
    //         currentLocation: '',
    //         owner: '',
    //         username: '',  
    //         buttonText: 'Submitted'});
    //         toast.success(response.data.message);
    //     })
    //     .catch(error => {
    //         console.log('TRUCK ADD ERROR', error.response.data);
    //         setValues({...values, buttonText: 'Submit'});
    //         toast.error(error.response.data.error);
    //     })         
    // };

  // const [firstFocus, setFirstFocus] = React.useState(false);
  // const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
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
        {/* <Link to="/">Go back</Link> */}
    </div>
)

  return (
    <Fragment>
      {JSON.stringify(isAuth())}
      <ToastContainer />
      <HomeNavbar />
      <div className="wrapper">
        <HomePageHeader />
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="text-center" md="12">
                <h2 className="title">Food Truck Information Page</h2>
                {truckView()}
                {/* <div class="row"> */}
                  {/* <form class="col s6">
                    <div class="row">
                    <div class="input-field col s6">
                        <label for="textarea1"> Business Name</label>
                        <input className="form-control" type="text" name="name" onChange={handleChange('name')} value={name} placeholder="Truck name"></input>
                        <label for="textarea1">Address</label>
                        <input className="form-control" type="text" name="address" onChange={handleChange('address')} value={address} placeholder="Address"></input>
                        <label for="textarea1">Zip Code</label>
                        <input className="form-control" type="text" name="zipcode" onChange={handleChange('zipcode')} value={zipcode} placeholder="Zipcode"></input>
                        <label for="textarea1">Username</label>
                        <input className="form-control" type="text" name="username" onChange={handleChange('username')} value={username} placeholder="username"></input>
                        <label for="textarea1">Image Url</label>
                        <input className="form-control" type="text" name="image_url" onChange={handleChange('image_url')} value={image_url} placeholder="truck image URL"></input>
                      </div>
                      <div class="input-field col s6">                        
                        <div class="input-field col s6">
                        <label for="textarea1">Owner</label>
                        <input className="form-control" type="text" name="owner" onChange={handleChange('owner')} value={owner} placeholder="owner"></input>
                      </div>
                      <div class="input-field col s3">
                        <label for="textarea1">Website</label>
                        <input className="form-control" type="text" name="website_url" onChange={handleChange('website_url')} value={website_url} placeholder="Website"></input>
                      </div>
                      <div class="input-field col s6">
                        <label for="textarea1">Phone Number</label>
                        <input className="form-control" type="text" name="phone_number" onChange={handleChange('phone_number')} value={phone_number} placeholder="Phone number"></input>
                      </div>
                      <div class="input-field col s6">
                        <label for="textarea1">Email</label>
                        <input className="form-control" type="text" name="email_address" onChange={handleChange('email_address')} value={email_address} placeholder="Email address"></input>
                      </div>
                      <div class="input-field col s6">
                        <label for="textarea1">Current Location</label>
                        <input className="form-control" type="text" name="currentLocation" onChange={handleChange('currentLocation')} value={currentLocation} placeholder="currentLocation"></input>
                      </div>
                      </div>
                    </div>
                  </form> */}
                {/* </div> */}
                {/* <form class="col s12">
                  <div class="row">
                    <div class="input-field col s4"> 
                    <br/>
                    <h4 className="titles">Hours of Operation</h4>                  
                    <label for="textarea1">Monday</label> <br/>
                    <input className="form-control" type="text" name="hoursMon" onChange={handleChange('hoursMon')} value={hoursMon} placeholder="Monday"></input>
                      <label for="textarea1">Tuesday</label> <br/>
                      <input className="form-control" type="text" name="hoursTue" onChange={handleChange('hoursTue')} value={hoursTue} placeholder="Tuesday"></input>
                      <label for="textarea1">Wednesday</label> <br/>
                      <input className="form-control" type="text" name="hoursWed" onChange={handleChange('hoursWed')} value={hoursWed} placeholder="Wednesday"></input>
                      <label for="textarea1">Thursday</label> <br/>
                      <input className="form-control" type="text" name="hoursThu" onChange={handleChange('hoursThu')} value={hoursThu} placeholder="Thursday"></input>
                      <label for="textarea1">Friday</label><br/>
                      <input className="form-control" type="text" name="hoursFri" onChange={handleChange('hoursFri')} value={hoursFri} placeholder="Friday"></input>
                      <label for="textarea1">Saturday</label><br/>
                      <input className="form-control" type="text" name="hoursSat" onChange={handleChange('hoursSat')} value={hoursSat} placeholder="Saturday"></input>
                      <label for="textarea1">Sunday</label><br/>
                      <input className="form-control" type="text" name="hoursSun" onChange={handleChange('hoursSun')} value={hoursSun} placeholder="Sunday"></input>
                     </div>
                  </div>
                  <button type="submit" class="btn btn-info" onClick={clickSubmit}>{buttonText}></button>
                </form> */}
              </Col>
            </Row>
            <a href="/">Go Back</a>
            <div className="separator separator-primary"></div>
          </Container>
        </div>
        <DefaultFooter />
      </div>
      </Fragment>
    );
  }
// };
export default TruckInfo;
