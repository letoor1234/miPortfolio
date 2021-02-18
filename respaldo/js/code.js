var matchMedia = window.matchMedia("(orientation: landscape)");

matchMedia.addEventListener( "change", (e) => {
    if (e.matches) {
      carr.style.width= '100%';
      carr.style.transform='translateX(0)';
    } else {
      carr.style.width= childCount*100 + '%';
  }
});

var i = 0;
const carr = document.getElementById('carr');
const childCount = document.querySelectorAll('.carr > article'). length;
if (matchMedia.matches) {
  carr.style.width= '100%';
  carr.style.transform='translateX(0)';
} else {
  carr.style.width= childCount*100 + '%';
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
