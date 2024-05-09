// variables and functions to change Page Modes
function random(number) {
    return Math.floor(Math.random() * (number + 1));
  }

function navMode(mode){
  const signUpContainer = document.querySelector(".sign-up-container");
  const cardImage = document.getElementsByClassName("cardImage");
  const footerContainer = document.getElementsByClassName("footer-container");
  const priceCard = document.querySelectorAll(".price-card");
  const imgContainer = document.querySelectorAll(".div-img");
  const navContainer = document.querySelector (".nav-container");
  const pricingContainer = document.querySelector(".pricing-container");
  const tableContainer = document.querySelector(".table-container");
  const partyMode = document.getElementById("partyMode");
  const bodyComponent = document.querySelector('body');
  const dayMode = document.getElementById("dayMode");
  const nightMode = document.getElementById("nightMode");
  const tableCard = document.querySelector(".table-card");
  const signUpCard = document.querySelector(".sign-up-card");
  if(mode === "day"){
      pricingContainer.style = "background-color: #535C91;";
      bodyComponent.style = "background-color: #070F2B; color: #ffffff;";
      tableCard.style = "background-color: #070F2B;";
      tableContainer.style = "background-color: #1B1A55;"
      navContainer.style = "background-color: #1B1A55;"
      footerContainer[0].style = "background-color: #9290C3";
      

        for (let i = 0; i < imgContainer.length; i++) {
          imgContainer[i].style.backgroundColor = "#1B1A55";
        }

        for (let i = 0; i < priceCard.length; i++) {
          priceCard[i].style.backgroundColor = "#1B1A55";
        }
        for (let i = 0; i < cardImage.length; i++) {
          cardImage[i].style = 'display:flex; filter: invert(1)';
        }

      dayMode.style = "display:none";
      nightMode.style = "display:flex; filter: invert(1);";

      if (window.getComputedStyle(nightMode).display === "flex") {
          signUpContainer.style = "display:flex; background-color: #535C91;";
          signUpCard.style = "background-color: rgb(27, 26, 85);";
      }
      
  }else if(mode === "night"){
      bodyComponent.style = `background-color: rgb(${random(255)} ${random(255)} ${random(255)}); color: ${random(255)}`; 
      pricingContainer.style = `background-color: rgb(${random(255)} ${random(255)} ${random(255)})`;
      tableCard.style = `background-color: rgb(${random(255)} ${random(255)} ${random(255)})`;
      tableContainer.style = `background-color: rgb(${random(255)} ${random(255)} ${random(255)})`;
      navContainer.style = `background-color: rgb(${random(255)} ${random(255)} ${random(255)})`;
      footerContainer[0].style = `background-color: rgb(${random(255)} ${random(255)} ${random(255)})`;

      for (let i = 0; i < imgContainer.length; i++) {
          imgContainer[i].style.backgroundColor = `rgb(${random(255)} ${random(255)} ${random(255)})`;
        }

        for (let i = 0; i < priceCard.length; i++) {
          priceCard[i].style.backgroundColor = `rgb(${random(255)} ${random(255)} ${random(255)})`;
        }
     
      signUpContainer.style = `display:flex; background-color: rgb(${random(255)} ${random(255)} ${random(255)}); color:white;`;
      
      nightMode.style = "display:none";
      partyMode.style = "display:flex; filter: invert(1);";
      
  }else if(mode === "party"){
      bodyComponent.style = "background-color: #F8F6E3; color: #000000";
      signUpContainer.style = "display:flex; background-color: #6AD4DD;";
      pricingContainer.style = `background-color: #6AD4DD`;
      tableCard.style = "background-color: #F8F6E3";
      tableContainer.style = "background-color: #97E7E1";
      navContainer.style = "background-color: #97E7E1";
      footerContainer[0].style = "background-color: #7AA2E3";
      signUpCard.style = `background-color: #F8F6E3`;
      for (let i = 0; i < imgContainer.length; i++) {
          imgContainer[i].style.backgroundColor = "#97E7E1";
        }

        for (let i = 0; i < priceCard.length; i++) {
          priceCard[i].style.backgroundColor = "#F8F6E3";
        }

      dayMode.style = "display:flex; filter: invert(0);";
      partyMode.style = "display:none";

      for (let i = 0; i < cardImage.length; i++) {
          cardImage[i].style = 'display:flex; filter: invert(0)';
        }
  }
}


