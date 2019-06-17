var GridSize = 50;
var X_Axis_Distance_Grid_Lines = 6;
var Y_Axis_Distance_Grid_Lines = 6;
var X_Axis_Starting_Point = { number: 1};
var Y_Axis_Starting_Point = { number: 1};

var canvas = document.getElementById("myChart");
var ctx = canvas.getContext("2d");

// canvas width
var Canvas_Width = canvas.width;

// canvas height
var Canvas_Height = canvas.height;

function script()
{
    ctx.fillStyle="#000000";
     // no of vertical grid lines
var Num_Lines_X = Math.floor(Canvas_Height/GridSize);

// no of horizontal grid lines
var Num_Lines_Y = Math.floor(Canvas_Width/GridSize);
var i=0;
// Draw grid lines along X-axis
for(i=0; i<=Num_Lines_X; i++)
 {
    ctx.beginPath();
    ctx.lineWidth = 1;
    
    // If line represents X-axis draw in different color
    if(i === X_Axis_Distance_Grid_Lines) {
        ctx.strokeStyle = "#000000";
    }
    else{
        ctx.strokeStyle = "#e9e9e9";
    }
    
    if(i === Num_Lines_X) {
        ctx.moveTo(0, GridSize*i);
        ctx.lineTo(Canvas_Width, GridSize*i);
    }
    else {
        ctx.moveTo(0, GridSize*i+0.5);
        ctx.lineTo(Canvas_Width, GridSize*i+0.5);
    }
    ctx.stroke();
}
// Draw grid lines along Y-axis
for(i=0; i<=Num_Lines_Y; i++) {
    ctx.beginPath();
    ctx.lineWidth = 1;
    
    // If line represents X-axis draw in different color
    if(i === Y_Axis_Distance_Grid_Lines) {
        ctx.strokeStyle = "#000000";
    }
    else{
        ctx.strokeStyle = "#e9e9e9";
    }
    
    if(i === Num_Lines_Y) {
        ctx.moveTo(GridSize*i, 0);
        ctx.lineTo(GridSize*i, Canvas_Height);
    }
    else {
        ctx.moveTo((GridSize*i)+0.5, 0);
        ctx.lineTo((GridSize*i)+0.5, Canvas_Height);
    }
    ctx.stroke();
}
// Translate to the new origin. Now Y-axis of the canvas is opposite to the Y-axis of the graph. So the y-coordinate of each element will be negative of the actual
ctx.translate(Y_Axis_Distance_Grid_Lines*GridSize, X_Axis_Distance_Grid_Lines*GridSize);

// Ticks marks along the positive X-axis
for(i=1; i<(Num_Lines_Y - Y_Axis_Distance_Grid_Lines); i++) {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#000000";

    // Draw a tick mark 6px long (-3 to 3)
    ctx.moveTo((GridSize*i)+0.5, -3);
    ctx.lineTo((GridSize*i)+0.5, 3);
    ctx.stroke();

    // Text value at that point
    ctx.font = '9px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(X_Axis_Starting_Point.number*i, GridSize*i, 15);
}
// Ticks marks along the negative X-axis
for(i=1; i<Y_Axis_Distance_Grid_Lines; i++) {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#000000";

    // Draw a tick mark 6px long (-3 to 3)
    ctx.moveTo(-((GridSize*i)+0.5), -3);
    ctx.lineTo(-((GridSize*i)+0.5), 3);
    ctx.stroke();

    // Text value at that point
    ctx.font = '9px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(-X_Axis_Starting_Point.number*i, -GridSize*i, 15);
}

// Ticks marks along the positive Y-axis
// Positive Y-axis of graph is negative Y-axis of the canvas
for(i=1; i<(Num_Lines_X - X_Axis_Distance_Grid_Lines); i++) {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#000000";

    // Draw a tick mark 6px long (-3 to 3)
    ctx.moveTo(-3, (GridSize*i)+0.5);
    ctx.lineTo(3, (GridSize*i)+0.5);
    ctx.stroke();

    // Text value at that point
    ctx.font = '9px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(-Y_Axis_Starting_Point.number*i, -15, (GridSize*i)+3);
}

// Ticks marks along the negative Y-axis
// Negative Y-axis of graph is positive Y-axis of the canvas
for(i=1; i<X_Axis_Distance_Grid_Lines; i++) {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#000000";

    // Draw a tick mark 6px long (-3 to 3)
    ctx.moveTo(-3, -((GridSize*i)+0.5));
    ctx.lineTo(3, -((GridSize*i)+0.5));
    ctx.stroke();

    // Text value at that point
    ctx.font = '9px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(Y_Axis_Starting_Point.number*i, -15, -((GridSize*i)+3));
}
}
function Script_For_T2_Dataset()
{
     ctx.fillStyle="#000000";
    // no of vertical grid lines
var Num_Lines_X = Math.floor(Canvas_Height/25);

// no of horizontal grid lines
var Num_Lines_Y = Math.floor(Canvas_Width/25);

// Draw grid lines along X-axis
for(i=0; i<=Num_Lines_X; i++)
 {
    ctx.beginPath();
    ctx.lineWidth = 1;
    
    // If line represents X-axis draw in different color
    if(i === X_Axis_Distance_Grid_Lines) 
        {
            ctx.strokeStyle = "#000000";
        }
    else
        ctx.strokeStyle = "#e9e9e9";
    
    if(i === Num_Lines_X) {
        ctx.moveTo(0, 25*i);
        ctx.lineTo(Canvas_Width,25*i);
    }
    else {
        ctx.moveTo(0, 25*i+0.5);
        ctx.lineTo(Canvas_Width, 25*i+0.5);
    }
    ctx.stroke();
}
// Draw grid lines along Y-axis
for(i=0; i<=Num_Lines_Y; i++) {
    ctx.beginPath();
    ctx.lineWidth = 1;
    
    // If line represents X-axis draw in different color
    if(i === Y_Axis_Distance_Grid_Lines) {
        ctx.strokeStyle = "#000000";
    }
    else {
        ctx.strokeStyle = "#e9e9e9";
    }
    
    if(i === Num_Lines_Y) {
        ctx.moveTo(GridSize*i, 0);
        ctx.lineTo(GridSize*i, Canvas_Height);
    }
    else {
        ctx.moveTo(GridSize*i+0.5, 0);
        ctx.lineTo(GridSize*i+0.5, Canvas_Height);
    }
    ctx.stroke();
}
// Translate to the new origin. Now Y-axis of the canvas is opposite to the Y-axis of the graph. So the y-coordinate of each element will be negative of the actual
ctx.translate(Y_Axis_Distance_Grid_Lines*GridSize, X_Axis_Distance_Grid_Lines*25);

// Ticks marks along the positive X-axis
for(i=1; i<(Num_Lines_Y - Y_Axis_Distance_Grid_Lines); i++) {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#000000";

    // Draw a tick mark 6px long (-3 to 3)
    ctx.moveTo(GridSize*i+0.5, -3);
    ctx.lineTo(GridSize*i+0.5, 3);
    ctx.stroke();

    // Text value at that point
    ctx.font = '9px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(X_Axis_Starting_Point.number*i, GridSize*i, 15);
}
// Ticks marks along the negative X-axis
for(i=1; i<Y_Axis_Distance_Grid_Lines; i++) {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#000000";

    // Draw a tick mark 6px long (-3 to 3)
    ctx.moveTo(-GridSize*i+0.5, -3);
    ctx.lineTo(-GridSize*i+0.5, 3);
    ctx.stroke();

    // Text value at that point
    ctx.font = '9px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(-X_Axis_Starting_Point.number*i, -GridSize*i, 15);
}

// Ticks marks along the positive Y-axis
// Positive Y-axis of graph is negative Y-axis of the canvas
for(i=1; i<(Num_Lines_X - X_Axis_Distance_Grid_Lines); i++) {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#000000";

    // Draw a tick mark 6px long (-3 to 3)
    ctx.moveTo(-3, 25*i+0.5);
    ctx.lineTo(3, 25*i+0.5);
    ctx.stroke();

    // Text value at that point
    ctx.font = '9px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(-Y_Axis_Starting_Point.number*i, -15, 25*i+3);
}

// Ticks marks along the negative Y-axis
// Negative Y-axis of graph is positive Y-axis of the canvas
for(i=1; i<X_Axis_Distance_Grid_Lines; i++) {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#000000";

    // Draw a tick mark 6px long (-3 to 3)
    ctx.moveTo(-3, -25*i+0.5);
    ctx.lineTo(3, -25*i+0.5);
    ctx.stroke();

    // Text value at that point
    ctx.font = '9px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(Y_Axis_Starting_Point.number*i, -15, -25*i+3);
}
}
script();

