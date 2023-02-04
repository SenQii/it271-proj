// add .isActive class to it when clicked


function btnTrans() {
  let menuBtn = document.getElementById('btn');

  if (menuBtn.classList.contains('isActive')) {
    menuBtn.classList.remove('isActive');

  } else menuBtn.classList.add('isActive');

}

function drop() {
  let menu = document.getElementById('menu');

  if (menu.classList.contains('active')) {
    menu.classList.remove('active');
  } else menu.classList.add('active');

}