// variables and functions to Select Packages
function selectPack(pack,container,select){
  let infoPurchase = document.getElementById("infoPurchase");
  const signUpCard = document.querySelector(".sign-up-card");
  const packData = document.getElementById("packData");
  const teamSelect = document.getElementById("teamSelect");
  const personalSelect = document.getElementById("personalSelect");
  const enterpriseSelect = document.getElementById("enterpriseSelect");
  const signUpContainer = document.querySelector(".sign-up-container");
  const priceCard = document.querySelectorAll(".price-card");
  const partyMode = document.getElementById("partyMode");
  const nightMode = document.getElementById("nightMode");
  if(select.innerHTML === "Select"){
      if(pack === 'Personal'){
          document.querySelector(`.pricing-container > div:nth-child(${container})`).style = "background-color: #7AA2E3";
          personalSelect.innerHTML = "Selected";
          teamSelect.style = "display:none";
          enterpriseSelect.style = "display:none";
          signUpContainer.style = "display:flex;";
          
          window.scrollTo({top: 3500,left: 0,behavior: "smooth",});

          packData.innerHTML = 'Personal Pack';
          priceData.innerHTML = '40$';
          
          
          if (window.getComputedStyle(nightMode).display === "flex") {
              signUpContainer.style = "display:flex; background-color: #535C91;";
              signUpCard.style = "background-color: rgb(27, 26, 85);";
          }
          
          if (window.getComputedStyle(partyMode).display === "flex") {
              signUpCard.style = `background-color: rgb(${random(255)} ${random(255)} ${random(255)});`;
              signUpContainer.style = `display:flex; background-color: rgb(${random(255)} ${random(255)} ${random(255)})`;
          }
          
      }else if(pack === 'Team'){
          document.querySelector(`.pricing-container > div:nth-child(${container})`).style = "background-color: #7AA2E3";
          teamSelect.innerHTML = "Selected";
          personalSelect.style = "display:none";
          enterpriseSelect.style = "display:none";

          signUpContainer.style = "display:flex";
          window.scrollTo({top: 3500,left: 0,behavior: "smooth",});

          packData.innerHTML = 'Team Pack';
          priceData.innerHTML = '150$';

          if (window.getComputedStyle(nightMode).display === "flex") {
              signUpContainer.style = "display:flex; background-color: #535C91;";
              signUpCard.style = "background-color: rgb(27, 26, 85);";
          }
          
          if (window.getComputedStyle(partyMode).display === "flex") {
              signUpCard.style = `background-color: rgb(${random(255)} ${random(255)} ${random(255)});`;
              signUpContainer.style = `display:flex; background-color: rgb(${random(255)} ${random(255)} ${random(255)})`;
          }

      }else if(pack === 'Enterprise'){
          document.querySelector(`.pricing-container > div:nth-child(${container})`).style = "background-color: #7AA2E3";
          enterpriseSelect.innerHTML = "Selected";
          teamSelect.style = "display:none";
          personalSelect.style = "display:none";

          signUpContainer.style = "display:flex";
          window.scrollTo({top: 3500,left: 0,behavior: "smooth",});

          packData.innerHTML = 'Enterprise Pack';
          priceData.innerHTML = '400$';

          if (window.getComputedStyle(nightMode).display === "flex") {
              signUpContainer.style = "display:flex; background-color: #535C91;";
              signUpCard.style = "background-color: rgb(27, 26, 85);";
          }
          
          if (window.getComputedStyle(partyMode).display === "flex") {
              signUpCard.style = `background-color: rgb(${random(255)} ${random(255)} ${random(255)});`;
              signUpContainer.style = `display:flex; background-color: rgb(${random(255)} ${random(255)} ${random(255)})`;
          }

      }
      document.getElementById("buyButton").style = "display:block";
      
  }else if(select.innerHTML === "Selected"){
      if(pack === 'Personal'){
          document.querySelector(`.pricing-container > div:nth-child(${container})`).style = "background-color: #";
          personalSelect.innerHTML = "Select";
          teamSelect.style = "display:block";
          enterpriseSelect.style = "display:block";

          signUpContainer.style = "display:none";

          if (window.getComputedStyle(nightMode).display === "flex") {
              for (let i = 0; i < priceCard.length; i++) {
                  priceCard[i].style.backgroundColor = "rgb(27, 26, 85)";
                }
          }

          if (window.getComputedStyle(partyMode).display === "flex") {
              for (let i = 0; i < priceCard.length; i++) {
                  priceCard[i].style.backgroundColor = `rgb(${random(255)} ${random(255)} ${random(255)})`;
                }
          }

          packData.innerHTML = '';
          
      }else if(pack === 'Team'){
          document.querySelector(`.pricing-container > div:nth-child(${container})`).style = "background-color: #F8F6E3";
          teamSelect.innerHTML = "Select";
          personalSelect.style = "display:block";
          enterpriseSelect.style = "display:block";

          if (window.getComputedStyle(nightMode).display === "flex") {
              for (let i = 0; i < priceCard.length; i++) {
                  priceCard[i].style.backgroundColor = "rgb(27, 26, 85)";
                }
          }

          if (window.getComputedStyle(partyMode).display === "flex") {
              for (let i = 0; i < priceCard.length; i++) {
                  priceCard[i].style.backgroundColor = `rgb(${random(255)} ${random(255)} ${random(255)})`;
                }
          }

          signUpContainer.style = "display:none";
          packData.innerHTML = '';
      }else if(pack === 'Enterprise'){
          document.querySelector(`.pricing-container > div:nth-child(${container})`).style = "background-color: #F8F6E3";
          enterpriseSelect.innerHTML = "Select";
          personalSelect.style = "display:block";
          teamSelect.style = "display:block";

          if (window.getComputedStyle(nightMode).display === "flex") {
              for (let i = 0; i < priceCard.length; i++) {
                  priceCard[i].style.backgroundColor = "rgb(27, 26, 85)";
                }
          }

          if (window.getComputedStyle(partyMode).display === "flex") {
              for (let i = 0; i < priceCard.length; i++) {
                  priceCard[i].style.backgroundColor = `rgb(${random(255)} ${random(255)} ${random(255)})`;
                }
          }
          signUpContainer.style = "display:none";
          packData.innerHTML = '';
      }
  }
  if((pack === 'Cancel')){
      for (let i = 0; i < priceCard.length; i++) {
          priceCard[i].style.backgroundColor = "#F8F6E3";
        }
      enterpriseSelect.innerHTML = "Select";
      teamSelect.innerHTML = "Select";
      personalSelect.innerHTML = "Select";
      personalSelect.style = "display:block";
      teamSelect.style = "display:block";
      teamSelect.innerHTML = "Select";
      enterpriseSelect.style = "display:block";
      signUpContainer.style = "display:none";
      packData.innerHTML = '';
      document.getElementById("nameData").innerHTML = '';
      document.getElementById("fullName").value = '';
      document.getElementById("emailData").innerHTML = '';
      document.getElementById("fullEmail").value = '';
      document.getElementById("telData").innerHTML = '';
      document.getElementById("fullTel").value = '';
      document.getElementById("detailsData").innerHTML = '';
      document.getElementById("fullDetails").value = '';
      document.getElementById("DOBData").innerHTML = '';
      document.getElementById("fullDateOfBirth").value = '';
      document.getElementById("colorData").innerHTML = '';
      document.getElementById("fullColos").value = '';
      document.getElementById("inputContainer").style = "display:flex";
      document.getElementById("infoPurchase").innerHTML = '';

      if (window.getComputedStyle(nightMode).display === "flex") {
          for (let i = 0; i < priceCard.length; i++) {
              priceCard[i].style.backgroundColor = "rgb(27, 26, 85)";
            }
      }

      if (window.getComputedStyle(partyMode).display === "flex") {
          for (let i = 0; i < priceCard.length; i++) {
              priceCard[i].style.backgroundColor = `rgb(${random(255)} ${random(255)} ${random(255)})`;
            }
      }
      
  }
}

