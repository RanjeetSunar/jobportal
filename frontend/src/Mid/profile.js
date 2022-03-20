import axios from "axios";
import { Component } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";



class Profile extends Component {
  state = {
    users: {},
    idd: localStorage.getItem("id"),


    config: {
      headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
    },


  };


  componentDidMount() {
    axios.get("http://localhost:90/display/register_user/" + this.state.idd, this.state.config)
      .then((result) => {
        // alert("succesfully profile shown")
        // console.log(result)
        // console.log(result.data.profile_pic)

        this.setState({
          users: result.data
        })


      })
      .catch((error) => {
        alert("error aayo" + error)

      })

  }



  render() {
    return (
      <>
        <Container>
          <Row>


            <Card body>
              <div class="py-5 service-22">
                <div class="container">

                  <div class="row wrap-service-22">

                    <div class="col-lg-6">

                      <img src={`http://localhost:90/jobs/${this.state.users.profile_pic}`} class="rounded img-shadow img-fluid" alt="profile" style={{ height: "200px", width: "250px" }} />                    {/* <p>Resume Link:<a href={`http://localhost:91/${this.state.userss.resume}`} target="_blank">Click to view my resume</a></p> */}
                      <p>Resume Link:<a href={`http://localhost:90/${this.state.users.resume}`} target="_blank">Click to view my resume</a></p>

                    </div>


                    <div class="col-lg-6 mt-4 mt-md-0">
                    <div class="text-box"> <small class="text-info font-weight-medium"><h3>User Profile</h3></small>
                        <h4 class="font-weight-light mt-2 mb-4">Name: <span class="text-megna"> {this.state.users.username}</span></h4>
                        <h4 class="font-weight-light mt-2 mb-4">Email: <span class="text-megna"> {this.state.users.email}</span></h4>
                        <h4 class="font-weight-light mt-2 mb-4">User Type: <span class="text-megna"> {this.state.users.usertype}</span></h4>
                        <h4 class="font-weight-light mt-2 mb-4">Address: <span class="text-megna">{this.state.users.location}</span></h4>
                        <h4 class="font-weight-light mt-2 mb-4">Phonenumber: <span class="text-megna">{this.state.users.phonenumber}</span></h4>


                        <h4 class="font-weight-light mt-2 mb-4">My Bio <p>{this.state.users.userBio}</p></h4>
                      

                        <p>
                          <div class="ms-2">
                            <NavLink to={"/updatePicture/" + this.state.users._id}> <Button variant="primary" >update picture</Button>{' '}</NavLink>
                            <NavLink to={"/UpdateProfile/" + this.state.users._id}> <Button variant="primary" >Update Profile </Button>{' '}</NavLink>
                            <NavLink to={"/updateResume/" + this.state.users._id}> <Button variant="primary" >update Resume </Button>{' '}</NavLink>


                          </div>
                        </p>



                      </div>

                    </div>

                  </div>
                </div>
              </div>



            </Card>
          </Row>
        </Container>
      </>
    )
  }
}
export default Profile