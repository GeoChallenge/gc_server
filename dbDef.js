var Db = require('mongoose'),
    Config = require('./config.json'),
    Log = require('./Log.js'),
    challenge = Db.Schema({
    title: String,
    price: Number,
    challengeId: String,
    startLocationDescription: String,
    startDate: Date,
    approxDuration: String,
    minParticipants: Number,
    finishedBy: String,
    participants: [
        String
    ],
    quests: [
        {
            question: String,
            answer: String,
            lon: Number,
            lat: Number
        }
    ],
    pingHistory: [
        {
            userId: String,
            lon: Number,
            lat: Number,
            timestamp: Date,
            nextQuestIndex: Number
        }
    ]
});

var Challenge = Db.model('Challenge', challenge);

//Db.connect('mongodb://' + Config.dbUser + ':' + Config.dbPassword + '@' + Config.dbHost + ':' + Config.dbPort + '/' + Config.dbUrl + '/' + Config.dbName, function(err) {
Db.connect('mongodb://heroku_8j1pq1nz:2jjn9entr89852tuceme9houlg@ds051334.mongolab.com:51334/heroku_8j1pq1nz/geochallenge', function(err) {
    if (err) Log.error("Database connection failed", err);
});

module.exports = {
    Challenge: Challenge,
    Db: Db
};