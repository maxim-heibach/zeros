function calculateZeros() {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let c = parseFloat(document.getElementById("c").value);
    
    // Überprüfung, ob nur Zahlen eingegeben wurden
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert('Es sind nur Zahlen erlaubt.');
        return;
    }

    // Warnung falls kein quadratisches Polynom eingegeben wird
    if (a === 0) {
        alert('Es können nur quadratische Polynome berechnet werden.');
        return;
    }

    // Variablen für Nullstellen
    let discriminant = Math.pow(b / (2 * a), 2) - c / a;
    let x1, x2, doubleX = '';
    
    // Berechnung und Ausgabe der Nullstellen.
    if (discriminant > 0) { // 2 Nullstellen
        x1 = (-b / (2 * a) + Math.sqrt(discriminant));
        x2 = (-b / (2 * a) - Math.sqrt(discriminant));
        /* Ausgabe der Nullstellen, hierbei wird die Ausgabe der Funktion an den Wert von a, b und c angepasst 
           (z.B. für a = 4, b = -3, c = 0 -> 4x² - 3x statt 4x² + -3 + 0) */
        if (b < 0) {
            if (c < 0) {
                document.getElementById('zerosOutput').innerText = 'Das Polynom ' + a + 'x\u00B2 - ' + (-1) * b + 'x - ' + (-1) * c + ' hat die Nullstellen: x\u2081 = ' + x1 + ', x\u2082 = ' + x2 + '.';
            } else if (c > 0) {
                document.getElementById('zerosOutput').innerText = 'Das Polynom ' + a + 'x\u00B2 - ' + (-1) * b + 'x + ' + c + ' hat die Nullstellen: x\u2081 = ' + x1 + ', x\u2082 = ' + x2 + '.';
            } else {
                document.getElementById('zerosOutput').innerText = 'Das Polynom ' + a + 'x\u00B2 - ' + (-1) * b + 'x hat die Nullstellen: x\u2081 = ' + x1 + ', x\u2082 = ' + x2 + '.';
            }
        } else if (b > 0) {
            if (c < 0) {
                document.getElementById('zerosOutput').innerText = 'Das Polynom ' + a + 'x\u00B2 + ' + b + 'x - ' + (-1) * c + ' hat die Nullstellen: x\u2081 = ' + x1 + ', x\u2082 = ' + x2 + '.';
            } else if (c > 0) {
                document.getElementById('zerosOutput').innerText = 'Das Polynom ' + a + 'x\u00B2 + ' + b + 'x + ' + c + ' hat die Nullstellen: x\u2081 = ' + x1 + ', x\u2082 = ' + x2 + '.';
            } else {
                document.getElementById('zerosOutput').innerText = 'Das Polynom ' + a + 'x\u00B2 + ' + b + 'x hat die Nullstellen: x\u2081 = ' + x1 + ', x\u2082 = ' + x2 + '.';
            }
        } else {
            if (c < 0) {
                document.getElementById('zerosOutput').innerText = 'Das Polynom ' + a + 'x\u00B2 - ' + (-1) * c + ' hat die Nullstellen: x\u2081 = ' + x1 + ', x\u2082 = ' + x2 + '.';
            } else if (c > 0) {
                document.getElementById('zerosOutput').innerText = 'Das Polynom ' + a + 'x\u00B2 + ' + c + ' hat die Nullstellen: x\u2081 = ' + x1 + ', x\u2082 = ' + x2 + '.';
            } else {
                document.getElementById('zerosOutput').innerText = 'Das Polynom ' + a + 'x\u00B2 hat die Nullstellen: x\u2081 = ' + x1 + ', x\u2082 = ' + x2 + '.';
            }
        }      
    } else if (discriminant === 0) { // 1 doppelte Nullstelle
        doubleX = -b / (2 * a);
        /* Ausgabe der Nullstellen, hierbei wird die Ausgabe der Funktion an den Wert von a, b und c angepasst 
           (z.B. für a = 4, b = -3, c = 0 -> 4x² - 3x statt 4x² + -3 + 0) */
        if (b < 0) {
            if (c < 0) {
                document.getElementById('zerosOutput').innerText = 'Das Polynom ' + a + 'x\u00B2 - ' + (-1) * b + 'x - ' + (-1) * c + ' hat die doppelte Nullstelle: x = ' + doubleX;
            } else if (c > 0) {
                document.getElementById('zerosOutput').innerText = 'Das Polynom ' + a + 'x\u00B2 - ' + (-1) * b + 'x + ' + c + ' hat die doppelte Nullstelle: x = ' + doubleX;
            } else {
                document.getElementById('zerosOutput').innerText = 'Das Polynom ' + a + 'x\u00B2 - ' + (-1) * b + 'x hat die doppelte Nullstelle: x = ' + doubleX;
            }
        } else if (b > 0) {
            if (c < 0) {
                document.getElementById('zerosOutput').innerText = 'Das Polynom ' + a + 'x\u00B2 + ' + b + 'x - ' + (-1) * c + ' hat die doppelte Nullstelle: x = ' + doubleX;
            } else if (c > 0) {
                document.getElementById('zerosOutput').innerText = 'Das Polynom ' + a + 'x\u00B2 + ' + b + 'x + ' + c + ' hat die doppelte Nullstelle: x = ' + doubleX;
            } else {
                document.getElementById('zerosOutput').innerText = 'Das Polynom ' + a + 'x\u00B2 + ' + b + 'x hat die doppelte Nullstelle: x = ' + doubleX;
            }
        } else {
            if (c < 0) {
                document.getElementById('zerosOutput').innerText = 'Das Polynom ' + a + 'x\u00B2 - ' + (-1) * c + ' hat die doppelte Nullstelle: x = ' + doubleX;
            } else if (c > 0) {
                document.getElementById('zerosOutput').innerText = 'Das Polynom ' + a + 'x\u00B2 + ' + c + ' hat die doppelte Nullstelle: x = ' + doubleX;
            } else {
                document.getElementById('zerosOutput').innerText = 'Das Polynom ' + a + 'x\u00B2 hat die doppelte Nullstelle: x = ' + doubleX;
            }
        }
    } else { // keine Nullstellen
        /* Ausgabe der Nullstellen, hierbei wird die Ausgabe der Funktion an den Wert von a, b und c angepasst 
           (z.B. für a = 4, b = -3, c = 0 -> 4x² - 3x statt 4x² + -3 + 0) */
        if (b < 0) {
            if (c < 0) {
                document.getElementById('zerosOutput').innerText = 'Das Polynom ' + a + 'x\u00B2 - ' + (-1) * b + 'x - ' + (-1) * c + ' hat keine reellen Nullstellen.';
            } else if (c > 0) {
                document.getElementById('zerosOutput').innerText = 'Das Polynom ' + a + 'x\u00B2 - ' + (-1) * b + 'x + ' + c + ' hat keine reellen Nullstellen.';
            } else {
                document.getElementById('zerosOutput').innerText = 'Das Polynom ' + a + 'x\u00B2 - ' + (-1) * b + 'x hat keine reellen Nullstellen.';
            }
        } else if (b > 0) {
            if (c < 0) {
                document.getElementById('zerosOutput').innerText = 'Das Polynom ' + a + 'x\u00B2 + ' + b + 'x - ' + (-1) * c + ' hat keine reellen Nullstellen.';
            } else if (c > 0) {
                document.getElementById('zerosOutput').innerText = 'Das Polynom ' + a + 'x\u00B2 + ' + b + 'x + ' + c + ' hat keine reellen Nullstellen.';
            } else {
                document.getElementById('zerosOutput').innerText = 'Das Polynom ' + a + 'x\u00B2 + ' + b + 'x hat keine reellen Nullstellen.';
            }
        } else {
            if (c < 0) {
                document.getElementById('zerosOutput').innerText = 'Das Polynom ' + a + 'x\u00B2 - ' + (-1) * c + ' hat keine reellen Nullstellen.';
            } else if (c > 0) {
                document.getElementById('zerosOutput').innerText = 'Das Polynom ' + a + 'x\u00B2 + ' + c + ' hat keine reellen Nullstellen.';
            } else {
                document.getElementById('zerosOutput').innerText = 'Das Polynom ' + a + 'x\u00B2 hat keine reellen Nullstellen.';
            }
        }
    }

    drawCanvas(a, b, c, x1, x2, doubleX, discriminant);
}