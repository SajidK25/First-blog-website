const jwt=require("jsonwebtoken");
const auth=(req,res,next)=>{
//protect routes


if (req.session.user){


const token=req.session.user
const verified=jwt.verify(token,process.env.jwtkey);


if(verified){
req.id=verified.USERID;


}
else{
    console.log("NOt verified")
}



}
else{

return res.redirect("/login")

}


 next();   
}







const stoplogin=(req,res,next)=>{

    if (req.session.user){


        const token=req.session.user
        const verified=jwt.verify(token,process.env.jwtkey);
        
        
        if(verified){
        
     res.redirect("/profile")
    
    }
        
    }










next();

}






module.exports={
auth,stoplogin


}
