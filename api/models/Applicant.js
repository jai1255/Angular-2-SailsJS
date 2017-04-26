/**
 * Customer.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    firstName: {
      type: 'string',
      unique: false,
      required: true
    },
    lastName: {
      type: 'string',
      unique: false,
      required: true
    },
    email: {
      type: 'string',
      email: true,
      unique: true
    },
    mobile: {
      type: 'integer',
      required: true,
      unique: true
    },
    country: {
      type: 'string',
      unique: false,
      required: true
    },
    streetAddress1: {
      type: 'string',
      unique: false,
      required: true
    },
    streetAddress2: {
      type: 'string',
      unique: false,
      required: true
    },
    city: {
      type: 'string',
      unique: false,
      required: true
    },
    state: {
      type: 'string',
      unique: false,
      required: true
    },
    zipcode: {
      type: 'integer',
      unique: false,
      required: true
    },
    education: {
      type: 'string',
      unique: false,
      required: true
    },
    collegeName: {
      type: 'string',
      unique: false,
      required: true
    },
    status: {
      type: 'string',
      unique: false,
      required: true
    },
    courseName: {
      type: 'string',
      unique: false,
      required: true
    },
    employer: {
      type: 'string',
      unique: false,
      required: false

    },
    jobTitle: {
      type: 'string',
      unique: false,
      required: false
    },
    startDate: {
      type: 'date',
      required: true
    },
    endDate: {
      type: 'date',
      required: true
    },
    immigration: {
      type: 'string',
      required: true
    },
    professor: {
      type: 'string',
      required: false

    },
    profemail: {
      type: 'string',
      required: false,

    },
    imgstart: {
      type: 'date',
      required: true
    }
    ,
    imgend: {
      type: 'date',
      required: true
    },
    skill: {
      type: 'string',
      unique: false,
      required: true
    },
    referred: {
      type: 'string',
      required: false
    }
  },
  afterCreate: function (Applicant,next) {
  console.log("Email " + Applicant.email + " FirstName " + Applicant.firstName);
  var senderEmail = Applicant.email;
  var helper = require('sendgrid').mail;
  var from_email = new helper.Email('srinathchandrae25@gmail.com');
  var to_email = new helper.Email(senderEmail);
  var subject = 'Thank you for applying at HYR Global Source';
  var content = new helper.Content('text/plain', 'Hello ' + Applicant.firstName + ',\n Thank you for showing your interest in HYR Global Source, curently we are reviewing your aplication and we will get back to you soon \n Regards, \n HYR Global Source Recruiting Team');
  var mail = new helper.Mail(from_email, subject, to_email, content);

  var sg = require('sendgrid')("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");
  var request = sg.emptyRequest({
    method: 'POST',
    path: 'https://api.sendgrid.com/v3/mail/send',
    body: mail.toJSON(),
  });
  sg.API(request, function (error, response) {
    console.log(response.statusCode);
    console.log(response.body);
    console.log(response.headers);
  });
  console.log("Mailed");

   var Slack = require('slack-node');
      var name=Applicant.firstName;
      webhookUri = "https://hooks.slack.com/services/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";

      slack = new Slack();
      slack.setWebhook(webhookUri);

      slack.webhook({
        channel: "#onboard-signup",
        username: Applicant.firstName+", "+Applicant.lastName,
        text: "This is posted to #onboard-signup and comes from a bot named applications."+name,
      }, function(err, response) {
        console.log(response);
      });


}
}


