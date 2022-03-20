import { Component } from "react";
import {Route,NavLink,Switch} from "react-router-dom"

class Header extends Component{
	btnLogout=(e)=>{
		localStorage.clear();
        window.location.href = '/login';

	}
    render(){
		if (localStorage.getItem('token') && localStorage.getItem('usertype') === 'employee'){

		
		var menu=<div class="header" id="home">
		<div class="content white agile-info">
			<nav class="navbar navbar-default" role="navigation">
				<div class="container">
					<div class="navbar-header">
						<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
						<a class="navbar-brand" href="index.html">
							<h1><span class="fa fa-signal" aria-hidden="true"></span> Soft <label>Hr Agency</label></h1>
						</a>
					</div>
					{/* <!--/.navbar-header--> */}
					<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
						<nav class="link-effect-2" id="link-effect-2">
							<ul class="nav navbar-nav">
								<li ><NavLink to="/" class="effect-3">Home</NavLink></li>
								{/* <li ><NavLink to="/register" class="effect-3">Logout</NavLink></li> */}
								<li><NavLink  to="/jobs" class="effect-3">Jobs</NavLink></li>
								<li><NavLink  to="/jobs" class="effect-3" onClick={this.btnLogout}>Logout</NavLink></li>
								{/* <li><button onClick={this.btnLogout}>Logout</button></li> */}

								

								<li><NavLink to="/profile" class="effect-3">Profile </NavLink></li>
								
								<li><NavLink to="/Applied" class="effect-3">Appliedjobs </NavLink></li>
								<li><NavLink to="/contact" class="effect-3">Contact</NavLink></li>
								
								


							</ul>
						</nav>
					</div>
					{/* <!--/.navbar-collapse--> */}
					{/* <!--/.navbar--> */}
				</div>
			</nav>
		</div>
	</div>
		}
		else if (localStorage.getItem('token') && localStorage.getItem('usertype') === 'employer'){

		
			var menu=<div class="header" id="home">
			<div class="content white agile-info">
				<nav class="navbar navbar-default" role="navigation">
					<div class="container">
						<div class="navbar-header">
							<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
							<a class="navbar-brand" href="index.html">
								<h1><span class="fa fa-signal" aria-hidden="true"></span> Soft <label>Hr Agency</label></h1>
							</a>
						</div>
						{/* <!--/.navbar-header--> */}
						<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
							<nav class="link-effect-2" id="link-effect-2">
								<ul class="nav navbar-nav">
									<li ><NavLink to="/" class="effect-3">Home</NavLink></li>
									{/* <li ><NavLink to="/register" class="effect-3">Register</NavLink></li> */}
									<li><NavLink to="/jobs" class="effect-3">Jobs</NavLink></li>
									<li><NavLink to="/whoApplied" class="effect-3">ShowWhoapplied</NavLink></li>

									<li><NavLink  to="/jobs" class="effect-3" onClick={this.btnLogout}>Logout</NavLink></li>
	
									<li><NavLink to="/jobInsert" class="effect-3">JobInsert </NavLink></li>
									<li><NavLink to="/contact" class="effect-3">Contact</NavLink></li>
									
									
	
	
								</ul>
							</nav>
						</div>
						{/* <!--/.navbar-collapse--> */}
						{/* <!--/.navbar--> */}
					</div>
				</nav>
			</div>
		</div>
			}
			else {

		
				var menu=<div class="header" id="home">
				<div class="content white agile-info">
					<nav class="navbar navbar-default" role="navigation">
						<div class="container">
							<div class="navbar-header">
								<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
							<span class="sr-only">Toggle navigation</span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>
								<a class="navbar-brand" href="index.html">
									<h1><span class="fa fa-signal" aria-hidden="true"></span> Soft <label>Hr Agency</label></h1>
								</a>
							</div>
							{/* <!--/.navbar-header--> */}
							<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
								<nav class="link-effect-2" id="link-effect-2">
									<ul class="nav navbar-nav">
										<li ><NavLink to="/" class="effect-3">Home</NavLink></li>
										<li ><NavLink to="/register" class="effect-3">Register</NavLink></li>
										<li><NavLink to="/jobs" class="effect-3">Jobs</NavLink></li>
		
										<li><NavLink to="/login" class="effect-3">Login</NavLink></li>
		
										<li><NavLink to="/professional" class="effect-3">Professionals </NavLink></li>
										<li><NavLink to="/contact" class="effect-3">Contact</NavLink></li>
										
										
		
		
									</ul>
								</nav>
							</div>
							{/* <!--/.navbar-collapse--> */}
							{/* <!--/.navbar--> */}
						</div>
					</nav>
				</div>
			</div>
				}
        return(
            <>
			{menu}
            {/* <!-- header --> */}
	
            </>

           
        )
    }
}
export default Header