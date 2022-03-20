import axios from "axios";
import { Component } from "react";
import { Button } from 'react-bootstrap';

import { Redirect } from "react-router";
import Swal from "sweetalert2";

export default class UpdateResume extends Component {

    state = {
        resume: '',
        con: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        }
        ,
        id: this.props.match.params.id

    }
    uploadHandler = (e) => {
        e.preventDefault();
        // alert(this.state.id)
        const data = new FormData() // new line

        var cv = this.refs.resume.files[0];

        data.append('resume', cv)
        axios({
            method: 'put',
            url: 'http://localhost:90/updateResume/' + this.state.id,
            data: data,

            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` },
        })

            .then((response) => {
                console.log(response)
                Swal.fire({
                    title: 'are u sure u want to update?',
                    
                    icon: 'success',
                    showCancelButton: false,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: " view updated resume"
                  }).then((result) => {
                    if (result.isConfirmed) {
                        
                window.location.href="/profile"
                
                    }
                  })
                
            })
            .catch((err) => {
                console.log(err.response)
                console.log("no update")
                alert("update unsuccessfull")
            })
    }

    onchangeSubmit = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }




    render() {
        if (!localStorage.getItem("token")) {
            return (


                window.location.href = "/login"

            )
        }
        return (
            <>	{/* <!-- banner --> */}
                <div class="inner_page_agile">
                    <h3>Resume</h3>
                    <p>Add Some Short Description</p>

                </div>
                {/* <!--//banner -->
<!--/w3_short--> */}
                <div class="services-breadcrumb_w3layouts">
                    <div class="inner_breadcrumb">

                        <ul class="short_w3ls" _w3ls>
                            <li><a href="index.html">Home</a><span>|</span></li>
                            <li>   <p>Update Resume</p></li>
                        </ul>
                    </div>
                </div>
                <div>



                    <div class="card-text-center">
                        <div class="card-header">
                            <p>
                                Click on Update Resume to Update 
                                <input type="file" name="resume" ref="resume" onChange={this.uploadHandler} />
                                <div class="d-flex justify-content-center">
                                <Button variant="primary" style={{ alignItems: 'center' }} onClick={this.uploadHandler}>Update Resume  </Button>{' '}
                                 
                                </div>

                            </p>

                        </div>
                        <div class="card-body">







                        </div>
                    </div>

                    <p></p>
                </div>

            </>
        )
    }
}
