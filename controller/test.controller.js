greetings = function(req,res){
    res.json({status:200, success:true, message: 'Welcome to Webvillee'})

}

testing = function(req,res){
    res.json({status:200, success:true, message: 'Welcome to Webhooks '})

}

testing1 = function(req,res){
    res.json({status:200, success:true, message: 'Welcome to Testing1'})

}


module.exports = {
    greetings,
    testing,
    testing1
 
}