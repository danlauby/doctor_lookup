var Doctors = require("./../js/doctors.js").doctorsModule;

  initMap([45.5231, -122.6765]);
  var currentWeatherObject = new Weather();
  $('#display-city').click(function() {
   var city = $('#city').val();
   $('#city').val("");
   var coords = currentWeatherObject.getWeather(city);
 });


 $(function() {
    var currentDoctorsList = new Doctors();
    $('#find-doctor').click(function() {
      var medical_issue = $('#medical_issue').val();
      $('#medical_issue').val("");
      $('#doctor_list').append(currentDoctorsList.getDoctors(medical_issue));
    });
 });
