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
    if (!isNaN(income) && income >= 0) {
        let tax = 0;
        if (income <= 250000) {
            tax = 0;
        } else if (income <= 400000) {
            tax = (income - 250000) * 0.20;
        } else if (income <= 800000) {
            tax = 30000 + (income - 400000) * 0.25;
        } else if (income <= 2000000) {
            tax = 130000 + (income - 800000) * 0.30;
        } else if (income <= 8000000) {
            tax = 490000 + (income - 2000000) * 0.32;
        } else { 
            tax = 2410000 + (income - 8000000) * 0.35;
        }
        document.getElementById('tax-result').textContent = `Income Tax: ₱${tax.toFixed(2)}`;
    } else {
        document.getElementById('tax-result').textContent = "Please enter a valid non-negative income amount";
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


let employees = []; 

function renderPayrollTable() {
    const payrollTableBody = document.querySelector('#payroll-table tbody');
    payrollTableBody.innerHTML = ''; 

    employees.forEach((employee, index) => {
        const row = payrollTableBody.insertRow();
        row.insertCell().textContent = index + 1; 
        row.insertCell().textContent = employee.name;
        row.insertCell().textContent = employee.daysWorked;
        row.insertCell().textContent = `₱${employee.dailyRate.toFixed(2)}`;
        row.insertCell().textContent = `₱${employee.grossPay.toFixed(2)}`;
        row.insertCell().textContent = `₱${employee.deductionAmount.toFixed(2)}`;
        row.insertCell().textContent = `₱${employee.netPay.toFixed(2)}`;
    });
}

function addEmployee() {
    const employeeName = document.getElementById('employeeName').value.trim();
    const daysWorked = parseFloat(document.getElementById('daysWorked').value);
    const dailyRate = parseFloat(document.getElementById('dailyRate').value);
    const deductionAmount = parseFloat(document.getElementById('deductionAmount').value);


    if (!employeeName) {
        alert("Employee Name cannot be empty.");
        return;
    }
    if (isNaN(daysWorked) || daysWorked < 0) {
        alert("Please enter a valid non-negative number for Days Worked.");
        return;
    }
    if (isNaN(dailyRate) || dailyRate < 0) {
        alert("Please enter a valid non-negative number for Daily Rate.");
        return;
    }
    if (isNaN(deductionAmount) || deductionAmount < 0) {
        alert("Please enter a valid non-negative number for Deduction Amount.");
        return;
    }

    const grossPay = daysWorked * dailyRate;
    const netPay = grossPay - deductionAmount;

    const newEmployee = {
        name: employeeName,
        daysWorked: daysWorked,
        dailyRate: dailyRate,
        grossPay: grossPay,
        deductionAmount: deductionAmount,
        netPay: netPay
    };

    employees.push(newEmployee);
    renderPayrollTable(); 

    document.getElementById('employeeName').value = '';
    document.getElementById('daysWorked').value = '';
    document.getElementById('dailyRate').value = '';
    document.getElementById('deductionAmount').value = '';
}

function deleteEmployee() {
    const lineNumber = parseInt(document.getElementById('deleteLineNumber').value);

    if (isNaN(lineNumber) || lineNumber <= 0 || lineNumber > employees.length) {
        alert("Please enter a valid line number to delete.");
        return;
    }

    const indexToDelete = lineNumber - 1;
    employees.splice(indexToDelete, 1);
    renderPayrollTable(); 

    document.getElementById('deleteLineNumber').value = '';
}


document.addEventListener('DOMContentLoaded', function() {
    showPage('home');
    renderPayrollTable(); 
});
