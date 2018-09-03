//header
const header = {
  name: "Cynthia L. Boyce and Associates",
  phone: "347-689-7725",
  phonePic: '<img src="phone.png" alt="phone">'
};

document.getElementById("name").innerHTML = header.name;
document.getElementById("phone").innerHTML = "CALL US" + " " + header.phone;
document.getElementById("phonePic").innerHTML = header.phonePic;


//footer
const footer = {
  address: ["269 Saint James Place","Brooklyn NY United States", "347-689-7725", "<a href='guardianship.html' target='_blank'>cynthia@boyce-and-associates.com</a>"],
  copyright: ["Copyright © Cynthia L. Boyce and Associates.","All rights reserved."],
  danyale: "Coded by Danyale C. Walker"
};

document.getElementById("address").innerHTML = footer.address[0] + " " + "<br>" + footer.address[1] + " " + "<br>" + footer.address[2] + " " + "<br>" + footer.address[3];
document.getElementById("copyright").innerHTML = footer.copyright[0] + " " + "<br>" + footer.copyright[1];
document.getElementById("danyale").innerHTML = footer.danyale;


//section middle
const info = {
  resp: "WE PROVIDE RESPONSIVE, EMPOWERING EXCELLENCE!",
  med: "MEDIATION - ARBITRATION - CONFLICT RESOLUTION <br> FACILITATION - TRAINING - GUARDIANSHIP - LAW - GRANT WRITING - SPEAKING",
  never: "NEVER BE LIMITED BY OTHER PEOPLE'S LIMITED IMAGINATIONS.  DR. MAE JEMISON",
  signUp: "Sign up for free updates in law and or conflict resolution",
  contact: '<a class="nav-item nav-link" href="contact.html" target="_blank">Contact Us</a>'
};

document.getElementById("resp").innerHTML = info.resp;
document.getElementById("med").innerHTML = info.med;
document.getElementById("never").innerHTML = info.never;
document.getElementById("signup").innerHTML = info.signUp;
document.getElementById("contact").innerHTML = info.contact;


//section with cards
 const homeSection = {
   guardLink: '<a href="guardianship.html" target="_blank">Guardianship</a>',
   guardText: "Do you know someone who needs assistance with daily activities or with handling finances? Contact us for caring and sensitive legal help.",
   nonprofitLink: '<a href="nonprofit.html" target="_blank">Nonprofit Organization</a>',
   nonprofitText: "Contact us to help you create solutions resolving internal conflicts using mediation, facilitation, training and other individualized and empowering techniques. Sign up to get free updates on conflict resolution and nonprofit issues."
 };

 document.getElementById("guardLink").innerHTML = homeSection.guardLink;
 document.getElementById("guardText").innerHTML = homeSection.guardText;
 document.getElementById("nonprofitLink").innerHTML = homeSection.nonprofitLink;
 document.getElementById("nonprofitText").innerHTML = homeSection.nonprofitText;

 //navbar
 const navBar = {
   home: ['<a class="nav-item nav-link verticalLine btn dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="home.html">Home</a>',
   '<div class="dropdown-menu" aria-labelledby="dropdownMenuLink" id="planning">',
   '<a class="dropdown-item" href="about.html" target="_blank">Estate Planning</a>',
   '<a class="dropdown-item" href="inspiration.html" target="_blank">Inspirational Quotes</a>',
   '<a class="dropdown-item" href="posts-blog.html">Posts/Blog</a>',
   '<a class="dropdown-item" href="resources.html" target="_blank">Resources</a></div>'],
   legal: ['<a class="nav-item nav-link verticalLine btn dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="legal-services.html">Legal <br> Services</a>',
   '<div class="dropdown-menu" aria-labelledby="dropdownMenuLink" id="legal-drop">',
   '<a class="dropdown-item" href="estate-planning.html" target="_blank">Estate Planning</a>',
   '<a class="dropdown-item" href="speaking.html" target="_blank">Speaking</a>',
   '<a class="dropdown-item" href="jursidication.html" target="_blank">Jurisdiction</a>',
   '<a class="dropdown-item" href="disclaimer.html" target="_blank">Disclaimer</a>',
   '<a class="dropdown-item" href="advertisement.html" target="_blank">Advertisement</a>',
   '<a class="dropdown-item" href="credits.html" target="_blank">Credits</a></div>'],
   guard: '<a class="nav-item nav-link verticalLine" href="guardianship.html" target="_blank">Guardianship</a>',
   med: ['<a class="nav-item nav-link verticalLine btn dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="mediation.html" target="_blank">Mediation and <br> Credit Resolution</a>',
   '<div class="dropdown-menu" aria-labelledby="dropdownMenuLink"><a class="dropdown-item" href="mediation-services.html" target="_blank">Mediation Services</a>',
  '<a class="dropdown-item" href="family-conflicts.html" target="_blank">Family Conflicts</a>',
  '<a class="dropdown-item" href="training.html" target="_blank">Training</a></div>'],
  nonprofit: ['<a class="nav-item nav-link verticalLine btn dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="nonprofit.html" target="_blank">Nonprofit</a>',
  '<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">',
  '<a class="dropdown-item" href="management-experience">Management Experience</a>',
  '<a class="dropdown-item" href="speaking.html" target="_blank">Speaking</a></div>'],
  contactUs: '<a class="nav-item nav-link verticalLine" href="contact.html" target="_blank">Contact Us</a>'
 };

document.getElementById("home").innerHTML = navBar.home[0] + navBar.home[1] + navBar.home[2] + navBar.home[3] + navBar.home[4] + navBar.home[5];

document.getElementById("legal").innerHTML = navBar.legal[0] + navBar.legal[1] + navBar.legal[2] + navBar.legal[3] + navBar.legal[4] + navBar.legal[5]+ navBar.legal[6]+ navBar.legal[7];

document.getElementById("guard").innerHTML = navBar.guard;

document.getElementById("mediation").innerHTML = navBar.med[0] + navBar.med[1] + navBar.med[2] + navBar.med[3];

document.getElementById("nonprofit").innerHTML = navBar.nonprofit[0] + navBar.nonprofit[1] + navBar.nonprofit[2] + navBar.nonprofit[3];

document.getElementById("contactUs").innerHTML = navBar.contactUs;
