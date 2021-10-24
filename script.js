// Grabbing the form, input, and todos from their ID's
const form = document.getElementById('form')
const input = document.getElementById('input')
const todosUL = document.getElementById('todos')

// Event Listener for the enter button and to add todo to list
form.addEventListener('submit', (e) => {
    e.preventDefault()

    addTodo()
})

// add todo function
function addTodo(todo) {
    // todoText is value of the text inputed by the user
    let todoText = input.value

    if(todo) {
        todoText = todo.text
    }

    // construct a list item -li
    if(todoText) {
        // todoEl is making a new li element to the dom
        const todoEl = document.createElement('li')
        if(todo && todo.completed) {
            todoEl.classList.add('completed')
        }

        todoEl.innerText = todoText

        // complete todo with left click
        todoEl.addEventListener('click', () => todoEl.classList.toggle('completed'))

        // delete todo with right click, contextmenu = right click
        todoEl.addEventListener('contextmenu', (e) => {
            // preventing the default drop-down menu from right click
            e.preventDefault()

            //removing todo from the dom
            todoEl.remove()
        })

        // add todo to dom
        todosUL.appendChild(todoEl)

        // clear form
        input.value = ''
    }

    // todo text value example in the console
    console.log(todoText)
}