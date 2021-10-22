// HTML ELEMENTS
const userInput = document.getElementById("user-input");
const unorderedList = document.getElementById("unordered-list");
const clearAllBtn = document.getElementById("clear-all-btn");

// input event listener on keyboard press
userInput.addEventListener("keypress", (event) => {
	//if userInput empty or ENTER is not pressed, no element will be added
	if (userInput.value.length > 0 && event.keyCode === 13) {
		// ADD list item
		const li = document.createElement("li");
		const span = document.createElement("span");
		span.appendChild(document.createTextNode(userInput.value));
		unorderedList.appendChild(li);
		li.appendChild(span);

		// ADD delete button
		const deleteButton = document.createElement("button");
		deleteButton.innerHTML = "Delete";
		deleteButton.classList.add("btn");
		li.appendChild(deleteButton);

		// Delete item
		deleteButton.addEventListener("click", () => li.remove());

		// mark as DONE
		li.addEventListener("click", () => {
			span.setAttribute("class", "done");
		});

		// clear ALL todos
		clearAllBtn.addEventListener("click", () => li.remove());

		// Clear userInput
		userInput.value = "";
	}
});