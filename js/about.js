
const about = {
  nameCyn: "CYNTHIA L. BOYCE, ESQ.",
  about1: "Cynthia L. Boyce is licensed to practice law in the State of New York.",
  educationHeader: "EDUCATION",
  education: ["Harvard Law School - JD",
  "Wharton Graduate School - MBA",
  "Cornell University - BA",
  "Magna Cum Laude",
  "Phi Beta Kappa"],
  communitySer: "COMMUNITY SERVICE",
  community: ["President of the St. James Pl. Block Association",
  "Former Member of the Board of the Fulton Street Revival Local Development Corporation and the Bedford Stuyvesant Legal Services Corporation",
  "Former Member of the Board and Mediator for Brooklyn Mediation Center, NYS Supreme Court, U.S. District Court for Eastern District of NY, and Assoc. for Conflict Resolution of Greater NY"],
  services: "SERVICES",
  servicesPara: "Cynthia L. Boyce & Associates is a firm that is experienced in conflict resolution. The firm can help you with mediation, arbitration, and, if the first two do not work, litigation. The firm can help you with estate planning, home ownership, and nonprofit management. If you need to set up business entities, such as a sole proprietorship, partnerships, and corporations, professional limited liability companies, limited liability companies, and nonprofits. Once your nonprofit has been established they will ensure you maintain your nonprofit status.",
  contact: "If you require assistance, no matter how big or small, please contact us.",
  contactButton: '<a class="nav-item nav-link" href="Contact-Us.html">Contact Us</a>'
};

document.getElementById("nameCyn").innerHTML = about.nameCyn;
document.getElementById("about1").innerHTML = about.about1;
document.getElementById("educationHeader").innerHTML = about.educationHeader;
document.getElementById("education").innerHTML = about.education[0] + "<br>" + about.education[1] + "<br>" + about.education[2] + "<br>" + about.education[3] + "<br>" + about.education[4];
document.getElementById("communitySer").innerHTML = about.communitySer;
document.getElementById("community").innerHTML = about.community[0] + "<br>" + about.community[1] + "<br>" + about.community[2];
document.getElementById("services").innerHTML = about.services;
document.getElementById("servicesPara").innerHTML = about.servicesPara;
document.getElementById("contact").innerHTML = about.contact;
document.getElementById("contactButton").innerHTML = about.contactButton;
