const header = document.getElementById("header");

header.innerHTML = `
<div class="container-lg d-flex justify-content-between align-items-center">
    <div>
        <a href="#hero" class="logo">{Abdelrahman/}</a>
    </div>
    <div>
        <nav class="navbar navbar-expand-md">
            <div class="container-fluid">
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#hero">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#about-me">About Me</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#projects">Projects</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#contact-me">Contact Me</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</div>
`;