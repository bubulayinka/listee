    const menuBtn = document.querySelector('.btn-burger');
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.burger-list');
    
    let showMenu = false;
    menuBtn.addEventListener('click', toggleMenu);

    function toggleMenu(){
        if(!showMenu){
            hamburger.classList.add('open');
            nav.classList.add('open');
            showMenu = true;
        }
        else{
            hamburger.classList.remove('open');
            nav.classList.remove('open');
            showMenu = false;
        }
        nav.addEventListener('click', () => {
            nav.classList.remove('open');
        })
    }