window.onload = function () {

    var stage = document.getElementById('stage');
    var ctx = stage.getContext("2d");
    document.addEventListener("keydown", keyPush);
    var score = 0;
    var pont = document.getElementById('pont');

    setInterval(game, 80);

    const vel = 1;

    var vx = vy = 0;
    var px = 10;
    var py = 15;
    var tp = 30;
    var qp = 20;
    var ax = ay = 15;

    var trail = [];
    tail = 5;

    function game() {

        px += vx;
        py += vy;
        if (px < 0) {
            px = qp - 1;
        }
        if (px > qp - 1) {
            px = 0;
        }
        if (py < 0) {
            py = qp - 1;
        }
        if (py > qp - 1) {
            py = 0;
        }

        // tabuleiro do jogo!
        ctx.fillStyle = "gray";
        ctx.fillRect(0, 0, stage.width, stage.height);

        ctx.fillStyle = "red";
        ctx.fillRect(ax * tp, ay * tp, tp, tp);

        ctx.fillStyle = "green";
        for (var i = 0; i < trail.length; i++) {
            ctx.fillRect(trail[i].x * tp, trail[i].y * tp, tp - 1, tp - 1);
            if (trail[i].x == px && trail[i].y == py) {
                vx = vy = 0;
                tail = 5;
            }
        }

        trail.push({ x: px, y: py })
        while (trail.length > tail) {
            trail.shift();
        }

        if (ax == px && ay == py) {
            tail++;
            score++;
            console.log(score)
            ax = Math.floor(Math.random() * qp);
            ay = Math.floor(Math.random() * qp);

        }
        pont.innerHTML = "sua pontuação atual é: " + score;

    }

    //fuções de direcionamento no tabuleiro!
    function keyPush(event) {

        switch (event.keyCode) {
            case 65: // Left
                vx = -vel;
                vy = 0;
                break;
            case 87: // up
                vx = 0;
                vy = -vel;
                break;
            case 68: // right
                vx = vel;
                vy = 0;
                break;
            case 83: // down
                vx = 0;
                vy = vel;
                break;
            default:

                break;
        }


    }

}