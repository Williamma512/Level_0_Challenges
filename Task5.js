function triangleArea(side1,side2,side3) {
    const p = (side1 + side2 + side3)/2;
    const a = Math.sqrt(p * (p - side1)* (p - side2) * (p - side3 ));

console.log ("The area of the triangle is :" + a + " Square cm");
}

triangleArea(3,4,5);