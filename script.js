let alpha = document.querySelector(".alpha");
// var alphabetss = document.createElement("img");
let pump = document.querySelector(".pump");


alphabets = [
  "Symbol%2010001.png",
  "Symbol%2010002.png",
  "Symbol%2010003.png",
  "Symbol%2010004.png",
  "Symbol%2010005.png",
  "Symbol%2010006.png",
  "Symbol%2010007.png",
  "Symbol%2010008.png",
  "Symbol%2010009.png",
  "Symbol%2010010.png",
  "Symbol%2010011.png",
  "Symbol%2010012.png",
  "Symbol%2010013.png",
  "Symbol%2010014.png",
  "Symbol%2010015.png",
  "Symbol%2010016.png",
  "Symbol%2010017.png",
  "Symbol%2010018.png",
  "Symbol%2010019.png",
  "Symbol%2010020.png",
  "Symbol%2010021.png",
  "Symbol%2010022.png",
  "Symbol%2010023.png",
  "Symbol%2010024.png",
  "Symbol%2010025.png",
  "Symbol%2010026.png",
];

let ballons = [
  "Symbol%20100001.png",
  "Symbol%20100002.png",
  "Symbol%20100003.png",
  "Symbol%20100004.png",
  "Symbol%20100005.png",
  "Symbol%20100006.png",
  "Symbol%20100007.png",
  "Symbol%20100008.png",
  "Symbol%20100009.png",
  "Symbol%20100010.png",
];

let random = Math.floor(Math.random() * 9);
let n = ballons[random];
//%20 lgana htha
// let hd = document.querySelector("#hd");
// hd.style.background = `url(${n}) no-repeat center center`;
// hd.style.backgroundSize = "contain";

//  iska hi baat kr rah th mai use kiya hu mai ykar fir
let alpharan = Math.floor(Math.random() * 25);
let n1 = alphabets[alpharan];
// iska kya sot hi
hd.setAttribute("src", n1);
let defult = 25;

let px = "px";
let h = (hd.style.height = defult + px);
hd.style.width = defult;
hd.style.backgroundSize = "cover";

function myMove() {
  let pos = 0;
  // Ensure the 'hd' element has a position property (if not already set in CSS)
  element.style.position = "absolute"; // or relative, depending on your layout

  let id = setInterval(frame, 10);
console.log("ujs")
  function frame() {
    if (pos >= 350) {
      clearInterval(id);
    } else {
      pos++;
      element.style.bottom = pos + "px"; // Move 'hd' down
      element.style.left = pos + "px"; // Move 'hd' right
    }
  }
}

// const bal = () => {
//   hd.style.display = "block";
//   defult = defult + defult; //ye ek baar bdne ke baad str ho ja rga hai
//   hd.style.height = defult + px;

//   hd.style.width = defult + px;

// last value 160 rehega rahegi uske badkok 3 bar click hona chaiye 320 hi rakh jada bda ho ja

//   if (defult == 200) {
//     hd.style.height = "200px";

//     hd.style.width = "200px";

//     myMove();

//     if(defult<=200){//samll

//       setTimeout(() => {
//         hd.style.display = "none";// ye tru nhi ihi raha hi
//       }, 4000);
//     defult=200;

//       console.log('first')

//     }
//   }
// };
var element = document.createElement("img");
let minval=25 ;
let maxval=200;
// Initial size

// const click = () => {
//     hd.style.display = "block";
//   defult = defult + defult; //ye ek baar bdne ke baad str ho ja rga hai
//   hd.style.height = defult + px;

//   hd.style.width = defult + px;

//   if (defult > 200) {
//     hd.style.width = "200px";
//     hd.style.height = "200px";

//     myMove();

//     //samll

//       setTimeout(() => {
//         hd.style.display = "none";
//         delete hd
//       }, 1500);

//     let alpha = document.querySelector(".alpha");
// alpha.appendChild(element);
//  if(element){
//   console.log("rfjc")
//  }

// // Random selection of balloon image
// let random = Math.floor(Math.random() * 9);
// let n = ballons[random];  // Random balloon image from the ballons array
// // element.style.background = `url(${n}) no-repeat center center`;

// // element.setAttribute("src", n1);
// console.log(n) // Set background image
// element.style.backgroundSize = "contain";

// // alpha.appendChild(imgElement);

// // Ensure the background image fits
// // maachud gai code
// // Random selection of alphabet image
// let alpharan = Math.floor(Math.random() * alphabets.length);
// let n1 = alphabets[alpharan];  // Random alphabet image from the alphabets array
// element.setAttribute("src", n);

// element.style.background = `url(${n}) no-repeat center center`;
// element.style.backgroundSize = "contain";

// //  iska hi baat kr rah th mai use kiya hu mai ykar fir
// // iska kya sot hi
// element.setAttribute("src", n1);

