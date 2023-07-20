exports.isAdmin = (req,res,next)=>{
    if(req.user.role !== 'admin'){
        req.status(400).json({message: 'User Access denied'})
    }
    next()
}
exports.isUser = (req,res,next)=>{
    if(req.user.role !== 'user'){
        req.status(400).json({message: 'Admin Access denied'})
    }
    next()
}