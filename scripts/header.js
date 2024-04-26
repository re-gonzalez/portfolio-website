document.querySelector('.js-header-div').innerHTML = `
    <div id="header-left-div">
        <h1>Ricardo E. Gonzalez</h1>
        <h2>Mechanical and Aerospace Engineer</h2>
    </div>
    <div id="header-right-div">
        <h3>Contact Information:</h3>
        <h4>ricardo.emnl.gonzalez@gmail.com</h4>
        <h4 id="linkedin-profile-text" onclick="
            var url = 'http://linkedin.com/in/ricardo-gonzalez-544100184';
            var win = window.open(url, '_blank');
            win.focus();
        ">
            LinkedIn Profile
        </h4>
    </div>
`;

document.querySelector('.js-sub-header-div').innerHTML = `
    <div class="sub-header-section-div" onclick="
        document.location = 'index.html';
    ">
        <h5>About Me</h5>
    </div>
    <div class="sub-header-section-div" onclick="
        document.location = 'education.html';
    ">
        <h5>Education</h5>
    </div>
    <div class="sub-header-section-div" onclick="
        document.location = 'hybrid-rocket.html';
    ">
        <h5>Experience</h5>
    </div>
    <div class="sub-header-section-div" onclick="
        document.location = 'hybrid-rocket.html';
    ">
        <h5>Projects</h5>
    </div>
    <div class="sub-header-section-div" onclick="
        document.location = 'education.html';
    ">
        <h5>Resume</h5>
    </div>
`;