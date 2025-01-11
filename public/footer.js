const footer = document.getElementById("footer");

footer.innerHTML = `
<div class="container-md d-flex flex-column justify-content-between">
    <div class="d-flex justify-content-between align-items-center">
        <div>
            <h2 class="footer-text">{Abdelrahman/}</h2>
            <p class="footer-text">Full Stack Web Developer Using .Net & Angular</p>
        </div>
        <div class="d-flex flex-column align-content-between">
            <h5 class="footer-text">Contact Me</h5>
            <div>
                <i class="fa-solid fa-square-phone fa-2xl" style="color: #d8c4b6;"></i>
                <span class="footer-text">+20 1028 1289 12</span>
            </div>
            <br>
            <div>
                <i class="fa-solid fa-envelope fa-2xl" style="color: #d8c4b6;"></i>
                <span class="footer-text">abdofathy883@gmail.com</span>
            </div>
        </div>
    </div>
    <div >
        <hr class="footer-text">
        <p class="footer-text text-center">Copyrights &copy;. All Rights Reserved</p>
    </div>
</div>
`;