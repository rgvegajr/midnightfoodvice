//send email link at signup
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
//sendgrid
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

//Username & Password auth code below, no sendgrid

// exports.signup = (req,res) => {
//     console.log('REQ BODY ON SIGNUP', req.body);
//     const {name, email, password} = req.body;
//     User.findOne({email}).exec((err, user) => { // key and value are the same so single entry
//         if (user) {
//             return res.status(400).json({
//                 error: 'Email is taken'
//             });
//         } else { 

//         const newUser = new User({name, email, password});

//         newUser.save((err, success) => {
//             if(err) {
//                 console.log('SAVE USER ERROR', err);
//                     return res.status(400).json({
//                     error: err
//                 });
//             }
//             res.json({
//                 message: 'Signup success.  Please sign in.'
//             });
//             });
//         };
//     });
// }

//presignup email validation using sendgrid 

exports.signup = (req,res) => {
    console.log('REQ BODY ON SIGNUP VIA EMAIL VAL', req.body);
    const {name, email, password} = req.body;
    User.findOne({email}).exec((err, user) => { // key and value are the same so single entry
        if (user) {
            return res.status(400).json({
                error: 'Email is taken'
            });
        }
    }); 
    const token = jwt.sign
    (
        { name, email, password }, 
        process.env.JWT_ACCOUNT_ACTIVATION, 
        { expiresIn: '15m'
    });
    //need to create the react component with endpoint/route for the method below    
    const emailData = {
        from: process.env.EMAIL_FROM,
        to: email,
        subject: `Account activation link`,
        html: `<h1>You requested an account with midnight food vice food truck application!  Please use the following link to activate your account </h1>
            <p>${process.env.CLIENT_URL}/auth/activate/${token}</p>
            <hr />
            <p>this email may contain sensitive information</p>
            <p>${process.env.CLIENT_URL}</p>`
    };
    sgMail
        .send(emailData)
        .then(sent => {
            console.log('SIGNUP EMAIL SENT', sent);
            return res.json({
                message: `email has been sent to ${email}.  Follow the instructions to activate account`
            });
        })
        .catch(err => {
            console.log('SIGNUP EMAIL SENT ERROR', err);
            return res.json({
               message: err.message
            });
        });
};

exports.accountActivation =  (req,res) => {
    const {token} = req.body;

    if (token) {
        jwt.verify(token, process.env.JWT_ACCOUNT_ACTIVATION, function(err, decoded) {
                if(err){
                    console.log('JWT VERIFY IN ACCOUNT ACTIVATION ERROR', err);
                    return res.status(401).json({
                        error: 'Expired link.  Signup again'
                    });
                };

                const {name, email, password} = jwt.decode(token);

                const user = new User({name, email, password});

                user.save((err, user) => {
                    if(err) {
                        console.log('SAVE USER IN ACCOUNT ACTIVATION ERROR', err);
                        return res.status(401).json({
                            error: 'Error saving user in database.  Try to signup again'
                        });
                    }
                    return res.json({
                        message: 'Signup success.  Please sign in.'
                    });
                });
        });
    } else {
        return res.json({
            message: 'Something went wrong.  Try again.'
        });
    }

};

//check if user is trying to sign in but hasnt signedup yet
//check if password matched hashed-pw
//if yes, generate jwt to be sent to client for access to protected routes
exports.signin = (req,res) => {
    const {email, password} = req.body;
    User.findOne({email}).exec((err, user) => {
        if(err || !user) {
            return res.status(400).json({
                error: 'User with that email does not exist. Please signup.'
            })
        }
        //authenticate
        if(!user.authenticate(password)) {
            return res.status(400).json({
                error: 'Eamil and password do not match. Please try again.'
            })
        }
        //generate token and sent to client
        const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET, { expiresIn: '7d'});
        const {_id, name, email, role} = user;
        return res.json({
            token, 
            user: {_id, name, email, role}
        })
    })
};

exports.requireSignin = expressJwt({
    secret: process.env.JWT_SECRET  //req.user
});

/**above works but can end up with many junk users and emails, so prefer to use email confirmation prior to creating account and sending to db
 * user sign up willbe sent encoded in jwt with url link, will be taken to client side react app
 * 
 * 
 */