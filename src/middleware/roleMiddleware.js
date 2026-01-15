const requireProfessor=(req,res,next)=>{
    if(req.session.user.role!=='professor'){
        return res.status(403).json("professor access only")
    }
    next();
}

const requireStudent=(req , res , next)=>{
    if(req.session.user.role!=='student'){
        return res.status(403).json(" only student can view their appointment and only student can book appointment")
    }
    next();
}

module.exports = { requireProfessor, requireStudent };