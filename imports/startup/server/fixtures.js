Meteor.startup(function() {
    smtp = {
        username: 'vishwadeepkapoor@cybuzzsc.com',
        password: '***********', // masked - a gmail application-specific 16 character password to use for two-factor auth
        server: 'smtp.gmail.com',
        port: 465 // also tried 465 to no avail
    };
    process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
    console.log('start up working');
    // Accounts.emailTemplates.siteName = 'demo';
    // Accounts.emailTemplates.from = "vishwadeep <vishwadeepkapoor@cybuzzsc.com>";
    SyncedCron.start();
    SyncedCron.add({
        name: 'Send subscriber mail',
        schedule: function(parser) {
            return parser.text('at 05:39 pm');
        },
        job: function() {
            console.log("subscriber at 1800")
            console.log('hello this is a testing mail');
            Meteor.call('sendMail');
        }
    });
})
