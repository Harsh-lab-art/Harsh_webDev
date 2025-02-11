const uname = document.querySelector('#uname');
const pass = document.querySelector('#pass');
const btn = document.querySelector('#login-btn');
const msg = document.querySelector('.msg');
let isButtonLocked = false;
btn.disabled = true;
uname.addEventListener('input', checkInputs);
pass.addEventListener('input', checkInputs);
function checkInputs() 
{
    if (uname.value.trim() !== '' && pass.value.trim() !== '') 
    {
        btn.disabled = false;
        isButtonLocked = true;
        btn.style.position = "relative";
        btn.style.left = "50%";
        btn.style.transform = "translateX(-50%)";
    } 
    else 
    {
        btn.disabled = true;
        isButtonLocked = false;
    }
}
function showMsg() 
{
    msg.textContent = "Invalid login. Try again!";
}
function shiftButton() 
{
    if (isButtonLocked) return; 

    showMsg();
    const container = document.querySelector('.btn-container');
    const maxX = container.clientWidth - btn.clientWidth;
    const maxY = container.clientHeight - btn.clientHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    btn.style.position = "absolute";
    btn.style.left = `${randomX}px`;
    btn.style.top = `${randomY}px`;
}
btn.addEventListener('mouseover', shiftButton);