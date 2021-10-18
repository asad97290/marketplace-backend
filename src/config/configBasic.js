const config = {
  mongoDB: {
    mongoURI:
      "mongodb+srv://asadullah:asadkhan97@asadullah.dji1f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    },
  jwt: {
    jwtSecret: "mysecrettoken",
    saltRounds: 10,
  },
  verificationTokenSize: 6,
 
  mailTrap: {
    host: "smtp.mailtrap.io",
    port: "2525",
    auth: {
      user: "05d430279edc46",
      pass: "1415099af5b6e5",
    },
    fromEmail: "noreply@icoplatform.com",
  },

};

module.exports = config;
