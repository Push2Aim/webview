let path = process.env.NODE_ENV === "development" ? "" : "/webview";
const config = [
    {
        "location": "home",
        "duration": 5,
        "data": [{
            "type": "Welcome",
            "title": "Welcome",
            "timer": 7,
            "texts": {
                "title": "Welcome to your home workout!",
                "text": "No time, let's just start moving.",
            },
            "images": {
                "neck": path + "/images/NeckWeb.png",
                "burnMagni": path + "/images/BurnMagnifier.png",
                "moveMagni": path + "/images/MoveMagnifier.png",
                "shoulder": path + "/images/ShouldersWeb.png",
            },
        },
            {
                "type": "Warmup",
                "title": "Jumping Jack",
                "texts": {
                    "heading": "Jumping Jack",
                    "explanation": "Don't go too fast, but I want to see your pulse high after. Let's go!",
                },
                "timer": 60,
                "images": {
                    "pic": path + "/images/JumpingJackWarmup.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Chest Stretching",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 10,
                "images": {
                    "pic": path + "/images/ChestsWeb.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Shoulder Stretching Right",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 10,
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
                "timer": 10,
                "images": {
                    "pic": path + "/images/ShouldersWeb.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Neck Stretching Right",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 10,
                "images": {
                    "pic": path + "/images/NeckWeb.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Neck Stretching Left",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 10,
                "images": {
                    "pic": path + "/images/NeckWeb.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Hamstring Stretching",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 10,
                "images": {
                    "pic": path + "/images/HamstringWeb.png",
                },
            },
            {
                "type": "AMRAPtut",
                "title": "3min AMRAP",
                "background": "linear-gradient(90deg, rgba(249, 255, 116, .66), rgba(162, 243, 124, .66) 40%, rgba(68, 255, 68, .66)), linear-gradient(180deg, #fff, #fff)",
                "texts": {
                    "heading": "3min AMRAP",
                    "explanation": "Those 3 exercises form 1 round. Do As Many Rounds As Possible within 3min.",
                    "tutButton": "How to do those 3 exercises",
                    "howTo": "Within 3 min, do as many rounds as you can, consisting of the shown 3 exercises.",
                },
                "videos": [{
                    "title": "Squats",
                    "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FDy28eq2PjcM%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDy28eq2PjcM&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FDy28eq2PjcM%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                }, {
                    "title": "Push-Ups",
                    "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FIODxDxX7oi4%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DIODxDxX7oi4&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FIODxDxX7oi4%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                }, {
                    "title": "Sit-Ups",
                    "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2Fy5BpvYGyVb0%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dy5BpvYGyVb0&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fy5BpvYGyVb0%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                },],
                "images": {
                    "workout": "https://jspicgen.herokuapp.com/?duration=5&location=home",
                }
            },
            {
                "type": "AMRAP",
                "title": "3min AMRAP",
                "background": "linear-gradient(90deg, rgba(249, 255, 116, .66), rgba(162, 243, 124, .66) 40%, rgba(68, 255, 68, .66)), linear-gradient(180deg, #fff, #fff)",
                "texts": {
                    "heading": "3min AMRAP",
                    "explanation": "Those 3 exercises form 1 round. Do As Many Rounds As Possible within 3 min.",
                    "tutButton": "How to do those 3 exercises",
                },
                "timer": 180,
                "videos": [{
                    "title": "Mountain Climbers",
                    "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FDyeZM-_VnRc%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDyeZM-_VnRc&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FDyeZM-_VnRc%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                }, {
                    "title": "Squats",
                    "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FDy28eq2PjcM%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDy28eq2PjcM&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FDy28eq2PjcM%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                }, {
                    "title": "Push-Ups",
                    "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FIODxDxX7oi4%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DIODxDxX7oi4&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FIODxDxX7oi4%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                }, {
                    "title": "Sit-Ups",
                    "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2Fy5BpvYGyVb0%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dy5BpvYGyVb0&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fy5BpvYGyVb0%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                },],
                "images": {
                    "workout": "https://jspicgen.herokuapp.com/?duration=5&location=home",
                }
            },
            {
                "type": "Trophy",
                "title": "Congratulations",
                "background": "linear-gradient(0deg, red, #9d92ec 35%, #00b1c9)",
                "images": {
                    "trophy_pic": path + "/images/Trophy.png",
                },
                "texts": {
                    "title": "1 Step Closer To Your Goal!",
                    "text": "Great that you fit in those 5 minutes.",
                }
            },
        ]
    },
    {
        "location": "home",
        "duration": 10,
        "data": [{
            "type": "Welcome",
            "title": "Welcome",
            "timer": 7,
            "texts": {
                "title": "Welcome to your indoor workout!",
                "text": "First, quick cardio, then quick stretching, and lastly a challenging workout.",
            },
            "images": {
                "neck": path + "/images/NeckWeb.png",
                "burnMagni": path + "/images/BurnMagnifier.png",
                "moveMagni": path + "/images/MoveMagnifier.png",
                "shoulder": path + "/images/ShouldersWeb.png",
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
                "type": "Stretching",
                "title": "Chest Stretching",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 10,
                "images": {
                    "pic": path + "/images/ChestsWeb.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Shoulder Stretching Right",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 10,
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
                "timer": 10,
                "images": {
                    "pic": path + "/images/ShouldersWeb.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Neck Stretching Right",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 10,
                "images": {
                    "pic": path + "/images/NeckWeb.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Neck Stretching Left",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 10,
                "images": {
                    "pic": path + "/images/NeckWeb.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Hamstring Stretching",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 10,
                "images": {
                    "pic": path + "/images/HamstringWeb.png",
                },
            },
            {
                "type": "AMRAPtut",
                "title": "7min AMRAP",
                "background": "linear-gradient(90deg, rgba(249, 255, 116, .66), rgba(162, 243, 124, .66) 40%, rgba(68, 255, 68, .66)), linear-gradient(180deg, #fff, #fff)",
                "texts": {
                    "heading": "7min AMRAP",
                    "explanation": "Those 3 exercises form 1 round. Do As Many Rounds As Possible within 7min.",
                    "tutButton": "How to do those 3 exercises",
                    "howTo": "Within 7 min, do as many rounds as you can, consisting of the shown 3 exercises.",
                },
                "videos": [{
                    "title": "Squats",
                    "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FDy28eq2PjcM%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDy28eq2PjcM&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FDy28eq2PjcM%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                }, {
                    "title": "Push-Ups",
                    "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FIODxDxX7oi4%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DIODxDxX7oi4&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FIODxDxX7oi4%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                }, {
                    "title": "Sit-Ups",
                    "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2Fy5BpvYGyVb0%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dy5BpvYGyVb0&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fy5BpvYGyVb0%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                },],
                "images": {
                    "workout": "https://jspicgen.herokuapp.com/?duration=10&location=home",
                }
            },
            {
                "type": "AMRAP",
                "title": "7min AMRAP",
                "background": "linear-gradient(90deg, rgba(249, 255, 116, .66), rgba(162, 243, 124, .66) 40%, rgba(68, 255, 68, .66)), linear-gradient(180deg, #fff, #fff)",
                "texts": {
                    "heading": "7min AMRAP",
                    "explanation": "Those 3 exercises form 1 round. Do As Many Rounds As Possible within 7 min.",
                    "tutButton": "How to do those 3 exercises",
                },
                "timer": 420,
                "videos": [{
                    "title": "Squats",
                    "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FDy28eq2PjcM%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDy28eq2PjcM&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FDy28eq2PjcM%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                }, {
                    "title": "Push-Ups",
                    "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FIODxDxX7oi4%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DIODxDxX7oi4&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FIODxDxX7oi4%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                }, {
                    "title": "Sit-Ups",
                    "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2Fy5BpvYGyVb0%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dy5BpvYGyVb0&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fy5BpvYGyVb0%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                },],
                "images": {
                    "workout": "https://jspicgen.herokuapp.com/?duration=10&location=home",
                }
            },
            {
                "type": "Trophy",
                "title": "Congratulations",
                "background": "linear-gradient(0deg, red, #9d92ec 35%, #00b1c9)",
                "images": {
                    "trophy_pic": path + "/images/Trophy.png",
                },
                "texts": {
                    "title": "1 Step Closer To Your Goal!",
                    "text": "Great that you fit in those 10 minutes.",
                }
            },
        ]
    },
    {
        "location": "home",
        "duration": 15,
        "data": [{
            "type": "Welcome",
            "title": "Welcome",
            "timer": 7,
            "texts": {
                "title": "Welcome to your indoor workout!",
                "text": "First, warm up doing cardio, second, some stretch figures, and lastly a challenging workout.",
            },
            "images": {
                "neck": path + "/images/NeckWeb.png",
                "burnMagni": path + "/images/BurnMagnifier.png",
                "moveMagni": path + "/images/MoveMagnifier.png",
                "shoulder": path + "/images/ShouldersWeb.png",
            },
        },
            {
                "type": "Warmup",
                "title": "Jumping Jack",
                "texts": {
                    "heading": "Jumping Jack",
                    "explanation": "Don't go too fast, but I want to see your pulse high after. Let's go!",
                },
                "timer": 180,
                "images": {
                    "pic": path + "/images/JumpingJackWarmup.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Chest Stretching",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 10,
                "images": {
                    "pic": path + "/images/ChestsWeb.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Shoulder Stretching Right",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 10,
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
                "timer": 10,
                "images": {
                    "pic": path + "/images/ShouldersWeb.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Neck Stretching Right",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 10,
                "images": {
                    "pic": path + "/images/NeckWeb.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Neck Stretching Left",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 10,
                "images": {
                    "pic": path + "/images/NeckWeb.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Hamstring Stretching",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 10,
                "images": {
                    "pic": path + "/images/HamstringWeb.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Calf Stretching Left",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 10,
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
                "timer": 10,
                "images": {
                    "pic": path + "/images/CalvesWeb.png",
                },
            },
            {
                "type": "AMRAPtut",
                "title": "10min AMRAP",
                "background": "linear-gradient(90deg, rgba(249, 255, 116, .66), rgba(162, 243, 124, .66) 40%, rgba(68, 255, 68, .66)), linear-gradient(180deg, #fff, #fff)",
                "texts": {
                    "heading": "10min AMRAP",
                    "explanation": "Those 4 exercises form 1 round. Do As Many Rounds As Possible within 10min.",
                    "tutButton": "How to do those 4 exercises",
                    "howTo": "Within 10 min, do as many rounds as you can, consisting of the shown 4 exercises.",
                },
                "videos": [{
                    "title": "Mountain Climbers",
                    "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FDyeZM-_VnRc%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDyeZM-_VnRc&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FDyeZM-_VnRc%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                }, {
                    "title": "Squats",
                    "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FDy28eq2PjcM%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDy28eq2PjcM&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FDy28eq2PjcM%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                }, {
                    "title": "Push-Ups",
                    "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FIODxDxX7oi4%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DIODxDxX7oi4&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FIODxDxX7oi4%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                }, {
                    "title": "Sit-Ups",
                    "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2Fy5BpvYGyVb0%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dy5BpvYGyVb0&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fy5BpvYGyVb0%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                },],
                "images": {
                    "workout": "https://jspicgen.herokuapp.com/?duration=15&location=home",
                }
            },
            {
                "type": "AMRAP",
                "title": "10min AMRAP",
                "background": "linear-gradient(90deg, rgba(249, 255, 116, .66), rgba(162, 243, 124, .66) 40%, rgba(68, 255, 68, .66)), linear-gradient(180deg, #fff, #fff)",
                "texts": {
                    "heading": "10min AMRAP",
                    "explanation": "Those 4 exercises form 1 round. Do As Many Rounds As Possible within 10 min.",
                    "tutButton": "How to do those 4 exercises",
                },
                "timer": 600,
                "videos": [{
                    "title": "Mountain Climbers",
                    "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FDyeZM-_VnRc%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDyeZM-_VnRc&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FDyeZM-_VnRc%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                }, {
                    "title": "Squats",
                    "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FDy28eq2PjcM%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDy28eq2PjcM&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FDy28eq2PjcM%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                }, {
                    "title": "Push-Ups",
                    "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FIODxDxX7oi4%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DIODxDxX7oi4&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FIODxDxX7oi4%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                }, {
                    "title": "Sit-Ups",
                    "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2Fy5BpvYGyVb0%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dy5BpvYGyVb0&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fy5BpvYGyVb0%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                },],
                "images": {
                    "workout": "https://jspicgen.herokuapp.com/?duration=15&location=home",
                }
            },
            {
                "type": "Trophy",
                "title": "Congratulations",
                "background": "linear-gradient(0deg, red, #9d92ec 35%, #00b1c9)",
                "images": {
                    "trophy_pic": path + "/images/Trophy.png",
                },
                "texts": {
                    "title": "1 Step Closer To Your Goal!",
                    "text": "I hope you keep going. Proud of you.",
                }
            },
        ]
    },
    {
        "location": "home",
        "duration": 20,
        "data": [{
            "type": "Welcome",
            "title": "Welcome",
            "timer": 7,
            "texts": {
                "title": "Welcome to your indoor workout!",
                "text": "First, warm up doing cardio, second, some stretch figures twice, and lastly a challenging workout.",
            },
            "images": {
                "neck": path + "/images/NeckWeb.png",
                "burnMagni": path + "/images/BurnMagnifier.png",
                "moveMagni": path + "/images/MoveMagnifier.png",
                "shoulder": path + "/images/ShouldersWeb.png",
            },
            "need": [{
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
                "timer": 110,
                "images": {
                    "pic": path + "/images/JumpingJackWarmup.png",
                },
            },
            {
                "type": "Break",
                "title": "Break&Breathe",
                "timer": 20,
            },
            {
                "type": "Warmup",
                "title": "Jumping Jack",
                "texts": {
                    "heading": "Jumping Jack",
                    "explanation": "Don't go too fast, but I want to see your pulse high after. Let's go!",
                },
                "timer": 110,
                "images": {
                    "pic": path + "/images/JumpingJackWarmup.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Chest Stretching 1st",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 10,
                "images": {
                    "pic": path + "/images/ChestsWeb.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Chest Stretching 2nd",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 10,
                "images": {
                    "pic": path + "/images/ChestsWeb.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Shoulder Stretching Right",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 10,
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
                "timer": 10,
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
                "timer": 10,
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
                "timer": 10,
                "images": {
                    "pic": path + "/images/ShouldersWeb.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Neck Stretching Left",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 10,
                "images": {
                    "pic": path + "/images/NeckWeb.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Neck Stretching Right",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 10,
                "images": {
                    "pic": path + "/images/NeckWeb.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Hamstring Stretching 1st",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 10,
                "images": {
                    "pic": path + "/images/HamstringWeb.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Hamstring Stretching 2nd",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 10,
                "images": {
                    "pic": path + "/images/HamstringWeb.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Calf Stretching Left",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 10,
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
                "timer": 10,
                "images": {
                    "pic": path + "/images/CalvesWeb.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Calf Stretching Left",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 10,
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
                "timer": 10,
                "images": {
                    "pic": path + "/images/CalvesWeb.png",
                },
            },
            {
                "type": "AMRAPtut",
                "title": "13min AMRAP",
                "background": "linear-gradient(90deg, rgba(249, 255, 116, .66), rgba(162, 243, 124, .66) 40%, rgba(68, 255, 68, .66)), linear-gradient(180deg, #fff, #fff)",
                "texts": {
                    "heading": "13min AMRAP",
                    "explanation": "Those 4 exercises form 1 round. Do As Many Rounds As Possible within 13min.",
                    "tutButton": "How to do those 4 exercises",
                    "howTo": "Within 13 min, do as many rounds as you can, consisting of the shown 4 exercises.",
                },
                "videos": [{
                    "title": "Mountain Climbers",
                    "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FDyeZM-_VnRc%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDyeZM-_VnRc&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FDyeZM-_VnRc%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                }, {
                    "title": "Squats",
                    "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FDy28eq2PjcM%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDy28eq2PjcM&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FDy28eq2PjcM%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                }, {
                    "title": "Push-Ups",
                    "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FIODxDxX7oi4%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DIODxDxX7oi4&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FIODxDxX7oi4%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                }, {
                    "title": "Sit-Ups",
                    "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2Fy5BpvYGyVb0%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dy5BpvYGyVb0&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fy5BpvYGyVb0%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                },],
                "images": {
                    "workout": "https://jspicgen.herokuapp.com/?duration=20&location=home",
                }
            },
            {
                "type": "AMRAP",
                "title": "13min AMRAP",
                "background": "linear-gradient(90deg, rgba(249, 255, 116, .66), rgba(162, 243, 124, .66) 40%, rgba(68, 255, 68, .66)), linear-gradient(180deg, #fff, #fff)",
                "texts": {
                    "heading": "13min AMRAP",
                    "explanation": "Those 4 exercises form 1 round. Do As Many Rounds As Possible within 13 min.",
                    "tutButton": "How to do those 4 exercises",
                },
                "timer": 780,
                "videos": [{
                    "title": "Mountain Climbers",
                    "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FDyeZM-_VnRc%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDyeZM-_VnRc&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FDyeZM-_VnRc%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                }, {
                    "title": "Squats",
                    "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FDy28eq2PjcM%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDy28eq2PjcM&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FDy28eq2PjcM%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                }, {
                    "title": "Push-Ups",
                    "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FIODxDxX7oi4%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DIODxDxX7oi4&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FIODxDxX7oi4%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                }, {
                    "title": "Sit-Ups",
                    "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2Fy5BpvYGyVb0%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dy5BpvYGyVb0&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fy5BpvYGyVb0%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                },],
                "images": {
                    "workout": "https://jspicgen.herokuapp.com/?duration=20&location=home",
                }
            },
            {
                "type": "Trophy",
                "title": "Congratulations",
                "background": "linear-gradient(0deg, red, #9d92ec 35%, #00b1c9)",
                "images": {
                    "trophy_pic": path + "/images/Trophy.png",
                },
                "texts": {
                    "title": "1 Step Closer To Your Goal!",
                    "text": "I hope you keep going. Proud of you.",
                }
            },
        ]
    },
    {
        "location": "home",
        "duration": 25,
        "data": [{
            "type": "Welcome",
            "title": "Welcome",
            "timer": 7,
            "texts": {
                "title": "Welcome to your indoor workout!",
                "text": "First, warm up doing cardio, second, some stretch figures twice, and lastly a challenging workout.",
            },
            "images": {
                "neck": path + "/images/NeckWeb.png",
                "burnMagni": path + "/images/BurnMagnifier.png",
                "moveMagni": path + "/images/MoveMagnifier.png",
                "shoulder": path + "/images/ShouldersWeb.png",
            },
            "need": [{
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
                "timer": 135,
                "images": {
                    "pic": path + "/images/JumpingJackWarmup.png",
                },
            },
            {
                "type": "Break",
                "title": "Break&Breathe",
                "timer": 30,
            },
            {
                "type": "Warmup",
                "title": "Jumping Jack",
                "texts": {
                    "heading": "Jumping Jack",
                    "explanation": "Don't go too fast, but I want to see your pulse high after. Let's go!",
                },
                "timer": 135,
                "images": {
                    "pic": path + "/images/JumpingJackWarmup.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Neck Stretching Right",
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
                "title": "Neck Stretching Left",
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
                "title": "Chest Stretching 1st",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 15,
                "images": {
                    "pic": path + "/images/ChestsWeb.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Chest Stretching 2nd",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 15,
                "images": {
                    "pic": path + "/images/ChestsWeb.png",
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
                "title": "Hamstring Stretching 1st",
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
                "type": "Stretching",
                "title": "Hamstring Stretching 2nd",
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
                "title": "15min AMRAP",
                "background": "linear-gradient(90deg, rgba(249, 255, 116, .66), rgba(162, 243, 124, .66) 40%, rgba(68, 255, 68, .66)), linear-gradient(180deg, #fff, #fff)",
                "texts": {
                    "heading": "15min AMRAP",
                    "explanation": "Those 5 exercises form 1 round. Do As Many Rounds As Possible within 15min.",
                    "tutButton": "How to do those 5 exercises",
                    "howTo": "Within 15 min, do as many rounds as you can, consisting of the shown 5 exercises.",
                },
                "videos": [{
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
                },],
                "images": {
                    "workout": "https://jspicgen.herokuapp.com/?duration=25&location=home",
                }
            },
            {
                "type": "AMRAP",
                "title": "15min AMRAP",
                "background": "linear-gradient(90deg, rgba(249, 255, 116, .66), rgba(162, 243, 124, .66) 40%, rgba(68, 255, 68, .66)), linear-gradient(180deg, #fff, #fff)",
                "texts": {
                    "heading": "15min AMRAP",
                    "explanation": "Those 5 exercises form 1 round. Do As Many Rounds As Possible within 15 min.",
                    "tutButton": "How to do those 5 exercises",
                },
                "timer": 900,
                "videos": [{
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
                },],
                "images": {
                    "workout": "https://jspicgen.herokuapp.com/?duration=25&location=home",
                }
            },
            {
                "type": "Trophy",
                "title": "Congratulations",
                "background": "linear-gradient(0deg, red, #9d92ec 35%, #00b1c9)",
                "images": {
                    "trophy_pic": path + "/images/Trophy.png",
                },
                "texts": {
                    "title": "1 Step Closer To Your Goal!",
                    "text": "I hope you keep going. 30min next time?",
                }
            },
        ]
    },
    {
        "location": "home",
        "duration": 30,
        "data": [{
            "type": "Welcome",
            "title": "Welcome",
            "timer": 7,
            "texts": {
                "title": "Welcome to your indoor workout!",
                "text": "You're going to warm up doing cardio, then do some stretch figures twice, and lastly finish it off with a challenging workout.",
            },
            "images": {
                "neck": path + "/images/NeckWeb.png",
                "burnMagni": path + "/images/BurnMagnifier.png",
                "moveMagni": path + "/images/MoveMagnifier.png",
                "shoulder": path + "/images/ShouldersWeb.png",
            },
            "need": [{
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
                "timer": 135,
                "images": {
                    "pic": path + "/images/JumpingJackWarmup.png",
                },
            },
            {
                "type": "Break",
                "title": "Break&Breathe",
                "timer": 30,
            },
            {
                "type": "Warmup",
                "title": "Jumping Jack",
                "texts": {
                    "heading": "Jumping Jack",
                    "explanation": "Don't go too fast, but I want to see your pulse high after. Let's go!",
                },
                "timer": 135,
                "images": {
                    "pic": path + "/images/JumpingJackWarmup.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Neck Stretching Left",
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
                "title": "Neck Stretching Right",
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
                "title": "Chest Stretching 1st",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 15,
                "images": {
                    "pic": path + "/images/ChestsWeb.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Chest Stretching 2nd",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 15,
                "images": {
                    "pic": path + "/images/ChestsWeb.png",
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
                "title": "Hamstring Stretching 1st",
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
                "type": "Stretching",
                "title": "Hamstring Stretching 2nd",
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
                "background": "linear-gradient(90deg, rgba(249, 255, 116, .66), rgba(162, 243, 124, .66) 40%, rgba(68, 255, 68, .66)), linear-gradient(180deg, #fff, #fff)",
                "texts": {
                    "heading": "20min AMRAP",
                    "explanation": "Those 5 exercises form 1 round. Do As Many Rounds As Possible within 20min.",
                    "tutButton": "How to do those 5 exercises",
                    "howTo": "Within 20 min, do as many rounds as you can, consisting of the shown 5 exercises.",
                },
                "videos": [{
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
                },],
                "images": {
                    "workout": "https://jspicgen.herokuapp.com/?duration=30&location=home",
                }
            },
            {
                "type": "AMRAP",
                "title": "20min AMRAP",
                "background": "linear-gradient(90deg, rgba(249, 255, 116, .66), rgba(162, 243, 124, .66) 40%, rgba(68, 255, 68, .66)), linear-gradient(180deg, #fff, #fff)",
                "texts": {
                    "heading": "20min AMRAP",
                    "explanation": "Those 5 exercises form 1 round. Do As Many Rounds As Possible within 20 min.",
                    "tutButton": "How to do those 5 exercises",
                },
                "timer": 1200,
                "videos": [{
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
                },],
                "images": {
                    "workout": "https://jspicgen.herokuapp.com/?duration=30&location=home",
                }
            },
            {
                "type": "Trophy",
                "title": "Congratulations",
                "background": "linear-gradient(0deg, red, #9d92ec 35%, #00b1c9)",
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
        "location": "home",
        "duration": 35,
        "data": [
            {
                "type": "Welcome",
                "title": "Welcome",
                "timer": 7,
                "texts": {
                    "title": "Welcome to your indoor workout!",
                    "text": "You're going to warm up doing cardio, then do some stretch figures twice, and lastly finish it off with a challenging workout.",
                },
                "images": {
                    "neck": path + "/images/NeckWeb.png",
                    "burnMagni": path + "/images/BurnMagnifier.png",
                    "moveMagni": path + "/images/MoveMagnifier.png",
                    "shoulder": path + "/images/ShouldersWeb.png",
                },
                "need": [
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
                "timer": 135,
                "images": {
                    "pic": path + "/images/JumpingJackWarmup.png",
                },
            },
            {
                "type": "Break",
                "title": "Break&Breathe",
                "timer": 30,
            },
            {
                "type": "Warmup",
                "title": "Jumping Jack",
                "texts": {
                    "heading": "Jumping Jack",
                    "explanation": "Don't go too fast, but I want to see your pulse high after. Let's go!",
                },
                "timer": 135,
                "images": {
                    "pic": path + "/images/JumpingJackWarmup.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Neck Stretching Right",
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
                "title": "Neck Stretching Left",
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
                "title": "Chest Stretching 1st",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 15,
                "images": {
                    "pic": path + "/images/ChestsWeb.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Chest Stretching 2nd",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 15,
                "images": {
                    "pic": path + "/images/ChestsWeb.png",
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
                "title": "Hamstring Stretching 1st",
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
                "type": "Stretching",
                "title": "Hamstring Stretching 2nd",
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
                "title": "25min AMRAP",
                "background": "linear-gradient(90deg, rgba(249, 255, 116, .66), rgba(162, 243, 124, .66) 40%, rgba(68, 255, 68, .66)), linear-gradient(180deg, #fff, #fff)",
                "texts": {
                    "heading": "25min AMRAP",
                    "explanation": "Those 7 exercises form 1 round. Do As Many Rounds As Possible within 25min.",
                    "tutButton": "How to do those 7 exercises",
                    "howTo": "Within 25 min, do as many rounds as you can, consisting of the shown 7 exercises.",
                },
                "videos": [
                    {
                        "title": "Mtn. Clmbrs",
                        "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FDyeZM-_VnRc%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDyeZM-_VnRc&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FDyeZM-_VnRc%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                    }, {
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
                    }, {
                        "title": "Burpees",
                        "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FwS4OsJ4yzx4%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DwS4OsJ4yzx4&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FwS4OsJ4yzx4%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                    },
                ],
                "images": {
                    "workout": "https://jspicgen.herokuapp.com/?duration=35&location=home",
                }
            },
            {
                "type": "AMRAP",
                "title": "25min AMRAP",
                "background": "linear-gradient(90deg, rgba(249, 255, 116, .66), rgba(162, 243, 124, .66) 40%, rgba(68, 255, 68, .66)), linear-gradient(180deg, #fff, #fff)",
                "texts": {
                    "heading": "25min AMRAP",
                    "explanation": "Those 7 exercises form 1 round. Do As Many Rounds As Possible within 25 min.",
                    "tutButton": "How to do those 7 exercises",
                },
                "timer": 1500,
                "videos": [
                    {
                        "title": "Mtn. Clmbrs",
                        "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FDyeZM-_VnRc%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDyeZM-_VnRc&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FDyeZM-_VnRc%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                    }, {
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
                    }, {
                        "title": "Burpees",
                        "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FwS4OsJ4yzx4%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DwS4OsJ4yzx4&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FwS4OsJ4yzx4%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                    },
                ],
                "images": {
                    "workout": "https://jspicgen.herokuapp.com/?duration=35&location=home",
                }
            },
            {
                "type": "Trophy",
                "title": "Congratulations",
                "background": "linear-gradient(0deg, red, #9d92ec 35%, #00b1c9)",
                "images": {
                    "trophy_pic": path + "/images/Trophy.png",
                },
                "texts": {
                    "title": "1 Step Closer To Your Goal!",
                    "text": "Respect for your grind! Hope you keep going.",
                }
            },
        ]
    },
        {
        "location": "home",
        "duration": 40,
        "data": [
            {
                "type": "Welcome",
                "title": "Welcome",
                "timer": 7,
                "texts": {
                    "title": "Welcome to your indoor workout!",
                    "text": "You're going to warm up doing cardio, then do some stretch figures twice, and lastly finish it off with a challenging workout.",
                },
                "images": {
                    "neck": path + "/images/NeckWeb.png",
                    "burnMagni": path + "/images/BurnMagnifier.png",
                    "moveMagni": path + "/images/MoveMagnifier.png",
                    "shoulder": path + "/images/ShouldersWeb.png",
                },
                "need": [
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
                "timer": 135,
                "images": {
                    "pic": path + "/images/JumpingJackWarmup.png",
                },
            },
            {
                "type": "Break",
                "title": "Break&Breathe",
                "timer": 30,
            },
            {
                "type": "Warmup",
                "title": "Jumping Jack",
                "texts": {
                    "heading": "Jumping Jack",
                    "explanation": "Don't go too fast, but I want to see your pulse high after. Let's go!",
                },
                "timer": 135,
                "images": {
                    "pic": path + "/images/JumpingJackWarmup.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Neck Stretching Right",
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
                "title": "Neck Stretching Left",
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
                "title": "Chest Stretching 1st",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 15,
                "images": {
                    "pic": path + "/images/ChestsWeb.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Chest Stretching 2nd",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 15,
                "images": {
                    "pic": path + "/images/ChestsWeb.png",
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
                "title": "Hamstring Stretching 1st",
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
                "type": "Stretching",
                "title": "Hamstring Stretching 2nd",
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
                "title": "30min AMRAP",
                "background": "linear-gradient(90deg, rgba(249, 255, 116, .66), rgba(162, 243, 124, .66) 40%, rgba(68, 255, 68, .66)), linear-gradient(180deg, #fff, #fff)",
                "texts": {
                    "heading": "30min AMRAP",
                    "explanation": "Those 7 exercises form 1 round. Do As Many Rounds As Possible within 30min.",
                    "tutButton": "How to do those 7 exercises",
                    "howTo": "Within 30 min, do as many rounds as you can, consisting of the shown 7 exercises.",
                },
                "videos": [
                    {
                        "title": "Mtn. Clmbrs",
                        "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FDyeZM-_VnRc%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDyeZM-_VnRc&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FDyeZM-_VnRc%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                    }, {
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
                    }, {
                        "title": "Burpees",
                        "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FwS4OsJ4yzx4%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DwS4OsJ4yzx4&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FwS4OsJ4yzx4%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                    },
                ],
                "images": {
                    "workout": "https://jspicgen.herokuapp.com/?duration=40&location=home",
                }
            },
            {
                "type": "AMRAP",
                "title": "30min AMRAP",
                "background": "linear-gradient(90deg, rgba(249, 255, 116, .66), rgba(162, 243, 124, .66) 40%, rgba(68, 255, 68, .66)), linear-gradient(180deg, #fff, #fff)",
                "texts": {
                    "heading": "30min AMRAP",
                    "explanation": "Those 7 exercises form 1 round. Do As Many Rounds As Possible within 30min.",
                    "tutButton": "How to do those 7 exercises",
                },
                "timer": 1800,
                "videos": [
                    {
                        "title": "Mtn. Clmbrs",
                        "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FDyeZM-_VnRc%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDyeZM-_VnRc&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FDyeZM-_VnRc%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                    }, {
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
                    }, {
                        "title": "Burpees",
                        "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FwS4OsJ4yzx4%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DwS4OsJ4yzx4&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FwS4OsJ4yzx4%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                    },
                ],
                "images": {
                    "workout": "https://jspicgen.herokuapp.com/?duration=40&location=home",
                }
            },
            {
                "type": "Trophy",
                "title": "Congratulations",
                "background": "linear-gradient(0deg, red, #9d92ec 35%, #00b1c9)",
                "images": {
                    "trophy_pic": path + "/images/Trophy.png",
                },
                "texts": {
                    "title": "1 Step Closer To Your Goal!",
                    "text": "Respect for your great grind! Hope you keep going.",
                }
            },
        ]
    },
    {
        "location": "home",
        "duration": 45,
        "data": [
            {
                "type": "Welcome",
                "title": "Welcome",
                "timer": 7,
                "texts": {
                    "title": "Welcome to your indoor workout!",
                    "text": "You're going to warm up with cardio&stretching, do a challenging workout and lastly finish it off with a Cool-Down.",
                },
                "images": {
                    "neck": path + "/images/NeckWeb.png",
                    "burnMagni": path + "/images/BurnMagnifier.png",
                    "moveMagni": path + "/images/MoveMagnifier.png",
                    "shoulder": path + "/images/ShouldersWeb.png",
                },
                "need": [
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
                "timer": 135,
                "images": {
                    "pic": path + "/images/JumpingJackWarmup.png",
                },
            },
            {
                "type": "Break",
                "title": "Break&Breathe",
                "timer": 30,
            },
            {
                "type": "Warmup",
                "title": "Jumping Jack",
                "texts": {
                    "heading": "Jumping Jack",
                    "explanation": "Don't go too fast, but I want to see your pulse high after. Let's go!",
                },
                "timer": 135,
                "images": {
                    "pic": path + "/images/JumpingJackWarmup.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Neck Stretching Right",
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
                "title": "Neck Stretching Left",
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
                "title": "Chest Stretching 1st",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 15,
                "images": {
                    "pic": path + "/images/ChestsWeb.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Chest Stretching 2nd",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 15,
                "images": {
                    "pic": path + "/images/ChestsWeb.png",
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
                "title": "Hamstring Stretching 1st",
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
                "type": "Stretching",
                "title": "Hamstring Stretching 2nd",
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
                "title": "30min AMRAP",
                "background": "linear-gradient(90deg, rgba(249, 255, 116, .66), rgba(162, 243, 124, .66) 40%, rgba(68, 255, 68, .66)), linear-gradient(180deg, #fff, #fff)",
                "texts": {
                    "heading": "30min AMRAP",
                    "explanation": "Those 7 exercises form 1 round. Do As Many Rounds As Possible within 30min.",
                    "tutButton": "How to do those 7 exercises",
                    "howTo": "Within 30 min, do as many rounds as you can, consisting of the shown 7 exercises.",
                },
                "videos": [
                    {
                        "title": "Mtn. Clmbrs",
                        "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FDyeZM-_VnRc%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDyeZM-_VnRc&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FDyeZM-_VnRc%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                    }, {
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
                    }, {
                        "title": "Burpees",
                        "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FwS4OsJ4yzx4%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DwS4OsJ4yzx4&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FwS4OsJ4yzx4%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                    },
                ],
                "images": {
                    "workout": "https://jspicgen.herokuapp.com/?duration=45&location=home",
                }
            },
            {
                "type": "AMRAP",
                "title": "30min AMRAP",
                "background": "linear-gradient(90deg, rgba(249, 255, 116, .66), rgba(162, 243, 124, .66) 40%, rgba(68, 255, 68, .66)), linear-gradient(180deg, #fff, #fff)",
                "texts": {
                    "heading": "30min AMRAP",
                    "explanation": "Those 7 exercises form 1 round. Do As Many Rounds As Possible within 30min.",
                    "tutButton": "How to do those 7 exercises",
                },
                "timer": 1800,
                "videos": [
                    {
                        "title": "Mtn. Clmbrs",
                        "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FDyeZM-_VnRc%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDyeZM-_VnRc&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FDyeZM-_VnRc%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                    }, {
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
                    }, {
                        "title": "Burpees",
                        "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FwS4OsJ4yzx4%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DwS4OsJ4yzx4&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FwS4OsJ4yzx4%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                    },
                ],
                "images": {
                    "workout": "https://jspicgen.herokuapp.com/?duration=45&location=home",
                }
            },
            {
                "type": "Warmup",
                "title": "Cool-Down Jumping Jack",
                "texts": {
                    "heading": "Cool-Down Jumping Jack",
                    "explanation": "Don't fall asleep, but this is a cool-down, therefore low-pace.",
                },
                "timer": 90,
                "images": {
                    "pic": path + "/images/JumpingJackWarmup.png",
                },
            },
            {
                "type": "Warmup",
                "title": "Cool-Down Walking in Place",
                "texts": {
                    "heading": "Cool-Down Walking",
                    "explanation": "This one's to relax and calm down the pulse a bit.",
                },
                "timer": 90,
                "images": {
                    "pic": path + "/images/RunWarmup.png",
                },
            },
            {
                "type": "Trophy",
                "title": "Congratulations",
                "background": "linear-gradient(0deg, red, #9d92ec 35%, #00b1c9)",
                "images": {
                    "trophy_pic": path + "/images/Trophy.png",
                },
                "texts": {
                    "title": "1 Step Closer To Your Goal!",
                    "text": "Respect for your great grind! Hope you keep going.",
                }
            },
        ]
    },
    {
        "location": "home",
        "duration": 50,
        "data": [
            {
                "type": "Welcome",
                "title": "Welcome",
                "timer": 7,
                "texts": {
                    "title": "Welcome to your indoor workout!",
                    "text": "You're going to warm up with cardio&stretching, do a great workout and lastly a Cool-Down: cardio and a stretching routine twice.",
                },
                "images": {
                    "neck": path + "/images/NeckWeb.png",
                    "burnMagni": path + "/images/BurnMagnifier.png",
                    "moveMagni": path + "/images/MoveMagnifier.png",
                    "shoulder": path + "/images/ShouldersWeb.png",
                },
                "need": [
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
                "timer": 135,
                "images": {
                    "pic": path + "/images/JumpingJackWarmup.png",
                },
            },
            {
                "type": "Break",
                "title": "Break&Breathe",
                "timer": 30,
            },
            {
                "type": "Warmup",
                "title": "Jumping Jack",
                "texts": {
                    "heading": "Jumping Jack",
                    "explanation": "Don't go too fast, but I want to see your pulse high after. Let's go!",
                },
                "timer": 135,
                "images": {
                    "pic": path + "/images/JumpingJackWarmup.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Neck Stretching Right",
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
                "title": "Neck Stretching Left",
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
                "title": "Chest Stretching 1st",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 15,
                "images": {
                    "pic": path + "/images/ChestsWeb.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Chest Stretching 2nd",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 15,
                "images": {
                    "pic": path + "/images/ChestsWeb.png",
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
                "title": "Hamstring Stretching 1st",
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
                "type": "Stretching",
                "title": "Hamstring Stretching 2nd",
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
                "title": "30min AMRAP",
                "background": "linear-gradient(90deg, rgba(249, 255, 116, .66), rgba(162, 243, 124, .66) 40%, rgba(68, 255, 68, .66)), linear-gradient(180deg, #fff, #fff)",
                "texts": {
                    "heading": "30min AMRAP",
                    "explanation": "Those 7 exercises form 1 round. Do As Many Rounds As Possible within 30min.",
                    "tutButton": "How to do those 7 exercises",
                    "howTo": "Within 30 min, do as many rounds as you can, consisting of the shown 7 exercises.",
                },
                "videos": [
                    {
                        "title": "Mtn. Clmbrs",
                        "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FDyeZM-_VnRc%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDyeZM-_VnRc&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FDyeZM-_VnRc%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                    }, {
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
                    }, {
                        "title": "Burpees",
                        "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FwS4OsJ4yzx4%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DwS4OsJ4yzx4&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FwS4OsJ4yzx4%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                    },
                ],
                "images": {
                    "workout": "https://jspicgen.herokuapp.com/?duration=50&location=home",
                }
            },
            {
                "type": "AMRAP",
                "title": "30min AMRAP",
                "background": "linear-gradient(90deg, rgba(249, 255, 116, .66), rgba(162, 243, 124, .66) 40%, rgba(68, 255, 68, .66)), linear-gradient(180deg, #fff, #fff)",
                "texts": {
                    "heading": "30min AMRAP",
                    "explanation": "Those 7 exercises form 1 round. Do As Many Rounds As Possible within 30min.",
                    "tutButton": "How to do those 7 exercises",
                },
                "timer": 1800,
                "videos": [
                    {
                        "title": "Mtn. Clmbrs",
                        "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FDyeZM-_VnRc%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDyeZM-_VnRc&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FDyeZM-_VnRc%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                    }, {
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
                    }, {
                        "title": "Burpees",
                        "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FwS4OsJ4yzx4%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DwS4OsJ4yzx4&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FwS4OsJ4yzx4%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                    },
                ],
                "images": {
                    "workout": "https://jspicgen.herokuapp.com/?duration=50&location=home",
                }
            },
            {
                "type": "Warmup",
                "title": "Cool-Down Jumping Jack",
                "texts": {
                    "heading": "Cool-Down Jumping Jack",
                    "explanation": "Don't fall asleep, but this is a cool-down, therefore low-pace.",
                },
                "timer": 90,
                "images": {
                    "pic": path + "/images/JumpingJackWarmup.png",
                },
            },
            {
                "type": "Warmup",
                "title": "Cool-Down Walking in Place",
                "texts": {
                    "heading": "Cool-Down Walking",
                    "explanation": "This one's to relax and calm down the pulse a bit.",
                },
                "timer": 90,
                "images": {
                    "pic": path + "/images/RunWarmup.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Neck Stretching Right",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 10,
                "images": {
                    "pic": path + "/images/NeckWeb.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Neck Stretching Left",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 10,
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
                "timer": 10,
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
                "timer": 10,
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
                "timer": 10,
                "images": {
                    "pic": path + "/images/ChestsWeb.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Quad Stretching Right",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 10,
                "images": {
                    "pic": path + "/images/QuadsWeb.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Quad Stretching Left",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 10,
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
                "timer": 10,
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
                "timer": 10,
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
                "timer": 10,
                "images": {
                    "pic": path + "/images/HamstringWeb.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Neck Stretching",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 10,
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
                "timer": 10,
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
                "timer": 10,
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
                "timer": 10,
                "images": {
                    "pic": path + "/images/ChestsWeb.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Quad Stretching Right",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 10,
                "images": {
                    "pic": path + "/images/QuadsWeb.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Quad Stretching Left",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 10,
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
                "timer": 10,
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
                "timer": 10,
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
                "timer": 10,
                "images": {
                    "pic": path + "/images/HamstringWeb.png",
                },
            },
            {
                "type": "Trophy",
                "title": "Congratulations",
                "background": "linear-gradient(0deg, red, #9d92ec 35%, #00b1c9)",
                "images": {
                    "trophy_pic": path + "/images/Trophy.png",
                },
                "texts": {
                    "title": "1 Step Closer To Your Goal!",
                    "text": "Respect for the outdoor grind! Hope you keep going.",
                }
            },
        ]
    },
    {
        "location": "home",
        "duration": 55,
        "data": [
            {
                "type": "Welcome",
                "title": "Welcome",
                "timer": 7,
                "texts": {
                    "title": "Welcome to your indoor workout!",
                    "text": "You're going to warm up with cardio&stretching, do a great workout and lastly a Cool-Down: cardio and a stretching routine twice.",
                },
                "images": {
                    "neck": path + "/images/NeckWeb.png",
                    "burnMagni": path + "/images/BurnMagnifier.png",
                    "moveMagni": path + "/images/MoveMagnifier.png",
                    "shoulder": path + "/images/ShouldersWeb.png",
                },
                "need": [
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
                "timer": 135,
                "images": {
                    "pic": path + "/images/JumpingJackWarmup.png",
                },
            },
            {
                "type": "Break",
                "title": "Break&Breathe",
                "timer": 30,
            },
            {
                "type": "Warmup",
                "title": "Jumping Jack",
                "texts": {
                    "heading": "Jumping Jack",
                    "explanation": "Don't go too fast, but I want to see your pulse high after. Let's go!",
                },
                "timer": 135,
                "images": {
                    "pic": path + "/images/JumpingJackWarmup.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Neck Stretching Right",
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
                "title": "Neck Stretching Left",
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
                "title": "Chest Stretching 1st",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 15,
                "images": {
                    "pic": path + "/images/ChestsWeb.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Chest Stretching 2nd",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 15,
                "images": {
                    "pic": path + "/images/ChestsWeb.png",
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
                "title": "Hamstring Stretching 1st",
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
                "type": "Stretching",
                "title": "Hamstring Stretching 2nd",
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
                "title": "30min AMRAP",
                "background": "linear-gradient(90deg, rgba(249, 255, 116, .66), rgba(162, 243, 124, .66) 40%, rgba(68, 255, 68, .66)), linear-gradient(180deg, #fff, #fff)",
                "texts": {
                    "heading": "30min AMRAP",
                    "explanation": "Those 7 exercises form 1 round. Do As Many Rounds As Possible within 30min.",
                    "tutButton": "How to do those 7 exercises",
                    "howTo": "Within 30 min, do as many rounds as you can, consisting of the shown 7 exercises.",
                },
                "videos": [
                    {
                        "title": "Mtn. Clmbrs",
                        "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FDyeZM-_VnRc%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDyeZM-_VnRc&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FDyeZM-_VnRc%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                    }, {
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
                    }, {
                        "title": "Burpees",
                        "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FwS4OsJ4yzx4%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DwS4OsJ4yzx4&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FwS4OsJ4yzx4%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                    },
                ],
                "images": {
                    "workout": "https://jspicgen.herokuapp.com/?duration=55&location=home",
                }
            },
            {
                "type": "AMRAP",
                "title": "30min AMRAP",
                "background": "linear-gradient(90deg, rgba(249, 255, 116, .66), rgba(162, 243, 124, .66) 40%, rgba(68, 255, 68, .66)), linear-gradient(180deg, #fff, #fff)",
                "texts": {
                    "heading": "30min AMRAP",
                    "explanation": "Those 7 exercises form 1 round. Do As Many Rounds As Possible within 30min.",
                    "tutButton": "How to do those 7 exercises",
                },
                "timer": 1800,
                "videos": [
                    {
                        "title": "Mtn. Clmbrs",
                        "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FDyeZM-_VnRc%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDyeZM-_VnRc&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FDyeZM-_VnRc%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                    }, {
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
                    }, {
                        "title": "Burpees",
                        "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FwS4OsJ4yzx4%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DwS4OsJ4yzx4&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FwS4OsJ4yzx4%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                    },
                ],
                "images": {
                    "workout": "https://jspicgen.herokuapp.com/?duration=55&location=home",
                }
            },
            {
                "type": "Warmup",
                "title": "Cool-Down Jumping Jack",
                "texts": {
                    "heading": "Cool-Down Jumping Jack",
                    "explanation": "Don't fall asleep, but this is a cool-down, therefore low-pace.",
                },
                "timer": 120,
                "images": {
                    "pic": path + "/images/JumpingJackWarmup.png",
                },
            },
            {
                "type": "Warmup",
                "title": "Cool-Down Walking in Place",
                "texts": {
                    "heading": "Cool-Down Walking",
                    "explanation": "This one's to relax and calm down the pulse a bit.",
                },
                "timer": 120,
                "images": {
                    "pic": path + "/images/RunWarmup.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Neck Stretching Right",
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
                "title": "Neck Stretching Left",
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
                "title": "Chest Stretching",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 15,
                "images": {
                    "pic": path + "/images/ChestsWeb.png",
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
                "type": "Stretching",
                "title": "Neck Stretching Right",
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
                "title": "Neck Stretching Left",
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
                "title": "Chest Stretching",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 15,
                "images": {
                    "pic": path + "/images/ChestsWeb.png",
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
                "type": "Trophy",
                "title": "Congratulations",
                "background": "linear-gradient(0deg, red, #9d92ec 35%, #00b1c9)",
                "images": {
                    "trophy_pic": path + "/images/Trophy.png",
                },
                "texts": {
                    "title": "1 Step Closer To Your Goal!",
                    "text": "Respect for the outdoor grind! Hope you keep going.",
                }
            },
        ]
    },
    {
        "location": "home",
        "duration": 60,
        "data": [
            {
                "type": "Welcome",
                "title": "Welcome",
                "timer": 7,
                "texts": {
                    "title": "Welcome to your indoor workout!",
                    "text": "You're going to warm up with cardio&stretching, do a great workout and lastly a Cool-Down: cardio and a stretching routine twice.",
                },
                "images": {
                    "neck": path + "/images/NeckWeb.png",
                    "burnMagni": path + "/images/BurnMagnifier.png",
                    "moveMagni": path + "/images/MoveMagnifier.png",
                    "shoulder": path + "/images/ShouldersWeb.png",
                },
                "need": [
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
                "timer": 135,
                "images": {
                    "pic": path + "/images/JumpingJackWarmup.png",
                },
            },
            {
                "type": "Break",
                "title": "Break&Breathe",
                "timer": 30,
            },
            {
                "type": "Warmup",
                "title": "Jumping Jack",
                "texts": {
                    "heading": "Jumping Jack",
                    "explanation": "Don't go too fast, but I want to see your pulse high after. Let's go!",
                },
                "timer": 135,
                "images": {
                    "pic": path + "/images/JumpingJackWarmup.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Neck Stretching Right",
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
                "title": "Neck Stretching Left",
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
                "title": "Chest Stretching 1st",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 15,
                "images": {
                    "pic": path + "/images/ChestsWeb.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Chest Stretching 2nd",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 15,
                "images": {
                    "pic": path + "/images/ChestsWeb.png",
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
                "title": "Hamstring Stretching 1st",
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
                "type": "Stretching",
                "title": "Hamstring Stretching 2nd",
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
                "title": "30min AMRAP",
                "background": "linear-gradient(90deg, rgba(249, 255, 116, .66), rgba(162, 243, 124, .66) 40%, rgba(68, 255, 68, .66)), linear-gradient(180deg, #fff, #fff)",
                "texts": {
                    "heading": "30min AMRAP",
                    "explanation": "Those 7 exercises form 1 round. Do As Many Rounds As Possible within 30min.",
                    "tutButton": "How to do those 7 exercises",
                    "howTo": "Within 30 min, do as many rounds as you can, consisting of the shown 7 exercises.",
                },
                "videos": [
                    {
                        "title": "Mtn. Clmbrs",
                        "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FDyeZM-_VnRc%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDyeZM-_VnRc&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FDyeZM-_VnRc%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                    }, {
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
                    }, {
                        "title": "Burpees",
                        "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FwS4OsJ4yzx4%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DwS4OsJ4yzx4&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FwS4OsJ4yzx4%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                    },
                ],
                "images": {
                    "workout": "https://jspicgen.herokuapp.com/?duration=60&location=home",
                }
            },
            {
                "type": "AMRAP",
                "title": "30min AMRAP",
                "background": "linear-gradient(90deg, rgba(249, 255, 116, .66), rgba(162, 243, 124, .66) 40%, rgba(68, 255, 68, .66)), linear-gradient(180deg, #fff, #fff)",
                "texts": {
                    "heading": "30min AMRAP",
                    "explanation": "Those 7 exercises form 1 round. Do As Many Rounds As Possible within 30min.",
                    "tutButton": "How to do those 7 exercises",
                },
                "timer": 1800,
                "videos": [
                    {
                        "title": "Mtn. Clmbrs",
                        "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FDyeZM-_VnRc%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDyeZM-_VnRc&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FDyeZM-_VnRc%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                    }, {
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
                    }, {
                        "title": "Burpees",
                        "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FwS4OsJ4yzx4%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DwS4OsJ4yzx4&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FwS4OsJ4yzx4%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                    },
                ],
                "images": {
                    "workout": "https://jspicgen.herokuapp.com/?duration=60&location=home",
                }
            },
            {
                "type": "Warmup",
                "title": "Cool-Down Jumping Jack",
                "texts": {
                    "heading": "Cool-Down Jumping Jack",
                    "explanation": "Don't fall asleep, but this is a cool-down, therefore low-pace.",
                },
                "timer": 150,
                "images": {
                    "pic": path + "/images/JumpingJackWarmup.png",
                },
            },
            {
                "type": "Warmup",
                "title": "Cool-Down Walking in Place",
                "texts": {
                    "heading": "Cool-Down Walking",
                    "explanation": "This one's to relax and calm down the pulse a bit.",
                },
                "timer": 150,
                "images": {
                    "pic": path + "/images/RunWarmup.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Neck Stretching Right",
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
                "title": "Neck Stretching Left",
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
                "title": "Chest Stretching",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 15,
                "images": {
                    "pic": path + "/images/ChestsWeb.png",
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
                "type": "Stretching",
                "title": "Neck Stretching Right",
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
                "title": "Neck Stretching Left",
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
                "title": "Chest Stretching",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 15,
                "images": {
                    "pic": path + "/images/ChestsWeb.png",
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
                "type": "Trophy",
                "title": "Congratulations",
                "background": "linear-gradient(0deg, red, #9d92ec 35%, #00b1c9)",
                "images": {
                    "trophy_pic": path + "/images/Trophy.png",
                },
                "texts": {
                    "title": "1 Step Closer To Your Goal!",
                    "text": "Respect for the long outdoor grind! Hope you keep going.",
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
                    "title": "Welcome to your outdoor workout!",
                    "text": "You're going to warm up jogging, then do some stretch figures twice, and lastly finish it off with a challenging workout.",
                },
                "images": {
                    "neck": path + "/images/NeckWeb.png",
                    "burnMagni": path + "/images/BurnMagnifier.png",
                    "moveMagni": path + "/images/MoveMagnifier.png",
                    "shoulder": path + "/images/ShouldersWeb.png",
                },
                "need": [
                    {
                        "text": "bench",
                        "src": path + "/images/benchs.png"
                    },
                    {
                        "text": "space to run",
                        "src": path + "/images/SpaceToRun.png"
                    },
                    {
                        "text": "bench",
                        "src": path + "/images/benchs.png"
                    },
                    {
                        "text": "space to run",
                        "src": path + "/images/SpaceToRun.png"
                    },
                    {
                        "text": "bench",
                        "src": path + "/images/benchs.png"
                    },
                    {
                        "text": "space to run",
                        "src": path + "/images/SpaceToRun.png"
                    },
                ]
            },
            {
                "type": "Warmup",
                "title": "Jogging",
                "texts": {
                    "heading": "Jogging",
                    "explanation": "Don't go too fast, but I want to see your pulse high after. Let's go!",
                },
                "timer": 300,
                "images": {
                    "pic": path + "/images/RunWarmup.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Neck Stretching Right",
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
                "title": "Neck Stretching Left",
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
                "title": "Chest Stretching 1st",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 15,
                "images": {
                    "pic": path + "/images/ChestsWeb.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Chest Stretching 2nd",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 15,
                "images": {
                    "pic": path + "/images/ChestsWeb.png",
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
                "title": "Hamstring Stretching 1st",
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
                "type": "Stretching",
                "title": "Hamstring Stretching 2nd",
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
                "background": "linear-gradient(90deg, rgba(249, 255, 116, .66), rgba(162, 243, 124, .66) 40%, rgba(68, 255, 68, .66)), linear-gradient(180deg, #fff, #fff)",
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
                    "workout": "https://jspicgen.herokuapp.com/?duration=30&location=outdoor",
                }
            },
            {
                "type": "AMRAP",
                "title": "20min AMRAP",
                "background": "linear-gradient(90deg, rgba(249, 255, 116, .66), rgba(162, 243, 124, .66) 40%, rgba(68, 255, 68, .66)), linear-gradient(180deg, #fff, #fff)",
                "texts": {
                    "heading": "20min AMRAP",
                    "explanation": "Those 5 exercises form 1 round. Do As Many Rounds As Possible within 20 min.",
                    "tutButton": "How to do those 5 exercises",
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
                    "workout": "https://jspicgen.herokuapp.com/?duration=30&location=outdoor",
                }
            },
            {
                "type": "Trophy",
                "title": "Congratulations",
                "background": "linear-gradient(0deg, red, #9d92ec 35%, #00b1c9)",
                "images": {
                    "trophy_pic": path + "/images/Trophy.png",
                },
                "texts": {
                    "title": "1 Step Closer To Your Goal!",
                    "text": "Nice to be outside, right? Hope you keep going.",
                }
            },
        ]
    },
    {
        "location": "outdoor",
        "duration": 35,
        "data": [
            {
                "type": "Welcome",
                "title": "Welcome",
                "timer": 7,
                "texts": {
                    "title": "Welcome to your outdoor workout!",
                    "text": "You're going to warm up jogging, then do some stretch figures twice, and lastly finish it off with a challenging workout.",
                },
                "images": {
                    "neck": path + "/images/NeckWeb.png",
                    "burnMagni": path + "/images/BurnMagnifier.png",
                    "moveMagni": path + "/images/MoveMagnifier.png",
                    "shoulder": path + "/images/ShouldersWeb.png",
                },
                "need": [
                    {
                        "text": "bench",
                        "src": path + "/images/benchs.png"
                    },
                    {
                        "text": "space to run",
                        "src": path + "/images/SpaceToRun.png"
                    },
                    {
                        "text": "bench",
                        "src": path + "/images/benchs.png"
                    },
                    {
                        "text": "space to run",
                        "src": path + "/images/SpaceToRun.png"
                    },
                    {
                        "text": "bench",
                        "src": path + "/images/benchs.png"
                    },
                    {
                        "text": "space to run",
                        "src": path + "/images/SpaceToRun.png"
                    },
                ]
            },
            {
                "type": "Warmup",
                "title": "Jogging",
                "texts": {
                    "heading": "Jogging",
                    "explanation": "Don't go too fast, but I want to see your pulse high after. Let's go!",
                },
                "timer": 300,
                "images": {
                    "pic": path + "/images/RunWarmup.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Neck Stretching Right",
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
                "title": "Neck Stretching Left",
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
                "title": "Chest Stretching 1st",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 15,
                "images": {
                    "pic": path + "/images/ChestsWeb.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Chest Stretching 2nd",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 15,
                "images": {
                    "pic": path + "/images/ChestsWeb.png",
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
                "title": "Hamstring Stretching 1st",
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
                "type": "Stretching",
                "title": "Hamstring Stretching 2nd",
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
                "title": "25min AMRAP",
                "background": "linear-gradient(90deg, rgba(249, 255, 116, .66), rgba(162, 243, 124, .66) 40%, rgba(68, 255, 68, .66)), linear-gradient(180deg, #fff, #fff)",
                "texts": {
                    "heading": "25min AMRAP",
                    "explanation": "Those 7 exercises form 1 round. Do As Many Rounds As Possible within 25min.",
                    "tutButton": "How to do those 7 exercises",
                    "howTo": "Within 25 min, do as many rounds as you can, consisting of the shown 7 exercises.",
                },
                "videos": [
                    {
                        "title": "Mtn. Clmbrs",
                        "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FDyeZM-_VnRc%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDyeZM-_VnRc&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FDyeZM-_VnRc%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                    }, {
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
                    }, {
                        "title": "Burpees",
                        "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FwS4OsJ4yzx4%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DwS4OsJ4yzx4&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FwS4OsJ4yzx4%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                    },
                ],
                "images": {
                    "workout": "https://jspicgen.herokuapp.com/?duration=35&location=outdoor",
                }
            },
            {
                "type": "AMRAP",
                "title": "25min AMRAP",
                "background": "linear-gradient(90deg, rgba(249, 255, 116, .66), rgba(162, 243, 124, .66) 40%, rgba(68, 255, 68, .66)), linear-gradient(180deg, #fff, #fff)",
                "texts": {
                    "heading": "25min AMRAP",
                    "explanation": "Those 7 exercises form 1 round. Do As Many Rounds As Possible within 25 min.",
                    "tutButton": "How to do those 7 exercises",
                },
                "timer": 1500,
                "videos": [
                    {
                        "title": "Mtn. Clmbrs",
                        "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FDyeZM-_VnRc%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDyeZM-_VnRc&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FDyeZM-_VnRc%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                    }, {
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
                    }, {
                        "title": "Burpees",
                        "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FwS4OsJ4yzx4%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DwS4OsJ4yzx4&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FwS4OsJ4yzx4%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                    },
                ],
                "images": {
                    "workout": "https://jspicgen.herokuapp.com/?duration=35&location=outdoor",
                }
            },
            {
                "type": "Trophy",
                "title": "Congratulations",
                "background": "linear-gradient(0deg, red, #9d92ec 35%, #00b1c9)",
                "images": {
                    "trophy_pic": path + "/images/Trophy.png",
                },
                "texts": {
                    "title": "1 Step Closer To Your Goal!",
                    "text": "Nice to be outside, right? Hope you keep going.",
                }
            },
        ]
    },
    {
        "location": "outdoor",
        "duration": 40,
        "data": [
            {
                "type": "Welcome",
                "title": "Welcome",
                "timer": 7,
                "texts": {
                    "title": "Welcome to your outdoor workout!",
                    "text": "You're going to warm up jogging, then do some stretch figures twice, and lastly finish it off with a challenging workout.",
                },
                "images": {
                    "neck": path + "/images/NeckWeb.png",
                    "burnMagni": path + "/images/BurnMagnifier.png",
                    "moveMagni": path + "/images/MoveMagnifier.png",
                    "shoulder": path + "/images/ShouldersWeb.png",
                },
                "need": [
                    {
                        "text": "bench",
                        "src": path + "/images/benchs.png"
                    },
                    {
                        "text": "space to run",
                        "src": path + "/images/SpaceToRun.png"
                    },
                    {
                        "text": "bench",
                        "src": path + "/images/benchs.png"
                    },
                    {
                        "text": "space to run",
                        "src": path + "/images/SpaceToRun.png"
                    },
                    {
                        "text": "bench",
                        "src": path + "/images/benchs.png"
                    },
                    {
                        "text": "space to run",
                        "src": path + "/images/SpaceToRun.png"
                    },
                ]
            },
            {
                "type": "Warmup",
                "title": "Jogging",
                "texts": {
                    "heading": "Jogging",
                    "explanation": "Don't go too fast, but I want to see your pulse high after. Let's go!",
                },
                "timer": 300,
                "images": {
                    "pic": path + "/images/RunWarmup.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Neck Stretching Right",
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
                "title": "Neck Stretching Left",
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
                "title": "Chest Stretching 1st",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 15,
                "images": {
                    "pic": path + "/images/ChestsWeb.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Chest Stretching 2nd",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 15,
                "images": {
                    "pic": path + "/images/ChestsWeb.png",
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
                "title": "Hamstring Stretching 1st",
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
                "type": "Stretching",
                "title": "Hamstring Stretching 2nd",
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
                "title": "30min AMRAP",
                "background": "linear-gradient(90deg, rgba(249, 255, 116, .66), rgba(162, 243, 124, .66) 40%, rgba(68, 255, 68, .66)), linear-gradient(180deg, #fff, #fff)",
                "texts": {
                    "heading": "30min AMRAP",
                    "explanation": "Those 7 exercises form 1 round. Do As Many Rounds As Possible within 30min.",
                    "tutButton": "How to do those 7 exercises",
                    "howTo": "Within 30 min, do as many rounds as you can, consisting of the shown 7 exercises.",
                },
                "videos": [
                    {
                        "title": "Mtn. Clmbrs",
                        "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FDyeZM-_VnRc%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDyeZM-_VnRc&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FDyeZM-_VnRc%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                    }, {
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
                    }, {
                        "title": "Burpees",
                        "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FwS4OsJ4yzx4%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DwS4OsJ4yzx4&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FwS4OsJ4yzx4%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                    },
                ],
                "images": {
                    "workout": "https://jspicgen.herokuapp.com/?duration=40&location=outdoor",
                }
            },
            {
                "type": "AMRAP",
                "title": "30min AMRAP",
                "background": "linear-gradient(90deg, rgba(249, 255, 116, .66), rgba(162, 243, 124, .66) 40%, rgba(68, 255, 68, .66)), linear-gradient(180deg, #fff, #fff)",
                "texts": {
                    "heading": "30min AMRAP",
                    "explanation": "Those 7 exercises form 1 round. Do As Many Rounds As Possible within 30min.",
                    "tutButton": "How to do those 7 exercises",
                },
                "timer": 1800,
                "videos": [
                    {
                        "title": "Mtn. Clmbrs",
                        "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FDyeZM-_VnRc%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDyeZM-_VnRc&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FDyeZM-_VnRc%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                    }, {
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
                    }, {
                        "title": "Burpees",
                        "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FwS4OsJ4yzx4%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DwS4OsJ4yzx4&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FwS4OsJ4yzx4%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                    },
                ],
                "images": {
                    "workout": "https://jspicgen.herokuapp.com/?duration=40&location=outdoor",
                }
            },
            {
                "type": "Trophy",
                "title": "Congratulations",
                "background": "linear-gradient(0deg, red, #9d92ec 35%, #00b1c9)",
                "images": {
                    "trophy_pic": path + "/images/Trophy.png",
                },
                "texts": {
                    "title": "1 Step Closer To Your Goal!",
                    "text": "Respect for the outdoor grind! Hope you keep going.",
                }
            },
        ]
    },
        {
        "location": "outdoor",
        "duration": 45,
        "data": [
            {
                "type": "Welcome",
                "title": "Welcome",
                "timer": 7,
                "texts": {
                    "title": "Welcome to your outdoor workout!",
                    "text": "You're going to warm up jogging and stretching, do a challenging workout and lastly finish it off with a Cool-Down.",
                },
                "images": {
                    "neck": path + "/images/NeckWeb.png",
                    "burnMagni": path + "/images/BurnMagnifier.png",
                    "moveMagni": path + "/images/MoveMagnifier.png",
                    "shoulder": path + "/images/ShouldersWeb.png",
                },
                "need": [
                    {
                        "text": "bench",
                        "src": path + "/images/benchs.png"
                    },
                    {
                        "text": "space to run",
                        "src": path + "/images/SpaceToRun.png"
                    },
                    {
                        "text": "bench",
                        "src": path + "/images/benchs.png"
                    },
                    {
                        "text": "space to run",
                        "src": path + "/images/SpaceToRun.png"
                    },
                    {
                        "text": "bench",
                        "src": path + "/images/benchs.png"
                    },
                    {
                        "text": "space to run",
                        "src": path + "/images/SpaceToRun.png"
                    },
                ]
            },
            {
                "type": "Warmup",
                "title": "Jogging",
                "texts": {
                    "heading": "Jogging",
                    "explanation": "Don't go too fast, but I want to see your pulse high after. Let's go!",
                },
                "timer": 300,
                "images": {
                    "pic": path + "/images/RunWarmup.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Neck Stretching Right",
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
                "title": "Neck Stretching Left",
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
                "title": "Chest Stretching 1st",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 15,
                "images": {
                    "pic": path + "/images/ChestsWeb.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Chest Stretching 2nd",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 15,
                "images": {
                    "pic": path + "/images/ChestsWeb.png",
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
                "title": "Hamstring Stretching 1st",
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
                "type": "Stretching",
                "title": "Hamstring Stretching 2nd",
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
                "title": "30min AMRAP",
                "background": "linear-gradient(90deg, rgba(249, 255, 116, .66), rgba(162, 243, 124, .66) 40%, rgba(68, 255, 68, .66)), linear-gradient(180deg, #fff, #fff)",
                "texts": {
                    "heading": "30min AMRAP",
                    "explanation": "Those 7 exercises form 1 round. Do As Many Rounds As Possible within 30min.",
                    "tutButton": "How to do those 7 exercises",
                    "howTo": "Within 30 min, do as many rounds as you can, consisting of the shown 7 exercises.",
                },
                "videos": [
                    {
                        "title": "Mtn. Clmbrs",
                        "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FDyeZM-_VnRc%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDyeZM-_VnRc&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FDyeZM-_VnRc%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                    }, {
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
                    }, {
                        "title": "Burpees",
                        "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FwS4OsJ4yzx4%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DwS4OsJ4yzx4&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FwS4OsJ4yzx4%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                    },
                ],
                "images": {
                    "workout": "https://jspicgen.herokuapp.com/?duration=45&location=outdoor",
                }
            },
            {
                "type": "AMRAP",
                "title": "30min AMRAP",
                "background": "linear-gradient(90deg, rgba(249, 255, 116, .66), rgba(162, 243, 124, .66) 40%, rgba(68, 255, 68, .66)), linear-gradient(180deg, #fff, #fff)",
                "texts": {
                    "heading": "30min AMRAP",
                    "explanation": "Those 7 exercises form 1 round. Do As Many Rounds As Possible within 30min.",
                    "tutButton": "How to do those 7 exercises",
                },
                "timer": 1800,
                "videos": [
                    {
                        "title": "Mtn. Clmbrs",
                        "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FDyeZM-_VnRc%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDyeZM-_VnRc&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FDyeZM-_VnRc%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                    }, {
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
                    }, {
                        "title": "Burpees",
                        "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FwS4OsJ4yzx4%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DwS4OsJ4yzx4&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FwS4OsJ4yzx4%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                    },
                ],
                "images": {
                    "workout": "https://jspicgen.herokuapp.com/?duration=45&location=outdoor",
                }
            },
            {
                "type": "Warmup",
                "title": "Cool-Down Jogging",
                "texts": {
                    "heading": "Cool-Down Jogging",
                    "explanation": "Don't fall asleep, but this is a cool-down, therefore low-pace.",
                },
                "timer": 90,
                "images": {
                    "pic": path + "/images/RunWarmup.png",
                },
            },
            {
                "type": "Warmup",
                "title": "Cool-Down Walking",
                "texts": {
                    "heading": "Cool-Down Walking",
                    "explanation": "This one's to relax and calm down the pulse a bit.",
                },
                "timer": 90,
                "images": {
                    "pic": path + "/images/RunWarmup.png",
                },
            },
            {
                "type": "Trophy",
                "title": "Congratulations",
                "background": "linear-gradient(0deg, red, #9d92ec 35%, #00b1c9)",
                "images": {
                    "trophy_pic": path + "/images/Trophy.png",
                },
                "texts": {
                    "title": "1 Step Closer To Your Goal!",
                    "text": "Respect for the outdoor grind! Hope you keep going.",
                }
            },
        ]
    },
    {
        "location": "outdoor",
        "duration": 50,
        "data": [
            {
                "type": "Welcome",
                "title": "Welcome",
                "timer": 7,
                "texts": {
                    "title": "Welcome to your outdoor workout!",
                    "text": "You're going to warm up jogging&stretching, do a great workout and lastly a Cool-Down: cardio and a stretching routine twice.",
                },
                "images": {
                    "neck": path + "/images/NeckWeb.png",
                    "burnMagni": path + "/images/BurnMagnifier.png",
                    "moveMagni": path + "/images/MoveMagnifier.png",
                    "shoulder": path + "/images/ShouldersWeb.png",
                },
                "need": [
                    {
                        "text": "bench",
                        "src": path + "/images/benchs.png"
                    },
                    {
                        "text": "space to run",
                        "src": path + "/images/SpaceToRun.png"
                    },
                    {
                        "text": "bench",
                        "src": path + "/images/benchs.png"
                    },
                    {
                        "text": "space to run",
                        "src": path + "/images/SpaceToRun.png"
                    },
                    {
                        "text": "bench",
                        "src": path + "/images/benchs.png"
                    },
                    {
                        "text": "space to run",
                        "src": path + "/images/SpaceToRun.png"
                    },
                ]
            },
            {
                "type": "Warmup",
                "title": "Jogging",
                "texts": {
                    "heading": "Jogging",
                    "explanation": "Don't go too fast, but I want to see your pulse high after. Let's go!",
                },
                "timer": 300,
                "images": {
                    "pic": path + "/images/RunWarmup.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Neck Stretching Right",
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
                "title": "Neck Stretching Left",
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
                "title": "Chest Stretching 1st",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 15,
                "images": {
                    "pic": path + "/images/ChestsWeb.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Chest Stretching 2nd",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 15,
                "images": {
                    "pic": path + "/images/ChestsWeb.png",
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
                "title": "Hamstring Stretching 1st",
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
                "type": "Stretching",
                "title": "Hamstring Stretching 2nd",
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
                "title": "30min AMRAP",
                "background": "linear-gradient(90deg, rgba(249, 255, 116, .66), rgba(162, 243, 124, .66) 40%, rgba(68, 255, 68, .66)), linear-gradient(180deg, #fff, #fff)",
                "texts": {
                    "heading": "30min AMRAP",
                    "explanation": "Those 7 exercises form 1 round. Do As Many Rounds As Possible within 30min.",
                    "tutButton": "How to do those 7 exercises",
                    "howTo": "Within 30 min, do as many rounds as you can, consisting of the shown 7 exercises.",
                },
                "videos": [
                    {
                        "title": "Mtn. Clmbrs",
                        "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FDyeZM-_VnRc%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDyeZM-_VnRc&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FDyeZM-_VnRc%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                    }, {
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
                    }, {
                        "title": "Burpees",
                        "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FwS4OsJ4yzx4%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DwS4OsJ4yzx4&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FwS4OsJ4yzx4%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                    },
                ],
                "images": {
                    "workout": "https://jspicgen.herokuapp.com/?duration=50&location=outdoor",
                }
            },
            {
                "type": "AMRAP",
                "title": "30min AMRAP",
                "background": "linear-gradient(90deg, rgba(249, 255, 116, .66), rgba(162, 243, 124, .66) 40%, rgba(68, 255, 68, .66)), linear-gradient(180deg, #fff, #fff)",
                "texts": {
                    "heading": "30min AMRAP",
                    "explanation": "Those 7 exercises form 1 round. Do As Many Rounds As Possible within 30min.",
                    "tutButton": "How to do those 7 exercises",
                },
                "timer": 1800,
                "videos": [
                    {
                        "title": "Mtn. Clmbrs",
                        "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FDyeZM-_VnRc%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDyeZM-_VnRc&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FDyeZM-_VnRc%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                    }, {
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
                    }, {
                        "title": "Burpees",
                        "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FwS4OsJ4yzx4%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DwS4OsJ4yzx4&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FwS4OsJ4yzx4%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                    },
                ],
                "images": {
                    "workout": "https://jspicgen.herokuapp.com/?duration=50&location=outdoor",
                }
            },
            {
                "type": "Warmup",
                "title": "Cool-Down Jogging",
                "texts": {
                    "heading": "Cool-Down Jogging",
                    "explanation": "Don't fall asleep, but this is a cool-down, therefore low-pace.",
                },
                "timer": 90,
                "images": {
                    "pic": path + "/images/RunWarmup.png",
                },
            },
            {
                "type": "Warmup",
                "title": "Cool-Down Walking",
                "texts": {
                    "heading": "Cool-Down Walking",
                    "explanation": "This one's to relax and calm down the pulse a bit.",
                },
                "timer": 90,
                "images": {
                    "pic": path + "/images/RunWarmup.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Neck Stretching Right",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 10,
                "images": {
                    "pic": path + "/images/NeckWeb.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Neck Stretching Left",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 10,
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
                "timer": 10,
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
                "timer": 10,
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
                "timer": 10,
                "images": {
                    "pic": path + "/images/ChestsWeb.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Quad Stretching Right",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 10,
                "images": {
                    "pic": path + "/images/QuadsWeb.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Quad Stretching Left",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 10,
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
                "timer": 10,
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
                "timer": 10,
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
                "timer": 10,
                "images": {
                    "pic": path + "/images/HamstringWeb.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Neck Stretching",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 10,
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
                "timer": 10,
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
                "timer": 10,
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
                "timer": 10,
                "images": {
                    "pic": path + "/images/ChestsWeb.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Quad Stretching Right",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 10,
                "images": {
                    "pic": path + "/images/QuadsWeb.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Quad Stretching Left",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 10,
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
                "timer": 10,
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
                "timer": 10,
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
                "timer": 10,
                "images": {
                    "pic": path + "/images/HamstringWeb.png",
                },
            },
            {
                "type": "Trophy",
                "title": "Congratulations",
                "background": "linear-gradient(0deg, red, #9d92ec 35%, #00b1c9)",
                "images": {
                    "trophy_pic": path + "/images/Trophy.png",
                },
                "texts": {
                    "title": "1 Step Closer To Your Goal!",
                    "text": "Respect for the outdoor grind! Hope you keep going.",
                }
            },
        ]
    },
    {
        "location": "outdoor",
        "duration": 55,
        "data": [
            {
                "type": "Welcome",
                "title": "Welcome",
                "timer": 7,
                "texts": {
                    "title": "Welcome to your outdoor workout!",
                    "text": "You're going to warm up jogging&stretching, do a great workout and lastly a Cool-Down: cardio and a stretching routine twice.",
                },
                "images": {
                    "neck": path + "/images/NeckWeb.png",
                    "burnMagni": path + "/images/BurnMagnifier.png",
                    "moveMagni": path + "/images/MoveMagnifier.png",
                    "shoulder": path + "/images/ShouldersWeb.png",
                },
                "need": [
                    {
                        "text": "bench",
                        "src": path + "/images/benchs.png"
                    },
                    {
                        "text": "space to run",
                        "src": path + "/images/SpaceToRun.png"
                    },
                    {
                        "text": "bench",
                        "src": path + "/images/benchs.png"
                    },
                    {
                        "text": "space to run",
                        "src": path + "/images/SpaceToRun.png"
                    },
                    {
                        "text": "bench",
                        "src": path + "/images/benchs.png"
                    },
                    {
                        "text": "space to run",
                        "src": path + "/images/SpaceToRun.png"
                    },
                ]
            },
            {
                "type": "Warmup",
                "title": "Jogging",
                "texts": {
                    "heading": "Jogging",
                    "explanation": "Don't go too fast, but I want to see your pulse high after. Let's go!",
                },
                "timer": 420,
                "images": {
                    "pic": path + "/images/RunWarmup.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Neck Stretching Right",
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
                "title": "Neck Stretching Left",
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
                "title": "Chest Stretching 1st",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 15,
                "images": {
                    "pic": path + "/images/ChestsWeb.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Chest Stretching 2nd",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 15,
                "images": {
                    "pic": path + "/images/ChestsWeb.png",
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
                "title": "Hamstring Stretching 1st",
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
                "type": "Stretching",
                "title": "Hamstring Stretching 2nd",
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
                "title": "30min AMRAP",
                "background": "linear-gradient(90deg, rgba(249, 255, 116, .66), rgba(162, 243, 124, .66) 40%, rgba(68, 255, 68, .66)), linear-gradient(180deg, #fff, #fff)",
                "texts": {
                    "heading": "30min AMRAP",
                    "explanation": "Those 7 exercises form 1 round. Do As Many Rounds As Possible within 30min.",
                    "tutButton": "How to do those 7 exercises",
                    "howTo": "Within 30 min, do as many rounds as you can, consisting of the shown 7 exercises.",
                },
                "videos": [
                    {
                        "title": "Mtn. Clmbrs",
                        "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FDyeZM-_VnRc%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDyeZM-_VnRc&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FDyeZM-_VnRc%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                    }, {
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
                    }, {
                        "title": "Burpees",
                        "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FwS4OsJ4yzx4%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DwS4OsJ4yzx4&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FwS4OsJ4yzx4%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                    },
                ],
                "images": {
                    "workout": "https://jspicgen.herokuapp.com/?duration=55&location=outdoor",
                }
            },
            {
                "type": "AMRAP",
                "title": "30min AMRAP",
                "background": "linear-gradient(90deg, rgba(249, 255, 116, .66), rgba(162, 243, 124, .66) 40%, rgba(68, 255, 68, .66)), linear-gradient(180deg, #fff, #fff)",
                "texts": {
                    "heading": "30min AMRAP",
                    "explanation": "Those 7 exercises form 1 round. Do As Many Rounds As Possible within 30min.",
                    "tutButton": "How to do those 7 exercises",
                },
                "timer": 1800,
                "videos": [
                    {
                        "title": "Mtn. Clmbrs",
                        "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FDyeZM-_VnRc%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDyeZM-_VnRc&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FDyeZM-_VnRc%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                    }, {
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
                    }, {
                        "title": "Burpees",
                        "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FwS4OsJ4yzx4%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DwS4OsJ4yzx4&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FwS4OsJ4yzx4%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                    },
                ],
                "images": {
                    "workout": "https://jspicgen.herokuapp.com/?duration=55&location=outdoor",
                }
            },
            {
                "type": "Warmup",
                "title": "Cool-Down Jogging",
                "texts": {
                    "heading": "Cool-Down Jogging",
                    "explanation": "Don't fall asleep, but this is a cool-down, therefore low-pace.",
                },
                "timer": 120,
                "images": {
                    "pic": path + "/images/RunWarmup.png",
                },
            },
            {
                "type": "Warmup",
                "title": "Cool-Down Walking",
                "texts": {
                    "heading": "Cool-Down Walking",
                    "explanation": "This one's to relax and calm down the pulse a bit.",
                },
                "timer": 120,
                "images": {
                    "pic": path + "/images/RunWarmup.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Neck Stretching Right",
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
                "title": "Neck Stretching Left",
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
                "title": "Chest Stretching",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 15,
                "images": {
                    "pic": path + "/images/ChestsWeb.png",
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
                "type": "Stretching",
                "title": "Neck Stretching Right",
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
                "title": "Neck Stretching Left",
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
                "title": "Chest Stretching",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 15,
                "images": {
                    "pic": path + "/images/ChestsWeb.png",
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
                "type": "Trophy",
                "title": "Congratulations",
                "background": "linear-gradient(0deg, red, #9d92ec 35%, #00b1c9)",
                "images": {
                    "trophy_pic": path + "/images/Trophy.png",
                },
                "texts": {
                    "title": "1 Step Closer To Your Goal!",
                    "text": "Respect for the outdoor grind! Hope you keep going.",
                }
            },
        ]
    },
    {
        "location": "outdoor",
        "duration": 60,
        "data": [
            {
                "type": "Welcome",
                "title": "Welcome",
                "timer": 7,
                "texts": {
                    "title": "Welcome to your outdoor workout!",
                    "text": "You're going to warm up jogging&stretching, do a great workout and lastly a Cool-Down: cardio and a stretching routine twice.",
                },
                "images": {
                    "neck": path + "/images/NeckWeb.png",
                    "burnMagni": path + "/images/BurnMagnifier.png",
                    "moveMagni": path + "/images/MoveMagnifier.png",
                    "shoulder": path + "/images/ShouldersWeb.png",
                },
                "need": [
                    {
                        "text": "bench",
                        "src": path + "/images/benchs.png"
                    },
                    {
                        "text": "space to run",
                        "src": path + "/images/SpaceToRun.png"
                    },
                    {
                        "text": "bench",
                        "src": path + "/images/benchs.png"
                    },
                    {
                        "text": "space to run",
                        "src": path + "/images/SpaceToRun.png"
                    },
                    {
                        "text": "bench",
                        "src": path + "/images/benchs.png"
                    },
                    {
                        "text": "space to run",
                        "src": path + "/images/SpaceToRun.png"
                    },
                ]
            },
            {
                "type": "Warmup",
                "title": "Jogging",
                "texts": {
                    "heading": "Jogging",
                    "explanation": "Don't go too fast, but I want to see your pulse high after. Let's go!",
                },
                "timer": 540,
                "images": {
                    "pic": path + "/images/RunWarmup.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Neck Stretching Right",
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
                "title": "Neck Stretching Left",
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
                "title": "Chest Stretching 1st",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 15,
                "images": {
                    "pic": path + "/images/ChestsWeb.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Chest Stretching 2nd",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 15,
                "images": {
                    "pic": path + "/images/ChestsWeb.png",
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
                "title": "Hamstring Stretching 1st",
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
                "type": "Stretching",
                "title": "Hamstring Stretching 2nd",
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
                "title": "30min AMRAP",
                "background": "linear-gradient(90deg, rgba(249, 255, 116, .66), rgba(162, 243, 124, .66) 40%, rgba(68, 255, 68, .66)), linear-gradient(180deg, #fff, #fff)",
                "texts": {
                    "heading": "30min AMRAP",
                    "explanation": "Those 7 exercises form 1 round. Do As Many Rounds As Possible within 30min.",
                    "tutButton": "How to do those 7 exercises",
                    "howTo": "Within 30 min, do as many rounds as you can, consisting of the shown 7 exercises.",
                },
                "videos": [
                    {
                        "title": "Mtn. Clmbrs",
                        "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FDyeZM-_VnRc%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDyeZM-_VnRc&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FDyeZM-_VnRc%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                    }, {
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
                    }, {
                        "title": "Burpees",
                        "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FwS4OsJ4yzx4%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DwS4OsJ4yzx4&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FwS4OsJ4yzx4%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                    },
                ],
                "images": {
                    "workout": "https://jspicgen.herokuapp.com/?duration=60&location=outdoor",
                }
            },
            {
                "type": "AMRAP",
                "title": "30min AMRAP",
                "background": "linear-gradient(90deg, rgba(249, 255, 116, .66), rgba(162, 243, 124, .66) 40%, rgba(68, 255, 68, .66)), linear-gradient(180deg, #fff, #fff)",
                "texts": {
                    "heading": "30min AMRAP",
                    "explanation": "Those 7 exercises form 1 round. Do As Many Rounds As Possible within 30min.",
                    "tutButton": "How to do those 7 exercises",
                },
                "timer": 1800,
                "videos": [
                    {
                        "title": "Mtn. Clmbrs",
                        "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FDyeZM-_VnRc%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDyeZM-_VnRc&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FDyeZM-_VnRc%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                    }, {
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
                    }, {
                        "title": "Burpees",
                        "src": "//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FwS4OsJ4yzx4%3Ffeature%3Doembed&url=http%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DwS4OsJ4yzx4&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FwS4OsJ4yzx4%2Fhqdefault.jpg&key=c4e54deccf4d4ec997a64902e9a30300&type=text%2Fhtml&schema=youtube"
                    },
                ],
                "images": {
                    "workout": "https://jspicgen.herokuapp.com/?duration=60&location=outdoor",
                }
            },
            {
                "type": "Warmup",
                "title": "Cool-Down Jogging",
                "texts": {
                    "heading": "Cool-Down Jogging",
                    "explanation": "Don't fall asleep, but this is a cool-down, therefore low-pace.",
                },
                "timer": 150,
                "images": {
                    "pic": path + "/images/RunWarmup.png",
                },
            },
            {
                "type": "Warmup",
                "title": "Cool-Down Walking",
                "texts": {
                    "heading": "Cool-Down Walking",
                    "explanation": "This one's to relax and calm down the pulse a bit.",
                },
                "timer": 150,
                "images": {
                    "pic": path + "/images/RunWarmup.png",
                },
            },
            {
                "type": "Stretching",
                "title": "Neck Stretching Right",
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
                "title": "Neck Stretching Left",
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
                "title": "Chest Stretching",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 15,
                "images": {
                    "pic": path + "/images/ChestsWeb.png",
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
                "type": "Stretching",
                "title": "Neck Stretching Right",
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
                "title": "Neck Stretching Left",
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
                "title": "Chest Stretching",
                "texts": {
                    "heading": "Stretching",
                    "explanation": "Take your time. Breathe all the time. Don't spoil yourself, but don't stretch to agony.",
                },
                "timer": 15,
                "images": {
                    "pic": path + "/images/ChestsWeb.png",
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
                "type": "Trophy",
                "title": "Congratulations",
                "background": "linear-gradient(0deg, red, #9d92ec 35%, #00b1c9)",
                "images": {
                    "trophy_pic": path + "/images/Trophy.png",
                },
                "texts": {
                    "title": "1 Step Closer To Your Goal!",
                    "text": "Respect for the long outdoor grind! Hope you keep going.",
                }
            },
        ]
    },
];
module.exports = config;
