function myfunction(){
    document.getElementById("mydown").classList.toggle("show");
}
window.onclick=function(event){
    if
    (!event.target.matches('.drop')) {
           var dropdowns = document.getElementsByClassName(".mydrop");
           var i;
           for (i = 0; i < dropdowns.length; i++) {
             var openDropdown = dropdowns[i];
             if (openDropdown.classList.contains('show')) {
               openDropdown.classList.remove('show');
             }
           }
         }
       }
