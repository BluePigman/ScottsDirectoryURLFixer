// Function to fix the hyperlinks
function fixHyperlinks() {
    // Select all anchor tags within the table
    const anchors = document.querySelectorAll('table tbody tr td a');
    anchors.forEach(anchor => {
      // Get the href attribute
      let href = anchor.getAttribute('href');
      // Check if it contains 'http://' followed by either 'http://' or 'https://'
      if (href.startsWith('http://http://') || href.startsWith('http://https://')) {
        // Remove the first 'http://'
        let newHref = href.replace('http://', '');
        // Set the corrected href attribute back to the anchor tag
        anchor.setAttribute('href', newHref);
      }
    });
  }
  
  // Execute the function
  fixHyperlinks();
  