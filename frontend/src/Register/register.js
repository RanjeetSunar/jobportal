import { Component } from "react";
import axios from "axios";
import Swal from "sweetalert2";
class Register extends Component {
	state = {
		username: "",
		password: "",
		location: "",
		email: "",
		profile_pic: "",
		usertype: "employee",
		phonenumber:"",
		userBio:"",
		jobPosition:""

	}



	onChangeRegister = (e) => {
		//setstate le state ko mah value change garxa 
		// value mah chai type garyeko kura aauxa


		this.setState({
			[e.target.name]: e.target.value
		})
	}
	handleSelectChange = (event) => {
		this.setState({ usertype: event.target.value });
	}
	// showalert = (e) => {
	// 	alert(this.state.usertype)
	// }
	changeFileHandler=(e)=>{
		this.setState({
			profile_pic:e.target.files[0]
		})
	}

	btnregister = (e) => {
		e.preventDefault();
		//send data to our api
		const data = new FormData();
		data.append("username", this.state.username)
		data.append("password", this.state.password)
		data.append("email", this.state.email)
		data.append("location", this.state.location)
		data.append("usertype", this.state.usertype)
		data.append("myimage",this.state.profile_pic)
		data.append("jobPosition",this.state.jobPosition)
		// data.append("phonenumber",this.state.phonenumber)

		axios.post("http://localhost:90/user/register", data)
			.then((dataa) => {
				console.log(dataa)
				Swal.fire({
					title: 'Succesfully Register',

					icon: 'success',
					showCancelButton: false,
					confirmButtonColor: '#3085d6',
					cancelButtonColor: '#d33',
					confirmButtonText: " Go to login"
				}).then((result) => {
					if (result.isConfirmed) {

						window.location.href = "/login"

					}
				})


			})

			.catch((da) => {
				console.log(da)
				alert("not register")
			})
		console.log(this.state.username)


	}
	render() {
		return (
			<>

				{/* <!-- banner --> */}
				<div class="inner_page_agile">
					<h3>Register</h3>
					<p>Add Some Short Description</p>

				</div>
				{/* <!--//banner -->
	<!--/w3_short--> */}
				<div class="services-breadcrumb_w3layouts">
					<div class="inner_breadcrumb">

						<ul class="short_w3ls" _w3ls>
							<li><a href="index.html">Home</a><span>|</span></li>
							<li>Register</li>
						</ul>
					</div>
				</div>
				{/* <!--//w3_short-->
	<!-- /inner_content --> */}
				<div class="inner_content_info_agileits">
					<div class="container">

						<div class="tittle_head_w3ls">
							<ul>
								<li class="last mt-2">
									<div class="col-sm-3 ">
										<div class="card1 pb-5">

											<div class="row px-3 justify-content-center mt-4 mb-5 border-line"> <img src="images/loc1.jpg" class="image2" />
											
							
											 </div>
											 <input type="file" name="files" class="icon_text"  placeholder="Username" required onChange={this.changeFileHandler}></input>
											<button>click to add icon</button>
											
											
										</div>
										
											
									</div>
								</li>
							</ul>
							<h3 class="tittle three">Register Now </h3>
						</div>
						<div class="inner_sec_grids_info_w3ls">

							<div class="signin-form">

								<div class="login-form-rec">
									<form action="#" method="post">
										<input type="text" name="username" placeholder="Username" required
											value={this.state.username}
											onChange={this.onChangeRegister}

										></input>
										

										<input type="email" name="email" placeholder="Email" required=""
											value={this.state.email}
											onChange={this.onChangeRegister}

										></input>
										<input type="password" name="password" id="password1" placeholder="Password" required=""
											value={this.state.password}
											onChange={this.onChangeRegister}

										></input>

										<input type="text" name="location" placeholder="Location" required=""
											value={this.state.location}
											onChange={this.onChangeRegister}

										></input>
														<input type="text" name="phonenumber" placeholder="phonenumber" required
											value={this.state.phonenumber}
											onChange={this.onChangeRegister}

										></input>



										<select id="country13" class="frm-field required" value={this.state.usertype} onChange={this.handleSelectChange}>
											<option value="employee">employee</option>
											<option value="employer">employer</option>
										</select>

										<select id="country13" class="frm-field required" value={this.state.jobType} onChange={this.onSelectHandler}>

											<option value="full time">full time</option>
											<option value="part time">part time</option>

										</select>

									</form>
									<button
										onClick={this.btnregister}


									>register</button>
								</div>
								<p class="reg"><a href="#"> By clicking register, I agree to your terms</a></p>

							</div>
						</div>
					</div>
				</div>

				{/* <!-- //footer --> */}

				<a href="#home" class="scroll" id="toTop" style={{ display: "block" }}> <span id="toTopHover" style={{ opacity: 1 }}> </span></a>
				{/* <!-- js --> */}
				{/* <script type="text/javascript" src="js/jquery-2.1.4.min.js"></script> */}
				{/* <!-- password-script -->
	<script type="text/javascript">
		window.onload = function () {
			document.getElementById("password1").onchange = validatePassword;
			document.getElementById("password2").onchange = validatePassword;
		}

		function validatePassword() {
			var pass2 = document.getElementById("password2").value;
			var pass1 = document.getElementById("password1").value;
			if (pass1 != pass2)
				document.getElementById("password2").setCustomValidity("Passwords Don't Match");
			else
				document.getElementById("password2").setCustomValidity(''); */}
				{/* //empty string means no validation error */}


			</>
		)
	}
}
export default Register