// element.setAttribute("backgroundSize", 'contain');

// // Append the img element to the div

// let defalut2=25

// if(defalut2<200){

//   defalut2=defalut2+defalut2;
//   alpha.style.height=defalut2+"px"
//   alpha.style.width=defalut2+"px"
//   console.log(
//     'he'
//   )

// }else if(defalut2>200){
//   defalut2=25;
//   console.log('my')
// }

//     }

// };
alpha.appendChild(element);

  

  // let random = Math.floor(Math.random() * 9);
  // let n = ballons[random];

  console.log(n);
  element.style.backgroundSize = "contain";
  element.style.width = "25px"
  element.style.height = "25px"

  // let alpharan = Math.floor(Math.random() * alphabets.length);
  // let n1 = alphabets[alpharan]; // Random alphabet image from the alphabets array
  element.setAttribute("src", n);

  element.style.background = `url(${n}) no-repeat center center`;
  element.style.backgroundSize = "contain";

  //  iska hi baat kr rah th mai use kiya hu mai ykar fir
  // iska kya sot hi
  element.setAttribute("src", n1);

  element.setAttribute("backgroundSize", "contain");



  const multi=()=>{
    var element2 = document.createElement("img");
   alpha.appendChild(element2);
  console.log(n);
  element2.style.backgroundSize = "contain";
  element2.style.width = "25px"
  element2.style.height = "25px"   

  // let alpharan = Math.floor(Math.random() * alphabets.length);
  // let n1 = alphabets[alpharan]; // Random alphabet image from the alphabets array
  element2.setAttribute("src", n);

  element2.style.background = `url(${n}) no-repeat center center`;
  element2.style.backgroundSize = "contain";

  //  iska hi baat kr rah th mai use kiya hu mai ykar fir
  // iska kya sot hi
  element2.setAttribute("src", n1);

  element2.setAttribute("backgroundSize", "contain");

    let min2=25;
    let max2=20;

    if (min2 < max2) {
      console.log("if")
      min2 = min2 + min2;
      element.style.height = min2 + "px";
      element.style.width = min2 + "px";
      console.log(min2)
     
    } else if (min2 >= 200) {
      myMove();
      setTimeout(()=>{
      
        element2.remove();
        element2.style.height = 200+ "px";
        element2.style.width = 200+ "px";
      
  },1500)
}
  }

let click = () => {
  

  // Append the img element to the div

 

  if (minval < maxval) {
    console.log("if")
    minval = minval + minval;
    element.style.height = minval + "px";
    element.style.width = minval + "px";
    console.log(minval)
   
  } else if (minval >= 200) {
    myMove();
    setTimeout(()=>{
    
      element.remove();
      element.style.height = 200+ "px";
      element.style.width = 200+ "px";

setTimeout(()=>{

  multi();
 
// Initial size

// const click = () => {
//     hd.style.display = "block";
//   defult = defult + defult; //ye ek baar bdne ke baad str ho ja rga hai
//   hd.style.height = defult + px;

//   hd.style.width = defult + px;

//   if (defult > 200) {
//     hd.style.width = "200px";
//     hd.style.height = "200px";

//     myMove();

//     //samll

//       setTimeout(() => {
//         hd.style.display = "none";
//         delete hd
//       }, 1500);

//     let alpha = document.querySelector(".alpha");
// alpha.appendChild(element);
//  if(element){
//   console.log("rfjc")
//  }

// // Random selection of balloon image
// let random = Math.floor(Math.random() * 9);
// let n = ballons[random];  // Random balloon image from the ballons array
// // element.style.background = `url(${n}) no-repeat center center`;

// // element.setAttribute("src", n1);
// console.log(n) // Set background image
// element.style.backgroundSize = "contain";

// // alpha.appendChild(imgElement);

// // Ensure the background image fits
// // maachud gai code
// // Random selection of alphabet image
// let alpharan = Math.floor(Math.random() * alphabets.length);
// let n1 = alphabets[alpharan];  // Random alphabet image from the alphabets array
// element.setAttribute("src", n);

// element.style.background = `url(${n}) no-repeat center center`;
// element.style.backgroundSize = "contain";

// //  iska hi baat kr rah th mai use kiya hu mai ykar fir
// // iska kya sot hi
// element.setAttribute("src", n1);

// element.setAttribute("backgroundSize", 'contain');

// // Append the img element to the div

// let defalut2=25

// if(defalut2<200){

//   defalut2=defalut2+defalut2;
//   alpha.style.height=defalut2+"px"
//   alpha.style.width=defalut2+"px"
//   console.log(
//     'he'
//   )

// }else if(defalut2>200){
//   defalut2=25;
//   console.log('my')
// }

//     }

// };





},1500)
},1500)
    
    console.log("my");
  }
};

pump.addEventListener("click", click);
