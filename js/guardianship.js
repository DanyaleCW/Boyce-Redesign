
window.onload = function() {

//header
document.getElementById('name').innerHTML = 'Cynthia L. Boyce, Esq.';
document.getElementById('phonePic').innerHTML = '<img src="./images/phone.png" alt="phone">';
document.getElementById('phone').innerHTML = "347-689-7725";
//footer
document.getElementById("address").innerHTML =  ["269 Saint James Place"  + "<br>" +  "Brooklyn, NY United States"  + "<br>" + "347-689-7725" + "<br>" + "<a href='guardianship.html'>cynthia@boyce-and-associates.com</a>"];
document.getElementById("copyright").innerHTML = ["Copyright © Cynthia L. Boyce and Associates."  + "<br>" +  "All rights reserved."];
document.getElementById("license").innerHTML = "Member of the NYS Bar Association";
document.getElementById("danyale").innerHTML = "Coded by Danyale C. Walker";

 //navbar
document.getElementById("home").innerHTML = ('<a class="nav-item nav-link verticalLine" href="Home.html">Home</a>');
document.getElementById("about").innerHTML = ['<a class="nav-item nav-link verticalLine btn dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">About</a>' + " " +
'<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">' + " " +
'<a class="dropdown-item" href="About-Cynthia.html">About Cynthia L. Boyce, Esq.</a>'+ " " +
'<a class="dropdown-item" href="Disclaimer.html">Disclaimer</a></div>'];
document.getElementById("legal").innerHTML = ['<a class="nav-item nav-link verticalLine btn dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="legal-services.html">Legal <br> Services</a>' + " " +
'<div class="dropdown-menu" aria-labelledby="dropdownMenuLink" id="legal-drop">' + " " +
'<a class="dropdown-item" href="estate-planning.html">Estate Planning</a>' + " " +
'<a class="dropdown-item" href="disclaimer.html">Disclaimer</a>'];
document.getElementById("guard").innerHTML = ('<a class="nav-item nav-link verticalLine" href="Guardianship.html">Guardianship</a>');
document.getElementById("mediation").innerHTML = ('<a class="nav-item nav-link verticalLine btn"  href="Mediation.html">Mediation and <br> Conflict Resolution</a>');
document.getElementById("nonprofit").innerHTML = ['<a class="nav-item nav-link verticalLine btn dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="nonprofit.html">Nonprofit</a>' + "<br>" +
'<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">' + "<br>" +
'<a class="dropdown-item" href="management-experience">Management Experience</a>'];
document.getElementById("contactUs").innerHTML = ('<a class="nav-item nav-link" href="Contact-Us.html">Contact Us</a>');
//guardianship page
document.getElementById("guardh1").innerHTML = ("GUARDIANSHIP");
document.getElementById("guardP").innerHTML = ("Do you have a love one who needs assistance with activities of daily living and or with business matters?  For instance, does your love one need help preparing meals or taking medication or bathing or dressing or doing other ordinary daily activities?  Does your loved one need help paying bills, filing tax returns, or handling other financial matters? If this individual no longer has the capacity to make decisions regarding his or her life and the plan in place, if any, is not adequate, then please contact us to help you explore loving options. <br> Sometimes we need to turn to the courts when our loved ones need a helping hand.");
}
