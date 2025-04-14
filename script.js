document.getElementById('add-preset-btn')?.addEventListener('click', function() {
    const code = prompt('Enter Collaborator Code:');
    if (code === '007') {
        window.location.href = 'upload.html';
    } else {
        alert('Invalid Code!');
    }
});

window.onload = function() {
    if (document.getElementById('presets')) {
        let presets = JSON.parse(localStorage.getItem('presets') || '[]');
        const presetsSection = document.getElementById('presets');
        presetsSection.innerHTML = '';
        presets.forEach(preset => {
            const presetDiv = document.createElement('div');
            presetDiv.className = 'preset';
            presetDiv.innerHTML = `
                <img src="${preset.thumbnail}" alt="${preset.name}">
                <h2>${preset.name}</h2>
                <p>Price: $${preset.price}</p>
                <button onclick="buyPreset()">Buy</button>
            `;
            presetsSection.appendChild(presetDiv);
        });
    }
}

function buyPreset() {
    window.location.href = 'https://www.instagram.com/fnl_studio_/direct/';
}

function submitUpload() {
    const name = document.getElementById('presetName').value;
    const price = document.getElementById('presetPrice').value;
    const thumbnail = document.getElementById('thumbnailUrl').value;

    let presets = JSON.parse(localStorage.getItem('presets') || '[]');
    presets.push({ name, price, thumbnail });
    localStorage.setItem('presets', JSON.stringify(presets));

    window.location.href = 'index.html';
}

function cancelUpload() {
    window.location.href = 'index.html';
}
