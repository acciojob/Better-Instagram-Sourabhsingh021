//your code here
const parent = document.getElementById("parent");

let draggedItem = null;

parent.addEventListener('dragstart', (e) => {
	draggedItem = e.target;
})

parent.addEventListener("dragover", (e) => {
	e.preventDefault();
});

parent.addEventListener("drop", (e) => {
    e.preventDefault();

    const target = e.target;

    if (
        target.classList.contains("image") &&
        target !== draggedItem
    ) {
        // Swap background images
        const bg1 = getComputedStyle(draggedItem).backgroundImage;
        const bg2 = getComputedStyle(target).backgroundImage;

        draggedItem.style.backgroundImage = bg2;
        target.style.backgroundImage = bg1;

        // Swap text
        const text = draggedItem.textContent;
        draggedItem.textContent = target.textContent;
        target.textContent = text;
    }
});