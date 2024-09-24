function RotVerts(rot,array,center){
    s = Math.sin(rot)
    c = Math.cos(rot)
    array[0] = 
    
    {x:((array[0].x-center.x)*c-(array[0].y-center.y)*s)+center.x,
    y:((array[0].y-center.y)*s+(array[0].y-center.y)*c)+center.y}
    
    array[1] = 
    
    {x:((array[1].x-center.x)*c-(array[1].y-center.y)*s)+center.x,
    y:((array[1].y-center.y)*s+(array[1].y-center.y)*c)+center.y}
    
    array[2] = 
    
    {x:((array[2].x-center.x)*c-(array[2].y-center.y)*s)+center.x,
    y:((array[2].y-center.y)*s+(array[2].y-center.y)*c)+center.y}
    
    array[3] = 
    
    {x:((array[3].x-center.x)*c-(array[3].y-center.y)*s)+center.x,
    y:((array[3].y-center.y)*s+(array[3].y-center.y)*c)+center.y}
}
function getVerts(box){
    box1.center = {x:box.x+box.w/2,y:box.y+box.h/2}
    
    hh = box.h/2
    hw = box.w/2 
    
    box.vert[0] = {x:box.center.x-(hw),y:box.center.y+(hh)}
    box.vert[1] = {x:box.center.x+(hw),y:box.center.y+(hh)}
    box.vert[2] = {x:box.center.x-(hw),y:box.center.y-(hh)}
    box.vert[3] = {x:box.center.x+(hw),y:box.center.y-(hh)}
}
function collision(box1,box2){
    getVerts(box1)
    getVerts(box2)
    RotVerts(box1.rot,box1.vert,box1.center)
    RotVerts(box2.rot,box2.vert,box2.center)
}