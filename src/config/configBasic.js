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
};

module.exports = config;
