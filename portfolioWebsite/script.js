//header togle

let menuBtn = document.getElementById('menuBtn')
menuBtn.addEventListener('click', function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})

//Typing effect
let typed = new Typed('.auto-input',{
    Strings: ['Front-end developer!','Freelancer!','UI Designer!','Youtuber!'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay:2000,
    loop:true,

})