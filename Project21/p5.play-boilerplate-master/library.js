var lbullet,lwall;
function istouching(lbullet,lwall){
    var bulletedge = bullet.x + bullet.width;
    var walledge = wall.x;
    if(bulletedge>=walledge)
    {
        return true
    }
        return false
    }
    
