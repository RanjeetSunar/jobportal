import React, { Component, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


import Swal from 'sweetalert2'
//import { axios } from 'axios';
const axios = require('axios').default;

class myApplied extends Component {
    state = {
        appliedjobs: [],
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }
    }

    componentDidMount() {

        axios({
            method: 'get',
            url: 'http://localhost:90/show/applied',
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        })
            .then((response) => {
                console.log(response)

                this.setState({
                    appliedjobs: response.data,

                })
            })
            .catch((err) => {
                console.log(err.response)
            })


    }


    deleteJob = (id) => {
        axios.delete('http://localhost:90/delete/applyJob/' + id, this.state.config)
            .then((response) => {
                console.log(response)
                alert("Delete successfull")
                Swal.fire(
                    'Deleted',
                    'Your have successfully deleted this application.',
                    'success'
                )
                window.location.reload()
            })
            .catch((err) => {
                //console.log(err.response)
                alert("Delete unsuccessfull")
            })



        // Swal.fire({
        //     title: 'Delete this application?',
        //     icon: 'warning',

        //     confirmButtonColor: '#3085d6',
        //     cancelButtonColor: '#d33',
        //     confirmButtonText: 'Yes, Delete'
        //   }).then((result) => {
        //     if (result.isConfirmed) {



        //     }

        //   })










    }




    render() {

        return (
            <Container>
                <Row>

                    <div>
                        <p></p>

                        {
                            this.state.appliedjobs.map((job) => {
                                return (<div>
                                    <div class="py-5 service-22">
                                        <div class="container">

                                            <div class="row wrap-service-22">

                                                <div class="col-lg-6">
                                                    <img src={`http://localhost:90/jobs/${job.userid.profile_pic}`} class="rounded img-shadow img-fluid" alt="wrapkit" style={{ height: "300px" ,width:"400px" }} />
                                                </div>

                                                <div class="col-lg-6 mt-4 mt-md-0">
                                                    <div class="text-box">
                                                        {/* <h4 class="font-weight-light mt-2 mb-4">Job Title: <span class="text-megna">{job.jobid.jobtitle}</span></h4> */}
                                                        <h3 class="font-weight-light">Applier Name: <span class="text-megna">{job.userid.username}</span></h3>
                                                        <p>
                                                            <h4 class="font-weight-light">Description: {job.jobid.jobDescription}</h4>


                                                            <h4 class="font-weight-light">Job Type: <span class="text-megna">{job.jobid.jobType}</span></h4>

                                                            {/* <h6 class="font-weight-light">Required Experience: <span class="text-megna">{job.jobid.requiredexperience}</span></h6> */}
                                                            <h4 class="font-weight-light">Job Price: <span class="text-megna">{job.jobid.jobSalary}</span></h4></p>
                                                        {/* <h6 class="font-weight-light">Email of company: <span class="text-megna">{job.jobid.creator.email}</span></h6>
                                                        <h6 class="font-weight-light">Company: <span class="text-megna">{job.jobid.creator.company}</span></h6> */}
                                                        {/* <h6 class="font-weight-light">Applied on: <span class="text-megna">{job.createdAt}</span></h6> */}

                                                        {/* {
                                                            job.confirmStatus === "Confirmed"
                                                                ? (<p>Your job application has been confirmed by company.</p>)
                                                                : job.confirmStatus === "denied"
                                                                    ? (<p>Your job application has been denied by the company.</p>)

                                                                    : (<p class=".text-primary">Your job application is not reviewed by company.</p>)
                                                        } */}

                                                        <Button variant="primary" onClick={() => this.deleteJob(job._id)}>delete</Button>{' '}

                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                )
                            })
                        }

                    </div>
                    <Col></Col>
                </Row>
            </Container>
        )
    }

}

export default myApplied;