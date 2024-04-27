# Aufgabe 3, Nullstellen quadratischer Polynome (HTML, Javascript)
Einsendeaufgabencode: B-MUMB01-XX1-N01  
Bearbeiter: Maxim Heibach  
Matrikelnummer: 909442      

## Aufgabe
In dieser Aufgabe sollen Sie mittels HTML und Javascript eine Webseite erstellen, um die
Nullstellen (das heißt Schnittpunkte mit der x-Achse) quadratischer Polynome der Form
ax² + bx + c zu ermitteln und grafisch darzustellen: 

![Aufgabe 3](task3.png)  

Teilaufgaben:
1. Erstellen Sie zunächst den HTML-Code der Seite mit einer Überschrift, dem erklärenden Text, drei Inputfeldern und einem Button zum Absenden der Werte. 

2. Implementieren Sie das Javascript-Programm, das die Nullstelle(n) berechnet und sie unterhalb des Buttons ausgibt, falls welche existieren. Andernfalls soll eine Meldung anzeigt werden, dass keine Nullstellen existieren (Hinweis: pq-Formel).  
Das Programm soll dabei robust auf Fehleingaben reagieren (bspw. mit einem Alert-Dialog).  
    
    Ein paar Beispiele:  
Das Polynom 4x² + 8x + 3 hat die zwei Nullstellen x1 = -0,5, x2 = -1,5    
Das Polynom x² + 3x + 2 hat die zwei Nullstellen x1= -1, x2 = -2  
Das Polynom 0,25x² + 1x − 3 hat die zwei Nullstellen x1= 2, x2 = -6  
Das Polynom x2 + 4x + 4 hat die Nullstelle x = -2  
Das Polynom x + 1 hat die Nullstelle x = -1  
Das Polynom x2 + x + 1 hat keine Nullstelle. 

3. Implementieren Sie schließlich die grafische Visualisierung des Polynoms im Intervall x = [−10, 10] und – falls welche existieren – der zugehörigen Nullstellen. Verwenden Sie hierzu das HTML-Canvas-Element.
Hinweise: Zur Lösung der Aufgabe können die CanvasRenderingContext2D-Methoden
*begin-Path*, *clearRect*, *moveTo*, *lineTo* und *stroke* hilfreich sein. Um die Nullstellen zu markieren, verwenden Sie die Methoden *arc* und *fill*.  
Iterieren Sie in einer Schleife von x = −10 bis x = +10 mit einer Schrittweite von beispielsweise dx = 0,1, werten das Polynom für alle x ∈ −10, −10 + dx, ..., 10 aus und verbinden Sie die einzelnen aufeinanderfolgenden Punkte mit Liniensegmenten.  

    Setzen Sie min = -10 und max = +10, können Sie die folgenden Hilfsfunktionen verwenden, um die Koordinaten in Pixelkoordinaten innerhalb des Canvas umzurechnen: 
    ```sh
    let toCanvasX = function(x) {
        return (x+(max-min)/2)*canvas.width/(max-min);
    }
    ```
    ```sh
    let toCanvasY = function(y) {
        return canvas.height-(y+(max-min)/2)*canvas.height/(max-min);
    }
    ```

## Anleitung:
Die Datei 
```sh
Nullstellen.html 
```
öffnen.

Werte für a, b und c in Eingabemaske eingeben und mit Klick auf den Button "Nullstellen berechnen" berechnen lassen. 
