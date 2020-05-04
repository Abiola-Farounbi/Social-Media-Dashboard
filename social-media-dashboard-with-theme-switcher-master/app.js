var toogle=document.querySelector('.switch input[type="checkbox"]');
var currentTheme=localStorage.getItem('theme');
if (currentTheme){
    document.documentElement.setAttribute('data-theme', currentTheme);
    if(currentTheme == 'dark'){
        toogle.checked=true;
    }
}
function switchTheme(e){
    if(e.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme','dark');
    }
    else{
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme','light');
    }
}
toogle.addEventListener('change',switchTheme, false );