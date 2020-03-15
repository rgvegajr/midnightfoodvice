
//send email link at signup
const Truck = require('../models/user');

exports.read = (req,res) => {
    const truckId = req.params.id;
    Truck.findById(truckId).exec((err, truck) => {
        if(err || !truck) {
            return res.status(400).json({
                error: 'Truck does not found.'
            });
        }
        res.json(truck);
    });
};

exports.update = (req,res) => {
    console.log('UPDATE TRUCK - req.truck', req.truck, 'UPDATE DATA', req.body);
    const {name, password} = req.body;  //change to truck data
    Truck.findOne({_id: req.truck._id}, (err,truck) => {
        if(err || !truck) {
            return res.status(400).json({
                error: 'Truck not found'
            })
        }
        Truck.save((err, updateTruck) => {
            if(err) {
                console.log('TRUCK UPDATE ERROR, err');
                return res.status(400).json({
                    error: 'Truck update failed'
                });
            }
            res.json(updatedTruck);
        });
    });
};
