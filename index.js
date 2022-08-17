// code your solution here
function saturdayFun(Axel){
 if(Axel === 'bathe my dog'){
    return 'This Saturday, I want to bathe my dog!'
 }
 return 'This Saturday, I want to roller-skate!'
}

function mondayWork(Axel){
if(Axel === 'work from home'){
    return 'This Monday, I will work from home.'
}
return "This Monday, I will go to the office."
}

function wrapAdjective(worker){
    return function (Axel = 'fired'){
return `You are ${worker}${Axel}${worker}!`
    }
}