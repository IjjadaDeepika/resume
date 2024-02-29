// Function to load page content dynamically
function loadPage(page) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById('content').innerHTML = this.responseText;
        }
    };
    xhttp.open('GET', page, true);
    xhttp.send();
}

// Function to show project details in a modal
function showProjectDetails(projectId) {
    var modal = document.getElementById("project-details-modal");
    var projectDetailsContainer = document.getElementById("project-details");
    var projectDetails = "";

    // Fetch project details based on projectId
    switch(projectId) {
        case 1:
            projectDetails = "<p></p>";
            break;
        case 2:
            projectDetails = "<p> </p>";
            break;
        case 3:
            projectDetails = "<p>Detailed information about Project 3.</p>";
            break;
        // Add more cases for additional projects
    }

    // Set the project details in the modal
    projectDetailsContainer.innerHTML = projectDetails;

    // Display the modal
    modal.style.display = "block";
}

// Function to hide the project details modal
function hideProjectDetails() {
    var modal = document.getElementById("project-details-modal");
    modal.style.display = "none";
}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
    var modal = document.getElementById("project-details-modal");
    if (event.target == modal) {
        hideProjectDetails();
    }
};

// Load home page by default
window.onload = function() {
    loadPage('home.html');
};
