
//send email link at signup
const Truck = require('../models/truck');

exports.readAll = (req,res) => {
    Truck.find()
        .then(trucks => {
            res.json(trucks);
            console.log(trucks);
        })
        .catch(err => res.status(400).json('Error: ' + err ));
};

exports.readOne = (req,res) => {
    console.log(req.params);
    const truckObjId = req.params.id;
    Truck.findById(truckObjId).exec((err, truck) => {
        if(err || !truck) {
            return res.status(400).json({
                error: 'Truck not found in database.'
            });
        }
        res.json(truck);
    });
};

exports.newTruck = (req,res) => {
    console.log('TRUCK BODY ON SUBMIT', req.body);
    // const truckName = req.body.name;
    const {
            truck_id, 
            name,
            address,
            zipcode,
            hoursMon,
            hoursTue,
            hoursWed,
            hoursThu,
            hoursFri,
            hoursSat,
            hourSun,
            phone_number,
            email_address,
            website_url,
            image_url,
            currentLocation,
            owner,
            username
        } = req.body;
    Truck.findOne({name}).exec((err, truck) => {
        if(truck) {
            return res.status(400).json({
                error: 'Truck with that name already exists.'
            });
        } else { 
            const newTruck = new Truck(
                {
                    truck_id, 
                    name,
                    address,
                    zipcode,
                    hoursMon,
                    hoursTue,
                    hoursWed,
                    hoursThu,
                    hoursFri,
                    hoursSat,
                    hourSun,
                    phone_number,
                    email_address,
                    website_url,
                    image_url,
                    currentLocation,
                    owner,
                    username
                });
            newTruck.save((err, success) => {
                if(err) {
                    console.log('SAVE TRUCK ERROR', err);
                        return res.status(400).json({
                        error: err
                    });
                }
                res.json({
                    message: 'New truck saved.'
                });
            });
        };
    });
};

exports.update = (req,res) => {
    console.log('UPDATE TRUCK req.params: "');
    console.log(req.params.id); 
    console.log(' UPDATE DATA req.body: ');
    console.log(req.body);
    const truckToUpdate = req.params.id;
    const updatedTruck = {
        truck_id, 
        name,
        address,
        zipcode,
        hoursMon,
        hoursTue,
        hoursWed,
        hoursThu,
        hoursFri,
        hoursSat,
        hourSun,
        phone_number,
        email_address,
        website_url,
        image_url,
        currentLocation,
        owner,
        username
    } = req.body;
    Truck.findOneAndUpdate(truckToUpdate, updatedTruck, {new : true}).exec((err, truck) => {
        if(!truckToUpdate) {
            return res.status(400).json({
                error: 'Truck does not exist.'
            });
        } else {
        // const updatedTruck = new Truck(
        //     {
        //     truck_id, 
        //     name,
        //     address,
        //     zipcode,
        //     hoursMon,
        //     hoursTue,
        //     hoursWed,
        //     hoursThu,
        //     hoursFri,
        //     hoursSat,
        //     hourSun,
        //     phone_number,
        //     email_address,
        //     website_url,
        //     image_url,
        //     currentLocation,
        //     owner,
        //     username
        // });  
        console.log(updatedTruck);  
        // updatedTruck.save((err, updatedTruck) => {
        //     if(err) {
        //         console.log('TRUCK UPDATE ERROR, err');
        //         return res.status(400).json({
        //             error: 'Truck update failed'
        //         });
        //     }
        //     res.json(updatedTruck);
        //     });
        res.json(updatedTruck);
        };
    });
};