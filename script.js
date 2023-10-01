function printTable(from, to, step, func) {
    if (func === undefined) {
        return;
    }
    from = from;
    to = to;
    step = step || 1;
    document.write("<table border='1' cellspacing='0'>");
    for (var x = from; x <= to; x += step) {
        document.write("<tr>");
        document.write("<td>" + x + "</td>");
        document.write("<td>" + func(x) + "</td>");
        document.write("</tr>");
    }
    document.write("</table>");
}

function quadratic(x) {
    return x * x;
}

function cubic(x) {
    return x * x * x;
}

// printTable(-10, 10, 0.5, quadratic);

function callbackTables() {
    let from = +prompt("Input 'from'");
    let to = +prompt("Input 'to'");
    let step = +prompt("Input step");
    let func = +prompt("Input number of function");
    switch (func) {
        case 1:
            printTable(from, to, step, quadratic);
            break;
        case 2:
            printTable(from, to, step, Math.sin);
            break;
        case 3:
            printTable(from, to, step, cubic);
            break;
        case 4:
            printTable(from, to, step, Math.cos);
            break;
        default:
            break;
    }
}

callbackTables();

