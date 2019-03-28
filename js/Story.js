Story = function() {

    loader.resources.word_se.data.volume = SE_maxvolume;


    this.container = new PIXI.Container();

    this.house = PIXI.Sprite.fromImage('house');
    this.house.anchor.set(0.5);
    this.house.x = 640;
    this.house.y = 360;
    this.house.tint = 0xffffff;
    this.container.addChild(this.house);


    this.talkingbox = new PIXI.Graphics();
    this.talkingBOX_change(200, 100);

    this.talkingbox.alpha = 0.9;
    this.container.addChild(this.talkingbox);

    this.gg = PIXI.Sprite.fromImage('gg_talk');
    this.gg.anchor.set(0.5);
    this.gg.x = -150;
    this.gg.y = 300;
    this.gg.scale.x = 0.8;
    this.gg.scale.y = 0.8;
    this.container.addChild(this.gg);

    this.wordID = 0;
    this.gg_wordsID = 0;
    this.gg_words = ["1媽的法科~承霖，我要回台中了。", "3乾…真假", "2ㄍㄋㄋ!津津平常幹話那麼多，這麼重要的事卻不講。", "3明天早上的報告我不能遲到…", "0ㄅㄅ"]; //0
    this.brother_wordsID = -1;
    this.brother_words = ["津津說今天的路況好像不太優ㄛ，統聯好像停駛了。", "津津昨天忘了告訴妳，然後我也忘了", "...", "妳加油~ㄅㄅ"]; //1
    this.brother = PIXI.Sprite.fromImage('brother_talk');
    this.brother.anchor.set(0.5);
    this.brother.x = 1450;
    this.brother.y = 300;
    this.brother.scale.x = 0.8;
    this.brother.scale.y = 0.8;
    this.container.addChild(this.brother);


    var talk_style = new PIXI.TextStyle({
        fontFamily: 'Arial',
        fontSize: 32,
        fontWeight: 800,
        align: 'left',
        fill: ['#222222'], // gradient

    });

    this.talk_text = new PIXI.Text("", talk_style);
    this.talk_text.x = 530;
    this.talk_text.y = 290;
    this.talk_text.zIndex = -5;
    this.talk_text.style.lineHeight = 60;
    this.container.addChild(this.talk_text);

    this.space_num = 0;
    this.event_num = 0;
    this.istalking = false;
    this.timer = 0;
    this.who = 0;

    this.container.interactive = true;
    this.container.on('pointerdown', function() {
        controller.screen_down.active = true;
    });

    this.container.on('pointerup', function() {
        controller.screen_up.active = true;
    });

    this.storygg = new StoryGG(this.container);
    this.storygg.alldisappeare();

this.transition = new Transition(this.container, -1, false);
}



Story.prototype.talking = function(who) {

    if (who == 0) {
        var words = this.gg_words[this.gg_wordsID];

    } else
        var words = this.brother_words[this.brother_wordsID];

    var w, h;
    if (words.length > this.wordID) {
        if (this.wordID == 0 && who == 0) {
            switch (words[0]) {
                case "0":
                    this.gg.texture = PIXI.Texture.fromImage('gg_talk');
                    break;
                case "1":
                    this.gg.texture = PIXI.Texture.fromImage('gg_talk2');
                    break;
                case "2":
                    this.gg.texture = PIXI.Texture.fromImage('gg_talk3');
                    break;
                case "3":
                    this.gg.texture = PIXI.Texture.fromImage('gg_talk4');
                    break;
            }
        } else {
            loader.resources.word_se.data.play();
            this.talk_text.text += words[this.wordID];
        }

        if (this.space_num + 1 <= this.talk_text.text.length / 8) {
            this.talk_text.text += "\n";
            this.space_num++;
            this.talk_text.y = 290 - this.space_num * 60;
        }

        if (this.talk_text.text.length < 8) w = this.talk_text.text.length + 1;
        else w = 8;

        if (Math.floor(this.talk_text.text.length / 8) + 1 < 5) h = Math.floor(this.talk_text.text.length / 8) + 1;
        else h = 5;

        if (who == 1)
            this.talk_text.x = 820 - w * 28;

        this.talkingBOX_change(who, 30 + w * 35, 60 + h * 55);
    }
}
//900  370
Story.prototype.talkingBOX_change = function(who, width, height) {
    this.talkingbox.clear();

    this.talkingbox.beginFill(0xeeeeee);


    if (who == 0) {

        this.talkingbox.moveTo(520, 370 - height);
        this.talkingbox.lineTo(520, 370 - height);
        this.talkingbox.lineTo(480 + width, 370 - height);
        this.talkingbox.quadraticCurveTo(500 + width, 370 - height, 500 + width, 390 - height);
        this.talkingbox.lineTo(500 + width, 350);

        this.talkingbox.quadraticCurveTo(500 + width, 370, 480 + width, 370);
        this.talkingbox.lineTo(500, 370);
        this.talkingbox.lineTo(470, 370);
        this.talkingbox.lineTo(500, 350);

        this.talkingbox.lineTo(500, 390 - height);
        this.talkingbox.quadraticCurveTo(500, 370 - height, 520, 370 - height);
    } else {
        this.talkingbox.moveTo(850 - width, 370 - height);
        this.talkingbox.lineTo(850 - width, 370 - height);
        this.talkingbox.lineTo(850, 370 - height);
        this.talkingbox.quadraticCurveTo(870, 370 - height, 870, 390 - height);
        this.talkingbox.lineTo(870, 350);

        this.talkingbox.lineTo(900, 370);
        this.talkingbox.lineTo(890 - width, 370);
        this.talkingbox.quadraticCurveTo(870 - width, 370, 870 - width, 350);

        this.talkingbox.lineTo(870 - width, 390 - height);
        this.talkingbox.quadraticCurveTo(870 - width, 370 - height, 890 - width, 370 - height);

    }



    this.talkingbox.endFill();
}

