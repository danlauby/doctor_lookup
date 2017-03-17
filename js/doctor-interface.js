var Doctor = require('./../js/doctor.js').doctorModule;

$(document).ready(function() {
  var currentDoctor = new Doctor();
  $('#find_doctor').click(function() {
    var medical_issue = $('#medical_issue').val();
    $('#medical_issue').val("");
    currentDoctor.getDoctorNames(medical_issue);
    $('doctor_list').text("");
  });
});