function typeName(){
  let fullName;
  fullName = document.getElementById("fullName").value;
  document.getElementById("nameData").innerHTML = fullName;
  return fullName;
}

function typeEmail(){
  let email;
  email = document.getElementById("fullEmail").value;
  document.getElementById("emailData").innerHTML = email;
  
  return email;
}

function typeTel(){
  let tel;
  tel = document.getElementById("fullTel").value;
  document.getElementById("telData").innerHTML = tel;
  return tel;
}

function typeDetails(){
  let detail;
  detail = document.getElementById("fullDetails").value;
  document.getElementById("detailsData").innerHTML = detail;
  return detail;
}

function typeColor(){
  let color;
  color = document.getElementById("fullColos").value;
  document.getElementById("colorData").innerHTML = color;
  return color;
}

function typeDateOfBirth(){
  let DateOfBirth;
  DateOfBirth = document.getElementById("fullDateOfBirth").value;
  document.getElementById("DOBData").innerHTML = DateOfBirth;
  return DateOfBirth;
}


function buy(){
  let infoPurchase = document.getElementById("infoPurchase");
  if(typeDateOfBirth() && typeEmail() && typeName() && typeTel() && typeDetails()){
      document.getElementById("inputContainer").style = "display:none";
      infoPurchase.innerHTML = 'Purchase Complete !!!';
      infoPurchase.style = "color:green";
      document.getElementById("backButton").style = "display:block";
      document.getElementById("buyButton").style = "display:none";
  }else{
  
      infoPurchase.innerHTML = 'Please complete the form !!!';
  }
}


  
