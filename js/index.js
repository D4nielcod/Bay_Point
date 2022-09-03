// Top Button
const topBtn = document.querySelector(".top-btn");

window.onscroll = function () {
  if (document.documentElement.scrollTop > 150) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

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

// Navigation Bar
const mainBody = document.querySelector(".main-body");
const navBar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const responsiveBar = document.querySelector(".responsive");
const responsiveCloseBtn = document.querySelector(".responsive-close-btn");

menuBtn.addEventListener("click", function () {
  responsiveBar.style.animation = "responsiveBarAppear 1s forwards 1";
  mainBody.style.display = "none";
});
responsiveCloseBtn.addEventListener("click", function () {
  responsiveBar.style.animation = "responsiveBarDisappear 1s forwards 1";
  mainBody.style.display = "block";
});

// Contact Pop-up Form
const contactForm = document.querySelector(".contact-form");
const contactCloseBtn = document.querySelector(".contact-close-btn");
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
const marketingPopUp = document.querySelector(".service-marketing");
const marketingCloseBtn = document.querySelector(".service-marketing-close");

popUp(marketingCard, marketingPopUp);
closeBtn(marketingCloseBtn, marketingPopUp);

// Service Pop-up - Pricing
const pricingCard = document.querySelector(".sect2-pricing");
const pricingPopUp = document.querySelector(".service-pricing");
const pricingCloseBtn = document.querySelector(".service-pricing-close");

popUp(pricingCard, pricingPopUp);
closeBtn(pricingCloseBtn, pricingPopUp);

// Service Pop-up - Negotiation
const negotiationCard = document.querySelector(".sect2-negotiation");
const negotiationPopUp = document.querySelector(".service-negotiation");
const negotiationCloseBtn = document.querySelector(
  ".service-negotiation-close"
);

popUp(negotiationCard, negotiationPopUp);
closeBtn(negotiationCloseBtn, negotiationPopUp);

// Service Pop-up - Inspection
const inspectionCard = document.querySelector(".sect2-inspection");
const inspectionPopUp = document.querySelector(".service-inspection");
const inspectionCloseBtn = document.querySelector(".service-inspection-close");

popUp(inspectionCard, inspectionPopUp);
closeBtn(inspectionCloseBtn, inspectionPopUp);

// Resort Pop-up - Image 1
const sectionFourImageOne = document.querySelector(".sect4-img1");
const resortImageOne = document.querySelector(".resort-img1");
const resortCloseBtnOne = document.querySelector(".resort-img1-close");

popUp(sectionFourImageOne, resortImageOne);
closeBtn(resortCloseBtnOne, resortImageOne);

// Resort Pop-up - Image 2
const sectionFourImageTwo = document.querySelector(".sect4-img2");
const resortImageTwo = document.querySelector(".resort-img2");
const resortCloseBtnTwo = document.querySelector(".resort-img2-close");

popUp(sectionFourImageTwo, resortImageTwo);
closeBtn(resortCloseBtnTwo, resortImageTwo);

// Resort Pop-up - Image 3
const sectionFourImageThree = document.querySelector(".sect4-img3");
const resortImageThree = document.querySelector(".resort-img3");
const resortCloseBtnThree = document.querySelector(".resort-img3-close");

popUp(sectionFourImageThree, resortImageThree);
closeBtn(resortCloseBtnThree, resortImageThree);

// Resort Pop-up - Image 4
const sectionFourImageFour = document.querySelector(".sect4-img4");
const resortImageFour = document.querySelector(".resort-img4");
const resortCloseBtnFour = document.querySelector(".resort-img4-close");

popUp(sectionFourImageFour, resortImageFour);
closeBtn(resortCloseBtnFour, resortImageFour);

// Team - Worker 1
const sectionSevenWorkerOne = document.querySelector(".img-worker1");
const workerOneCloseBtn = document.querySelector(".team-worker1-close");
const workerOnePopUp = document.querySelector(".team-worker1");

popUp(sectionSevenWorkerOne, workerOnePopUp);
closeBtn(workerOneCloseBtn, workerOnePopUp);

// Team - Worker 2
const sectionSevenWorkerTwo = document.querySelector(".img-worker2");
const workerTwoCloseBtn = document.querySelector(".team-worker2-close");
const workerTwoPopUp = document.querySelector(".team-worker2");

popUp(sectionSevenWorkerTwo, workerTwoPopUp);
closeBtn(workerTwoCloseBtn, workerTwoPopUp);

// Team - Worker 3
const sectionSevenWorkerThree = document.querySelector(".img-worker3");
const workerThreeCloseBtn = document.querySelector(".team-worker3-close");
const workerThreePopUp = document.querySelector(".team-worker3");

popUp(sectionSevenWorkerThree, workerThreePopUp);
closeBtn(workerThreeCloseBtn, workerThreePopUp);

// Team - Worker 4
const sectionSevenWorkerFour = document.querySelector(".img-worker4");
const workerFourCloseBtn = document.querySelector(".team-worker4-close");
const workerFourPopUp = document.querySelector(".team-worker4");

popUp(sectionSevenWorkerFour, workerFourPopUp);
closeBtn(workerFourCloseBtn, workerFourPopUp);

// Team - Worker 5
const sectionSevenWorkerFive = document.querySelector(".img-worker5");
const workerFiveCloseBtn = document.querySelector(".team-worker5-close");
const workerFivePopUp = document.querySelector(".team-worker5");

popUp(sectionSevenWorkerFive, workerFivePopUp);
closeBtn(workerFiveCloseBtn, workerFivePopUp);

// Team - Worker 6
const sectionSevenWorkerSix = document.querySelector(".img-worker6");
const workerSixCloseBtn = document.querySelector(".team-worker6-close");
const workerSixPopUp = document.querySelector(".team-worker6");

popUp(sectionSevenWorkerSix, workerSixPopUp);
closeBtn(workerSixCloseBtn, workerSixPopUp);
