function dotProduct(a,b){
    return((a.x*b.x)+(a.y*b.y))
}
const magnitude = (obj) => Math.sqrt(obj.x*obj.x+obj.y*obj.y);
function normalize(obj){
    return({x:obj.x/magnitude(obj),y:obj.y/magnitude(obj)});
}
function collision(obj1, obj2) {
    const axes = [...obj1.axis, ...obj2.axis]; // Combine axes from both objects
    for (let axis of axes) {
        const projection1 = projectShape(obj1.verts, axis);
        const projection2 = projectShape(obj2.verts, axis);
        if (!testPointsOverlap(projection1, projection2)) {
            return false; // If any axis does not overlap, no collision
        }
    }
    return true; // If all axes overlap, collision detected
}

function projectShape(verts, axis) {
    let min = Infinity;
    let max = -Infinity;
    for (let i = 0; i < verts.length; i++) {
        let product = dotProduct(axis, verts[i]);
        if (product < min) {
            min = product;
        }
        if (product > max) {
            max = product;
        }
    }
    return { min: min, max: max };
}

function testPointsOverlap(points, points2) {
    return points.min <= points2.max && points.max >= points2.min;
}

function ifOnEdgeBounce(obj){
    if(obj.sprite.x<=0){
        obj.sprite.x = 0;
        obj.sprite.r = Math.PI-obj.sprite.r;
        obj.speed /= 4
    }
    if(obj.sprite.x>=canvas.width){
        obj.sprite.x = canvas.width;
        obj.sprite.r = Math.PI-obj.sprite.r;
        obj.speed /= 4
    }
    if(obj.sprite.y<=0){
        obj.sprite.y = 0;
        obj.sprite.r = -obj.sprite.r;
        obj.speed /= 4
    }
    if(obj.sprite.y>=canvas.height){
        obj.sprite.y = canvas.height;
        obj.sprite.r = -obj.sprite.r;
        obj.speed /= 4
    }
}