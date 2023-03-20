 
let buttonSingUp = document.getElementById("singUp");
buttonSingUp.addEventListener("click",()=> {window.location.href = "https://www.nos.nl"});

let userName= document.getElementById("userName");
let password= document.getElementById("password");

var person = 
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }
  

 
var submit = document.getElementById('submit');

var submitAction = sub

let  newpage = ()=> {
if (userName.value.match(person.email)) {

    window.location.href = "https://www.nos.nl";



}}

submit.addEventListener("click",
newpage
)




















