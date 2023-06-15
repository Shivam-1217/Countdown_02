// const currentDate=new Date();
// console.log(currentDate)

const endDate="23 May 2023 11:22 PM";
 let x=document.getElementById("end-date");
 x.innerHTML=endDate;
 const inputs=document.querySelectorAll("input");

function clock(){
    const end=new Date(endDate);
    const now=new Date();
    const diff=(end-now)/1000;
    // console.log(diff)
    if(diff<0)return;
    inputs[0].value=(Math.floor(diff/ 3600 / 24));
    inputs[1].value=(Math.floor(diff/3600)%24);
    inputs[2].value=(Math.floor(diff/60)%60);
    inputs[3].value=(Math.floor(diff)%60);
}
clock() 

setInterval( ()=>{
    clock()

},1000)


// 1 day=24 hours;
// 1 hr=60 minutes;
// 60 min=3600 Second
