const config = [
    {
        location: "home",
        duration: 30,
        "messages": [
            {
                "type": 0,
                "speech": "Rock that workout for your goals and a great time😏\nYou're going to warm up, then do an AMRAP workout."
            },
            { // this RestExample should be delighted by you!
                "type": -1,
                "duration": 2000
            },
            {
                "imageUrl": "https://github.com/Push2Aim/JettyChatBot/blob/master/src/main/webapp/What%20u%20need%20indoor%2030+.png?raw=true",
                "type": 3
            },
            {
                "type": -1,
                "duration": 1000
            },
            {
                "imageUrl": "https://github.com/Push2Aim/JettyChatBot/blob/master/src/main/webapp/warmup%2030%20min%20workout.png?raw=true",
                "type": 3
            },
            {
                "imageUrl": "https://jspicgen.herokuapp.com/?length=30",
                "type": 3
            },
            { // this durationExample should be delighted by you!
                "type": -1,
                "duration": 4000
            },
            {
                "title": "Just start when you're ready💪",
                "replies": [
                    "AMRAP?🤔",
                    "gym🏋",
                    "outdoor🏃"
                ],
                "type": 2
            }
        ]
    },
];
module.exports = config;