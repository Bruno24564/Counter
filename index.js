let box = document.querySelector("#counterInput");

function decrement() {
    if (box.value <= 0) {
        box.value = 0;
    } else {
        box.value = parseInt(box.value) -1;
    }
}

function increment() {
    box.value = parseInt(box.value) +1;
}
