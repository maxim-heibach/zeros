function drawCanvas(a, b, c, x1, x2, doubleX, discriminant) {
    let canvas = document.getElementById('myCanvas');
    let ctx = canvas.getContext('2d');
    const min = -10;
    const max = 10;
    const dx = 0.1;

    // Koordinate in Pixelkoordinaten innerhalb von "myCanvas" umrechnen
    let toCanvasX = function(x) {
        return (x+(max-min)/2)*canvas.width/(max-min);
    }
    let toCanvasY = function(y) {
        return canvas.height-(y+(max-min)/2)*canvas.height/(max-min);
    }
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.strokeStyle = '#000000';

    // X-Achse 
    ctx.moveTo(toCanvasX(min),toCanvasY(0));
    ctx.lineTo(toCanvasX(max),toCanvasY(0));
    
    // y-Achse 
    ctx.moveTo(toCanvasX(0),toCanvasY(min));
    ctx.lineTo(toCanvasX(0),toCanvasY(max));
    ctx.stroke();

    // Polynom zeichnen
    ctx.beginPath(); 
    ctx.strokeStyle = "#005e00";
    for (let x = min; x <= max; x += dx) {
        let y = a * x * x + b * x + c;
        let canvasX = toCanvasX(x);
        let canvasY = toCanvasY(y);
        if (x === min) {
            ctx.moveTo(canvasX, canvasY);
        } else {
            ctx.lineTo(canvasX, canvasY);
        }
    }
    ctx.stroke();

    // Nullstelle(n) markieren falls vorhanden
    if (discriminant > 0) {
        // grüne Linie um schwarze Markierung der Nullstelle
        ctx.beginPath();
        ctx.fillStyle = '#005e00';
        ctx.arc(toCanvasX(x1), toCanvasY(0), 5.25, 0, 2 * Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(toCanvasX(x2), toCanvasY(0), 5.25, 0, 2 * Math.PI);
        ctx.fill();

        // schwarze Markierung der Nullstelle
        ctx.beginPath();
        ctx.fillStyle = '#000000';
        ctx.arc(toCanvasX(x1), toCanvasY(0), 4, 0, 2 * Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(toCanvasX(x2), toCanvasY(0), 4, 0, 2 * Math.PI);
        ctx.fill();
    } else if (discriminant === 0) {
        // grüne Linie um schwarze Markierung der Nullstelle
        ctx.beginPath();
        ctx.fillStyle = '#005e00';
        ctx.arc(toCanvasX(doubleX), toCanvasY(0), 5.25, 0, 2 * Math.PI);
        ctx.fill();
        
        // schwarze Markierung der Nullstelle
        ctx.beginPath();
        ctx.fillStyle = '#000000';
        ctx.arc(toCanvasX(doubleX), toCanvasY(0), 4, 0, 2 * Math.PI);
        ctx.fill();
    }
}