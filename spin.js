let arr = ['Yes','No','Yes','No'];
function yesNo(){
    let ranIndex = Math.floor(Math.random()*10)%4;
    return arr[ranIndex];
}
function Rnum(){
    ran = Math.floor((Math.random()*10)%4)
    return ran;
}
let final = ''
function spin(){
    const result = document.getElementById('result');
    // wheel.play();
    // document.write(yesNo())
    const cir = document.querySelector('.mainbox');
    console.log(cir)
    let a = Rnum()
    
    let num = 360*5+(a*90)
    // 0 => Yellow - Yes
    // 1 => Blue - No
    // 2 => Green - Yes
    // 3 => Red - No
    if(a === 0 || a === 2){
        final = "Yes"
    }
    else if(a ===1 || a ===3 ){
        final = "No"
    }

    cir.style.transform = "rotate("+num+"deg)";
    cir.style.transition = 'ease-out 6s';
    num =0;
     setTimeout(function(){
        // result.innerHTML = '<h3>'+final+a+'</h3>';
        result.innerHTML = '<h3 style="position:fixed;">'+final+a+'</h3>';

    },6001)
     setTimeout(function(){
        alert('Reload')
    },6501)
   
}
let spn = document.getElementById('spin');
spn.addEventListener('click',()=>{
    spin()
    setTimeout(function(){
        location.reload()
    },6501)
})