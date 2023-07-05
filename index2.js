
let randomize_array =document.getElementById("randomize_array_btn");
let bars_container=document.getElementById("bars_container");
let minRange = 1;
let maxRange = 30;
let numOfBars =30;
let speed=150;
let h=15;
let unsorted_array = new Array(numOfBars);
let binary=document.getElementById("binary");
let linear=document.getElementById("linear");



function randomNum(min,max)
{
    return Math.floor(Math.random() * (max-min+1) + min);
}

function createRandomArray() {
    for(let i=0;i<numOfBars;i++)
    {
        unsorted_array[i]=randomNum(minRange,maxRange);
    }
}

document.addEventListener("DOMContentLoaded",function() {
    createRandomArray();
    renderBars(unsorted_array);
})

function renderBars(array)
{
  array.sort(function (a, b) {
    return a - b;
  });
    for(let i=0;i<array.length;i++)
    {
        let bar =document.createElement("div");
        bar.classList.add("bar");
        bar.style.height=array[i]*h+"px";
        bar.style.backgroundColor="lightgreen";
        bars_container.appendChild(bar);
        bar.innerText=array[i];
    }
}


randomize_array.addEventListener("click",function() {
    createRandomArray();
    bars_container.innerHTML="";
    renderBars(unsorted_array);
});

function sleep(ms)
{
    return new Promise((resolve)=>setTimeout(resolve,ms));
}



async function binarySearch(array,l,r)
{
   let bars=document.getElementsByClassName("bar");
   var x=document.getElementById("fname").value;
   console.log(x);
   var output = document.getElementById("text");
   let found;
   let f=0;
    while (l <= r) {
        let m = l + (r - l) / 2;
 
        if (array[m] == x)
          {
            bars[m].style.height=array[m]*h+"px";
            bars[m].style.backgroundColor="#2ECC71";
            f=1;
            found=m;
            break;
          }

          if( f===0 && l===r) 
          {
            break;
          }
 
        if (array[m] < x)
            {
               bars[m].style.height=array[m]*h+"px";
               bars[m].style.backgroundColor="#2ECC71";
               l = m + 1;
               for(let k=0;k<bars.length;k++)
               {
                  if(k!=m){
                       bars[k].style.backgroundColor="lightgreen";}
               }
               await sleep(speed);
            }
         else
           {
            bars[m].style.height=array[m]*h+"px";
            bars[m].style.backgroundColor="#2ECC71"; 
            r = m - 1;
            for(let k=0;k<bars.length;k++)
            {
               if(k!=m){
                    bars[k].style.backgroundColor="lightgreen";}
            }
            await sleep(speed);
        }

    }
   console.log(f);
    if (f === 0) {
      output.innerText = "Element Not Found";
      
      for(let k=0;k<bars.length;k++)
      {
              bars[k].style.backgroundColor="lightgreen";
      }
    }
    if(f === 1){
      output.innerText = "Element Found";
        
      for(let k=0;k<bars.length;k++)
      {
         if(k!=found){
              bars[k].style.backgroundColor="lightgreen";}
      }
    }
    return array;
}



async function linearSearch(array,l,r)
{
   let bars=document.getElementsByClassName("bar");
   var x=document.getElementById("fname").value;
   console.log(x);
   var output = document.getElementById("text");
   let found;
   let f=0;
    while (l <= r) {
 
        if (array[l] == x)
          {
            bars[l].style.height=array[l]*h+"px";
            bars[l].style.backgroundColor="#2ECC71";
            f=1;
            found=l;
            for(let k=0;k<bars.length;k++)
            {
               if(k!=l){
                    bars[k].style.backgroundColor="lightgreen";}
            }
            await sleep(80);
            break;
          }

          if( f===0 && l===r) 
          {
            break;
          }

            bars[l].style.height=array[l]*h+"px";
            bars[l].style.backgroundColor="#2ECC71";
            await sleep(80);
          l++;
    }
    if (f === 0) {
      output.innerText = "Element Not Found";
      
      for(let k=0;k<bars.length;k++)
      {
              bars[k].style.backgroundColor="lightgreen";
      }
    }
    if(f === 1){
      output.innerText = "Element Found";
        
      for(let k=0;k<bars.length;k++)
      {
         if(k!=found){
              bars[k].style.backgroundColor="lightgreen";}
      }
    }
    return array;
}


linear.addEventListener("click",function() {
  let sorted_array=linearSearch(unsorted_array,0,30);
  console.log(sorted_array);
})

binary.addEventListener("click",function() {
   let sorted_array=binarySearch(unsorted_array,0,30);
   console.log(sorted_array);
})
