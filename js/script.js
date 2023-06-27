let global = document.getElementById('global');
let championx = document.getElementById('championx');
let championo = document.getElementById('championo');
let pointx = document.getElementById('pointx');
let pointo = document.getElementById('pointo');
let boxes = document.getElementsByClassName('box');
let met = [];
let num = 0;

area.addEventListener('click',function(event){

  if(event.target.innerHTML === ''){
    met.push(event.target)
    
   if(num % 2 === 0){
    event.target.innerHTML = 'x';
   }else{
    event.target.innerHTML = 'o';
   }
   num++;
  }
  check()

})



function check (){
let arr = [
  [0,1,2], 
  [3,4,5], 
  [6,7,8], 
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]



for(let i = 0;i<arr.length;i++){
  if(boxes[arr[i][0]].innerHTML === 'x' &&
     boxes[arr[i][1]].innerHTML === 'x' &&
     boxes[arr[i][2]].innerHTML === 'x'){

    global.style.display = 'block';
    championx.innerHTML = 'win x';
    pointx.innerHTML++;
   
    setTimeout(function(){
      global.style.display = 'none';
      championx.innerHTML = '';

      for(let j = 0;j<met.length;j++){
        met[j].innerHTML =''
      }
       met.splice(0,9)
    },2000)

     }else if(boxes[arr[i][0]].innerHTML === 'o' &&
     boxes[arr[i][1]].innerHTML === 'o' &&
     boxes[arr[i][2]].innerHTML === 'o'){
     global.style.display = 'block';
     championo.innerHTML = 'win o';
     pointo.innerHTML++;

     setTimeout(function (){
      global.style.display = 'none';
      championo.innerHTML = '';

      for(let j = 0;j<met.length;j++){
        met[j].innerHTML = ''
      }
      met.splice(0,9);
     },2000);
  

     }
}



  if(pointx.innerHTML === '5' || pointo.innerHTML === '5'){
    pointx.innerHTML = 0;
    pointo.innerHTML = 0;
  }
  
  if(met.length > 8 ) {
    setTimeout (function(){
        global.style.display = 'none';
        championo.innerText = '';
        for (let ax = 0; ax < met.length; ax++) {
            met[ax].innerText = ''
        };
        met.splice(0,9)
    },2000);
  
   
  }


}





function clearing(){
  for(let j = 0;j<met.length;j++){
   met[j].innerHTML = '';
  }
met.splice(0,9)
}


