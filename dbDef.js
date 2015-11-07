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
    ],
    userIds: [
        {
            userId: String
        }
    ]
});

var Challenge = Db.model('Challenge', challenge);

Db.connect('mongodb://' + Config.dbHost + ':' + Config.dbPort +'/geochallenge', function(err) {
    if (err) Log.error("Database connection failed", err);
});

module.exports = {
    Challenge: Challenge,
    Db: Db
};