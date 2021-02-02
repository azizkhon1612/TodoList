let input = prompt('what would you like to do?');
const todos = ['Collect Chicken Eggs', 'Clean Litter Box'];
while (input !== 'quit' && input !== 'q') {
    switch (input) {
    case 'list':
        console.log('*****************')
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('*****************')
        break;
    case 'new':
        const newTodo = prompt('Ok, what is the new todo?');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list!`)
        break;
    case 'delete':
        const index = parseInt(prompt('Ok, enter an index to delete:'));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`Ok, deleted ${deleted[0]}`);
        } else {
            console.log('Unknown index')
        }
        break;
    }
    input = prompt('what would you like to do?')
}
console.log('OK QUIT THE APP!')