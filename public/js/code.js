
const navButs = document.querySelectorAll('.menu-inputs');

navButs.forEach((elem)=>{
  elem.addEventListener('change', (e)=>{
    if(e.target.id != "carnada-bait"){
      document.getElementById('header').style.animationName= "upVeilFirst";
      document.getElementById('header').style.height= "100vh";
    } else{
      document.getElementById('header').style.animationName= "downVeilFirst";
      document.getElementById('header').style.height= "10vh";
    }
  });
})
