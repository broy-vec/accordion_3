let prev = document.getElementById("prev");
let next = document.getElementById("next");

let arr = ["images/1.jpg", "images/2.jpg", "images/3.jpg", "images/4.jpg", "images/5.jpg", "images/6.jpg", "images/7.jpg", "images/8.jpg", "images/9.jpg", "images/10.jpg"]

let i = 0;

next.addEventListener("click", () => {
    i++;
    if (i > arr.length - 1)
        i = 0

    document.getElementById("img").src = arr[i]

})

prev.addEventListener("click", () => {
    i--;
    if (i < 0)
        i = arr.length - 1

    document.getElementById("img").src = arr[i]

})