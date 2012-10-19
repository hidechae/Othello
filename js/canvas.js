$(function() {
    var SIZE = 48;
    var SIZE_X = 8;
    var SIZE_Y = 8;
    var RADIUS = 18;
    var MARK_RADIUS = 2;
    var NO_STONE = -1;
    var BLACK = 0;
    var WHITE = 1;
    var MARK = 2;
    var TURN = BLACK;
    var DIRECTION = [
        {x:1,   y:0},
        {x:1,   y:1},
        {x:0,   y:1},
        {x:-1,  y:1},
        {x:-1,  y:0},
        {x:-1,  y:-1},
        {x:0,   y:-1},
        {x:1,   y:-1}
    ];

    drawBoard();
    drawStone(3, 3, WHITE);
    drawStone(3, 4, BLACK);
    drawStone(4, 3, BLACK);
    drawStone(4, 4, WHITE);
    checkAll(TURN);

    $('#board .row .block').click(function() {
        var x = $(this).data('x');
        var y = $(this).data('y');
        if (move(x, y, TURN)) {
            forward(x, y, TURN);
        }
    });

    function move(x, y, turn) {
        var is_change = false;
        for (var d=0; d<DIRECTION.length; d++) {
            if (check(x, y, DIRECTION[d], turn)) {
                turnStone(x, y, DIRECTION[d], turn);
                is_change = true;
            }
        }
        return is_change;
    }

    function forward(x, y, turn) {
        drawStone(x, y, turn);
        TURN = (turn+1)%2;
        if (checkAll(TURN) == 0) {
            TURN = (TURN+1)%2;
            if (checkAll(TURN)) {
                alert('Pass');
            } else {
                alert(getEndMsg());
            }
        }
        setScore();
    }

    function drawBoard() {
        for (var y=0; y<SIZE_Y; y++) {
            $('#board').append('<div id="row'+y+'" class="row">');
            for (var x=0; x<SIZE_X; x++) {
                $('#row'+y).append('<canvas id="x'+x+'y'+y+'" class="block" width='+SIZE+' height='+SIZE+' data-x='+x+' data-y='+y+' data-state='+NO_STONE+'></canvas>');
            }
        }
    }

    function drawStone(x, y, color) {
        $('#x'+x+'y'+y).data('state', color);

        var ctx = $('#x'+x+'y'+y)[0].getContext('2d');

        ctx.clearRect(0, 0, SIZE, SIZE);
        ctx.beginPath();
        if (color == WHITE) {
            ctx.fillStyle = 'WHITE';
        } else {
            ctx.fillStyle = 'BLACK';
        }
        ctx.arc(SIZE/2, SIZE/2, RADIUS, Math.PI*2, false);
        ctx.shadowBlur = 10;
        ctx.shadowColor = 'BLACK';
        ctx.shadowOffsetX = 3;
        ctx.shadowOffsetY = 3;
        ctx.fill();
    }

    function drawMark(x, y, t) {
        $('#x'+x+'y'+y).data('state', MARK);

        var ctx = $('#x'+x+'y'+y)[0].getContext('2d');

        ctx.beginPath();
        if (t == WHITE) {
            ctx.fillStyle = 'WHITE';
        } else {
            ctx.fillStyle = 'BLACK';
        }
        ctx.arc(SIZE/2, SIZE/2, MARK_RADIUS, Math.PI*2, false);
        ctx.shadowBlur = 10;
        ctx.shadowColor = 'BLACK';
        ctx.shadowOffsetX = 3;
        ctx.shadowOffsetY = 3;
        ctx.fill();
    }

    function clearBlock(x, y) {
        $('#x'+x+'y'+y).data('state', NO_STONE);

        var ctx = $('#x'+x+'y'+y)[0].getContext('2d');
        ctx.clearRect(0, 0, SIZE, SIZE);
    }

    function checkAll(t) {
        var count = 0;
        for (var y=0; y<SIZE_Y; y++) {
            for (var x=0; x<SIZE_X; x++) {
                var state = $('#x'+x+'y'+y).data('state');
                if (state == MARK) {
                    clearBlock(x, y);
                } else if (state != NO_STONE) {
                    continue;
                }
                for (var d=0; d<DIRECTION.length; d++) {
                    if (check(x, y, DIRECTION[d], t)) {
                        drawMark(x, y, t);
                        count++;
                    }
                }
            }
        }
        return count;
    }

    function check(x, y, direction, turn) {
        var state = $('#x'+x+'y'+y).data('state');
        if (state == WHITE ||  state == BLACK) {
            return false;
        }
        // check next block
        x += direction['x'];
        y += direction['y'];
        var state = $('#x'+x+'y'+y).data('state');
        if (state != (turn+1)%2) {
            return false;
        }
        // if next block has another color stone, check moreover.
        while(x >= 0 && x <= 7 && y >= 0 && y <= 7) {
            x += direction['x'];
            y += direction['y'];
            var state = $('#x'+x+'y'+y).data('state');
            if (state == turn) {
                return true;
            } else if (state == NO_STONE || state == MARK) {
                break;
            }
        }
        return false;
    }

    function turnStone(x, y, direction, turn) {
        while(x >= 0 && x <= 7 && y >= 0 && y <= 7) {
            x += direction['x'];
            y += direction['y'];
            var state = $('#x'+x+'y'+y).data('state');
            if (state == turn) {
                break;
            }
            drawStone(x, y, turn);
        }
    }

    function getScore(color) {
        var score = 0;
        for (var y=0; y<SIZE_Y; y++) {
            for (var x=0; x<SIZE_X; x++) {
                if ($('#x'+x+'y'+y).data('state') == color) {
                    score++;
                }
            }
        }
        return score;
    }

    function setScore() {
        var blackScore = getScore(BLACK);
        $('.black')[0].innerHTML = blackScore;
        var whiteScore = getScore(WHITE);
        $('.white')[0].innerHTML = whiteScore;
    }

    function getEndMsg() {
        var blackScore = getScore(BLACK);
        var whiteScore = getScore(WHITE);
        if (blackScore > whiteScore) {
            return 'BLACK WIN!!';
        } else if (blackScore < whiteScore) {
            return 'WHITE WIN!!';
        } else if (blackScore == whiteScore) {
            return 'DRAW';
        } else {
            return 'ERROR';
        }
    }

})
