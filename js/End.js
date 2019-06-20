End = function() {
    this.container = new PIXI.Container();
    this.ui_bg_gg = new Ui_bg_gg(this.container);

    this.graphics = new PIXI.Graphics();
    this.graphics.beginFill(0x000000);
    this.graphics.drawRect(100, 100, 1080, 430);
    this.graphics.endFill();
    this.graphics.alpha = 0.5;

    this.container.addChild(this.graphics);
    if (score < 100000) {
        this.faceID = 5;
        this.levalID = "F";
        switch (Math.floor(Math.random() * 2.9)) {
            case 0:
                this.words = "噢穴...";
                break;
            case 1:
                this.words = "我也好想吃起司脆薯雙牛堡...";
                break;
            case 2:
                this.words = "我的吐司好像發霉了...";
                break;
        }




    } else if (score < 200000) {
        this.faceID = 4;
        this.levalID = "C";
        switch (Math.floor(Math.random() * 2.9)) {
            case 0:
                this.words = "安啦~從人生畢業前會先從麥胞畢業。";
                break;
            case 1:
                this.words = "其實我幹話也沒那麼多。";
                break;
            case 2:
                this.words = "無印毒品。";
                break;
        }

    } else if (score < 400000) {
        this.faceID = 3;
        this.levalID = "B";
        switch (Math.floor(Math.random() * 1.9)) {
            case 0:
                this.words = "卵子衝腦畫了一堆垃圾圖。";
                break;
            case 1:
                this.words = "珍惜時間，遠離色鉛。";
                break
        }

    } else if (score < 700000) {
        this.faceID = 2;
        this.levalID = "A";
        this.words = "我們都是共犯，也都寂寞。";
    } else {
        this.faceID = 1;
        this.levalID = "S";
        switch (Math.floor(Math.random() * 1.9)) {
            case 0:
                this.words = "馬臉大ㄐㄐ宋依璇。";
                break;
            case 1:
                this.words = "在別人不要ㄉ褲子口袋發現一百摳~";
                break
        }
    }

    var tale_style = new PIXI.TextStyle({
        fontFamily: 'Arial',
        fontSize: 36,
        fontWeight: 'bold',
        fill: ['#FFFFFF'],
    });
    this.score_text = new PIXI.Text("分數 : " + score, tale_style);
    this.score_text.x = 500;
    this.score_text.y = 420;
    this.score_text.style.lineHeight = 80;
    //  this.score_text.zIndex = -5;
    this.container.addChild(this.score_text);
    this.transition = new Transition(this.container, -1, false);

    this.leval_text = new PIXI.Text("等級 : ", tale_style);
    this.leval_text.x = 840;
    this.leval_text.y = 420;
    this.leval_text.style.lineHeight = 80;
    //  this.leval_text.zIndex = -5;
    this.container.addChild(this.leval_text);
    this.transition = new Transition(this.container, -1, false);

    this.leval = PIXI.Sprite.fromImage(this.levalID);
    this.leval.anchor.set(0.5);
    this.leval.x = 1060;
    this.leval.y = 400;
    this.leval.scale.x = 1;
    this.leval.scale.y = 1;
    this.container.addChild(this.leval);

    this.GG_face = PIXI.Sprite.fromImage('end_face' + this.faceID);
    this.GG_face.anchor.set(0.5);
    this.GG_face.x = 300;
    this.GG_face.y = 300;
    this.GG_face.scale.x = 1;
    this.GG_face.scale.y = 1;
    this.container.addChild(this.GG_face);


    this.tale_text = new PIXI.Text(this.words, tale_style);
    this.tale_text.x = 500;
    this.tale_text.y = 160;
    this.tale_text.style.lineHeight = 80;
    this.tale_text.zIndex = -5;
    this.container.addChild(this.tale_text);

    this.restart_BT = PIXI.Sprite.fromImage('restart_BT');
    this.restart_BT.anchor.set(1, 0);
    this.restart_BT.x = 400;
    this.restart_BT.y = 580;
    this.restart_BT.scale.x = 0.7;
    this.restart_BT.scale.y = 0.7;
    this.restart_BT.interactive = true;
    this.restart_BT.buttonMode = true;
    this.restart_BT.tint = 0xFFFFFF;
    this.restart_BT.container = this.container;
    this.restart_BT.on('pointerdown', function() { this.tint = 0x555555; });
    this.restart_BT.on('pointerup', function() {
        this.tint = 0xAAAAAA;
        this.transition = new Transition(this.container, scens.gaming, true);
    });
    this.restart_BT.on('pointerover', function() { this.tint = 0xAAAAAA; });
    this.restart_BT.on('pointerout', function() { this.tint = 0xFFFFFF; });

    this.container.addChild(this.restart_BT);
    this.backmenu_BT = PIXI.Sprite.fromImage('backmenu_BT');
    this.backmenu_BT.anchor.set(1, 0);
    this.backmenu_BT.x = 780;
    this.backmenu_BT.y = 580;
    this.backmenu_BT.scale.x = 0.7;
    this.backmenu_BT.scale.y = 0.7;
    this.backmenu_BT.interactive = true;
    this.backmenu_BT.buttonMode = true;
    this.backmenu_BT.tint = 0xFFFFFF;
    this.backmenu_BT.container = this.container;
    this.backmenu_BT.on('pointerdown', function() { this.tint = 0x555555; });
    this.backmenu_BT.on('pointerup', function() {
        this.tint = 0xAAAAAA;
        this.transition = new Transition(this.container, scens.menu, true);
    });
    this.backmenu_BT.on('pointerover', function() { this.tint = 0xAAAAAA; });
    this.backmenu_BT.on('pointerout', function() { this.tint = 0xFFFFFF; });

    this.container.addChild(this.backmenu_BT);

    this.web_BT = PIXI.Sprite.fromImage('web_BT');
    this.web_BT.anchor.set(1, 0);
    this.web_BT.x = 1160;
    this.web_BT.y = 580;
    this.web_BT.scale.x = 0.7;
    this.web_BT.scale.y = 0.7;
    this.web_BT.interactive = true;
    this.web_BT.buttonMode = true;
    this.web_BT.tint = 0xFFFFFF;
    this.web_BT.container = this.container;
    this.web_BT.on('pointerdown', function() { this.tint = 0x555555; });
    this.web_BT.on('pointerup', function() {
        this.tint = 0xAAAAAA;
        window.location.href = 'http://web3.nutc.edu.tw/~s1410622007/';
    });
    this.web_BT.on('pointerover', function() { this.tint = 0xAAAAAA; });
    this.web_BT.on('pointerout', function() { this.tint = 0xFFFFFF; });

    this.container.addChild(this.web_BT);



    this.transition = new Transition(this.container, -1, false);



}
End.prototype.update = function() {
    renderer.render(this.container);
    this.ui_bg_gg.update();
}