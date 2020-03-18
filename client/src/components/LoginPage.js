import React, {useState} from 'react';
import {Link, Redirect} from 'react-router-dom';
import Layout from './Layout';
import axios from 'axios';
import {authenticate, isAuth} from './helpers';
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
  Col, 
  NavLink
} from "reactstrap";

// core components
import HomeNavbar from "./HomeNavbar.js";
// import TransparentFooter from "components/Footers/TransparentFooter.js";

// function LoginPage() {
  const LoginPage =() => {
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

  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("login-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("login-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
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
        {isAuth() ? <Redirect to="/AddTruck"/> : null}
        {JSON.stringify({email, password})}
            <Col className="ml-auto mr-auto" md="4">
              <Card className="card-login card-plain">
                <Form action="" className="form" method="">
                  <CardHeader className="text-center">
                  Sign In                  
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
                      onChange={handleChange('email')} value={email} 
                      type="email" 
                      className="form-control"
                        placeholder="Email..."
                        // type="text"
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
                      type="password" 
                      className="form-control"
                        placeholder="Password..."
                        onFocus={() => setLastFocus(true)}
                        onBlur={() => setLastFocus(false)}
                      ></Input>
                    </InputGroup>
                  </CardBody>
                  <CardFooter className="text-center">
                    <Button
                      block
                      className="btn-round"
                      color="info"
                      onClick={clickSubmit}
                      // href="#pablo"
                      // onClick={e => e.preventDefault()}
                      size="lg"
                    >{buttonText}

                    </Button>
                    {/* <div className="pull-left">
                      <h6>
                      <NavLink to="/signup-page" tag={Link}>
                <i className="now-ui-icons users_circle-08"></i>Signup!
                </NavLink>
                        <a
                          className="link"
                          href="/signup-page"
                          onClick={e => e.preventDefault()}
                        >
                          Create Account
                        </a>
                      </h6>
                    </div>
                    <div className="pull-right">
                      <h6>
                        <a
                          className="link"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Need Help?
                        </a>
                      </h6>
                    </div> */}
                  </CardFooter>
                </Form>
              </Card>
            </Col>
          </Container>
        </div>
        {/* <TransparentFooter /> */}
      </div>
    </>
  );
}

export default LoginPage;
