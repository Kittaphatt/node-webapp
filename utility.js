//utility.js

const request = require("request-promise");
const EXTERNAL_API="https://tools.ecpe.nu.ac.th/network/api/student/s"; // put url
const accessToken="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC90b29scy5lY3BlLm51LmFjLnRoXC9uZXR3b3JrXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjYxNzg3NjY0LCJleHAiOjE2NjE3OTEyNjQsIm5iZiI6MTY2MTc4NzY2NCwianRpIjoiZXZwcWZ3T3V3VHJoN3hxRyIsInN1YiI6MTA5LCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.0-inL41wIoFiYQvfyRealC3Srjw3mVXAEi89aVumkSM"; // put access token
const student = {
  id_student:63360194,
  name: 'Kittaphat', // replace with your full name.
  age: 19, // put your age.
  gender: 'Male', // replace with your gender
  department: 'CPE'
};


exports.findStudentbyId = function (student_id, cb) {
  //-- call external api 
          request({
            method: "GET",
            uri: EXTERNAL_API+student_id,
            headers: {
                Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC90b29scy5lY3BlLm51LmFjLnRoXC9uZXR3b3JrXC9hcGlcL2xvZ2luIiwiaWF0IjoxNjYxNzg3ODM3LCJleHAiOjE2NjE3OTE0MzcsIm5iZiI6MTY2MTc4NzgzNywianRpIjoiUW9zRjJmSXpOTnJPVmxqUiIsInN1YiI6MTA5LCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.kRHurocS5g14LsBfHWFzffXF9AF6e0j-erf7vXrrqaI`
            }
        }).then((response) => {
            console.log('Sent');
            console.log({
                "request": student_id,
                "response": response
            });

           cb(response);

        }).catch((err) => {
            console.log('Error:', err.message);
            console.log({
                "Error": err.message
            });
        });
}

exports.fakeStudentbyInfo = function (student_id, cb) {

  cb(student);
}