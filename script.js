

function isDay () {


    const divNight = document.querySelector('#night');
    divNight.classList.toggle('active')

    

}
function isNight () {


    const divDay = document.querySelector('#day');
    divDay.classList.toggle('active')

    

}



const div = document.querySelector('#night')

if (div.id == 'night'){
    div.id == 'day';
    div.addEventListener('click', isDay)
} else if(div.id == 'day') {
    div.id == 'night'
    div.addEventListener('click', isNight)
}