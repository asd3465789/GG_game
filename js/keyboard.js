controller = { //控制器
    screen_click: { active: false},
    left: { active: false, state: false },
    right: { active: false, state: false },
    up: { active: false, state: false },
    space: { active: false, state: false },


    keyUpDown: function(event) {

        var key_state = (event.type == "keydown") ? true : false;

        switch (event.keyCode) {
            case 32:

                if (controller.space.state != key_state) controller.space.active = key_state;
                controller.space.state = key_state;

                break;

            case 37:
                if (controller.left.state != key_state) controller.left.active = key_state;
                controller.left.state = key_state; // Always update the physical state.

                break;
            case 38: // up key

                if (controller.up.state != key_state) controller.up.active = key_state;
                controller.up.state = key_state;

                break;
            case 39: // right key

                if (controller.right.state != key_state) controller.right.active = key_state;
                controller.right.state = key_state;

                break;

        }


    }

};

 stage.gaming.interactive = true;

    stage.gaming.on('pointerdown', function() {
        controller.screen_click.active = true;
    });

     stage.gaming.on('pointerup', function() {
        controller.screen_click.active = false;
    });
     
window.addEventListener("keydown", controller.keyUpDown);
window.addEventListener("keyup", controller.keyUpDown);