function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    document.getElementById(pageId).classList.add('active');
}

function celsiusToFahrenheit() {
    const celsius = parseFloat(document.getElementById('celsius').value);
    if (!isNaN(celsius)) {
        const fahrenheit = (celsius * 9/5) + 32;
        document.getElementById('result1').textContent = `${celsius}°C = ${fahrenheit.toFixed(2)}°F`;
    } else {
        document.getElementById('result1').textContent = "Please enter a valid number";
    }
}

function fahrenheitToCelsius() {
    const fahrenheit = parseFloat(document.getElementById('fahrenheit').value);
    if (!isNaN(fahrenheit)) {
        const celsius = (fahrenheit - 32) * 5/9;
        document.getElementById('result2').textContent = `${fahrenheit}°F = ${celsius.toFixed(2)}°C`;
    } else {
        document.getElementById('result2').textContent = "Please enter a valid number";
    }
}

function metersToFeet() {
    const meters = parseFloat(document.getElementById('meters').value);
    if (!isNaN(meters)) {
        const feet = meters * 3.28084;
        document.getElementById('result3').textContent = `${meters} meters = ${feet.toFixed(2)} feet`;
    } else {
        document.getElementById('result3').textContent = "Please enter a valid number";
    }
}

function feetToMeters() {
    const feet = parseFloat(document.getElementById('feet').value);
    if (!isNaN(feet)) {
        const meters = feet / 3.28084;
        document.getElementById('result4').textContent = `${feet} feet = ${meters.toFixed(2)} meters`;
    } else {
        document.getElementById('result4').textContent = "Please enter a valid number";
    }
}

function calculateTax() {
    const income = parseFloat(document.getElementById('income').value);
    if (!isNaN(income)) {
        let tax;
        if (income <= 10000) {
            tax = income * 0.10;
        } else if (income <= 40000) {
            tax = 1000 + (income - 10000) * 0.15;
        } else if (income <= 85000) {
            tax = 5500 + (income - 40000) * 0.25;
        } else {
            tax = 16750 + (income - 85000) * 0.35;
        }
        document.getElementById('tax-result').textContent = `Income Tax: ₱${tax.toFixed(2)}`;
    } else {
        document.getElementById('tax-result').textContent = "Please enter a valid income amount";
    }
}

function calculateFactorial() {
    const n = parseInt(document.getElementById('n-value').value);
    if (!isNaN(n) && n >= 0) {
        let factorial = 1;
        let i = 1;
        while (i <= n) {
            factorial *= i;
            i++;
        }
        document.getElementById('factorial-result').textContent = `Factorial of ${n}: ${factorial}`;
    } else {
        document.getElementById('factorial-result').textContent = "Please enter a valid non-negative integer";
    }
}

function calculateSum() {
    const n = parseInt(document.getElementById('n-value').value);
    if (!isNaN(n) && n >= 0) {
        let sum = 0;
        let i = 1;
        do {
            sum += i;
            i++;
        } while (i <= n);
        document.getElementById('sum-result').textContent = `Sum of first ${n} numbers: ${sum}`;
    } else {
        document.getElementById('sum-result').textContent = "Please enter a valid non-negative integer";
    }
}

function calculateAverage() {
    const n = parseInt(document.getElementById('n-value').value);
    if (!isNaN(n) && n > 0) {
        let sum = 0;
        for (let i = 1; i <= n; i++) {
            sum += i;
        }
        const average = sum / n;
        document.getElementById('average-result').textContent = `Average of first ${n} numbers: ${average.toFixed(2)}`;
    } else {
        document.getElementById('average-result').textContent = "Please enter a valid positive integer";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    showPage('home');
});
