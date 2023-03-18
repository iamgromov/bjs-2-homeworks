// Задача 1. Печатное издание

class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = null) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = type;
    }

    fix() {
        this.state = this.state * 1.5;
    }

    set state(state) {
        if (state < 0) {
            this._state = 0;
        } else if (state > 100) {
            this._state = 100;
        } else {
            this._state = state;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = "magazine") {
        super(name, releaseDate, pagesCount, state, type);
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state = 100, type = "book") {
        super(name, releaseDate, pagesCount, state, type);
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100, type = "novel") {
        super(author, name, releaseDate, pagesCount, state, type);
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100, type = "fantastic") {
        super(author, name, releaseDate, pagesCount, state, type);
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100, type = "detective") {
        super(author, name, releaseDate, pagesCount, state, type);
    }
}

// Задача 2. Библиотека

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        const result = this.books.find((item) => item[type] === value);
        return result || null;
    }

    giveBookByName(bookName) {
        const index = this.books.findIndex((item) => item.name === bookName);
        return index < 0 ? null : this.books.splice(index, 1)[0];
    }
}

// Задача 3. Журнал успеваемости *

class Student {
    constructor(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.marks = {};
    }

    addMark(mark, subject) {
        if (mark >= 2 && mark <= 5) {
            if (this.marks[subject] === undefined) {
                this.marks[subject] = [];
            }
            this.marks[subject].push(mark);
        }
    }

    getAverageBySubject(subject) {
        return this.marks[subject] !== undefined ? this.marks[subject].reduce((acc, item, index, arr) => acc + item / arr.length, 0) : 0;
    }

    getAverage() {
        return Object.keys(this.marks).reduce((acc, item, index, arr) => acc + this.getAverageBySubject([item]) / arr.length, 0);
    }
}