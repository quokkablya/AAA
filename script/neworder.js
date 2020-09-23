let plus = document.querySelector('.plus'),
minus = document.querySelector('.minus'),
result=1;

plus.addEventListener('click', function(){
    result++;
    document.querySelector('.result').textContent=result;
})

minus.addEventListener('click', function(){
    if(result>1){result--;}
    document.querySelector('.result').textContent=result;
})