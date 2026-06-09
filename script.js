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
	const draggedNext = draggedItem.nextElementSibling;
	const targetNext = target.nextElementSibling;

	parent.insertBefore(draggedItem, targetNext);
	parent.insertBefore(target, draggedNext);
}
});