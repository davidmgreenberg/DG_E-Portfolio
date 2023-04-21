const button = document.querySelector('.dropdown-button');
const list = document.querySelector('.dropdown-list');
button.addEventListener('click', () => {
list.style.display = (list.style.display === 'none') ? 'block' : 'none';
})


function moveBackground(event) {
    const shapes = document.querySelectorAll('.shape')
    const scaleFactor = 1 / 20;
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for (let i = 0; i < shapes.length; i++) {
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px,${y * boolInt}px)`
    }
}
