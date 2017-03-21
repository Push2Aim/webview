const config = [
    {
        "location": "home",
        "duration": 30,
        "data": [
            {
                "type": "Welcome",
                "title": "Welcome",
                "timer": 5,
                "texts": {
                    "title": "Welcome to your home workout!",
                    "text": "You're going to warm up doing cardio, then do a stretching routine twice, and lastly finish it off with a challenging workout.",
                },
                "need":[
                    {
                        "text": "chair",
                        "src": "/images/chair.png"
                    },
                    {
                        "text": "chair",
                        "src": "/images/chair.png"
                    },
                    {
                        "text": "chair",
                        "src": "/images/chair.png"
                    },
                    {
                        "text": "chair",
                        "src": "/images/chair.png"
                    },
                    {
                        "text": "chair",
                        "src": "/images/chair.png"
                    },
                    {
                        "text": "chair",
                        "src": "/images/chair.png"
                    },
                ]
            },
            {
                "type": "Warmup",
                "title": "Warmup",
                "texts": {
                    "heading": "Warmup",
                    "explanation": "Don't go too fast, but I want to see your pulse high after. Let's go!",
                },
                "timer": 10,
                "images": {
                    "pic": "http://uploads.webflow.com/58c062e37f6bd43c050cce7f/58c4617357a2703f67303098_ShouldersWeb.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Stretching",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 10,
                "images": {
                    "pic": "http://uploads.webflow.com/58c062e37f6bd43c050cce7f/58c4617357a2703f67303098_ShouldersWeb.png",
                },
            },
            {
                "type": "AMRAPtut",
                "title": "AMRAP",
                "texts": {
                    "heading": "AMRAP",
                    "explanation": "Those 3 exercises form 1 round. Do As Many Rounds As Possible within 7 min.",
                    "tutButton": "How to do those 3 exercises",
                    "howTo": "Within 20 min, do as many rounds as you can, consisting of the shown 5 exercises.",
                },
                "timer": 10,
                "videos": [
                    {
                        "title": "Squats",
                        "srd": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FDy28eq2PjcM%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDy28eq2PjcM&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FDy28eq2PjcM%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                    }, {
                        "title": "Push-Ups",
                        "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FIODxDxX7oi4%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DIODxDxX7oi4&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FIODxDxX7oi4%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                    }, {
                        "title": "Sit-Ups",
                        "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2Fy5BpvYGyVb0%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dy5BpvYGyVb0&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fy5BpvYGyVb0%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                    },
                ],
                "images": {
                    "workout": "/images/AMRAP.jpg",
                }
            },
            {
                "type": "AMRAP",
                "title": "AMRAP",
                "texts": {
                    "heading": "AMRAP",
                    "explanation": "Those 3 exercises form 1 round. Do As Many Rounds As Possible within 7 min.",
                    "tutButton": "How to do&nbsp;those 3 exercises",
                },
                "timer": 10,
                "videos": [
                    {
                        "title": "Squats",
                        "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FDy28eq2PjcM%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDy28eq2PjcM&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FDy28eq2PjcM%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                    },
                    {
                        "title": "Push-Ups",
                        "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FIODxDxX7oi4%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DIODxDxX7oi4&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FIODxDxX7oi4%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                    },
                    {
                        "title": "Sit-Ups",
                        "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2Fy5BpvYGyVb0%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dy5BpvYGyVb0&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fy5BpvYGyVb0%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                    }
                ],
                "images": {
                    "workout": "/images/AMRAP.jpg",
                }
            },
            {
                "type": "Trophy",
                "title": "Congratulations",
                "images": {
                    "trophy_pic": "/images/Trophy.png",
                },
                "texts": {
                    "title": "1 Step Closer To Your Goal!",
                    "text": "I'm happy for you and hope you keep going.",
                }
            },
        ]
    },
];
module.exports = config;