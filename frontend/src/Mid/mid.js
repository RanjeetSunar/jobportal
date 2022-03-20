import { Route, Switch } from "react-router";
import Home from "./home";
import Contact from "../Contact/contact";
import Register from "../Register/register";
import Login from "../login/login";
import Jobs from "../jobs/Jobs";
import Search from "./search";
import Update from "./update";
import JobInsert from "./jobinsert";
import Profile from "./profile";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import whoApplied from "./whoapplied";
import myApplied from "./myapply";
import updateProfile from "./updateProfile";
import UpdateResume from "./UpdateResume";
import UpdatePic from "./UpdatePic";


const { Component } = require("react");




class Mid extends Component{
    render(){
        return(
            <>
            
			<Switch>

				<Route path="/login" component={Login}></Route>
                <Route path="/update/:id" component={Update}></Route>
                <Route path="/jobInsert" component={JobInsert}></Route>
                <Route path="/profile" component={Profile}></Route>
                <Route path='/whoApplied/:id' component={whoApplied} />
                <Route path="/Applied" component={myApplied}/>
                <Route path="/UpdateProfile/:id" component={updateProfile}/>
                <Route path="/updateResume/:id" component={UpdateResume}/>
                <Route path="/updatePicture/:id" component={UpdatePic}/>
                <Route path="/whoApplied" component={whoApplied}/>
               

        
                <Route path="/contact" component={Contact}></Route>
                <Route path="/register" component={Register}></Route>
                <Route path="/jobs" component={Jobs}></Route>
                <Route path="/search" component={Search}></Route>
				<Route path="/" component={Home}></Route>
				
			</Switch>
            
	
            </>
        )
    }
}
export default Mid