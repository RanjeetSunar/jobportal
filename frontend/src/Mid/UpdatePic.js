import axios from "axios";
import { Component } from "react";
import { Redirect } from "react-router";
import Swal from "sweetalert2";

class UpdatePic extends Component {
    state = {
        profile_pic: '',
        config: {
            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` }
        },
        id: this.props.match.params.id
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })

    }
    fileHandler = (e) => {
        this.setState({
            photo: e.target.files[0]
        })
    }

    uploadHandler = (e) => {
        this.setState({
            resume: e.target.files[0]
        })
    }
    // async componentDidMount() {
    //     await axios({
    //         method: "get",
    //         url: "http://localhost:90/profile/upload/"+this.state.id,
    //         headers: { authorization: `Bearer ${localStorage.getItem("token")}` },
    //     })
    //         .then((response) => {
    //             console.log(response.data)
    //             this.setState({
    //                 profile_pic: response.data.profile_pic,

    //             });
    //         })
    //         .catch((err) => {
    //             console.log(err.response);
    //         });
    // }


    updateProfile = (e) => {
        e.preventDefault();
        // alert(this.state.id)
        const data = new FormData() // new line
        var image = this.refs.photo.files[0];
        //   var cv = this.refs.file.files[0];
        data.append('profile_pic', image)
        axios({
            method: 'put',
            url: 'http://localhost:90/profile/upload/' + this.state.id,
            data: data,

            headers: { 'authorization': `Bearer ${localStorage.getItem('token')}` },
        })

            .then((response) => {
                console.log(response)
                Swal.fire({
					title: "Picture update successfull",

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



               
                window.location.href = '/profile';
            })
            .catch((err) => {
                console.log(err.response)
                console.log("no update")
                alert("update unsuccessfull")
            })
    }



    render() {
        return (
            <div>
                <p>Update Picture</p>


                <div class="card-text-center">
                    <div class="card-header"></div>
                    <div class="card-body">

                        <div class="card1 pb-5">

                            <div class="row px-3 justify-content-center mt-4 mb-5 border-line"> <img src="images/loc1.jpg" class="image2" />


                            </div>
                            <input type="file" name="photo" ref="photo"  required onChange={this.fileHandler}></input>
                            <div class="d-flex justify-content-center">
                            <button style ={{ alignItems: 'center' }}>Update pic</button>
                            </div>


                        </div>




                        {/* <p>
                            Photo
                            <button>click to add icon</button>
                            <input type="file" name="photo" ref="photo" onChange={this.fileHandler} />
                            <button>click to add icon</button>

                        </p> */}


                        <button onClick={this.updateProfile} class="btn btn-warning">Update Photos</button>





                    </div>
                </div>

                <p></p>
            </div>
        )
    }

}
export default UpdatePic