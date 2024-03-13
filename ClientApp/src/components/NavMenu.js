import React, { Component, useContext, useState, useEffect } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Nav } from 'reactstrap';
import { Link } from 'react-router-dom';
import { TokenContext } from '../contexts/TokenContext.js'
import './NavMenu.css';

export default function NavMenu() {
    const displayName = NavMenu.name;
    const [isCollapsed, setCollapsed] = useState(true);
    const [loginFlag, setLoginFlag] = useState(false);
    const tokenContext = useContext(TokenContext);

    useEffect(() => {
        if (tokenContext.token !== '') {
            setLoginFlag(true);
        }
    }, [tokenContext.token]);

    function toggleNavbar() {
        setCollapsed(!isCollapsed);
    }

    function ReturnNavButtons() {
      if (!loginFlag) {
        return <Nav fill pills>
          <NavItem><NavLink active className="text-dark" id="profile-button" href="/profile">Profile</NavLink></NavItem>
          <NavItem><NavLink active className="text-dark" id="new-post-button" href="/new-post">New Post</NavLink></NavItem>
          </Nav>
      } else {
        return <Nav fill pills><NavItem><NavLink active className="text-dark" id="login-button" href="/login">Login</NavLink></NavItem></Nav>
      }
    }

    return (
        <header>   
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" container light>
          <NavbarBrand tag={Link} to="/">sepia_journal</NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!isCollapsed} navbar>
                    <ul className="navbar-nav flex-grow">
                    <ReturnNavButtons />
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
