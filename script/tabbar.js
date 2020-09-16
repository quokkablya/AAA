// $('.tab').click(function () {
//     $('.tabopen').removeClass('tabopen');
//     $(this).addClass('tabopen');
// });

let tab = document.querySelectorAll(".tab");
for(let i=0; i<tab.length; i++)
{
    
    tab[i].addEventListener("click", function(e){
       for(let j=0; j<e.target.parentElement.children.length; j++){
            e.target.parentElement.children[j].classList.remove("tabopen");
       }
        e.target.classList.add("tabopen")
    })
}