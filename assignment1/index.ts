interface Todo {
    id: number;
    todo: string;
    completed: boolean;
    userId: number
}

let API_URL: string = 'https://dummyjson.com/todos'

interface ApiResponse {
    users: Todo[]
}

const fetchDataFromAPI = (): void => {
    fetch(API_URL)
        .then(response => response.json())
        .then(todos => {
            console.log('todos', todos)
            const table = createDynamicTable(todos?.todos)
            document.body.appendChild(table)
        })
        .catch(error => {
            console.error('Error --> ', error)
        })
}

const createDynamicTable = (todos: Todo[]) => {
    const table = document.createElement('table')
    const headers = Object.keys(todos[0])
    const headerRow = document.createElement('tr')

    headers?.map(header => {
        const th = document.createElement('th')
        th.textContent = header
        th.className = 'todo'
        headerRow.appendChild(th)
    })

    table.appendChild(headerRow)

    todos?.map(todo => {
        const row = document.createElement('tr')
        // console.log('todo',todo)
        headers?.map(header => {
            const cell = document.createElement('td')
            cell.textContent = todo[header]
            cell.className = 'todo'
            row.appendChild(cell)
        })

        table.appendChild(row)
    })

    return table
}

fetchDataFromAPI()