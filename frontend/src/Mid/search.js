import { Component } from "react";

class Search extends Component {
    state={
        searchDataa:JSON.parse(localStorage.getItem("searchdata"))
    }




    render() {
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
                            <h3 class="tittle">Available Jobs 
                          
                            </h3>
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
                                                this.state.searchDataa.map(searchjob => {
                                                    return (

                                                        <div class="tab_grid">
                                                            <div class="col-sm-3 loc_1">
                                                                <a href="location_single.html"><img src="images/loc1.jpg" alt="" /></a>
                                                            </div>
                                                            <div class="col-sm-9">
                                                                <div class="location_box1">
                                                                    <h6><a href="location_single.html">{searchjob.jobType} </a><span class="m_1">Posted 5 hours ago</span></h6>
                                                                    <p><span class="m_2">Description : </span>{searchjob.jobLocation} </p>
                                                                    <ul class="links_bottom">
                                                                        <li><a href="location_single.html"><i class="fa fa-envelope-o icon_1"> </i><span class="icon_text"> Email this Job</span></a></li>
                                                                        <li><a href="location_single.html"><i class="fa fa-eye icon_1"> </i> <span class="icon_text">View full Job Description</span></a></li>
                                                                        <li class="last"><a href="location_single.html"><span class="icon_text">More <i class="fa fa-caret-right icon_1"> </i></span></a></li>
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

                        <div class="clearfix"></div>
                    </div>
                </div>



            </>
        )
    }
}
export default Search