Story.prototype.box_reset = function() {
    this.talk_text.text = "";
    this.talk_text.y = 290;
    this.space_num = 0;
    this.wordID = 0;
    this.timer = 0;
}

Story.prototype.show = function() {

    console.log(this.event_num);
    this.house.tint = 0x333333;
    if (this.gg.x < 230)
        this.gg.x += 10;
    else
        this.gg.x = 250;

    if (this.brother.x > 1070)
        this.brother.x -= 10;
    else
        this.brother.x = 1050;

    if (this.gg.x == 250 && this.brother.x == 1050 && !this.istalking) {
        this.istalking = true;
        this.timer = 0;
        this.event_num = 2;
    }
}


Story.prototype.close = function() {

    this.talkingbox.clear();
    if (this.gg.x > -150) {
        this.gg.x -= 10;
    } else
        this.gg.x = -150;

    if (this.brother.x < 1450)
        this.brother.x += 10;
    else
        this.brother.x = 1450;

    if (this.gg.x == -150 && this.brother.x == 1450) {
        this.istalking = false;
        this.timer = 0;
        this.event_num = 3;
        this.house.tint = 0xffffff;
    }


}

Story.prototype.update = function() {
    switch (this.event_num) {
        case 0:
               
             if (this.timer > 150) {
                loader.resources.open_door.data.volume = SE_maxvolume;
                loader.resources.open_door.data.play();
                this.storygg.move(360);
                 this.event_num = 1;
                 this.timer=0;
            }
            break;
        case 1:
         if (this.timer > 150) {
            this.storygg.alldisappeare();
            this.show();
            controller.screen_down.active = false;
        }
            break;
        case 2:

            if (this.istalking) {

                if (controller.screen_down.active && this.who == 1) {
                    this.box_reset();
                    this.who = 0;
                    this.talk_text.x = 530;
                    this.gg.tint = 0xffffff;
                    this.brother.tint = 0x666666;
                    controller.screen_down.active = false;
                    this.gg_wordsID++;
                } else if (controller.screen_down.active && this.who == 0) {
                    this.box_reset();
                    this.who = 1;
                    this.talk_text.x = 820;
                    this.gg.tint = 0x666666;
                    this.brother.tint = 0xffffff;
                    controller.screen_down.active = false;
                    this.brother_wordsID++;
                }

                if (this.brother_wordsID == 4)
                    this.close();
                else if (this.gg_wordsID < 5) {
                    if (!controller.screen_down.active) {
                        if (this.timer > 6) {
                            this.talking(this.who);
                            this.wordID++;
                            this.timer = 0;
                        }

                    }

                }
            }
            break;
        case 3:

            if (this.timer > 300){
                loader.resources.close_door.data.volume = SE_maxvolume;
                loader.resources.close_door.data.play();
                this.storygg.alldisappeare();

                this.event_num = 4;
            }
            else
                this.storygg.move(1100);
            break;
        case 4:

            this.transition = new Transition(this.container, scens.chose, true);

            break;

    }


    this.timer++;



    renderer.render(this.container);
}