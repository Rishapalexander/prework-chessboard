let queen =
    [{
        direction: 's',
        position: [4, 3]
    },
    {
        direction: 'n',
        position: [5, 6]
    },
    {
        direction: 'w',
        position: [0, 5]
    },
    {
        direction: 'e',
        position: [7, 4]
    },
    ];
function changeDirection(coin, move)
{
    var direction = coin.direction;
    switch (direction)
    {
        case 's':
            moveForward(coin.position, direction, move);
            break;
        case 'n':
            moveBackward(coin.position, direction, move);
            break;
        case 'w':
            moveLeft(coin.position, direction, move);
            break;
        case 'e':
            moveRight(coin.position, direction, move);
            break;
    }
}
function moveForward(position, direction, moves)
{
    x = position[0];
    y = position[1];
    if (direction == "s")
    {
        y = y - moves;
    }
    var arr = [x, y];
    queen.position = arr;
    document.write(queen.position + " First Queen position");
    updatePosition(arr);
}
function moveBackward(position, direction, moves)
{
    x = position[0];
    y = position[1];
    if (direction == "n")
    {
        y = y - moves;
    }
    var arr = [x, y];
    queen.position = arr;
    document.write(queen.position + " second Queen position");
    updatePosition(arr);
}
function moveLeft(position, direction, moves)
{
    x = position[0];
    y = position[1];
    if (direction == "w")
    {
        x = x + moves;
    }
    var arr = [x, y];
    queen.position = arr;
    document.write(queen.position + " third Queen position");
    updatePosition(arr);
}
{
    function moveRight(position, direction, moves)
    {
        x = position[0];
        y = position[1];
        if (direction == "e")
        {
            y = y + moves;
        }
        var arr = [x, y];
        queen.position = arr;
        document.write(queen.position + " Fourth Queen position");
        updatePosition(arr);
    }

}
function updatePosition(arrs)
{
    x = arrs[0];
    y = arrs[1];
    if (x < 0 || y < 0 || x > 7 || y > 7)
    {
        document.write("<br/>Out of Chess Board<br/>");
    }
    else
    {
        var positionLog =
            [["a8", "b8", "c8", "d8", "e8", "f8", "g8", "h8"],
            ["a7", "b7", "c7", "d7", "e7", "f7", "g7", "h7"],
            ["a6", "b6", "c6", "d6", "e6", "f6", "g6", "h6"],
            ["a5", "b5", "c5", "d5", "e5", "f5", "g5", "h5"],
            ["a4", "b4", "c4", "d4", "e4", "f4", "g4", "h4"],
            ["a3", "b3", "c3", "d3", "e3", "f3", "g3", "h3"],
            ["a2", "b2", "c2", "d2", "e2", "f2", "g2", "h2"],
            ["a1", "b1", "c1", "d1", "e1", "f1", "g1", "h1"]];
        var x = positionLog[arrs[1]][arrs[0]];
        queen.whereabouts = x;
        document.write(" <br/>" + x + "  <br/>");
        // document.write(queen);
    }
}
moves = [2, 4, 6, 7]
for (i = 0; i < queen.length; i++)
{
    changeDirection(queen[i], moves[i]);
}