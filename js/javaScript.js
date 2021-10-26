let container = document.querySelector("#container");
let count = 1;
const btnNext = document.querySelector("#btnNext");
const btnPrev = document.querySelector("#btnPrev");

container.innerHTML = `<img src="img/foto${count}.jpg" alt="nuestra foto">`;
   
function automatic(){

if(count < 5){
  count ++;
}else if (count = 5 ){
  count = 1;
 
  
}
container.innerHTML = `<img src="img/foto${count}.jpg" alt="nuestra foto">`;

}
setInterval(automatic, 2000);


function nextPhoto(){
    if( count < 5){
      count++;
    }else {
        return;
    }
    container.innerHTML = `<img src="img/foto${count}.jpg" alt="nuestra foto">`;
   
}

function prevPhoto(){
    if(count > 1){
      count--;
    }else{
        return;
    }
    container.innerHTML = `<img src="img/foto${count}.jpg" alt="nuestra foto">`;
   
}