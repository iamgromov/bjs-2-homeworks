// Задача 1. Форматтер чисел
function parseCount(quantity) {
    let count = Number.parseFloat(quantity);
    if (isNaN(count)) {
        throw new Error("Невалидное значение");
    } else {
        return count;
    }
}

function validateCount(quantity) {
    try {
        return parseCount(quantity);
    } catch(error) {
        return error;
    }
}

// Задача 2. Треугольник
class Triangle {
    constructor(a, b, c) {
        if (a + b < c || a + c < b || b + c < a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }

    get perimeter() {
        return this.a + this.b + this.c;
    }

    get area() {
        let p = this.perimeter / 2;
        let area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return Number(area.toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch(error) {
        return { 
            get perimeter() {return "Ошибка! Треугольник не существует";},
            get area() {return "Ошибка! Треугольник не существует";}
        }
    }
}