let box = document.querySelector(".counterInput");

function decrement() {
    if (box.value <= 1) {
        counter.value = 1;
    } else {
        box,value = parseInt(box.value) -1;
    }
}

function increment() {
    box.value = parseInt(box.value) +1;
}
