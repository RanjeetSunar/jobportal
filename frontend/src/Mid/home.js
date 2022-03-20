import axios from "axios";
import Swal from "sweetalert2";

const { Component } = require("react");




class Home extends Component {

	state = {
		jobLocation: "",
		jobType:"",
		searchdata:[]
		
	

	}


	onChangeHandler = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})

	}
	onSelectHandler=(e)=>{
		this.setState({
			
			jobType:e.target.value
		})
	}
	btnSubmit = (e) => {
		e.preventDefault();
		axios.post("http://localhost:90/search/jobs",{
			jobType: this.state.jobType,
			jobLocation: this.state.jobLocation

		})
		.then((result)=>{
			this.setState({
			
				searchdata:result.data.data

				
			})
			console.log(result)
			localStorage.setItem("searchdata",JSON.stringify(result.data.data))
			

			

			console.log(result)
				Swal.fire({
				title: 'are u sure u want to search?',
				
				icon: 'success',
				showCancelButton: false,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: " Go to search"
			  }).then((result) => {
				if (result.isConfirmed) {
					
			window.location.href="/search"
			
				}
			  })

		})
		.catch((e)=>{
			console.log(e)

		})
	}


	render() {
		return (
			
			<>

				{/* <!-- banner --> */}
				<div id="myCarousel" class="carousel slide" data-ride="carousel">
					{/* <!-- Indicators --> */}
					<ol class="carousel-indicators">
						<li data-target="#myCarousel" data-slide-to="0" class="active"></li>
						<li data-target="#myCarousel" data-slide-to="1" class=""></li>
						<li data-target="#myCarousel" data-slide-to="2" class=""></li>
						<li data-target="#myCarousel" data-slide-to="3" class=""></li>
					</ol>
					<div class="carousel-inner" role="listbox">
						<div class="item active">
							<div class="container">
								<div class="carousel-caption">
									<h3>Improving workplace <span>Productivity.</span></h3>
									<p>Hire. Train. Retain.</p>
									<div class="agileits-button top_ban_agile">
										<a class="btn btn-primary btn-lg" href="single.html">Read More »</a>
									</div>
								</div>
							</div>
						</div>
						<div class="item item2">
							<div class="container">
								<div class="carousel-caption">
									<h3>Inspiring leadership <span>innovation.</span></h3>
									<p>Hire. Train. Retain.</p>
									<div class="agileits-button top_ban_agile">
										<a class="btn btn-primary btn-lg" href="single.html">Read More »</a>
									</div>
								</div>
							</div>
						</div>
						<div class="item item3">
							<div class="container">
								<div class="carousel-caption">
									<h3>Improving workplace <span>Productivity.</span></h3>
									<p>Hire. Train. Retain.</p>
									<div class="agileits-button top_ban_agile">
										<a class="btn btn-primary btn-lg" href="single.html">Read More »</a>
									</div>
								</div>
							</div>
						</div>
						<div class="item item4">
							<div class="container">
								<div class="carousel-caption">

									<h3>Inspiring leadership <span>innovation.</span></h3>
									<p>Hire. Train. Retain.</p>
									<div class="agileits-button top_ban_agile">
										<a class="btn btn-primary btn-lg scroll" href="#welcome" role="button">Read More »</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
						<span class="fa fa-chevron-left" aria-hidden="true"></span>
						<span class="sr-only">Previous</span>
					</a>
					<a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
						<span class="fa fa-chevron-right" aria-hidden="true"></span>
						<span class="sr-only">Next</span>
					</a>
					{/* <!-- The Modal --> */}
				</div>
				{/* <!--//banner --> */}

				{/* <!--/search_form --> */}
				<div id="search_form" class="search_top">
				{this.state.jobType}{this.state.jobLocation}

					<h2>Start your job search</h2>
					<form action="#" method="post">

						<input class="email" name="jobLocation" type="text" placeholder="Location" required=""
						value={this.state.jobLocation} onChange={this.onChangeHandler}
						
						></input>
						<select id="country12" class="frm-field required" value={this.state.jobType} onChange={this.onSelectHandler}>
						
							<option value="full time">full time</option>
							<option value="part time">part time</option>

						</select>
						<button value="Find Jobs"
							onClick={this.btnSubmit}

						>Find Job</button>
						<div class="clearfix"></div>
					</form>
				</div>
				{/* <!--//search_form --> */}
				<div class="banner-bottom">
					<div class="container">
						<div class="tittle_head_w3ls">
							<h3 class="tittle">About Us</h3>
						</div>
						<div class="inner_sec_grids_info_w3ls">
							<div class="col-md-6 banner_bottom_left">
								<h4>Employment opportunities for <span>Professionals</span></h4>
								<p>Pellentesque convallis diam consequat magna vulputate malesuada. Cras a ornare elit. Nulla viverra pharetra sem, eget
									pulvinar neque pharetra ac.</p>
								<p>Lorem Ipsum convallis diam consequat magna vulputate malesuada. Cras a ornare elit. Nulla viverra pharetra sem, eget
									pulvinar neque pharetra ac.</p>
								<ul class="some_agile_facts">
									<li><span class="fa fa-briefcase" aria-hidden="true"></span><label>80</label> Corporate Programs</li>
									<li><span class="fa fa-graduation-cap" aria-hidden="true"></span><label>49</label> Training Courses</li>
									<li><span class="fa fa-user" aria-hidden="true"></span><label>88</label> Strategic Partners</li>
									<li><span class="fa fa-line-chart" aria-hidden="true"></span><label>436</label> Companies We Helped</li>
								</ul>
								<div class="clearfix"> </div>
							</div>
							<div class="col-md-6 banner_bottom_right">
								<div class="agileits_w3layouts_banner_bottom_grid">
									<img src="images/ab.png" alt=" " class="img-responsive" />
								</div>
							</div>
							<div class="clearfix"> </div>
						</div>

					</div>
				</div>
				{/* <!-- //banner-bottom --> */}
				<div class="team_work_agile">
					<h4>Whether we play a large or small role, by working together we achieve our objectives.</h4>
				</div>
				{/* <!-- services --> */}


				{/* <!-- //Home-services --> */}
				<div class="candidate_cv">
					<div class="tittle_head_w3ls">
						<h3 class="tittle two">Candidate Cv</h3>
					</div>
					<div class="inner_sec_grids_info login-form">
						<form action="#" method="post">
							<div class="col-md-6 form-left">
								<div class="form-inputs email">
									<p>Full name</p>
									<i class="fa fa-user" aria-hidden="true"></i>
									<input type="text" name="Name" placeholder="" required="" ></input>
								</div>
								<div class="form-inputs name">
									<p>Email</p>
									<i class="fa fa-envelope" aria-hidden="true"></i>
									<input type="email" name="Email" placeholder="" required="" ></input>
								</div>
								<div class="form-inputs name">
									<p>Phone</p>
									<i class="fa fa-phone" aria-hidden="true"></i>
									<input type="text" name="Phone" placeholder="" required="" ></input>
								</div>

							</div>
							<div class="col-md-6 form-right">
								<div class="form-inputs name">
									<p>Comment</p>
									<i class="fa fa-comment" aria-hidden="true"></i>
									<textarea name="Message" placeholder="" required=""></textarea>
								</div>
							</div>
							<div class="clearfix"></div>
							<div class="form-inputs">
								<p>Specify your current employment status</p>
								<ul>
									<li>
										<input type="radio" id="a-option" name="selector1"></input>
										<label for="a-option">Employed </label>
										<div class="check"></div>
									</li>
									<li>
										<input type="radio" id="b-option" name="selector1"></input>
										<label for="b-option">Unemployed</label>
										<div class="check"></div>
									</li>
									<li>
										<input type="radio" id="c-option" name="selector1"></input>
										<label for="c-option">Self-Employed</label>
										<div class="check"></div>
									</li>
									<li>
										<input type="radio" id="d-option" name="selector1"></input>
										<label for="d-option">Student</label>
										<div class="check"></div>
									</li>
								</ul>
								<div class="clearfix"></div>
							</div>
							<div class="form-inputs upload">
								<p>Upload your resume</p>
								<input type="file" id="fileselect" name="fileselect[]" multiple="multiple" />
								<div id="filedrag">Upload</div>
							</div>
							<input type="submit" value="Submit Cv"></input>
						</form>

					</div>
				</div>
				{/* <!-- //testimonials --> */}
				<div class="testimonials_section">
					<div class="container">
						<div class="tittle_head_w3ls">
							<h3 class="tittle">Testimonials</h3>
						</div>
						<div class="inner_sec_grids_info_w3ls">
							<div id="Carousel" class="carousel slide two">

								<ol class="carousel-indicators second">
									<li data-target="#Carousel" data-slide-to="0" class="active"></li>
									<li data-target="#Carousel" data-slide-to="1"></li>
									<li data-target="#Carousel" data-slide-to="2"></li>
								</ol>

								{/* <!-- Carousel items --> */}
								<div class="carousel-inner">

									<div class="item active">
										<div class="testimonials_grid_wthree">
											<img src="images/test1.jpg" alt=" " class="img-responsive" />
											<h4><i class="fa fa-quote-left" aria-hidden="true"></i> Nam libero tempore, cum soluta nobis est eligendi optio cumque
												nihil impedit quo minus id quod maxime placeat facere possimus,Morbi viverra congue nisi vel pulvinar posuere sapien
												eros. omnis voluptas.</h4>
											<h5>Dan Adams</h5>

										</div>

									</div>
									{/* <!--.item--> */}
									<div class="item">
										<div class="testimonials_grid_wthree">
											<img src="images/test2.jpg" alt=" " class="img-responsive" />
											<h4><i class="fa fa-quote-left" aria-hidden="true"></i> Nam libero tempore, cum soluta nobis est eligendi optio cumque
												nihil impedit quo minus id quod maxime placeat facere possimus,Morbi viverra congue nisi vel pulvinar posuere sapien
												eros. omnis voluptas.</h4>
											<h5>Jessica Doe</h5>

										</div>
									</div>
									{/* <!--.item--> */}

									<div class="item">
										<div class="testimonials_grid_wthree">
											<img src="images/test3.jpg" alt=" " class="img-responsive" />
											<h4><i class="fa fa-quote-left" aria-hidden="true"></i> Nam libero tempore, cum soluta nobis est eligendi optio cumque
												nihil impedit quo minus id quod maxime placeat facere possimus,Morbi viverra congue nisi vel pulvinar posuere sapien
												eros. omnis voluptas.</h4>
											<h5>Michael Doe</h5>

										</div>
									</div>
									{/* <!--.item--> */}

								</div>
								{/* <!--.carousel-inner--> */}

							</div>
							{/* <!--.Carousel--> */}

						</div>
					</div>
				</div>
			</>
		)
	}
}
export default Home