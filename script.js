
const toggle1=document.getElementById('toggleDark');
const body=document.querySelector('body');

toggle1.addEventListener('click',function(){
    this.classList.toggle('bi-moon-stars');
    if(this.classList.toggle("bi-brightness-high-fill")){
        body.style.background='white';
        body.style.color='black';
        body.style.transition='1.5s'
    }
    else{
        body.style.background='black';
        body.style.color='white';
        body.style.transition='1.5s'

    }
})



// ////// coupon code

function loadCoupon(){
    document.getElementById('coupon').style.display="block";
    document.getElementById('search').style.opacity="0.5";
}

const closeCoupon = () => {
    document.getElementById('coupon').style.display="none";
    document.getElementById('search').style.opacity="1";
}


// //////