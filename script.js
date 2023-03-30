let btn = document.getElementById('btn');
let output = document.getElementById('outputtext');

let Number = [Math.floor(Math.random()*100)];

btn.addEventListener('click', function(){
  let input = document.getElementById('userinput').value;
    if(input == Number){
        output.innerHTML = 'Your guess was right your number was $(Number)'
    } else if(input<Number){
        output.innerHTML = 'Your guess was to low'
    } if(input>Number){
        output.innerHTML = 'Your guess was to high'
    }

}
)
