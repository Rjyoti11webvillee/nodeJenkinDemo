greetings = function(req,res){
    res.json({status:200, success:true, message: 'Welcome to Webvillee'})

}

testing = function(req,res){
    res.json({status:200, success:true, message: 'Welcome to Webhooks '})

}

testing1 = function(req,res){
    res.json({status:200, success:true, message: 'Welcome to Testing1'})

}

testing2 = function(req,res){
    res.json({status:200, success:true, message: 'Welcome to Testing2'})

}

testing3 = function(req,res){
    res.json({status:200, success:true, message: 'Welcome to Testing3'})

}

testing4 = function(req,res){
    res.json({status:200, success:true, message: 'Welcome to Testing4'})

}

testing5 = function(req,res){
    res.json({status:200, success:true, message: 'Welcome to Testing5'})

}

module.exports = {
    greetings,
    testing,
    testing1,
    testing2,
    testing3,
    testing4,
    testing5
}
