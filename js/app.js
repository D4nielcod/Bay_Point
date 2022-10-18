// Top Button
const topBtn = document.querySelector(".top-btn");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 150) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

// Navigation Bar
const resBar = document.querySelector(".resbar");
const navBarMenuBtn = document.querySelector(".navbar-menu-btn");
const resBarMenuBtn = document.querySelector(".resbar-menu-btn");

navBarMenuBtn.addEventListener("click", function () {
  resBar.style.animation = "reseBarEntree 1s forwards 1";
});
resBarMenuBtn.addEventListener("click", function () {
  resBar.style.animation = "resBarExit 1s forwards 1";
});

// Section Three Know More
function knowMore(openBtn, closeBtn, textBox) {
  openBtn.addEventListener("click", function () {
    closeBtn.style.display = "block";
    openBtn.style.display = "none";
    textBox.style.animation = "sect3FootTextBox 0.3s forwards 1";
  });
}

function knowLess(openBtn, closeBtn, textBox) {
  closeBtn.addEventListener("click", function () {
    closeBtn.style.display = "none";
    openBtn.style.display = "block";
    textBox.style.animation = "sect3FootTextBoxExit 0.3s forwards 1";
  });
}

// Land Real Estate
const landOpenBtn = document.querySelector(".land-open-btn");
const landCloseBtn = document.querySelector(".land-close-btn");
const landTextBox = document.querySelector(".sect3-land-text");

knowMore(landOpenBtn, landCloseBtn, landTextBox);
knowLess(landOpenBtn, landCloseBtn, landTextBox);

// Residential Real Estate
const residentialOpenBtn = document.querySelector(".residential-open-btn");
const residentialCloseBtn = document.querySelector(".residential-close-btn");
const residentialTextBox = document.querySelector(".sect3-residential-text");

knowMore(residentialOpenBtn, residentialCloseBtn, residentialTextBox);
knowLess(residentialOpenBtn, residentialCloseBtn, residentialTextBox);

// Commercial Real Estate
const commercialOpenBtn = document.querySelector(".commercial-open-btn");
const commercialCloseBtn = document.querySelector(".commercial-close-btn");
const commercialTextBox = document.querySelector(".sect3-commercial-text");

knowMore(commercialOpenBtn, commercialCloseBtn, commercialTextBox);
knowLess(commercialOpenBtn, commercialCloseBtn, commercialTextBox);

// Industrial Real Estate
const industrialOpenBtn = document.querySelector(".industrial-open-btn");
const industrialCloseBtn = document.querySelector(".industrial-close-btn");
const industrialTextBox = document.querySelector(".sect3-industrial-text");

knowMore(industrialOpenBtn, industrialCloseBtn, industrialTextBox);
knowLess(industrialOpenBtn, industrialCloseBtn, industrialTextBox);

// Close Button Function
function closeBtn(btnName, popUPName) {
  btnName.addEventListener("click", function () {
    popUPName.style.display = "none";
  });
}

// PopUp Appear Function
function popUp(cardName, popUpName) {
  cardName.addEventListener("click", function () {
    popUpName.style.display = "block";
  });
}

// Contact Pop-up Form
const contactForm = document.getElementById("contact-form");
const contactCloseBtn = document.getElementById("contact-close-btn");
const sectionOneContactButton = document.querySelector(".sect1-contact-btn");
const footerContactButton = document.querySelector(".footer-contact-btn");

sectionOneContactButton.addEventListener("click", contactFormAppear);
footerContactButton.addEventListener("click", contactFormAppear);

function contactFormAppear() {
  contactForm.style.display = "flex";
}

closeBtn(contactCloseBtn, contactForm);

// Service Pop-up - Marketing
const marketingCard = document.querySelector(".sect2-marketing");
const marketingPopUp = document.getElementById("service-marketing");
const marketingCloseBtn = document.getElementById("marketing-popup-btn");
const footerMarketing = document.getElementById("footer-marketing");

popUp(marketingCard, marketingPopUp);
popUp(footerMarketing, marketingPopUp);
closeBtn(marketingCloseBtn, marketingPopUp);

// Service Pop-up - Pricing
const pricingCard = document.querySelector(".sect2-pricing");
const pricingPopUp = document.getElementById("service-pricing");
const pricingCloseBtn = document.getElementById("pricing-popup-btn");
const footerPricing = document.getElementById("footer-pricing");

popUp(pricingCard, pricingPopUp);
popUp(footerPricing, pricingPopUp);
closeBtn(pricingCloseBtn, pricingPopUp);

// Service Pop-up - Negotiation
const negotiationCard = document.querySelector(".sect2-negotiation");
const negotiationPopUp = document.getElementById("service-negotiation");
const negotiationCloseBtn = document.getElementById("negotiation-popup-btn");
const footerNegotiation = document.getElementById("footer-negotiation");

popUp(negotiationCard, negotiationPopUp);
popUp(footerNegotiation, negotiationPopUp);
closeBtn(negotiationCloseBtn, negotiationPopUp);

// Service Pop-up - Inspection
const inspectionCard = document.querySelector(".sect2-inspection");
const inspectionPopUp = document.getElementById("service-inspection");
const inspectionCloseBtn = document.getElementById("inspection-popup-btn");
const footerInspection = document.getElementById("footer-inspection");

popUp(inspectionCard, inspectionPopUp);
popUp(footerInspection, inspectionPopUp);
closeBtn(inspectionCloseBtn, inspectionPopUp);
