var apiKey = require('./../.env').apiKey;

function Doctor(){
}

Doctor.prototype.getDoctor = function(medicalIssue) {
   $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=2&user_key=' + apiKey).then(function(response) {
     console.log(response);
    $('#doctor_list').text(response.data[0].profile.first_name + " " + response.data[0].profile.last_name);
  }).fail(function(error) {
    $('#doctor_list').text(error.responseJSON.message);
  });
};

exports.doctorModule = Doctor;
