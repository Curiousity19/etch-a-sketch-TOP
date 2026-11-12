let canvas = document.createElement('div');
canvas.className = 'canvas';

let mouseIsDown = false;

function addCanvas (res) {
    for (let i = 0; i < (res**2); i++) {
        let pixel = document.createElement('div');
        pixel.className = 'pixel';
        canvas.appendChild(pixel);
    }
    
    const displayCanvas = document.querySelector('.display-canvas');
    displayCanvas.appendChild(canvas);
}

addCanvas(16);


canvas.addEventListener('mousedown', e => {
    e.preventDefault();
    if (e.target.classList.contains('pixel')) {
        mouseIsDown = true;
    } else {
        mouseIsDown = false;
    }
})

canvas.addEventListener('mouseup', () => {
    mouseIsDown = false;
})

canvas.addEventListener('mousemove', e => {
    if (mouseIsDown === true && e.target.classList.contains('pixel')) {
        e.target.classList.add('colored');
    }
}, true);


// ^ harus pastiin kalau child, kenapa?
// ketika mouse didalam element, bisa kena element parent, jadi hitam semua

const resetBtn = document.querySelector('.reset');

resetBtn.addEventListener('click', () => {
    [...canvas.children].forEach(child => {
        child.classList.remove('colored');
    });
})

const changeResBtn = document.querySelector('.change')

changeResBtn.addEventListener('click', () => {
    while (true) {
        let resolution = +prompt('Masukkan jumlah pixel: \n Min 10, Max 100', '16');
        if (!Number.isNaN(resolution)) {
            alert('Masukkan angka yang valid!');
        } else if (resolution < 10 || resolution > 100) {
            alert('Angka kurang/lebih dari yang di perbolehkan!');
        }
        else {
            break;
        }
    }

})