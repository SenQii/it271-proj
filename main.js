// add .isActive class to it when clicked
function btnTrans() {
  let menuBtn = document.getElementById('btn');

  if (menuBtn.classList.contains('isActive')) {
    menuBtn.classList.remove('isActive');

  } else menuBtn.classList.add('isActive');

}


//main menu drop
function drop() {
  let menu = document.getElementById('menu');

  if (menu.classList.contains('active')) {
    menu.classList.remove('active');
  } else {
    menu.classList.add('active');

  }

}

// sied pannel drop
function dropPannle() {
  let pannel = document.getElementById("pannel");
  let arrow = document.getElementById('arrow');


  if (pannel.classList.contains('drop')) {
    pannel.classList.remove('drop');
    arrow.classList.remove('flip');

  } else {
    pannel.classList.add('drop');
    arrow.classList.add('flip');

  }
}


function shift() {
  
  let icon = document.getElementById('moon');
  let main = document.getElementById('main');
  let side = document.getElementById('side');
  let secbtn = document.getElementById('sectionBtn');
  let sndbtn = document.getElementById('sendbtn');
  let pbtn = document.getElementById('playbtn');

  //if its in light, convert it to dark
  if (icon.classList.contains("moon")) {

    // remove moon icon 
    icon.classList.remove("fa-solid", "fa-moon", "moon");
    // add sun icon
    icon.classList.add("fa-regular", "fa-sun", "sun");

    main.classList.add("dark");
    side.classList.add("dark");
    secbtn.classList.add("dark");
    // pbtn.classList.add("dark");

  } else {

    //remove sun icon
    icon.classList.remove("fa-regular", "fa-sun", "sun");
    // add moon icon
    icon.classList.add("fa-solid", "fa-moon", "moon");


    main.classList.remove("dark");
    side.classList.remove("dark");
    secbtn.classList.remove("dark");
    // pbtn.classList.remove("dark");





  }
}