import React, {Fragment} from "react";
import { Link, withRouter} from "react-router-dom";
import {isAuth, signout} from './helpers';

// reactstrap components
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip
} from "reactstrap";
//revert to no params if doesnt work
function HomeNavbar({children, match, history }) {
  //remove if required
  const isActive = path => {
    if(match.path === path) {
        return { color: '#fff'};
    } else {
        return { color: '#fff'};
    }
  };

  //
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > 399 ||
        document.body.scrollTop > 399
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < 400 ||
        document.body.scrollTop < 400
      ) {
        setNavbarColor("navbar-transparent");
      }
    };
    window.addEventListener("scroll", updateNavbarColor);
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className={"fixed-top " + navbarColor} color="info" expand="lg">
        <Container>
          
          <div className="navbar-translate">
            <NavbarBrand
              href="https://demos.creative-tim.com/now-ui-kit-react/index?ref=nukr-examples-navbar"
              target="_blank"
              id="navbar-brand"
            >
              
            </NavbarBrand>
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
            <NavItem> 
                <NavLink to="/" tag={Link} style={isActive("/")}>
                <i className="now-ui-icons shopping_shop"></i>Home
                </NavLink>
              </NavItem>
                {!isAuth() && (
              <Fragment>
              <NavItem>                
                <NavLink to="/signup-page" tag={Link} style={isActive("/signup-page")}>
                <i className="now-ui-icons shopping_shop"></i>Signup
                </NavLink>
              </NavItem>
              <NavItem>             
                <NavLink to="/login-page" tag={Link} style={isActive("/signin-page")}>
                <i className="now-ui-icons users_circle-08"></i>Login
                </NavLink>
              </NavItem>
              </Fragment>
              )}
              <NavItem>             
                <NavLink  tag={Link} to="/truckinfo/:id" className="nav-link" style={isActive("/truckinfo/:id")}>
                <i className="now-ui-icons users_circle-08"></i>Truck Info
                </NavLink>
              </NavItem>
              {isAuth() && (
                <Fragment>
              <NavItem>
                <p className="nav-item">
                    <span 
                        className="nav-link">Signed in as: {isAuth().name}
                    </span>
                </p>
              </NavItem>
              <NavItem>             
                 <NavLink to="/addTruck" tag={Link} style={isActive("/addtruck")}>
                 <i className="now-ui-icons users_circle-08"></i>Add a truck
                 </NavLink>
              </NavItem>
              </Fragment>
            )}
            {isAuth() && (
            <NavItem>
                <p className="nav-item">
                <span 
                        className="nav-link"
                        style={{cursor : 'pointer', color: '#fff'}}  
                        onClick={() => {
                        signout(() => {
                            history.push('/')
                        });
                    }}>
                        Signout
                    </span>
                </p>
            </NavItem>
            )}
            <NavItem>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="login-page"
                  nav
                  onClick={e => e.preventDefault()}
                >
                  <i className="now-ui-icons gestures_tap-01 mr-1"></i>
                  <p>Dark Mode</p>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem to="/login-page" tag={Link}>
                    <i className="now-ui-icons objects_spaceship mr-1"></i>
                    Activate
                  </DropdownItem>
                  
                </DropdownMenu>
              </UncontrolledDropdown>
        
              </NavItem>
              <NavItem>
                <NavLink
                  href="https://www.instagram.com/midnightfoodvice/"
                  target="_blank"
                  id="instagram-tooltip"
                >
                  
                  <i className="fab fa-instagram"></i>
                  <p className="d-lg-none d-xl-none">Instagram</p>
                </NavLink>
                <UncontrolledTooltip target="#instagram-tooltip">
                  Follow us on Instagram
                </UncontrolledTooltip>
              </NavItem>
              
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default withRouter(HomeNavbar);
