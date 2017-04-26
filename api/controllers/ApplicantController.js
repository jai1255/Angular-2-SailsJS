/**
 * CustomerController
 *
 * @description :: Server-side logic for managing customers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */



module.exports = {

  create: function(req,res){
    if(req.body.imgstart=="undefined/undefined/undefined"||req.body.imgend=="undefined/undefined/undefined"){
      req.body.imgstart='01/01/0001';
      req.body.imgend='01/01/0001';
    }
    else if(req.body.startDate=="undefined/undefined/undefined"||req.body.endDate=="undefined/undefined/undefined"){
      req.body.startDate='01/01/0001';
      req.body.endDate='01/01/0001';

    }
    else{

    }
    var requestObject=req.body;
    Applicant.create(req.body).exec(function(err, applicantRecord){
      if (err) {
        return res.serverError(err);
      }
      else{
        console.log("data posted....");
        console.log(applicantRecord);

       // this.afterCreate(applicantRecord.email,applicantRecord.firstName);

      }

      res.ok();
    });
  },

  delete:function(req,res) {
    res.send("This action cannot be performed");
  },

  update:function(req,res) {
    res.send("This Will come soon......")
  },
  showallhyrapplicant:function(req,res){
    Applicant.find().exec(function(err,applicant) {
      if(err){
        res.send(500,{title:'error in retriving users'});
      }else{
        console.log(applicant);
        res.send(200,applicant);
      }

    });
  },



  };


