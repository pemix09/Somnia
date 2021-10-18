let hoodies = [];
let hoodiesNames = [];
let hoodiesNumber = 5;
let hoodieIter = 0;

for(let i=1;i<=hoodiesNumber;i++){
    hoodies.push('./src'+'/hoodies/'+'hoodie'+i+'.jpg');
    hoodiesNames.push('hoodie'+ i);
}

const hoodieImg = document.getElementById('hoodieImg');
const hoodieName = document.getElementById('hoodieName');

hoodieImg.src= hoodies[hoodieIter];
hoodieName.innerHTML= hoodiesNames[hoodieIter];


function NextHoodie(){
    hoodieIter++;
    if(hoodieIter >=hoodiesNumber) hoodieIter = 0;
    hoodieImg.src= hoodies[hoodieIter];
    hoodieName.innerHTML= hoodiesNames[hoodieIter];
}

function PreviousHoodie(){
    hoodieIter--;
    if(hoodieIter<0) hoodieIter = hoodiesNumber-1;
    hoodieImg.src= hoodies[hoodieIter];
    hoodieName.innerHTML= hoodiesNames[hoodieIter];
}



