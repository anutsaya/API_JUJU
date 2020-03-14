const express = require('express');
const router = express.Router();
const config = require('./../config');


router.get('/', async function (req, res, next) {
    console.log(123);
    res.send("สวัสดี จูจู้");
});

router.post("/", function (req, res, next) {
    let reply_token = req.body.originalDetectIntentRequest.payload.data.replyToken;
    let text_input = req.body.queryResult.queryText;

    if (text_input == 'อยากรู้เรื่องของจู้มั้ย') {
        config.SendLine(reply_token, {
            "type": "template",
            "altText": "This is a buttons template",
            "template": {
                "type": "buttons",
                "thumbnailImageUrl": "https://scontent.fbkk6-2.fna.fbcdn.net/v/t1.0-9/35517415_1439913509448288_1996525408790511616_n.jpg?_nc_cat=103&_nc_oc=AQnp-GCKuDfSZWRW8f9WQFGapyUFGgi5tdtxe_E-KhHp1DqKyJgkyW7LtkQSjJ-GXaU&_nc_ht=scontent.fbkk6-2.fna&oh=051b8dd70fa3be61f32351cb63ba6811&oe=5ED17244",
                "imageAspectRatio": "rectangle",
                "imageSize": "cover",
                "imageBackgroundColor": "#FFFFFF",
                "title": "คุณต้องการรู้จักฉันไหม",
                "text": "Please select",
                "defaultAction": {
                    "type": "uri",
                    "label": "View detail",
                    "uri": "http://example.com/page/123"
                },
                "actions": [{
                    "type": "message",
                    "label": "อยากรู้",
                    "text": "อยากรู้"
                }, {
                    "type": "message",
                    "label": "ไม่อยาก",
                    "text": "ไม่อยาก"
                }]
            }
        });

    } else if (text_input == 'อยากรู้') {
        config.SendLine(reply_token, {
            "type": "template",
            "altText": "this is a image carousel template",
            "template": {
                "type": "image_carousel",
                "columns": [{
                        "imageUrl": "https://scontent.fbkk6-1.fna.fbcdn.net/v/t1.0-9/81509213_2310491855723778_2082222466045837312_n.jpg?_nc_cat=100&_nc_oc=AQldM5sTiQnpjgi0nLBGPY0oqQVn_rtbcruA8doonRc9VPvvDnmYxq7JK_Y_krhUT9U&_nc_ht=scontent.fbkk6-1.fna&oh=dd35b6a702c22ff95d2ff27df2a635e7&oe=5EC4FE26",
                        "action": {
                            "type": "postback",
                            "label": "Buy",
                            "data": "action=buy&itemid=111"
                        }
                    },
                    {
                        "imageUrl": "https://scontent.fbkk6-2.fna.fbcdn.net/v/t1.0-9/p960x960/46436419_1648454601927510_5334087006374854656_o.jpg?_nc_cat=103&_nc_oc=AQlI-SdviBiMdHAuv2jyOGhf0EC6uZZ80AstBsTGynzyxR3lgnWb_ueJDUPppDdvUfs&_nc_ht=scontent.fbkk6-2.fna&_nc_tp=6&oh=2a2b79e10538a996412ba2703b5b5d71&oe=5EBB7FC4",
                        "action": {
                            "type": "message",
                            "label": "Yes",
                            "text": "yes"
                        }
                    },
                    {
                        "imageUrl": "https://scontent.fbkk6-1.fna.fbcdn.net/v/t1.0-9/45636097_1637145913058379_6723343583274860544_n.jpg?_nc_cat=108&_nc_oc=AQmr27_acYLQnUGD9P4NdBgdvRgp_zebtdUQLvDAl91G-pCEKsElinhy9ckI2dbJWnQ&_nc_ht=scontent.fbkk6-1.fna&oh=9f7df487ad18e81f8568acd36fec6951&oe=5EC276DE",
                        "action": {
                            "type": "uri",
                            "label": "View detail",
                            "uri": "http://example.com/page/222"
                        }
                    }
                ]
            }
        });
    } else if (text_input == "ไม่อยาก") {
        config.SendLine(reply_token, {
            "type": "text",
            "text": "ไม่เป็นไรค่ะ ทางมีให้เลือกใหม่ "
        });
    }
    res.send(200)
});

module.exports = router;