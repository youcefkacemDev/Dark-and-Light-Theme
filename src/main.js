// set the icons for the moon referring for the dark mode an sun icon referring for the light mode 
const sunIcon = document.querySelector('.sun');
const moonIcon = document.querySelector('.moon');

// set the theme variables 
const userTheme = localStorage.getItem('theme');
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

// icon toggling 
const iconToggling = ()=>{
    moonIcon.classList.toggle('display-none');
    sunIcon.classList.toggle('display-none');
    // the display none is not include in our tailwindcss so for that we create a css in our input.css file a create this attribute and apply for the hidden class of tailwind check the file 
}

// initial the theme check 
const themeCheck = ()=>{
    if(userTheme === 'dark' || (!userTheme && systemTheme)){
        document.documentElement.classList.add('dark');
        moonIcon.classList.add("display-none");
        return;
    }
    sunIcon.classList.add('display-none');
}

// switching the theme
const themeSwitcher = ()=>{
    if(document.documentElement.classList.contains('dark')){
        document.documentElement.classList.remove('dark');
        localStorage.setItem("theme", "light");
        iconToggling();
        return;
    }
    document.documentElement.classList.add('dark');
    localStorage.setItem("theme", "dark");
    iconToggling();
}

// listen for the buttons click
sunIcon.addEventListener('click', ()=>{
    themeSwitcher();
})
moonIcon.addEventListener('click', ()=>{
    themeSwitcher();
})

// invoke our theme check on initial load
themeCheck();