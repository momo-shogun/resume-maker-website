function generateResume() {
    // Get user input values
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    // Construct the resume HTML content
    const resumeContent = `
        <div class="header">
            <div class="left-header">
                <p>Address: ${address}</p>
                <p>Phone: ${phone}</p>
            </div>
            <h1>${name}</h1>
            <div class="right-header">
                <!-- Add social links or other information here -->
            </div>
        </div>
        <div class="section">
            <h2>Contact Information</h2>
            <p>Email: ${email}</p>
        </div>
        <!-- Add more sections for education, skills, projects, etc. -->
    `;

    // Display the resume content
    const resumeOutput = document.getElementById('resumeOutput');
    resumeOutput.innerHTML = resumeContent;
    
    // Show the resume container
    resumeOutput.style.display = 'block';
}


