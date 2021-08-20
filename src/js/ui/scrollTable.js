const btnLeft = document.getElementById('button_one');
const btnRight = document.getElementById('button_two');
const table = document.getElementById('table')


const scrollTable = () =>{
    btnRight.addEventListener('click', function(){
        table.scrollLeft +=50;
    })
    btnLeft.addEventListener('click', function(){
        table.scrollLeft -=50;
    })
}

export default scrollTable;