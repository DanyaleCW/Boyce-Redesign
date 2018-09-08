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
  address: ["269 Saint James Place","Brooklyn NY United States", "347-689-7725", "<a href='guardianship.html'>cynthia@boyce-and-associates.com</a>"],
  copyright: ["Copyright © Cynthia L. Boyce and Associates.", "All rights reserved."],
  license: "Member of the NYS Bar Association",
  danyale: "Coded by Danyale C. Walker"
};

document.getElementById("address").innerHTML = footer.address[0] + " " + "<br>" + footer.address[1] + " " + "<br>" + footer.address[2] + " " + "<br>" + footer.address[3];
document.getElementById("copyright").innerHTML = footer.copyright[0] + " " + "<br>" + footer.copyright[1];
document.getElementById("license").innerHTML = footer.license;
document.getElementById("danyale").innerHTML = footer.danyale;

 //navbar
 const navBar = {
   home: '<a class="nav-item nav-link verticalLine" href="Home.html">Home</a>',
   about: ['<a class="nav-item nav-link verticalLine btn dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">About</a>',
   '<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">',
   '<a class="dropdown-item" href="About-Cynthia.html">About Cynthia L. Boyce, Esq.</a>',
   '<a class="dropdown-item" href="Disclaimer.html">Disclaimer</a></div>'],
   legal: ['<a class="nav-item nav-link verticalLine btn dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="legal-services.html">Legal <br> Services</a>',
   '<div class="dropdown-menu" aria-labelledby="dropdownMenuLink" id="legal-drop">',
   '<a class="dropdown-item" href="estate-planning.html">Estate Planning</a>',
   '<a class="dropdown-item" href="disclaimer.html">Disclaimer</a>',
   '<a class="dropdown-item" href="credits.html">Credits</a></div>'],
   guard: '<a class="nav-item nav-link verticalLine" href="Guardianship.html">Guardianship</a>',
   med: '<a class="nav-item nav-link verticalLine btn"  href="Mediation.html">Mediation and <br> Conflict Resolution</a>',
  nonprofit: ['<a class="nav-item nav-link verticalLine btn dropdown-toggle" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="nonprofit.html">Nonprofit</a>',
  '<div class="dropdown-menu" aria-labelledby="dropdownMenuLink">',
  '<a class="dropdown-item" href="management-experience">Management Experience</a>'],
  contactUs: '<a class="nav-item nav-link" href="Contact-Us.html">Contact Us</a>'
 };
document.getElementById("home").innerHTML = navBar.home;

document.getElementById("about").innerHTML = navBar.about[0] + navBar.about[1] + navBar.about[2] + navBar.about[3];

document.getElementById("legal").innerHTML = navBar.legal[0] + navBar.legal[1] + navBar.legal[2] + navBar.legal[3] + navBar.legal[4];

document.getElementById("guard").innerHTML = navBar.guard;

document.getElementById("mediation").innerHTML = navBar.med;

document.getElementById("nonprofit").innerHTML = navBar.nonprofit[0] + navBar.nonprofit[1] + navBar.nonprofit[2];

document.getElementById("contactUs").innerHTML = navBar.contactUs;

//HOME PAGE MAIN SECTION
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
   guardLink: '<a href="guardianship.html">Guardianship</a>',
   guardText: "Do you know someone who needs assistance with daily activities or with handling finances? Contact us for caring and sensitive legal help.",
   nonprofitLink: '<a href="nonprofit.html">Nonprofit Organization</a>',
   nonprofitText: "Contact us to help you create solutions resolving internal conflicts using mediation, facilitation, training and other individualized and empowering techniques. Sign up to get free updates on conflict resolution and nonprofit issues."
 };

 document.getElementById("guardLink").innerHTML = homeSection.guardLink;
 document.getElementById("guardText").innerHTML = homeSection.guardText;
 document.getElementById("nonprofitLink").innerHTML = homeSection.nonprofitLink;
 document.getElementById("nonprofitText").innerHTML = homeSection.nonprofitText;
