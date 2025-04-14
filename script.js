document.querySelector('.add-preset-btn').addEventListener('click', function() {
    const code = prompt('Enter Collaborator Code:');
    if (code === '007') {
        window.location.href = 'upload.html';
    } else {
        alert('Invalid Code!');
    }
});

// upload.html content and logic
// Create upload.html separately
