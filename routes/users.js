const express = require('express');
const router = express.Router();

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

router.get('/', (req, res) => {
    let data = [...users];

    /*
    "Filtering" should be terminated if data.length = 0.
     It doesn't have a lot of sense while filters are so simple, but anyway.
     */
    if (req.query.fullName) {
        data = data.filter(user => user.fullName === req.query.fullName);
    }

    if (req.query.maxAge) {
        data = data.filter(user => user.age <= req.query.maxAge)
    }

    if (req.query.minAge) {
        data = data.filter(user => user.age >= req.query.minAge)
    }

    if (req.query.type) {
        data = data.filter(user => user.type === req.query.type)
    }

    /*
    Negative or zero limit doesn't make sense, so I added additional condition limit > 0
     */
    if (req.query.limit && req.query.limit > 0) {
        data = data.slice(0, req.query.limit)
    }

    if (!data.length) {
        return res.send('User data is missing or does not match the search and filter criteria');
    }

    res.send('Found ' + data.length + ' users: ' + JSON.stringify(data));
})

module.exports = router;