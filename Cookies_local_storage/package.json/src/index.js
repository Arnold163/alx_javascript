function setCookies() {
    const firstname = document.getElementById('firstname').value;
    const email = document.getElementById('email').value;

    document.cookie = `firstname=${firstname}`;
    document.cookie = `email=${email}`;
}

function showCookies() {
    const cookies = document.cookie.split(';').map(cookie => cookie.trim());
    const cookieContainer = document.createElement('p');
    cookieContainer.innerHTML = `Cookies: ${cookies.join(', ')}`;
    document.body.appendChild(cookieContainer);
}