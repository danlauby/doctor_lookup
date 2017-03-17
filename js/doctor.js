var apiKey = require('./../.env').apiKey;

function Doctor(){}

Doctor.prototype.getDoctorNames = function(medicalIssue) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey).then(function(response) {
    console.log(response);
    for(var i = 0; i < response.data.length; i++) {
      $('#doctor_list').append("<li>" + response.data[i].profile.first_name + " " + response.data[i].profile.last_name + "</li>");
    }
  }).fail(function(error) {
    $('#doctor_list').text(error.responseJSON.message);
  });
};

exports.doctorModule = Doctor;
