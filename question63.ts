/*Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias, including
 properties unique to each shape. */

 type Shape = {
    kind: "Circle" | "Rectangle";
    radius?: number;
    width?: number;
    height?: number;
 }

 let circle: Shape ={
    kind: "Circle",
    radius: 5,

 }

 let rectangle: Shape ={
    kind: "Rectangle",
    width: 6,
    height:3

 }
 console.log(circle);
 console.log(rectangle);
 
 