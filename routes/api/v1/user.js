﻿module.exports = function (router) {
    /*RESTful API Router*/
    var api = router.route('/user');
    
    //middleware api 
    api.all(function (req, res, next) {
        /*Do stuffs here when a call to api route invoked*/
        console.log(req.method, req.url);
        next();
    });
    
    //GET verb
    api.get(function (req, res) {
        //Do stuffs here...
        res.send("Get list user ...");
    });
    //POST verb
    api.post(function (req, res) {
        //Do stuffs here...
        res.send("Post a user ...");
    });
    
    //PUT verb
    api.put(function (req, res) {
        //Do stuffs here...
        res.send("Edit / modify a user ...");
    });
    //DELETE verb
    api.delete(function (req, res) {
        //Do stuffs here...
        res.send("Delete a user ...");
    });
    
    return router;
}