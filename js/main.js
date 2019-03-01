var button = document.querySelector('#button');
var modal = document.querySelector('#modal');
var close = document.querySelector('#close')
var timer;

button.addEventListener('click', function(){
    modal.classList.add('modal_active');
});

function closeFunction(){
    modal.classList.remove('modal_active');
};

var closeTimeout = setTimeout(closeFunction, 5000);
clearTimeout(closeFunction);