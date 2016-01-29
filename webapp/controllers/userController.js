var userModel = require('../models/userModel.js');

/**
 * userController.js
 *
 * @description :: Server-side logic for managing users.
 */
module.exports = {

    /**
     * userController.list()
     */
    list: function(req, res) {
        userModel.find(function(err, users){
            if(err) {
                return res.json(500, {
                    message: 'Error getting user.'
                });
            }
            return res.json(users);
        });
    },

    /**
     * userController.show()
     */
    show: function(req, res) {
        var id = req.params.id;
        userModel.findOne({_id: id}, function(err, user){
            if(err) {
                return res.json(500, {
                    message: 'Error getting user.'
                });
            }
            if(!user) {
                return res.json(404, {
                    message: 'No such user'
                });
            }
            return res.json(user);
        });
    },

    /**
     * userController.create()
     */
    create: function(req, res) {
        var user = new userModel({			name : req.body.name,			addr : req.body.addr,			job : req.body.job
        });

        user.save(function(err, user){
            if(err) {
                return res.json(500, {
                    message: 'Error saving user',
                    error: err
                });
            }
            return res.json({
                message: 'saved',
                _id: user._id
            });
        });
    },

    /**
     * userController.update()
     */
    update: function(req, res) {
        var id = req.params.id;
        userModel.findOne({_id: id}, function(err, user){
            if(err) {
                return res.json(500, {
                    message: 'Error saving user',
                    error: err
                });
            }
            if(!user) {
                return res.json(404, {
                    message: 'No such user'
                });
            }

            user.name =  req.body.name ? req.body.name : user.name;			user.addr =  req.body.addr ? req.body.addr : user.addr;			user.job =  req.body.job ? req.body.job : user.job;			
            user.save(function(err, user){
                if(err) {
                    return res.json(500, {
                        message: 'Error getting user.'
                    });
                }
                if(!user) {
                    return res.json(404, {
                        message: 'No such user'
                    });
                }
                return res.json(user);
            });
        });
    },

    /**
     * userController.remove()
     */
    remove: function(req, res) {
        var id = req.params.id;
        userModel.findByIdAndRemove(id, function(err, user){
            if(err) {
                return res.json(500, {
                    message: 'Error getting user.'
                });
            }
            return res.json(user);
        });
    }
};