var matchMedia = window.matchMedia("(orientation: landscape)");

matchMedia.addEventListener( "change", (e) => {
    if (e.matches) {
      carr.style.width= '100%';
      arrows[1].style.display= 'none';
      arrows[0].style.display= 'none';
      carr.style.transform='translateX(0)';
    } else {
      carr.style.width= childCount*100 + '%';
      arrows[1].style.display= 'block';
      arrows[0].style.display= 'block';
    }
});

var i = 0;
const carr = document.getElementById('carr');
const childCount = document.querySelectorAll('.carr > article'). length;
const arrows = document.querySelectorAll('.carr-container > .arrow');

if (matchMedia.matches) {
  carr.style.width= '100%';
  arrows[1].style.display= 'none';
  arrows[0].style.display= 'none';
  carr.style.transform='translateX(0)';
} else {
  carr.style.width= childCount*100 + '%';
  arrows[1].style.display= 'block';
  arrows[0].style.display= 'block';
}
const moveCarr=(left)=>{
  if(left){
    if(i <= 0){
      i = childCount-1;
    } else{
      i--;
    }
    let move = -i * 100/childCount + '%';
    carr.style.transform='translateX('+move+')';
  } else{
    if(i >= childCount-1){
      i = 0;
    } else{
      i++;
    }
    let move = -i * 100/childCount + '%';
    carr.style.transform='translateX('+move+')';
  }
}


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
