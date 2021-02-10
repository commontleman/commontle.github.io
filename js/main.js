'use strict';

{ //smallscreen Menu
  const miniMenu = document.querySelector('.minimenu a')

  miniMenu.addEventListener('click', e =>{
    e.preventDefault();

    const response = document.getElementById('response');

    response.classList.toggle('open');

    if(response.classList.contains('open') === true){
      miniMenu.textContent = 'CLOSE'
    } else { 
      miniMenu.textContent = 'MENU'
    }
  });
  
}

{ //タブ
 const menuItems = document.querySelectorAll('.tab li a');
 const results = document.querySelectorAll('.result');
 
 menuItems.forEach(clickedItem => {
   clickedItem.addEventListener('click', e => {
     e.preventDefault();

     menuItems.forEach(item => {
       item.classList.remove('active');
     });
     clickedItem.classList.add('active');


     results.forEach(result => {
       result.classList.remove('active');
     });
     document.getElementById(clickedItem.dataset.id).classList.add('active')
   });
 });
}


{ //タブinput value=>今日の日付
  const dateClasses = document.querySelectorAll('.date');

  function change(){
    const today = new Date()
    
    let year = today.getFullYear()
    let month = ("0" + (today.getMonth() + 1)).slice(-2);
    let date = ("0" + today.getDate()).slice(-2);
    
    return year + '-' + month+ '-' + date
  }

  dateClasses.forEach(dateClass => {
    dateClass.value = change()
  });

}

{ //往復・片道切り替え
  
  const oneway = document.querySelectorAll('.trip input');
  const goback = document.getElementById('return')
  const outward = document.getElementById('outward')

  var switchTrip = function(){
    if(oneway[1].checked){
      goback.classList.add('hide');
      outward.classList.add('scale');
    } else {
      goback.classList.remove('hide');
      outward.classList.remove('scale');
    }
  }
  window.addEventListener('load', switchTrip());

}

{ //おすすすめ商品いいね
  const inputs = document.querySelectorAll('.fav input');
  const hearts = document.querySelectorAll('.heart');
  let num;

  inputs.forEach((input, index) => {
    input.addEventListener('change', ()=>{
      num = index;
      hearts[num].classList.toggle('like')
      

      })
  });

}
