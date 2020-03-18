import React, {useState} from "react";
import { Redirect} from "react-router-dom";
import axios from 'axios';
import {isAuth} from './helpers';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col
} from "reactstrap";

// core components
import HomeNavbar from "./HomeNavbar.js";
import TransparentFooter from "components/Footers/TransparentFooter.js";
const SignupPage = () => {
// function SignupPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("signup-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("signup-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
//from working signup
const [values, setValues] = useState({
  name: '', 
  email: '',
  password: '',
  buttonText: 'Submit'
});

const {name, email, password, buttonText } = values;

const handleChange = name => event => {
  console.log(event.target.value);
  setValues({...values, [name]: event.target.value});
  
};

const clickSubmit = event => {
  event.preventDefault(); //keeps page from reload
  setValues({...values, buttonText: 'Submitting'});
  axios({
      method: 'POST',
      url: `/api/signup`,
      // url: `${process.env.REACT_APP_API}/signup`,
      data: {name, email, password}
  })
  .then(response => {
      console.log('SIGNUP SUCCESS', response);
      setValues({...values, name: '', email: '', password: '', buttonText: 'Submitted'});
      toast.success(response.data.message);
  })
  .catch(error => {
      console.log('SIGNUP ERROR', error.response.data);
      setValues({...values, buttonText: 'Submit'});
      toast.error(error.response.data.error);
  })        
};

  return (
    <>
      <HomeNavbar />
      <div className="homepage-header clear-filter" filter-color="blue">
        <div
          className="homepage-header-image"
          style={{
            backgroundImage: "url(" + require("../assets/img/newVice.jpg") + ")"
          }}
        ></div>
        <div className="content">
          <Container>
          {JSON.stringify(isAuth())}
          <ToastContainer />
        {isAuth() ? <Redirect to="/signup-page"/> : null}
        {JSON.stringify({name, email, password})}
            <Col className="ml-auto mr-auto" md="4">
              <Card className="card-login card-plain">
                <Form action="" className="form" method="">
                  <CardHeader className="text-center">
                      Create Account             
                  </CardHeader>
                  <CardBody>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (firstFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons users_circle-08"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                      onChange={handleChange('name')} value={name}
                      placeholder="Name..."
                      className="form-control"
                        // value="username"
                        // name="username"
                        // placeholder="User Name..."
                        type="text"
                        onFocus={() => setFirstFocus(true)}
                        onBlur={() => setFirstFocus(false)}
                      ></Input>
                    </InputGroup>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (firstFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons ui-1_email-85"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                      onChange={handleChange('email')} value={email} 
                      className="form-control"
                        // value="email"
                        // name="email"
                        placeholder="Email..."
                        type="email"
                        onFocus={() => setFirstFocus(true)}
                        onBlur={() => setFirstFocus(false)}
                      ></Input>
                    </InputGroup>
                    <InputGroup
                      className={
                        "no-border input-lg" +
                        (lastFocus ? " input-group-focus" : "")
                      }
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="now-ui-icons objects_key-25"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                      onChange={handleChange('password')} value={password} 
                      className="form-control"
                        placeholder="Password..."
                        type="password"
                        onFocus={() => setLastFocus(true)}
                        onBlur={() => setLastFocus(false)}
                      ></Input>
                    </InputGroup>
                  </CardBody>
                  <CardFooter className="text-center">

                    <Button
                      block
                      onClick={clickSubmit}
                      className="btn-round"
                      color="info"
                      // href="#pablo"
                      // onClick={e => e.preventDefault()}
                      size="lg"
                    >
                      {buttonText}
                    </Button>
   
                  </CardFooter>
                </Form>
              </Card>
            </Col>
          </Container>
        </div>
        <TransparentFooter />
      </div>
    </>
  );
}

export default SignupPage;
