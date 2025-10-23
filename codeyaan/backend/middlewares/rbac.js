module.exports = function permit(...allowedRoles){
    return (req, resp, next) =>{
        const user = req.user;
        if(!user) return resp.status(401).json({message: "Unauthenticated"});
        if(allowedRoles.includes(user.role)) return next();
        return res.status(403).json({ message: 'Forbidden: insufficient role' });


    }
}