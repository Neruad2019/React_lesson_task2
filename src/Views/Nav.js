import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import LoginForm from './LoginForm';
import Content from './Content'
import AddNews from './AddNews'

function Nav(props){
    return (
        <Router>
        <div className="header">
        <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#013799'}}>
              <div className="container-fluid">
                <a className="navbar-brand" style={{color: 'white'}} href="/">HABAR.COM</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link to="/" className="nav-link" style={{color: 'white'}}>All News</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/sport" className="nav-link" style={{color: 'white'}}>Sport</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/politics" className="nav-link" style={{color: 'white'}}>Politics</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/technology" className="nav-link" style={{color: 'white'}}>Technology</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/bussiness" className="nav-link" style={{color: 'white'}}>Bussiness</Link>
                    </li>
                    {!props.online.isOnline &&
                    <li className="nav-item dropdown">
                      <Link to="/login" className="nav-link dropdown-toggle" style={{color: 'white'}} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Sign in
                      </Link>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#" style={{color: 'white'}}>Action</a></li>
                        <li><a className="dropdown-item" href="#" style={{color: 'white'}}>Another action</a></li>
                      </ul>
                    </li>}
                    {props.online.isOnline && 
                        <li className="nav-item">
                      <Link to="/profile" className="nav-link" style={{color: 'white'}} href="#">{props.Users[props.online.id-1].fullname}</Link>
                    </li> 
                    }
                    {props.online.isOnline && 
                    <li className="nav-item">
                    <a className="nav-link" style={{color: 'white'}} href="/">Sign out</a>
                  </li>
                    }
                    
                  </ul>
                  <form className="d-flex p-2">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-primary" type="submit" style={{width: '70%'}}>Search News</button>
                  </form>
                </div>
              </div>
        </nav>
        <Switch>
          <Route path="/login">
          {props.online.isOnline && <AddNews onCreate={props.onCreate}/>}
          {!props.online.isOnline && <LoginForm Users={props.Users} setOnline={props.setOnline}/>}
          </Route>
          <Route path="/profile">
            <AddNews onCreate={props.onCreate}/>
          </Route>
          <Route path="/sport">
          <Content News={props.News} Blogs={props.Blogs} Title={'Sport'}/>
          </Route>
          <Route path="/politics">
          <Content News={props.News} Blogs={props.Blogs} Title={'Politics'}/>
          </Route>
          <Route path="/technology">
          <Content News={props.News} Blogs={props.Blogs} Title={'Technology'}/>
          </Route>
          <Route path="/bussiness">
          <Content News={props.News} Blogs={props.Blogs} Title={'Bussiness'}/>
          </Route>
          <Route path="/">
            <Content News={props.News} Blogs={props.Blogs} Title={'All News'}/>
          </Route>
        </Switch>
    </div></Router>
    )
}
function Login(){
    return (<h2>gg</h2>)
}


export default Nav;