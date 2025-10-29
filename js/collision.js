function dotProduct(a,b){
    return (a[0]*b[0] + a[1]*b[1]);
}
function magnitude(a){
    return Math.sqrt(Math.pow(a[0],2)+Math.pow(a[1],2));
}
function normalize(a){
    return [a[0]/magnitude(a),a[1]/magnitude(a)];
}
function projectShape(verts,axis) {
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
function collision(shape1,shape2){
    for (let i  = 0; i < shape1.axis.length; i++) {
        if (!testPointsOverlap(projectShape(shape1.verts, shape1.axis[i]), projectShape(shape2.verts, shape1.axis[i]))){
            return false; // If any axis does not overlap, no collision
        }
    }
    for (let i  = 0; i < shape2.axis.length; i++) {
        if (!testPointsOverlap(projectShape(shape1.verts, shape2.axis[i]), projectShape(shape2.verts, shape2.axis[i]))){
            return false; // If any axis does not overlap, no collision
        }
    }
    return true;
}
function ifOnEdgeBounce(obj){
    if(obj.body.x<=0){
        obj.body.x = 0;
        obj.body.r = Math.PI-obj.body.r;
        obj.speed /= 4
    }
    if(obj.body.x>=resolution.width){
        obj.body.x = resolution.width;
        obj.body.r = Math.PI-obj.body.r;
        obj.speed /= 4
    }
    if(obj.body.y<=0){
        obj.body.y = 0;
        obj.body.r = -obj.body.r;
        obj.speed /= 4
    }
    if(obj.body.y>=resolution.height){
        obj.body.y = resolution.height;
        obj.body.r = -obj.body.r;
        obj.speed /= 4
    }
}
