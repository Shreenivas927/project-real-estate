const db = require ("../models1");
const User = db.users;

exports.create = (req, res) => {
  console.log(req.body.firstName)
  const user = new User({
  
      firstName : req.body.firstName,
      lastName: req.body.lastName,
      city: req.body.city,
      Address : req.body.Address,
      email: req.body.email,
      Mobile_no : req.body.Mobile_no,
      status: 500
  
  });

  user.save(user)
  .then(data => {
    console.log(data)
   res.send(data);

})
}; 

exports.findAll=(req,res)=>{
  // console.log("app1 findall check")
  User.find()
  .then(data=>{

    res.send(data)
  })
}


exports.deleteOne = (req, res) => {
  console.log(req.body.firstName)
  console.log(req.body.id)
  User.deleteOne({"firstName" : req.body.firstName}, (err) => {
    if(err){
      res.send(err)
  }})

  User.find()
  .then(userData => {
    console.log(userData)
    res.send(userData)
  })
}