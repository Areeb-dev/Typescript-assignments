var API_URL = 'https://dummyjson.com/todos';
var fetchDataFromAPI = function () {
    fetch(API_URL)
        .then(function (response) { return response.json(); })
        .then(function (todos) {
        console.log('todos', todos);
        var table = createDynamicTable(todos === null || todos === void 0 ? void 0 : todos.todos);
        document.body.appendChild(table);
    })
        .catch(function (error) {
        console.error('Error --> ', error);
    });
};
var createDynamicTable = function (todos) {
    var table = document.createElement('table');
    var headers = Object.keys(todos[0]);
    var headerRow = document.createElement('tr');
    headers.map(function (header) {
        var th = document.createElement('th');
        th.textContent = header;
        th.className = 'todo';
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);
    todos === null || todos === void 0 ? void 0 : todos.map(function (todo) {
        var row = document.createElement('tr');
        console.log('todo', todo);
        headers.map(function (header) {
            var cell = document.createElement('td');
            cell.textContent = todo[header];
            cell.className = 'todo';
            row.appendChild(cell);
        });
        table.appendChild(row);
    });
    return table;
};
fetchDataFromAPI();
