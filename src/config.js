let path = "/webview";

const config = [
    {
        "location": "home",
        "duration": 30,
        "data": [
            {
                "type": "Welcome",
                "title": "Welcome",
                "timer": 7,
                "texts": {
                    "title": "Welcome to your home workout!",
                    "text": "You're going to warm up doing cardio, then do some stretch figures twice, and lastly finish it off with a challenging workout.",
                },
                "images": {
                    "neck": path + "/images/NeckWeb.png",
                    "burnMagni": path + "/images/BurnMagnifier.png",
                    "moveMagni": path + "/images/MoveMagnifier.png",
                    "shoulder": path + "/images/ShouldersWeb.png",
                },
                "need":[
                    {
                        "text": "chair",
                        "src": path + "/images/chair.png"
                    },
                    {
                        "text": "yoga mat",
                        "src": path + "/images/YogaMat.png"
                    },
                    {
                        "text": "chair",
                        "src": path + "/images/chair.png"
                    },
                    {
                        "text": "yoga mat",
                        "src": path + "/images/YogaMat.png"
                    },
                    {
                        "text": "chair",
                        "src": path + "/images/chair.png"
                    },
                    {
                        "text": "yoga mat",
                        "src": path + "/images/YogaMat.png"
                    },
                ]
            },
            {
                "type": "Warmup",
                "title": "Jumping Jack",
                "texts": {
                    "heading": "Jumping Jack",
                    "explanation": "Don't go too fast, but I want to see your pulse high after. Let's go!",
                },
                "timer": 120,
                "images": {
                    "pic": path + "/images/JumpingJackWarmup.png",
                },
            },
            {
                "type": "Warmup",
                "title": "Break",
                "texts": {
                    "heading": "Break",
                    "explanation": "Don't be completely static, shake it off a bit.",
                },
                "timer": 30,
                "images": {
                    "pic": "",
                },
            },
            {
                "type": "Warmup",
                "title": "Jumping Jack",
                "texts": {
                    "heading": "Jumping Jack",
                    "explanation": "Don't go too fast, but I want to see your pulse high after. Let's go!",
                },
                "timer": 120,
                "images": {
                    "pic": path + "/images/JumpingJackWarmup.png",
                },
            },
            {
                "type": "Warmup",
                "title": "Break",
                "texts": {
                    "heading": "Break",
                    "explanation": "Don't be completely static, shake it off a bit.",
                },
                "timer": 30,
                "images": {
                    "pic": "",
                },
            },
            {
                "type": "Stretching",
                "title": "Neck Stretching 1st",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 15,
                "images": {
                    "pic": path + "/images/NeckWeb.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Neck Stretching 2nd",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 15,
                "images": {
                    "pic": path + "/images/NeckWeb.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Shoulder Stretching Right",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 15,
                "images": {
                    "pic": path + "/images/ShouldersWeb.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Shoulder Stretching Left",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 15,
                "images": {
                    "pic": path + "/images/ShouldersWeb.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Shoulder Stretching Right",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 15,
                "images": {
                    "pic": path + "/images/ShouldersWeb.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Shoulder Stretching Left",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 15,
                "images": {
                    "pic": path + "/images/ShouldersWeb.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Chest Stretching",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 15,
                "images": {
                    "pic": path + "/images/ChestWeb.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Quad Stretching Left",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 15,
                "images": {
                    "pic": path + "/images/QuadsWeb.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Quad Stretching Right",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 15,
                "images": {
                    "pic": path + "/images/QuadsWeb.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Calf Stretching Left",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 15,
                "images": {
                    "pic": path + "/images/CalvesWeb.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Calf Stretching Right",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 15,
                "images": {
                    "pic": path + "/images/CalvesWeb.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Hamstring Stretching",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 15,
                "images": {
                    "pic": path + "/images/HamstringWeb.png",
                },
            },
            {
                "type": "AMRAPtut",
                "title": "20min AMRAP",
                "texts": {
                    "heading": "20min AMRAP",
                    "explanation": "Those 5 exercises form 1 round. Do As Many Rounds As Possible within 20min.",
                    "tutButton": "How to do those 5 exercises",
                    "howTo": "Within 20 min, do as many rounds as you can, consisting of the shown 5 exercises.",
                },
                "videos": [
                    {
                        "title": "Dips",
                        "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FwjUmnZH528Y%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DwjUmnZH528Y&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FwjUmnZH528Y%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                    }, {
                        "title": "Squats",
                        "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FDy28eq2PjcM%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDy28eq2PjcM&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FDy28eq2PjcM%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                    }, {
                        "title": "Push-Ups",
                        "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FIODxDxX7oi4%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DIODxDxX7oi4&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FIODxDxX7oi4%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                    }, {
                        "title": "Sit-Ups",
                        "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2Fy5BpvYGyVb0%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dy5BpvYGyVb0&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fy5BpvYGyVb0%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                    }, {
                        "title": "Jumps",
                        "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FDeTBwEL4m7s%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDeTBwEL4m7s&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FDeTBwEL4m7s%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                    },
                ],
                "images": {
                    "workout": "https://jspicgen.herokuapp.com/?length=30",
                }
            },
            {
                "type": "AMRAP",
                "title": "20min AMRAP",
                "texts": {
                    "heading": "20min AMRAP",
                    "explanation": "Those 5 exercises form 1 round. Do As Many Rounds As Possible within 20 min.",
                    "tutButton": "How to do&nbsp;those 3 exercises",
                },
                "timer": 1200,
                "videos": [
                    {
                        "title": "Dips",
                        "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FwjUmnZH528Y%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DwjUmnZH528Y&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FwjUmnZH528Y%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                    }, {
                        "title": "Squats",
                        "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FDy28eq2PjcM%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDy28eq2PjcM&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FDy28eq2PjcM%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                    }, {
                        "title": "Push-Ups",
                        "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FIODxDxX7oi4%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DIODxDxX7oi4&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FIODxDxX7oi4%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                    }, {
                        "title": "Sit-Ups",
                        "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2Fy5BpvYGyVb0%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dy5BpvYGyVb0&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fy5BpvYGyVb0%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                    }, {
                        "title": "Jumps",
                        "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FDeTBwEL4m7s%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDeTBwEL4m7s&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FDeTBwEL4m7s%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                    },
                ],
                "images": {
                    "workout": "https://jspicgen.herokuapp.com/?length=30",
                }
            },
            {
                "type": "Trophy",
                "title": "Congratulations",
                "images": {
                    "trophy_pic": path + "/images/Trophy.png",
                },
                "texts": {
                    "title": "1 Step Closer To Your Goal!",
                    "text": "I'm happy for you and hope you keep going.",
                }
            },
        ]
    },
    {
        "location": "outdoor",
        "duration": 30,
        "data": [
            {
                "type": "Welcome",
                "title": "Welcome",
                "timer": 7,
                "texts": {
                    "title": "Welcome to your home workout!",
                    "text": "You're going to warm up doing cardio, then do some stretch figures twice, and lastly finish it off with a challenging workout.",
                },
                "images": {
                    "neck": path + "/images/NeckWeb.png",
                    "burnMagni": path + "/images/BurnMagnifier.png",
                    "moveMagni": path + "/images/MoveMagnifier.png",
                    "shoulder": path + "/images/ShouldersWeb.png",
                },
                "need":[
                    {
                        "text": "chair",
                        "src": path + "/images/chair.png"
                    },
                    {
                        "text": "yoga mat",
                        "src": path + "/images/YogaMat.png"
                    },
                    {
                        "text": "chair",
                        "src": path + "/images/chair.png"
                    },
                    {
                        "text": "yoga mat",
                        "src": path + "/images/YogaMat.png"
                    },
                    {
                        "text": "chair",
                        "src": path + "/images/chair.png"
                    },
                    {
                        "text": "yoga mat",
                        "src": path + "/images/YogaMat.png"
                    },
                ]
            },
            {
                "type": "Warmup",
                "title": "Jumping Jack",
                "texts": {
                    "heading": "Jumping Jack",
                    "explanation": "Don't go too fast, but I want to see your pulse high after. Let's go!",
                },
                "timer": 120,
                "images": {
                    "pic": path + "/images/RunWarmup.png",
                },
            },
            {
                "type": "Warmup",
                "title": "Break",
                "texts": {
                    "heading": "Break",
                    "explanation": "Don't be completely static, shake it off a bit.",
                },
                "timer": 30,
                "images": {
                    "pic": "",
                },
            },
            {
                "type": "Warmup",
                "title": "Jumping Jack",
                "texts": {
                    "heading": "Jumping Jack",
                    "explanation": "Don't go too fast, but I want to see your pulse high after. Let's go!",
                },
                "timer": 120,
                "images": {
                    "pic": path + "/images/JumpingJackWarmup.png",
                },
            },
            {
                "type": "Warmup",
                "title": "Break",
                "texts": {
                    "heading": "Break",
                    "explanation": "Don't be completely static, shake it off a bit.",
                },
                "timer": 30,
                "images": {
                    "pic": "",
                },
            },
            {
                "type": "Stretching",
                "title": "Neck Stretching 1st",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 15,
                "images": {
                    "pic": path + "/images/NeckWeb.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Neck Stretching 2nd",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 15,
                "images": {
                    "pic": path + "/images/NeckWeb.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Shoulder Stretching Right",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 15,
                "images": {
                    "pic": path + "/images/ShouldersWeb.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Shoulder Stretching Left",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 15,
                "images": {
                    "pic": path + "/images/ShouldersWeb.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Shoulder Stretching Right",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 15,
                "images": {
                    "pic": path + "/images/ShouldersWeb.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Shoulder Stretching Left",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 15,
                "images": {
                    "pic": path + "/images/ShouldersWeb.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Chest Stretching",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 15,
                "images": {
                    "pic": path + "/images/ChestWeb.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Quad Stretching Left",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 15,
                "images": {
                    "pic": path + "/images/QuadWeb.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Quad Stretching Right",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 15,
                "images": {
                    "pic": path + "/images/QuadWeb.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Calf Stretching Left",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 15,
                "images": {
                    "pic": path + "/images/CalfWeb.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Calf Stretching Right",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 15,
                "images": {
                    "pic": path + "/images/CalfWeb.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Hamstring Stretching",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 15,
                "images": {
                    "pic": path + "/images/HamstringWeb.png",
                },
            },
            {
                "type": "AMRAPtut",
                "title": "20min AMRAP",
                "texts": {
                    "heading": "20min AMRAP",
                    "explanation": "Those 5 exercises form 1 round. Do As Many Rounds As Possible within 20min.",
                    "tutButton": "How to do those 5 exercises",
                    "howTo": "Within 20 min, do as many rounds as you can, consisting of the shown 5 exercises.",
                },
                "videos": [
                    {
                        "title": "Dips",
                        "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FwjUmnZH528Y%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DwjUmnZH528Y&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FwjUmnZH528Y%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                    }, {
                        "title": "Squats",
                        "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FDy28eq2PjcM%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDy28eq2PjcM&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FDy28eq2PjcM%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                    }, {
                        "title": "Push-Ups",
                        "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FIODxDxX7oi4%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DIODxDxX7oi4&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FIODxDxX7oi4%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                    }, {
                        "title": "Sit-Ups",
                        "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2Fy5BpvYGyVb0%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dy5BpvYGyVb0&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fy5BpvYGyVb0%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                    }, {
                        "title": "Jumps",
                        "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FDeTBwEL4m7s%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDeTBwEL4m7s&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FDeTBwEL4m7s%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                    },
                ],
                "images": {
                    "workout": "https://jspicgen.herokuapp.com/?length=30",
                }
            },
            {
                "type": "AMRAP",
                "title": "20min AMRAP",
                "texts": {
                    "heading": "20min AMRAP",
                    "explanation": "Those 5 exercises form 1 round. Do As Many Rounds As Possible within 20 min.",
                    "tutButton": "How to do&nbsp;those 3 exercises",
                },
                "timer": 1200,
                "videos": [
                    {
                        "title": "Dips",
                        "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FwjUmnZH528Y%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DwjUmnZH528Y&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FwjUmnZH528Y%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                    }, {
                        "title": "Squats",
                        "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FDy28eq2PjcM%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDy28eq2PjcM&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FDy28eq2PjcM%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                    }, {
                        "title": "Push-Ups",
                        "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FIODxDxX7oi4%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DIODxDxX7oi4&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FIODxDxX7oi4%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                    }, {
                        "title": "Sit-Ups",
                        "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2Fy5BpvYGyVb0%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dy5BpvYGyVb0&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fy5BpvYGyVb0%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                    }, {
                        "title": "Jumps",
                        "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FDeTBwEL4m7s%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDeTBwEL4m7s&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FDeTBwEL4m7s%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                    },
                ],
                "images": {
                    "workout": "https://jspicgen.herokuapp.com/?length=30",
                }
            },
            {
                "type": "Trophy",
                "title": "Congratulations",
                "images": {
                    "trophy_pic": path + "/images/Trophy.png",
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

