
import { Component } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import { Button } from 'react-bootstrap';

// import { NavLink } from "react-router-dom";

class Jobs extends Component {
	state = {
		myjobs: [],
		con: {
			headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
		}


	}
	componentDidMount() {

		axios.get("http://localhost:90/show/jobs", this.state.con)

			.then((jobs) => {
				console.log(jobs)
				this.setState({
					myjobs: jobs.data.data
				})


			})
			.catch((e) => {
				alert("unauthorized user")
				window.location.href = "/"

			})

	}

	deleteProduct = (id) => {
	
		axios.delete("http://localhost:90/job/delete/" + id)

			.then((res) => {
				Swal.fire({
					title: 'are u sure u want to delete?',

					icon: 'success',
					showCancelButton: false,
					confirmButtonColor: '#3085d6',
					cancelButtonColor: '#d33',
					confirmButtonText: " Go to jobs"
				}).then((result) => {
					if (result.isConfirmed) {

						window.location.href = "/jobs"

					}
				})


			})
			.catch((e) => {
				alert("e")
			})

	}
	applyJob = (id) => {
		// alert(this.state.config.headers.authorization)
		Swal.fire({
			title: 'Apply in this job?',
			icon: 'warning',

			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, Apply'
		}).then((result) => {
			if (result.isConfirmed) {

				axios({
					method: 'post',
					url: 'http://localhost:90/job/applyJob/' + id,

					headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` },
				})

					.then((response) => {

						console.log(response);

						//    alert("Job apply successfull");
					})
					.catch((err) => {
						console.log(this.state.config)
						console.log(err.response)
						alert("Job apply unsuccessfull");
					});
				Swal.fire(
					'Applied',
					'Your have successfully applied to this job.',
					'success'
				)
			}

		})



	};


	render() {
		if (!localStorage.getItem("token")) {
			return (
				window.location.href = "/login"
			)

		}

		if (localStorage.getItem("token") && localStorage.getItem("usertype") == "employer") {
			return (
				<>

					<div class="inner_page_agile">
						<h3>Jobs</h3>
						<p>Add Some Short Description</p>

					</div>

					<div class="services-breadcrumb_w3layouts">
						<div class="inner_breadcrumb">


						</div>
					</div>

					<div class="inner_content_info_agileits">
						<div class="container">
							<div class="tittle_head_w3ls">
								<h3 class="tittle">Available Jobs </h3>
							</div>
							<div class="inner_sec_grids_info_w3ls">
								<div class="col-md-8 job_info_left">
									<div class="but_list">
										<div class="bs-example bs-example-tabs" role="tabpanel" data-example-id="togglable-tabs">
											<ul id="myTab" class="nav nav-tabs" role="tablist">
												{/* <li role="presentation" class="active"><a href="#home" id="home-tab" role="tab" data-toggle="tab" aria-controls="home" aria-expanded="true">Top Locations</a></li>
								<li role="presentation"><a href="#profile" role="tab" id="profile-tab" data-toggle="tab" aria-controls="profile">Show Descriptions</a></li> */}
											</ul>
											<div id="myTabContent" class="tab-content">


												{
													this.state.myjobs.map(job => {
														return (

															<div class="tab_grid">
																<div class="col-sm-3 loc_1">
																	<a href="location_single.html"><img src="images/loc1.jpg" alt="" /></a>
																</div>
																<div class="col-sm-9">
																	<div class="location_box1">
																		<h6><a href="location_single.html">{job.jobDescription} </a><span class="m_1">Posted 5 hours ago</span></h6>
																		<p><span class="m_2">Location : </span>{job.jobLocation} </p>
																		<p><span class="m_2">Position : </span>{job.jobPosition} </p>
																		<p><span class="m_2">jobType : </span>{job.jobType} </p>
																		<p><span class="m_2">salary : </span>{job.jobSalary} </p>
																		<ul class="links_bottom">
																			<li><a href="location_single.html"><i class="fa fa-envelope-o icon_1"> </i><span class="icon_text"> Email this Job</span></a></li>
																			<li><a href="location_single.html"><i class="fa fa-eye icon_1"> </i> <span class="icon_text">View full Job Description</span></a></li>

																			<Button variant="primary" onClick={() => this.deleteProduct(job._id)}>delete</Button>{' '}
																			<NavLink to={"/update/" + job._id} class="icon_text"> <Button variant="primary" >update  </Button>{' '}</NavLink>
																			<NavLink to={"/whoApplied/" + job._id} class="icon_text"> <Button variant="primary" >Whoapplied  </Button>{' '}</NavLink>



				
																		</ul>
																	</div>
																</div>
																<div class="clearfix"> </div>
															</div>


														)
													})
												}

											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-4 job_info_right">

								<div class="widget_search">
									<h5 class="widget-title">Search</h5>
									<div class="widget-content">
										<span>I'm looking for a ...</span>
										<select class="form-control jb_1">
											<option value="0">Job</option>
											<option value="">Category</option>
											<option value="">Category</option>
											<option value="">Category</option>
											<option value="">Category</option>
										</select>
										<span>in</span>
										<input type="text" class="form-control jb_2" placeholder="Location" />
										<input type="text" class="form-control jb_2" placeholder="Industry / Role" />
										<input type="submit" value="Search" />
									</div>
								</div>

								<div class="col_3 experience">
									<h3>Work Experiance</h3>
									<table class="table">
										<tbody>
											<tr class="unread checked">
												<td class="hidden-xs">
													<input type="checkbox" class="checkbox" />
												</td>
												<td class="hidden-xs">
													Junior
												</td>
												<td>
													(56)
												</td>
											</tr>
											<tr class="unread checked">
												<td class="hidden-xs">
													<input type="checkbox" class="checkbox" />
												</td>
												<td class="hidden-xs">
													Senior
												</td>
												<td>
													(56)
												</td>
											</tr>
											<tr class="unread checked">
												<td class="hidden-xs">
													<input type="checkbox" class="checkbox" />
												</td>
												<td class="hidden-xs">
													Middle
												</td>
												<td>
													(56)
												</td>
											</tr>

										</tbody>
									</table>
								</div>
								<div class="col_3 permit">
									<h3>Work Permit</h3>
									<table class="table">
										<tbody>
											<tr class="unread checked">
												<td class="hidden-xs">
													<input type="checkbox" class="checkbox" />
												</td>
												<td class="hidden-xs">
													Full time
												</td>
											</tr>
											<tr class="unread checked">
												<td class="hidden-xs">
													<input type="checkbox" class="checkbox" />
												</td>
												<td class="hidden-xs">
													Part time
												</td>
											</tr>
										</tbody>
									</table>
								</div>

							</div>
							<div class="clearfix"></div>
						</div>
					</div>



				</>

			)

		} else {
			return (
				<>

					<div class="inner_page_agile">
						<h3>Jobs</h3>
						<p>Add Some Short Description</p>

					</div>

					<div class="services-breadcrumb_w3layouts">
						<div class="inner_breadcrumb">


						</div>
					</div>

					<div class="inner_content_info_agileits">
						<div class="container">
							<div class="tittle_head_w3ls">
								<h3 class="tittle">Available Jobs </h3>
							</div>
							<div class="inner_sec_grids_info_w3ls">
								<div class="col-md-8 job_info_left">
									<div class="but_list">
										<div class="bs-example bs-example-tabs" role="tabpanel" data-example-id="togglable-tabs">
											<ul id="myTab" class="nav nav-tabs" role="tablist">
												{/* <li role="presentation" class="active"><a href="#home" id="home-tab" role="tab" data-toggle="tab" aria-controls="home" aria-expanded="true">Top Locations</a></li>
								<li role="presentation"><a href="#profile" role="tab" id="profile-tab" data-toggle="tab" aria-controls="profile">Show Descriptions</a></li> */}
											</ul>
											<div id="myTabContent" class="tab-content">


												{
													this.state.myjobs.map(job => {
														return (

															<div class="tab_grid">
																<div class="col-sm-3 loc_1">
																	<a href="location_single.html"><img src="images/loc1.jpg" alt="" /></a>
																</div>
																<div class="col-sm-9">
																	<div class="location_box1">
																		<h6><a href="location_single.html">{job.jobDescription} </a><span class="m_1">Posted 5 hours ago</span></h6>
																		<p><span class="m_2">Location : </span>{job.jobLocation} </p>
																		<p><span class="m_2">Position : </span>{job.jobPosition} </p>
																		<p><span class="m_2">jobType : </span>{job.jobType} </p>
																		<p><span class="m_2">salary : </span>{job.jobSalary} </p>
																		<ul class="links_bottom">
																			<li><a href="location_single.html"><i class="fa fa-envelope-o icon_1"> </i><span class="icon_text"> Email this Job</span></a></li>
																			<li><a href="location_single.html"><i class="fa fa-eye icon_1"> </i> <span class="icon_text">View full Job Description</span></a></li>

																		
																			{/* <div class="row mb-3 px-3"> <button type="submit" class="btn btn-blue text-center" onClick={this.applyJob.bind(this, job._id)}>Apply for job.</button> </div> */}
																			<Button variant="primary" onClick={this.applyJob.bind(this, job._id)}>Apply for jobs</Button>{' '}

																			{/* <li class="last ms-2"><button onClick={()=>this.deleteProduct(job._id)}>delete</button> </li> */}
																		</ul>
																	</div>
																</div>
																<div class="clearfix"> </div>
															</div>


														)
													})
												}

											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="col-md-4 job_info_right">

								<div class="widget_search">
									<h5 class="widget-title">Search</h5>
									<div class="widget-content">
										<span>I'm looking for a ...</span>
										<select class="form-control jb_1">
											<option value="0">Job</option>
											<option value="">Category</option>
											<option value="">Category</option>
											<option value="">Category</option>
											<option value="">Category</option>
										</select>
										<span>in</span>
										<input type="text" class="form-control jb_2" placeholder="Location" />
										<input type="text" class="form-control jb_2" placeholder="Industry / Role" />
										<input type="submit" value="Search" />
									</div>
								</div>

								<div class="col_3 experience">
									<h3>Work Experiance</h3>
									<table class="table">
										<tbody>
											<tr class="unread checked">
												<td class="hidden-xs">
													<input type="checkbox" class="checkbox" />
												</td>
												<td class="hidden-xs">
													Junior
												</td>
												<td>
													(56)
												</td>
											</tr>
											<tr class="unread checked">
												<td class="hidden-xs">
													<input type="checkbox" class="checkbox" />
												</td>
												<td class="hidden-xs">
													Senior
												</td>
												<td>
													(56)
												</td>
											</tr>
											<tr class="unread checked">
												<td class="hidden-xs">
													<input type="checkbox" class="checkbox" />
												</td>
												<td class="hidden-xs">
													Middle
												</td>
												<td>
													(56)
												</td>
											</tr>

										</tbody>
									</table>
								</div>
								<div class="col_3 permit">
									<h3>Work Permit</h3>
									<table class="table">
										<tbody>
											<tr class="unread checked">
												<td class="hidden-xs">
													<input type="checkbox" class="checkbox" />
												</td>
												<td class="hidden-xs">
													Full time
												</td>
											</tr>
											<tr class="unread checked">
												<td class="hidden-xs">
													<input type="checkbox" class="checkbox" />
												</td>
												<td class="hidden-xs">
													Part time
												</td>
											</tr>
										</tbody>
									</table>
								</div>

							</div>
							<div class="clearfix"></div>
						</div>
					</div>



				</>

			)
		}

	}
}
export default Jobs