let tees = [];
let teesNames=[];
let teesNumber = 6;
let teesIter = 0;

for(let i=1;i<=teesNumber;i++){
    tees.push('./src'+'/tees/'+'tee'+i+'.jpg');
    teesNames.push('tee'+ i);
}

const teeImg = document.getElementById('teeImg');
const teeName = document.getElementById('teeName');

teeImg.src= tees[teesIter];
teeName.innerHTML= teesNames[teesIter];


function NextTee(){
    teesIter++;
    if(teesIter >=6) teesIter = 0;
    teeImg.src= tees[teesIter];
    teeName.innerHTML= teesNames[teesIter];
}

function PreviousTee(){
    teesIter--;
    if(teesIter<0) teesIter = 5;
    teeImg.src= tees[teesIter];
    teeName.innerHTML= teesNames[teesIter];
}

