var Doctors = require("./../js/doctors.js").doctorsModule;

 $(function() {
   var currentDoctorsList = new Doctors();
  //  currentDoctorsList.getDoctors();
    $('#find_doctor').click(function() {
      var medical_issue = $('#medical_issue').val();
      $('#medical_issue').val("");
      $('#doctor_list').append(currentDoctorsList.getDoctors(medical_issue));
    });
 });
