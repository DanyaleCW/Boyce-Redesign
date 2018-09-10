
const disclaimer = {
   disc: "DISCLAIMER",
   discPara: ['The material in this website is presented for general information purposes only. Cynthia L. Boyce & Associates (sometimes referenced as the "Firm") does not guarantee that the materials on the website, blogs, links or other attachments or materials referenced herein are correct, complete or up to date. Nothing herein constitutes legal advice and does not substitute for consultation with a licensed attorney about specific matters. No one should rely on the materials in this website or materials attached to or referenced by the website without retaining an attorney or other licensed professional. Moreover, Cynthia L. Boyce & Associates does not endorse third parties, if any, referenced or cited and materials provided or cited by third parties does not necessarily reflect the opinions of Cynthia L. Boyce & Associates or any parties affiliated with this Firm.', 'Viewing these materials or contacting Cynthia L. Boyce & associates does not create an attorney-client relationship. This website does not create a contract with any viewer. Sending an email, calling or otherwise contacting Cynthia L. Boyce & Associates does not contractually obligate Cynthia L. Boyce & Associates to represent you as your attorney. Cynthia L. Boyce & Associates cannot serve as your attorney unless the Firm and you expressly agree, in writing, that we will serve as your attorney.', 'This website, blogs, attachments, links or other materials, if any, referenced in this website may be considered advertisement in some jurisdictions under the applicable law and ethical rules. Do not make a decision to select an attorney or mediator based solely on advertisements.']
};

document.getElementById("disc").innerHTML = disclaimer.disc;
document.getElementById("discPara").innerHTML = "<p>" + disclaimer.discPara[0] + "</p>" + "<p>" + disclaimer.discPara[1] + "</p>" + "<p>" + disclaimer.discPara[2]+ "</p>";
