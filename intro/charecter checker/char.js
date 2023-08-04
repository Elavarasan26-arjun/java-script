const button=document.querySelector('button')
let resultdiv=document.createElement('div')
resultdiv.id='result'
document.getElementById('school').appendChild(resultdiv)
document.getElementById('result').innerHTML=text
button.addEventListener('click',displaystats())
function displaystats(){
    const input=document.getElementById("input")
   const names= input.options[input.selectedIndex]
   let area=0,work=0,salary=0
   switch(input){
    case'asar':
             area = 'nagarkovil'
             work = 'java developer'
             salary = '3,OO,OOO'
             break
    case'sivaprakash':
             area = 'nagarkovil'
             work = 'java developer'
             salary = '3,OO,OOO'
             break
    case'elango':
             area = 'tirunelveli'
             work = 'verilog '
             salary = '3,OO,OOO'
             break
    case'arjun':
             area = 'chennai'
             work = 'frontend developer'
             salary = '3,OO,OOO'
             break
   }

   let text=`The workind city of${area} the domain is ${work} annuel package is ${salary}`
}
