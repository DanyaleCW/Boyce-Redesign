
const contact = {
  cont: "CONTACT US",
  three: "We offer three ways to contact us",
  emailIcon: '<img src="./images/envelope.png" alt="email icon">',
  email1: "Use the form below to send us an email. We generally reply within 24 hours.",
  phoneIcon: '<img src="./images/iphone.png" alt="phone icon">',
  phone1: "Call us at 347-689-7725.",
  mapIcon: '<img src="./images/map.png" alt="map icon">',
  map1: "Visit us at 269 Saint James Place, Brooklyn, NY, United States by appointment only. Use the map below to get directions."
};

document.getElementById("cont").innerHTML = contact.cont;
document.getElementById("three").innerHTML = contact.three;
document.getElementById("emailIcon").innerHTML = contact.emailIcon;
document.getElementById("email1").innerHTML = contact.email1;
document.getElementById("phoneIcon").innerHTML = contact.phoneIcon;
document.getElementById("phone1").innerHTML = contact.phone1;
document.getElementById("mapIcon").innerHTML = contact.mapIcon;
document.getElementById("map1").innerHTML = contact.map1;
