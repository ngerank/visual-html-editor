let isVisual = true;

function toggleView() {
    const editor = document.getElementById('editor');
    const htmlView = document.getElementById('htmlView');

    if (isVisual) {
        htmlView.value = editor.innerHTML.trim();
        editor.style.display = 'none';
        htmlView.style.display = 'block';
    } else {
        editor.innerHTML = htmlView.value.trim();
        htmlView.style.display = 'none';
        editor.style.display = 'block';
    }
    isVisual = !isVisual;
}

function copyHTML() {
    const htmlView = document.getElementById('htmlView');
    const editor = document.getElementById('editor');
    let textToCopy = '';

    if (isVisual) {
        textToCopy = editor.innerHTML.trim();
    } else {
        textToCopy = htmlView.value.trim();
    }

    const tempInput = document.createElement('textarea');
    tempInput.value = textToCopy;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert('HTML copied to clipboard!');
}