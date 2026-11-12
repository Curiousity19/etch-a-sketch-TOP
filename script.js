function addCanvas (res) {
    const displayCanvas = document.querySelector('.display-canvas');
    const canvas = document.createElement('div');
    canvas.className = 'canvas';

    displayCanvas.removeChild(displayCanvas.lastChild);
    for (let i = 0; i < (res**2); i++) {
        let pixel = document.createElement('div');
        pixel.className = 'pixel';
        pixel.style.width = `calc(100% / ${res})`;
        pixel.style.height = `calc(100% / ${res})`;
        canvas.appendChild(pixel);
    }
    
    displayCanvas.appendChild(canvas);
    drawing(canvas);
    option(canvas)
}



function drawing (canvas) {
    let mouseIsDown = false;
    canvas.addEventListener('mousedown', e => {
        e.preventDefault();
        if (e.target.classList.contains('pixel')) {
            mouseIsDown = true;
        } else {
            mouseIsDown = false;
        }
    })
    
    document.addEventListener('mouseup', () => {
        mouseIsDown = false;
    })
    
    canvas.addEventListener('mouseenter', e => {
        if (mouseIsDown === true && e.target.classList.contains('pixel')) {
            e.target.classList.add('colored');
        }
    }, true);
    
    // ^ harus pastiin kalau child, kenapa?
    // ketika mouse didalam element, bisa kena element parent, jadi hitam semua
}


function option(canvas) {
    const resetBtn = document.querySelector('.reset');
    
    resetBtn.addEventListener('click', () => {
        [...canvas.children].forEach(child => {
            child.classList.remove('colored');
        });
    })
    
    const changeResBtn = document.querySelector('.change')
    
    changeResBtn.addEventListener('click', () => {
        let resolution = +prompt('Masukkan jumlah pixel: \n Min 10, Max 100');
        if (Number.isNaN(resolution)) {
            alert('Angka tidak valid, menggunakan nilai default.');
            resolution = 16;
        } else if (resolution < 10 || resolution > 100) {
            alert('Angka kurang/lebih dari yang di perbolehkan, diubah ke nilai default.');
            resolution = 16;
        }
        addCanvas(resolution)
    })    
}

addCanvas(16);