function collision(box1,box2){
    getVerts(box1)
    getVerts(box2)
    RotVerts(box1.rot,box1.vert,box1.center)
    RotVerts(box2.rot,box2.vert,box2.center)
}
function RotVerts(rot,array,center){
    sin = Math.sin(rot)
    cos = Math.cos(rot)
    array[0] = 
    
    {x:cos*(array[0].x-center.x)-sin*(array[0].y-center.y)+center.x,
    y:sin*(array[0].x-center.x)+cos*(array[0].y-center.y)+center.y}
    
    array[1] = 
    
    {x:cos*(array[1].x-center.x)-sin*(array[1].y-center.y)+center.x,
    y:sin*(array[1].x-center.x)+cos*(array[1].y-center.y)+center.y}
    
    array[2] = 
    
    {x:cos*(array[2].x-center.x)-sin*(array[2].y-center.y)+center.x,
    y:sin*(array[2].x-center.x)+cos*(array[2].y-center.y)+center.y}
    
    array[3] = 
    
    {x:cos*(array[3].x-center.x)-sin*(array[3].y-center.y)+center.x,
    y:sin*(array[3].x-center.x)+cos*(array[3].y-center.y)+center.y}
}
function getVerts(box){
    box.center = {x:box.x+box.w/2,y:box.y+box.h/2}
    
    hh = box.h/2
    hw = box.w/2 
    
    box.vert[0] = {x:box.center.x-(hw),y:box.center.y-(hh)}
    box.vert[1] = {x:box.center.x+(hw),y:box.center.y-(hh)}
    box.vert[2] = {x:box.center.x-(hw),y:box.center.y+(hh)}
    box.vert[3] = {x:box.center.x+(hw),y:box.center.y+(hh)}
}