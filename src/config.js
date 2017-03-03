const config = [
    {
        location: "home",
        duration: 30,
        "messages": [
            {
                "type": 1,
                "speech": "You are going to warm up, stretch, then work out."
            },
            {
                "type": 2,
                "imageUrl": "/images/neck.png",
                "duration": 20
            },
            {
                "type": 2,
                "imageUrl": "/images/quads.png",
                "duration": 20
            },
            {
                "type": 2,
                "imageUrl": "/images/shoulders.png",
                "duration": 20
            },
            {
                "type": 3,
                "speech": "Within 20 min, do as many rounds as you can, consisting of the shown 5 exercises",
                "imageUrl": "/images/AMRAP.png"
            },
            {
                "type": 4,
                "imageUrl": "/images/AMRAP.png",
                "duration": 20
            },
            {
                "type": 5,
                "imageUrl": "/images/Trophy@4x.png",
                "speech": "Congratulations for completing your first workout!"
            }
        ]
    },
];
module.exports = config;