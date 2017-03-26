var Doctor = require('./../js/doctor.js').doctorModule;

var displayDoctor = function(firstName, lastName, doctorImg, doctorBio) {
  $('#doctor_list').append("<div class='well'><h2>" + firstName + " " + lastName + "</h2><img src='" + doctorImg +"' alt='image of Dr "+ lastName +"'><p>" + doctorBio + "</p></div>");
};

$(document).ready(function() {
  var currentDoctor = new Doctor();
  $('#find_doctor').click(function() {
    var medical_issue = $('#medical_issue').val();
    $('#medical_issue').val("");
    currentDoctor.getDoctor(medical_issue, displayDoctor);
    $('doctor_list').text("");
  });
});
