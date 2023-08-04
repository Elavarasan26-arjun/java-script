function marklist(){
    const mark= Number(document.getElementById("input"))
    const grade='NA'


if(mark>=91)
     grade= 'O'
else if(mark>=81 && mark<=90)
     grade='A+'
else if(mark>=71 && mark<=80)
     grade='A'
else if(mark>=61 && mark<=70)
     grade='B+'
else if(mark>=51 && mark<=60)
     grade='B'
     else('U')

     let result=document.querySelector('#result')
     result.innerHTML="Your Grade is" + grade 
}
