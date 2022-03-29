console.log('Пункт номер: 5');

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Вы согласны?",
    () => console.log('Вы согласились.'),
    () => console.log('Вы отменили выполнение.')
);


console.log('Пункт номер: 6');

function changeRow(row) {
    let arr = row.split('-')
    return arr;
}

console.log(changeRow('my-short-string'));



console.log('Пункт номер: 7');

function changeArr(arr) {
    let row = arr.join(' ');
    return row;
}

console.log(changeArr(['JavaScript', 2015]));



console.log('Пункт номер: 8');

function filterUsers() {
    let users = [
        {id: 1, name: "Vic", age: 21},
        {id: 2, name: "Petya", age: 30},
        {id: 3, name: "Jon", age: 5}
    ];

    let result = users.filter(item => item.age < 20);

    return result;
}

console.log(filterUsers());



console.log('Пункт номер: 9');

function createNewArr() {
    let users = [{id: 1, name: "Vic", age: 21},
                {id: 2, name: "Petya", age: 30}, 
                {id: 3, name: "Jon", age: 5}
            ];
    let names = users.map(item => item.name);

    return names;
}

console.log(createNewArr());



console.log('Пункт номер: 10');

let arr9 = [5, 3, 8, 1];

function filterRangeInPlace(arr, a, b) {
    
    for (let i = 0; i < arr.length; i++) {
        let value = arr[i];

        if (value < a || value > b) {
            arr.splice(i, 1);
            i--;
        }
    }
}

console.log(filterRangeInPlace(arr9, 1, 4));



console.log('Пункт номер: 11');

let str = 'Добрый день!';
let separator = ' ';
let arr11 = [];

function turnToArr(str, separator) {
    return arr11 = str.split(separator);
}


console.log(turnToArr(str, separator));



console.log('Пункт номер: 12');

let arr12 = [5, 3, 8, 1];

function slArray(arr, startIndex, endIndex) {
    return arr.slice(startIndex, endIndex);
}

let range = slArray(arr12, 1, 4)

console.log(range);
console.log(arr12);



console.log('Пункт номер: 13');

function sum(...arr) {
    let result = 0;

    for (let value of arr) {
        result += value;
    }

    return result;
}

console.log(sum(1, 2, 3, 4, 5));