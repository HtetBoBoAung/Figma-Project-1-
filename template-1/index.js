let projects = [
     {
          id: 1,
          image: "./image/image-1.png",
          name: "Tonic",
          jobs: ["Canopy","Back End Dev", 2015],
          details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi molestiae nihil inventore.",
          techs: ["html", "css", "javaScript"],
          moreTechs: ["HTML", "CSS", "JavaScript", "Ruby", "Bootstrap"],
          info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.",
          liveVersion: "",
          sourceCode: "",
          about: "See Project",
     },
     {
          id: 2,
          image: "image/image-2.png",
          name: "Multi-Post Stories",
          jobs: ["FACEBOOK","Full Stack Dev", 2015],
          details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi molestiae nihil inventore.",
          techs: ["html", "Ruby on rails", "css", "javaScript"],
          moreTechs: ["HTML", "CSS", "JavaScript", "Ruby", "Bootstrap"],
           info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.",
          liveVersion: "",
          sourceCode: "",
          about: "See Project",
     },
     {
          id: 3,
          image: "image/image-3.png",
          name: "Facebook 360",
          jobs: ["FACEBOOK","Full Stack Dev", 2015],
          details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi molestiae nihil inventore.",
          techs: ["html", "Ruby on rails", "css", "javaScript"],
          moreTechs: ["HTML", "CSS", "JavaScript", "Ruby", "Bootstrap"],
           info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.",
          liveVersion: "",
          sourceCode: "",
          about: "See Project",
     },
     {
          id: 4,
          image: "image/image-4.png",
          name: "Uber Navigation",
          jobs: ["Uber","Lead Developer", 2015],
          details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi molestiae nihil inventore.",
          techs: ["html", "Ruby on rails", "css", "javaScript"],
          moreTechs: ["HTML", "CSS", "JavaScript", "Ruby", "Bootstrap"],
           info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum han printer took a galley of type and scrambled it 1960s with the releawn printer took a galley of type and scrambled it 1960s.",
          liveVersion: "",
          sourceCode: "",
          about: "See Project",
     },
]

const cardSection = document.getElementById("card-section");
const navBtn = document.getElementById("nav-menu");
const menuContainer = document.querySelector(".menu-container");
const filter = document.querySelector(".filter");
const detailContainer = document.querySelector(".detail-container");
const closeBtn = document.querySelector(".close-btn");

const textInput = document.getElementById('input');
const gmailInput = document.getElementById("gmail-input");
const textDetail = document.getElementById("textdetail");
const userBtn = document.querySelector(".contact-btn");

const arrays =[];

function displayNavBar(){
     menuContainer.classList.add("block");
}

function closefunction(){
     menuContainer.style.display = "none";

}

function displayCard(){

     projects.forEach((item) => {
          let article = document.createElement("article");
          article.classList.add("card-container");
          article.innerHTML = `
          <img src=${item.image} alt="image" class="image-container" />
                         <div class="info-div">
                              <div class="title-list">
                                   <h2 class="info-title">${item.name}</h2>
                                   <ul class="info-title-list">
                                        <h3 class="title">${item.jobs[0]}</h3>
                                        <li class="text-list">
                                             <img src="image/Counter.png" alt="circle" class="circle">
                                             <p class="info-text">${item.jobs[1]}</p>
                                             <img src="image/Counter.png" alt="circle" class="circle">
                                             <p class="info-text">${item.jobs[2]}</p>
                                        </li>
                                   </ul>
                              </div>
          
                              <p class="info-para">${item.details}</p>
                              <ul class="btn-list">
                                   <button class="btn">${item.techs[0]}</button>
                                   <button class="btn">${item.techs[1]}</button>
                                   <button class="btn">${item.techs[2]}</button>
                              </ul>
                              <button class="link-btn" data-id=${item.id}>${item.about}</button>
                         </div>`
                    cardSection.append(article);
     });

     const linkButtons = document.querySelectorAll(".link-btn");

     linkButtons.forEach((btn) => {
          btn.addEventListener("click", (e) => {
               let Id = e.target.dataset.id;
               const result = projects.filter((project) => project.id == Id);
               // return result;
               console.log(result);
          
               let div = document.createElement("div");
               div.classList.add("detail-container");
               div.innerHTML = `
               
               <div class="h-f">
               <div class="header-frame">
                    <h2 class="see-more-card-header">${result[0].name}</h2>
                    <img src="image/Icon - Cancel.png" alt="image" class="close-image">
               </div>

               <ul class="info-title-list techs_list">
                    <h3 class="title">${result[0].jobs[0]}</h3>
                    <li class="text-list">
                         <img src="image/Counter.png" alt="circle" class="circle">
                         <p class="info-text">${result[0].jobs[1]}</p>
                         <img src="image/Counter.png" alt="circle" class="circle">
                         <p class="info-text">${result[0].jobs[2]}</p>
                    </li>
               </ul>
               </div>

               <img src=${result[0].image} alt="" class="product-card-image">

               <article class="block-div">
                    <div class="left-block">
                         <p class="lorem-para">${result[0].info}</p>
                    </div>
                    <div class="right-block">
                         <ul class="techs-list">
                              <button class="techs-btn">${result[0].moreTechs[0]}</button>
                              <button class="techs-btn">${result[0].moreTechs[1]}</button>
                              <button class="techs-btn">${result[0].moreTechs[2]}</button>
                              <button class="techs-btn">${result[0].moreTechs[3]}</button>
                              <button class="techs-btn">${result[0].moreTechs[4]}</button>
                         </ul>

                         <ul class="btn-list">
                              <li class="live-btn-list">
                                   <p class="live-btn">See Live</p>
                                   <img src="image/Icon - Export.png" alt="" class="live-img">
                              </li>

                              <li class="see-source-btn-list">
                                   <p class="see-source-btn">See Source</p>
                                   <img src="image/Frame.png" alt="" class="see-source-img">
                              </li>
                         </ul>
                    </div>
               
               </article> 

               `
               cardSection.append(div);
          });

          
     });
}

function getUserInput(){
     let text = textInput.value;
     let gamilText = gmailInput.value;
     let detail = textDetail.value;

     if(text == "" || 
        gamilText == "" ||
        detail == ""){
          alert("enter the valid value");
        }
 
     const array = {
          info: {
               text,
               gamilText,
               detail,
          },
     };

     arrays.push(array);

     console.log(array.info);
}

window.addEventListener("DOMContentLoaded", displayCard);
navBtn.addEventListener("click", displayNavBar);
closeBtn.addEventListener("click", closefunction);
userBtn.addEventListener("click", getUserInput);