function displayHeader() {
    const header = document.getElementById("header-container");

    header.innerHTML = `
    <h1>Daiki's Portfoilo</h1>
    <nav>
        <ul class="nav-list">
            <li><a href="/home/home.html">Home</a></li>
            <li><a href="/about_me/about_me.html">About</a></li>
            <li><a href="/work/work.html">Works</a></li>
            <li><a href="/contact/contact.html">Contact</a></li>
        </ul>
    </nav>
    `;
}

displayHeader()