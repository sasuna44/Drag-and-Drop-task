let draggedImg = null;
const imgs = document.querySelectorAll('.drag-row img'); 
const drop_row = document.querySelector('.drop-row'); 

imgs.forEach(img => {
    img.addEventListener('dragstart', dragStart);
    img.addEventListener('dragend', dragEnd);
});

function dragStart() {
    if (draggedImg !== null) return;

    draggedImg = this;
    this.className += ' hold';
    setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd() {
    this.className = '';
}

drop_row.addEventListener('dragover', dragOver);
drop_row.addEventListener('dragenter', dragEnter);
drop_row.addEventListener('dragleave', dragLeave);
drop_row.addEventListener('drop', dragDrop);

function dragOver(e) {
    e.preventDefault();
}

function dragEnter(e) {
    e.preventDefault();
    this.className += ' hovered';
}

function dragLeave() {
    this.className = 'drop-row';
}

function dragDrop() {
    this.className = 'drop-row';
    this.append(draggedImg);
    draggedImg = null;
    draggedImg.removeEventListener('dragstart', dragStart);
    draggedImg.removeEventListener('dragend', dragEnd);
}
