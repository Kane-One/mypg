/* 地图类 */
class PubgMap {

    constructor(container_id) {
        this.containerId = container_id;
        this.stage = new Konva.Stage({
            container: this.containerId,
            width: 800,
            height: 800
        });

        this.layer = new Konva.Layer();
        this.stage.add(this.layer);
    }

    init() {
        let player1 = new Player(this.stage, this.layer, 'kane', 120, 20, 30);
        player1.setEnemy();
        player1.draw();

        let player2 = new Player(this.stage, this.layer, 'kane', 160, 100, 30);
        player2.setFriend();
        player2.draw();

        let player3 = new Player(this.stage, this.layer, 'kane', 300, 200, 30);
        player3.setEnemy();
        player3.draw();

        let player4 = new Player(this.stage, this.layer, 'kane', 130, 400, 30);
        player4.setSelf();
        player4.draw();
    }
}


class Player {

    constructor(stage, layer, player_id, position_x, position_y, angle) {
        this.isSelf = false;
        this.isFriend = false;
        this.isEnemy = false;
        this.stage = stage;
        this.layer = layer;
        this.player_id = player_id;
        this.position_x = position_x;
        this.position_y = position_y;
        this.angle = angle; // 朝向角度
        this.bloods = undefined; // 血量
        this.is_offline = undefined; // 是否掉线
        this.shape = undefined;
    }

    setEnemy() {
        this.isEnemy = true;
    }

    setFriend() {
        this.isFriend = true;
    }

    setSelf() {
        this.isSelf = true;
    }

    draw() {
        if (this.shape !== undefined) {
            this.shape.destroy();
        }
        this.shape = new Konva.Circle({
            x: this.position_x,
            y: this.position_y,
            radius: 5,
            fill: this.getPlayerFillColor(),
            stroke: 'black',
            strokeWidth: 1
        });

        this.layer.add(this.shape);
        this.layer.draw();

    }

    getPlayerFillColor() {
        if (this.isSelf) {
            return 'green';
        }
        if (this.isEnemy) {
            return 'red';
        }
        if (this.isFriend) {
            return 'blue';
        }
        return 'white';
    }

    updatePosition(position_x, position_y) {
        this.position_x = position_x;
        this.position_y = position_y;

        this.draw();
    }

    updateBlood(blood) {
        this.blood = blood;
    }

    updateAngle(angle) {
        this.angle = angle;
    }
}

