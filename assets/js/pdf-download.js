// PDF Download functionality
document.addEventListener('DOMContentLoaded', function() {
    const downloadBtn = document.getElementById('download-pdf-btn');
    
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function() {
            // Get the resume content
            const resumeContent = document.getElementById('resume-content');
            
            if (!resumeContent) {
                console.error('Resume content not found');
                return;
            }

            // Show loading state
            const originalText = downloadBtn.innerHTML;
            downloadBtn.innerHTML = '<span>⏳</span> Generating PDF...';
            downloadBtn.disabled = true;

            // Configure PDF options
            const options = {
                margin: [10, 10, 10, 10],
                filename: 'resume.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { 
                    scale: 2,
                    useCORS: true,
                    logging: false
                },
                jsPDF: { 
                    unit: 'mm', 
                    format: 'a4', 
                    orientation: 'portrait' 
                }
            };

            // Generate and download PDF
            html2pdf()
                .set(options)
                .from(resumeContent)
                .save()
                .then(function() {
                    // Reset button state
                    downloadBtn.innerHTML = originalText;
                    downloadBtn.disabled = false;
                })
                .catch(function(error) {
                    console.error('Error generating PDF:', error);
                    alert('Error generating PDF. Please try again.');
                    downloadBtn.innerHTML = originalText;
                    downloadBtn.disabled = false;
                });
        });
    }
});

