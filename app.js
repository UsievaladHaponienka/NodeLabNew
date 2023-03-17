const http = require('http');
const url = require('url');
const querystring = require('querystring');
const port = 3000;

const users = [
    {id: 1, fullName: 'Ivan Ivanov', age: 17, type: 'student'},
    {id: 2, fullName: 'Aleksey Aleksandrovich', age: 44, type: 'developer'},
    {id: 3, fullName: 'Azamat Karimov', age: 36, type: 'manager'},
    {id: 4, fullName: 'Rustam Abdullayev', age: 32, type: 'tester'},
    {id: 5, fullName: 'Valentina Gromova', age: 39, type: 'manager'},
    {id: 6, fullName: 'Matvey Stepanov', age: 18, type: 'student'},
    {id: 7, fullName: 'Oleg Semyonov', age: 23, type: 'developer'},
    {id: 8, fullName: 'Alena Denisova', age: 19, type: 'trainee'},
    {id: 9, fullName: 'Pavel Petrov', age: 21, type: 'trainee'},
];

http.createServer((req, res) => {
    let parsedUrl = url.parse(req.url);

    //TODO: Make normal routing using express lib
    if (parsedUrl.pathname === '/users') {
        let params = querystring.parse(parsedUrl.query)
        let data = filterArray(params);


        res.write('Users: ' + JSON.stringify(data));
        res.end();
    } else {
        res.write('Hello, World!')
        res.end();
    }
}).listen(port)

function filterArray(filters) {
    let data = [...users];
    //TODO refactor
    if (filters.fullName) {
        data = data.filter(user => user.fullName === filters.fullName);
    }

    if (filters.maxAge) {
        data = data.filter(user => user.age <= filters.maxAge)
    }

    if (filters.minAge) {
        data = data.filter(user => user.age >= filters.minAge)
    }

    if (filters.type) {
        data = data.filter(user => user.type === filters.type)
    }

    if (filters.limit) {
        data = data.slice(0, filters.limit)
    }

    return data;
}
