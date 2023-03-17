const querystring = require('querystring');
const url = require('url');
const express = require('express');
const app = express();

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

/*
Apply filters from request to data array
 */
function filterArray(filters) {
    let data = [...users];
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

    /*
    Negative or zero limit doesn't make sense, so I added additional condition limit > 0
     */
    if (filters.limit && filters.limit > 0) {
        data = data.slice(0, filters.limit)
    }

    return data;
}

/*
Routing using express.js lib
 */

app.get('/users', (req, res) => {
    let params = querystring.parse(url.parse(req.url).query)
    let data = filterArray(params);

    if (data.length > 0) {
        res.write('Found ' + data.length + ' users: ' + JSON.stringify(data));
    } else {
        res.write('User data is missing or does not match the search and filter criteria');
    }

    res.send();
})

app.get('/', (req, res) => {
    res.write('Hello and welcome to homepage!');
    res.send();
})

app.listen(3000);
