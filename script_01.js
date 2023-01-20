"use strict";

/* Die Satzbau-Maschine | Arrays */

/*** 02. Theorie: Array */
// let arr;
// arr = new Array(); // Konstruktor
// arr = [];   // Literal
// arr = [2,7,11,4];
// arr = [true,false,true,];
// arr = ["Ich","bin","Max","Mütze"];

// output(arr);
// output(arr.length);
// output(arr[0]); // Index 0 (1. Pos. im Array)
// output(arr[3]); // Index 3 (3. Pos. im Array)
// output(arr[arr.length-1]);  // letzte Pos. im Array

// () --> Parameter,Tests
// {} --> Codeblöcke
// [] --> Arrays, Index 

/* 02a. Theorie: Schleifen (for-schleifen) */

/* For -Schleifen als allg. Wiederholungs-Struktur */

// Inkrement (untere Grenze --> obere Grenze)
// for (let i = 0; i < 10; i++) {
//     output("index i: " + i);   
// }

// Dekrement (obere Grenze --> untere Grenze)
// for (let i = 10; i >= 0; i--) {
//     output("index i: " + i);
// }

// // Inkrement (var. Schrittweite)
// for (let i = 0; i < 100; i+=5) {
//     output("index i: " + i);   
// }

/* 02b. For-Schleife für Array-Index (Iteration)*/
// let arr = ["Ich","bin","die","coole","Maxine","Mützerich"];
// for (let i = 0; i < arr.length; i++) {
//     output("index i:" + i + " " + arr[i]); // i als Index des Arrays
// }

 /*********   Überlegungen - Transponierung **********/



/*
1. Einer Variablen kann Ihr eigener Wert zugewiesen werden.
Solange die Variable existiert, bleibt dieser erhalten.
hier: Aufsummierung
*/

/*
1a. Einer Variablen kann Ihr eigener Wert zugewiesen werden
Solange die Variable existiert, bleibt dieser erhalten
hier: Verkettung eines Strings // Transponierung
*/

// let str = "";
// let gap = " ";
// let addStr = "Test";
// for (let i = 0; i <= 5; i++) {
//     output("in der loop: " + str);
//     // a = a + 1;  // Numerik
//     str = str + addStr + gap // Text
// }
// output("nach der loop: " + str);

/* Zu "Fuß" - DRY !!! */
// let a = 0; // Anfangswert
// output("inhalt von a: " + a);
// a = a + 1;  // a = 0 + 1
// output("inhalt von a: " + a);
// a = a + 1;  // a = 1 + 1
// output("inhalt von a: " + a);
// a = a + 1;  // a = 2 + 1
// output("inhalt von a: " + a);

/* Besser: mit FOR-Schleife */
// let a = 0; // Anfangswert
// for (let i = 0; i < 10; i++) {
//     output (i);
//     output("in der loop vor +:" + a);
//     a = a + 1;
//     output("in der loop nach +:" + a);
// }

/*** 01. Funktionalität mit Einzelparametern */
// --> "Ich bin Max Mütze."
// output(getSentence("Ich","bin","Max","Mütze"));
// output(getSentence("Ich","bin","die","coole","Maxine","Mützerich"));
function getSentence(word1,word2,word3,word4,word5,word6) {
    const GAP = " ";
    const PUNCT = ".";
    
    let str =   word1 + GAP + 
                word2 + GAP + 
                word3 + GAP + 
                word4 + GAP +
                word5 + GAP +
                word6 +
                PUNCT;
    return str;
}

/*** 01a. Funktionalität mit Array 1  */
// Kritik | Überlegung
// word1,word2, .... wordN :: Semantische Struktur
// arr[0],arr[1] ... arr[n] :: Nummerische Struktur (0,1,2,3 ... n)
// --> Transformation semantisches Problem --> nummerisches Problem
// output(getSentenceArr(["Ich","bin","die","coole","Maxine","Mützerich"]));
function getSentenceArr(arr) {
    const GAP = " ";
    const PUNCT = ".";
    let str =   arr[0] + GAP + 
                arr[1] + GAP + 
                arr[2] + GAP + 
                arr[3] + GAP +
                arr[4] + GAP +
                arr[5] +
                PUNCT;
    return str;
}

/*** 01b. Funtionalität mit Array 2 ***/
//Transponierung: untereinander ---> nebeneinander
output(getSentenceArr2(["Ich","bin","die","coole","Maxine","Mützerich"]))
output(getSentenceArr2(["Ich","bin","die","coole"]))
output(getSentenceArr2(["Ich","bin"]))
function getSentenceArr2(arr) {
    const GAP = " ";
    const PUNCT = ".";
    let str = "";

    for (let i = 0; i < arr.length; i++) {
        if (i==arr.length -1) {
            str=str+arr[i]+PUNCT;
        } else {
            str=str+arr[i]+GAP;
        }
        }
        return str;
}


// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(outputStr) {
    console.log(outputStr);
}

