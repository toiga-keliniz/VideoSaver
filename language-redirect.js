function checkAndRedirect() {
    if (!localStorage.getItem('languageSelected')) {
        var userLang = navigator.language || navigator.userLanguage;
        var path = window.location.pathname;

        if (userLang.startsWith('ru')) {
            if (!path.startsWith('/ru/')) {
                window.location.href = "/ru/";
            }
        } else {
            if (!path.startsWith('/ru/')) {
                window.location.href = "/";
            }
        }

        localStorage.setItem('languageSelected', 'true');
    }
}

checkAndRedirect();
