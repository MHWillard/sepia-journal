import React, { Component, useContext, useState, useEffect } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Nav } from 'reactstrap';
import { Link } from 'react-router-dom';
import { LoginContext } from '../contexts/LoginContext';
import './NavMenu.css';



export default function NavMenu(loginFlag) {
    const displayName = NavMenu.name;
    const [isCollapsed, setCollapsed] = useState(true);
    const [loginToggle, setLoginToggle] = useState(false);
    const loginData = useContext(LoginContext);

    useEffect(() => {
      const toggle = loginData.loginFlag;
      setLoginToggle(toggle);
    }, [loginData.loginFlag]);



    function toggleNavbar() {
        setCollapsed(!isCollapsed);
    }

    function LoginButton(loginFlag) {
        if (loginFlag) {
            return <NavLink active className="text-dark" id="login-button" href="/login">Login</NavLink>
        }
        return null;
    }

    return (
        <header>
      
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" container light>
          <NavbarBrand tag={Link} to="/">sepia_journal</NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!isCollapsed} navbar>
                    <ul className="navbar-nav flex-grow">
                    <Nav fill pills>
                    <LoginContext.Provider value={loginData}>
                            <NavItem>
                            <NavLink active className="text-dark" id="login-button" href="/login">Login</NavLink>
                            </NavItem>
                    </LoginContext.Provider>
                        </Nav>
                    
            </ul>
          </Collapse>
        </Navbar>
      </header>
    );

}

/*

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" container light>
          <NavbarBrand tag={Link} to="/">sepia_journal</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                    <ul className="navbar-nav flex-grow">
                    <Nav fill pills>
                        <NavItem>
                                <NavLink active className="text-dark" id="login-button" href="/login">Login</NavLink>
                        </NavItem>
                        </Nav>
            </ul>
          </Collapse>
        </Navbar>
      </header>
    );
  }
}
*/
