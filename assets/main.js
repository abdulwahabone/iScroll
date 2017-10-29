window.onload = () => {
    const hide = document.getElementById('head');
    window.hide = hide
    window.onscroll = () => { 
   if(window.pageYOffset>200){
       hide.classList.add("sticky");
   } else {
       hide.classList.remove("sticky");
   }
    };

   


};

function fire() {
    if (hide.classList.contains("open-nav")) {
        hide.classList.remove('open-nav');
    } else {
        hide.classList.add('open-nav');
    }

}


