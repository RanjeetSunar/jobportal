import { Component } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Button } from 'react-bootstrap';



class JobInsert extends Component {
    state = {
        jobSalary: "",
        jobLocation: "",
        jobPosition: "",
        jobDescription: "",
        jobType: "",
        con: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }

    }



    onChangeRegister = (e) => {
        //setstate le state ko mah value change garxa 
        // value mah chai type garyeko kura aauxa


        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSelectChange = (event) => {
        this.setState({ jobType: event.target.value });
    }
    // showalert = (e) => {
    // 	alert(this.state.usertype)
    // }

    btnJobInsert = (e) => {
        e.preventDefault();

        //send data to our api
        const data = {
            jobSalary: this.state.jobSalary,
            jobLocation: this.state.jobLocation,
            jobPosition: this.state.jobPosition,
            jobDescription: this.state.jobDescription,
            jobType: this.state.jobType
        }



        axios.post("http://localhost:90/job/insert", data, this.state.con)
            .then((dataa) => {
                console.log(dataa)
                Swal.fire({
                    title: 'Are You sure You want to insert?',

                    icon: 'success',
                    showCancelButton: false,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: " Go to jobs"
                }).then((result) => {
                    if (result.isConfirmed) {

                        window.location.href = "/"

                    }
                })


            })

            .catch((da) => {
                console.log(da)
                alert("not register")
            })



    }
    render() {
        return (
            <>

                {/* <!-- banner --> */}
                <div class="inner_page_agile">
                    <h3>JobInsert</h3>
                    <p>Add Some Short Description</p>

                </div>
                {/* <!--//banner -->
	<!--/w3_short--> */}
                <div class="services-breadcrumb_w3layouts">
                    <div class="inner_breadcrumb">

                        <ul class="short_w3ls" _w3ls>
                            <li><a href="index.html">Home</a><span>|</span></li>
                            <li>JobInsert</li>
                        </ul>
                    </div>
                </div>
                {/* <!--//w3_short-->
	<!-- /inner_content --> */}
                <div class="inner_content_info_agileits">
                    <div class="container">
                        <div class="tittle_head_w3ls">
                            <h3 class="tittle three">Insert Your Jobs Now </h3>
                        </div>
                        <div class="inner_sec_grids_info_w3ls">
                            <div class="signin-form">
                                <div class="login-form-rec">
                                    <form action="#" method="post">
                                        <input type="text" name="jobLocation" placeholder="jobLocation" required
                                            value={this.state.jobLocation}
                                            onChange={this.onChangeRegister}

                                        ></input>

                                        <input type="text" name="jobSalary" placeholder="jobSalary" required=""
                                            value={this.state.jobSalary}
                                            onChange={this.onChangeRegister}

                                        ></input>
                                        {/* <input type="password" name="password" id="password1" placeholder="Password" required=""
											value={this.state.password}
											onChange={this.onChangeRegister}

										></input> */}

                                        <input type="text" name="jobDescription" placeholder="jobDescription" required=""
                                            value={this.state.jobDescription}
                                            onChange={this.onChangeRegister}

                                        ></input>

                                        <input type="text" name="jobPosition" placeholder="jobPosition" required=""
                                            value={this.state.jobPosition}
                                            onChange={this.onChangeRegister}

                                        ></input>



                                        <select id="country13" class="frm-field required" value={this.state.jobType} onChange={this.handleSelectChange}>

                                            <option value="full time">full time</option>
                                            <option value="part time">part time</option>

                                        </select>

                                    </form>
                                    <Button variant="success" onClick={this.btnJobInsert}>Insesrt Your JobNow</Button>{' '}

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
export default JobInsert