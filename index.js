let randomize_array =document.getElementById("randomize_array_btn");
let bubble=document.getElementById("bubble");
let insertion=document.getElementById("insertion");
let selection=document.getElementById("selection");
let quick=document.getElementById("quick");
let heap=document.getElementById("heapify");
let bars_container=document.getElementById("bars_container");
let minRange = 1;
let maxRange = 30;
let numOfBars =30;
let speed=80;
let h=15;
let unsorted_array = new Array(numOfBars);

function updateTextInput(val) {
    speed=(1/val)*250; 
  }

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
    for(let i=0;i<array.length;i++)
    {
        let bar =document.createElement("div");
        bar.classList.add("bar");
        bar.style.height=array[i]*h+"px";
        bars_container.appendChild(bar);
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


//BUBBLE SORT

async function bubbleSort(array)
 {
    let bars=document.getElementsByClassName("bar");
    for(let i=0;i<array.length;i++)
    {
       for(let j=0;j<array.length-i-1;j++)
       {
        if(array[j]>array[j+1])
        {
            for(let k=0;k<bars.length;k++)
            {
                if(k!==j && k!==j+1)
                 {
                    bars[k].style.backgroundColor="white";
                 }
            }
            let temp=array[j];
            array[j]=array[j+1];
            array[j+1]=temp;
            bars[j].style.height=array[j]*h+"px";
            bars[j].style.backgroundColor="lightgreen";
            //bars[j].innerText=array[j];
            bars[j+1].style.height=array[j+1]*h+"px";
            bars[j+1].style.backgroundColor="lightgreen";
            //bars[j+1].innerText=array[j+1];
            await sleep(speed);
        }
       }
       await sleep(speed);
    }
    for(let k=0;k<bars.length;k++)
    {
            bars[k].style.backgroundColor="white";
    }
    return array;
 }


 //SELECTION SORT
 async function selectionSort(array) {
    let bars=document.getElementsByClassName("bar");
    let imin;
    let j;
    for(let i = 0; i<array.length-1; i++) {
       imin = i;   //get index of minimum data
       for(j = i+1; j<array.length; j++)
          if(array[j] < array[imin])
             imin = j;
          //placing in correct position
          for(let k=0;k<bars.length;k++)
          {
              if(k!==i && k!==imin)
               {
                  bars[k].style.backgroundColor="white";
               }
          }
          let temp=array[i];
          array[i]=array[imin];
          array[imin]=temp;
          bars[i].style.height=array[i]*h+"px";
          bars[i].style.backgroundColor="#87cefa";
          //bars[j].innerText=array[j];
          bars[imin].style.height=array[imin]*h+"px";
          bars[imin].style.backgroundColor="#87cefa";
          //bars[j+1].innerText=array[j+1];
          await sleep(speed);
    }
    for(let k=0;k<bars.length;k++)
    {
            bars[k].style.backgroundColor="white";
    }
    return array;
 }


 //INSERTION SORT
 async function insertionSort(array) {
    let key, j;
    let bars=document.getElementsByClassName("bar");
    for(let i = 1; i<array.length; i++) {
       key = array[i];//take value
       j = i;
       while(j > 0 && array[j-1]>key) {
          array[j] = array[j-1];
          bars[j].style.height=array[j]*h+"px";
          bars[j].style.backgroundColor="pink";
          for(let k=0;k<bars.length;k++)
          {
              if(k!==j)
               {
                  bars[k].style.backgroundColor="white";
               }
          }
          await sleep(speed);
          j--;
       }
       array[j] = key;   //insert in right place
       bars[j].style.height=array[j]*h+"px";
       bars[j].style.backgroundColor="pink";
       await sleep(speed);
    }
    for(let k=0;k<bars.length;k++)
    {
            bars[k].style.backgroundColor="white";
    }
    return array;
 }


//QUICK SORT
 async function quickSort(array,low,high){
	
    let bars=document.getElementsByClassName("bar");
    if(low < high){
	let pivot = array[high];
    let pos;
	
    let i = low;
	let j = low;
	while(i <= high){
		if(array[i] > pivot){
			i++;
		}
		else{
            for(let k=0;k<bars.length;k++)
            {
                if(k!==j && k!==j)
                 {
                    bars[k].style.backgroundColor="white";
                 }
            }
            let temp=array[j];
            array[j]=array[i];
            array[i]=temp;
            bars[j].style.height=array[j]*h+"px";
            bars[j].style.backgroundColor="#dda0dd";
            //bars[j].innerText=array[j];
            bars[i].style.height=array[i]*h+"px";
            bars[i].style.backgroundColor="#dda0dd";
            //bars[j+1].innerText=array[j+1];
            i++;
            j++;
            await sleep(speed);
		}
	}
	pos=j-1;
	await quickSort(array, low, pos-1);
	await quickSort(array, pos+1, high);
	}
    for(let k=0;k<bars.length;k++)
    {
            bars[k].style.backgroundColor="white";
    }
    await sleep(speed);
    return array;
}


//HEAP SORT
async function heapify(array,n,root)
{
    let bars=document.getElementsByClassName("bar");
   let largest = root; // root is the largest element
   let l = 2*root + 1; // left = 2*root + 1
   let r = 2*root + 2; // right = 2*root + 2
  
   // If left child is larger than root
   if (l < n && array[l] > array[largest])
   largest = l;
  
   // If right child is larger than largest so far
   if (r < n && array[r] > array[largest])
   largest = r;
  
   // If largest is not root
   if (largest != root)
      {
      //swap root and largest
      for(let k=0;k<bars.length;k++)
            {
                if(k!==root && k!==largest)
                 {
                    bars[k].style.backgroundColor="white";
                 }
            }
            let temp=array[root];
            array[root]=array[largest];
            array[largest]=temp;
            bars[root].style.height=array[root]*h+"px";
            bars[root].style.backgroundColor="#66cdaa";
            //bars[root].innerText=array[root];
            bars[largest].style.height=array[largest]*h+"px";
            bars[largest].style.backgroundColor="#66cdaa";
            //bars[largest].innerText=array[largest];
            
            await sleep(20);
      await heapify(array, n, largest);
      }
}

// implementing heap sort
async function heapSort(array,n)
{
    let bars=document.getElementsByClassName("bar");
   for (let i = n / 2 - 1; i >= 0; i--)
   await heapify(array, n, i);
  
   for (let i=n-1; i>=0; i--)
   {
       for(let k=0;k<bars.length;k++)
            {
                if(k!==0 && k!==i)
                 {
                    bars[k].style.backgroundColor="white";
                 }
            }
            let temp=array[0];
            array[0]=array[i];
            array[i]=temp;
            bars[0].style.height=array[0]*h+"px";
            bars[0].style.backgroundColor="#66cdaa";
            //bars[0].innerText=array[0];
            bars[i].style.height=array[i]*h+"px";
            bars[i].style.backgroundColor="#66cdaa";
            //bars[i].innerText=array[i];
            
            await sleep(speed);
		
     await heapify(array, i, 0);
   }

   for(let k=0;k<bars.length;k++)
   {
           bars[k].style.backgroundColor="white";
   }
   await sleep(speed);
   return array;
}



 bubble.addEventListener("click",function() {
    let sorted_array=bubbleSort(unsorted_array);
    console.log(sorted_array);
 })
 selection.addEventListener("click",function() {
    let sorted_array=selectionSort(unsorted_array);
    console.log(sorted_array);
 })
 quick.addEventListener("click",function() {
    let sorted_array=quickSort(unsorted_array,0,unsorted_array.length-1);
    console.log(sorted_array);
 })
 heap.addEventListener("click",function() {
    let sorted_array=heapSort(unsorted_array,unsorted_array.length);
    console.log(sorted_array);
 })
 insertion.addEventListener("click",function() {
    let sorted_array=insertionSort(unsorted_array);
    console.log(sorted_array);
 })