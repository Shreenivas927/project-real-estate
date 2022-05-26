const db = require ("../models");
const User = db.users;

exports.create = (req, res) => {
//   console.log(req.body.email)
  const user = new User({
      email: req.body.email,
      name : req.body.name,
      password :req.body.password,
      status:req.body.status
  });
// console.log(user)
 user.save(user)
//  console.log("user prnit")
  .then(data => {
     console.log(data)
     console.log("user prnit")
   res.send(data);
   res.status(200).send()

})
}; 

exports.findAll=(req,res)=>{
  console.log("from findall check")
  User.find()
  .then(data=>{

    res.send(data)
    // console.log("findall madhil data")
    // console.log(data)
  })
}

exports.deleteOne = (req, res) => {

  console.log(req.body.firstName)
  console.log("delete USERControllermadhun")
  // User.deleteOne({"firstName" : req.body.firstName}, (err) => {
    User.deleteOne({_id: req.params.id}, (err) => {
    if(err){
      res.send(err)
  }})

  User.find()
  .then(userData => {
    // console.log("delete")

    // console.log(userData)
    res.send(userData)
    // console.log("delete")

  })
}

exports.update = (req, res) => {
  // console.log(req.body)
  console.log("entry in update")
  console.log(req.body._id)
  User.findOneAndUpdate({_id: req.body.uid}, {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    city: req.body.city,
    email: req.body.email
    
  }, (err, data) => {
    if(err){
      res.send(err)
      console.log(err)
    }else{
      res.send(data)
      console.log(data)
    }
  })
}

exports.findOne = (req, res) => {
  console.log("entry in findone")
  User.findById(req.params.id).then((data) => {
    res.send(data)
  })
}