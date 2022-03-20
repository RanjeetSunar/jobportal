import axios from "axios";
import { Component } from "react";
import { Redirect } from "react-router";
import Swal from "sweetalert2";

class UpdateProfile extends Component {

    state={
        id:this.props.match.params.id,
        photo:'',
  con : {
            headers : {'authorization' : `Bearer ${localStorage.getItem('token')}`}
        }
        

    }
    componentDidMount(){
        axios.get("http://localhost:90/updateSingle/user/"+this.state.id, this.state.con)
        .then((result)=>{
            console.log(result.data)
            this.setState({
                userBio:result.data.userBio,
                phonenumber:result.data.phonenumber,
                location:result.data.location
              

            })

        })
        .catch(()=>{

        })
    }

    onchangeSubmit=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }



    btnSubmit=(e)=>{
        e.preventDefault(e);
        const data={
            id:this.state.id,
            location:this.state.location,
            userBio:this.state.userBio,
            phonenumber:this.state.phonenumber
        }
        axios.put("http://localhost:90/user/update",data)
        .then((result)=>{
            console.log("product updatated"+result)
            Swal.fire({
				title: 'are u sure u want to update?',
				
				icon: 'success',
				showCancelButton: false,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: " view updated profile"
			  }).then((result) => {
				if (result.isConfirmed) {
					
			window.location.href="/profile"
			
				}
			  })


        })
        .catch((e)=>{

        })

    }




    render() {
        if(!localStorage.getItem("token")){
            return (
                
            
                window.location.href="/login"
            
            )
        }
        return (
            <>
                <div class="inner_page_agile">
                    <h3>Update</h3>
                    <p>Fill in the required text box and hit submit button to update</p>

                </div>
                <div class="inner_content_info_agileits">
                    <div class="container">
                        <div class="tittle_head_w3ls">
                            <h3 class="tittle three">Update Now </h3>
                        </div>
                        <div class="inner_sec_grids_info_w3ls">
                            <div class="signin-form">
                                <div class="login-form-rec">
                                    <form action="#" method="post">
                                        <input type="text" name="location" placeholder={this.state.location} required
                                        value={this.state.location}
                                        onChange={this.onchangeSubmit}

                                        ></input>

                                        <input type="text" name="phonenumber" placeholder={this.state.phonenumber} required=""
                                        value={this.state.phonenumber}
                                        onChange={this.onchangeSubmit}

                                        ></input>
                                        <input type="text" name="userBio"  placeholder={this.state.userBio} required=""
                                        value={this.state.userBio}
                                        onChange={this.onchangeSubmit}

                                        ></input>


                                        {/* <input type="text" name="usertype" placeholder="usertype" required=""
											value={this.state.usertype}
											onChange={this.onchangeSubmit}

										></input> */}

                                        {/* <select id="country13" class="frm-field required" value={this.state.usertype}
												onChange={this.onchangeSubmit}>
											<option 

											>employee</option>
											<option >employer</option>

										</select> */}
                                        {/* <select  id="country13" class="frm-field required" value={this.state.usertype} onChange={this.handleSelectChange}>
											<option value="employee">employee</option>
											<option value="employer">employer</option>
										</select> */}

                                    </form>
                                    <button
                                    onClick={this.btnSubmit}


                                    >submit</button>
                                </div>
                                <p class="reg"><a href="#"> By clicking update, I agree to your terms</a></p>

                            </div>
                        </div>
                    </div>
                </div>


            </>
        )
    }
}
export default UpdateProfile