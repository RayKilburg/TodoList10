// Grabbing the form, input, and todos from their ID's
const form = document.getElementById('form')
const input = document.getElementById('input')
const todosUL = document.getElementById('todos')

// checking for local storage, intialize todo for local storage
const todos = JSON.parse(localStorage.getItem('todos'))

// checking for todos 
if(todos) {
    todos.forEach(todo => addTodo(todo))
}

// Event Listener for the enter button and to add todo to list
form.addEventListener('submit', (e) => {
    e.preventDefault()

    addTodo()
})

// addTodo function
function addTodo(todo) {
    // todoText is value of the text inputed by the user
    let todoText = input.value

    // if todo gets passed in, then set todoText to todo.text
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

        // setting innerText to whatever todoText is
        todoEl.innerText = todoText

        // complete todo with left click
        todoEl.addEventListener('click', () => {
            todoEl.classList.toggle('completed')
            // update Local Storage
            updateLS()
        })

        // delete todo with right click, contextmenu = right click
        todoEl.addEventListener('contextmenu', (e) => {
            // preventing the default drop-down menu from right click
            e.preventDefault()

            // removing todo from the dom
            todoEl.remove()
            // update Local Storage
            updateLS()
        })

        // add todo to dom
        todosUL.appendChild(todoEl)

        // clear form
        input.value = ''

        // function that updates local storage
        updateLS()
    }

    // todo text value example in the console
    console.log(todoText)
}

// function that updates the local storage
function updateLS() {
    // take all list items
    todosEl = document.querySelectorAll('li')

    // make todos array
    const todos = []

    // take todos element and loop through each
    todosEl.forEach(todoEl => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed')
        })
    })

    // updating local storage
    localStorage.setItem('todos', JSON.stringify(todos))
}