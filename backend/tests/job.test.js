// use the path of your model

const Job = require('../Models/jobModels');
// const User= require("../Models/user")

const mongoose = require('mongoose');

// use the new name of the database

const url = 'mongodb://localhost:27017/jobPortal_test';

beforeAll(async () => {

    await mongoose.connect(url, {

        useNewUrlParser: true,

        useCreateIndex: true

    });

});



afterAll(async () => {

    await mongoose.connection.close();

});



describe('job Schema testing ', () => {

//     // the code below is for insert testing jobs

    // it('Add job testing anything', () => {

    //     const job = {
    //         "userID": "6132fad073e23b3740932068",
    //         "jobType":"full time",
    //         "jobPosition":"senior",
    //         "jobLocation":"lalitpur",
    //         "jobSalary":3000

            

    //     };



    //     return Job.create(job)

    //         .then((pro_ret) => {

    //             expect(pro_ret.jobPosition).toEqual('senior');
    //             expect(pro_ret.jobLocation).toEqual('lalitpur');

    //         });

    // });

//    





    // // the code below is for delete testing

    // it('to test the delete product', async () => {

    //     const status = await Job.deleteMany();

    //     expect(status.ok).toBe(1);

    // });



    //update testing
    // it('to job the update', async () => {

    //     return Job.findOneAndUpdate({ _id: Object('614ffa2d77c05762c0983c0d') },

    //         { $set: { jobSalary: 8000 } })

    //         .then((pp) => {

    //             expect(pp.jobSalary).toEqual(9000)

    //         })

    // });
})
