function checkAndRedirect() {
    if (!localStorage.getItem('languageSelected')) {
        var userLang = navigator.language || navigator.userLanguage;
        if (userLang.startsWith('ru') && !window.location.pathname.includes('/ru/')) {
            window.location.href = "/ru/index.html";
        } else if (!userLang.startsWith('ru') && !window.location.pathname.includes('/en/')) {
            window.location.href = "/en/index.html";
        }
        localStorage.setItem('languageSelected', 'true');
    }
}

checkAndRedirect();