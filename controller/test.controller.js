greetings = function(req,res){
    res.json({status:200, success:true, message: 'Welcome to Webvillee'})

}

testing = function(req,res){
    res.json({status:200, success:true, message: 'Welcome to Webhooks '})

}

module.exports = {
    greetings,
    testing
 
}