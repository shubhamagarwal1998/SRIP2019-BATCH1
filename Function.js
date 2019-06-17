var ctx = document.getElementById('myChart').getContext('2d');
var previous_x="NIL";
var flag=-1;
//flag is the variable which tells which function among load and generate was atlast called. 
function load() 
{
  //x is the value selected by user from the list
flag=0;
var x=document.getElementById("s1").value;
   if(x==="T1")
      {
        if(previous_x==="T2")
        {
          ctx.clearRect(-Grid_Size* y_axis_distance_grid_lines,-25*x_axis_distance_grid_lines,canvas.width,canvas.height);
          ctx.translate(-Grid_Size* y_axis_distance_grid_lines,-25*x_axis_distance_grid_lines);          
        }
        else
        {
          ctx.clearRect(-Grid_Size* y_axis_distance_grid_lines,-Grid_Size*x_axis_distance_grid_lines,canvas.width,canvas.height);     
          ctx.translate(-Grid_Size* y_axis_distance_grid_lines,-Grid_Size*x_axis_distance_grid_lines);
        }
      script();
      document.getElementById("t1").value=1;
      document.getElementById("t2").value=0;
      document.getElementById("t3").value=0;
      document.getElementById("t4").value=0;
      document.getElementById("t5").value=1;
      document.getElementById("t6").value=0;
      document.getElementById("t7").value=1;
      document.getElementById("t8").value=0;
      document.getElementById("t9").value=0;
      document.getElementById("t10").value=1;
      document.getElementById("t11").value=0;
      document.getElementById("t12").value=1;
      ctx.beginPath();
      ctx.arc(Grid_Size *1,-Grid_Size * 0,Grid_Size *(1/2), 0, Math.PI * 2, true);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(Grid_Size *0,-Grid_Size * 0, Grid_Size *(1/2), 0, Math.PI * 2, true);
      ctx.strokeStyle= "red";
      ctx.stroke();
      previous_x=x;
      } 
    else if (x==="T2")
    {
      if(previous_x==="T2")
        {
          ctx.clearRect(-Grid_Size* y_axis_distance_grid_lines,-25*x_axis_distance_grid_lines,canvas.width,canvas.height);
          ctx.translate(-Grid_Size* y_axis_distance_grid_lines,-25*x_axis_distance_grid_lines);          
        }
        else
        {
          ctx.clearRect(-Grid_Size* y_axis_distance_grid_lines,-Grid_Size*x_axis_distance_grid_lines,canvas.width,canvas.height);     
          ctx.translate(-Grid_Size* y_axis_distance_grid_lines,-Grid_Size*x_axis_distance_grid_lines);
        }
      script_for_T2_dataset();
      document.getElementById("t1").value=0;
      document.getElementById("t2").value=0;
      document.getElementById("t3").value=0;
      document.getElementById("t4").value=0;
      document.getElementById("t5").value=1;
      document.getElementById("t6").value=0.5;
      document.getElementById("t7").value=1;
      document.getElementById("t8").value=-0.5;
      document.getElementById("t9").value=0.5;
      document.getElementById("t10").value=1;
      document.getElementById("t11").value=-0.5;
      document.getElementById("t12").value=1;
      ctx.beginPath();
      ctx.ellipse(0,0,Grid_Size*(1/2),25*(1/2),0.5, 0, 2 * Math.PI);
      ctx.strokeStyle= "red";
      ctx.stroke();
      var ct= document.getElementById('myChart').getContext('2d');
      ct.beginPath();
      ct.moveTo(-Grid_Size*0.42,-25*0.6);
      ct.lineTo(Grid_Size*0.42,25*0.6);
      ct.moveTo(-Grid_Size*0.22,25*0.26);
      ct.lineTo(Grid_Size*0.22,-25*0.26);
      ct.closePath();
      ct.strokeStyle= "red";
      ct.stroke();
      ctx.beginPath();
      ctx.ellipse(0,0,Grid_Size*(1/2),25*(1/2),-0.5, 0, 2 * Math.PI);
      ctx.strokeStyle="black";
      ctx.stroke();
      ct.beginPath();
      ct.moveTo(-Grid_Size*0.42,25*0.6);
      ct.lineTo(Grid_Size*0.42,-25*0.6);
      ct.moveTo(-Grid_Size*0.22,-25*0.26);
      ct.lineTo(Grid_Size*0.22,25*0.26);
      ct.closePath();
      ct.stroke();
      previous_x=x;
    }  
    else if (x==="T3")
    {
      if(previous_x==="T2")
        {
          ctx.clearRect(-Grid_Size* y_axis_distance_grid_lines,-25*x_axis_distance_grid_lines,canvas.width,canvas.height);
          ctx.translate(-Grid_Size* y_axis_distance_grid_lines,-25*x_axis_distance_grid_lines);          
        }
        else
        {
          ctx.clearRect(-Grid_Size* y_axis_distance_grid_lines,-Grid_Size*x_axis_distance_grid_lines,canvas.width,canvas.height);     
          ctx.translate(-Grid_Size* y_axis_distance_grid_lines,-Grid_Size*x_axis_distance_grid_lines);
        }
      script();
      document.getElementById("t1").value=0;
      document.getElementById("t2").value=0;
      document.getElementById("t3").value=0;
      document.getElementById("t4").value=0;
      document.getElementById("t5").value=1;
      document.getElementById("t6").value=0;
      document.getElementById("t7").value=2;
      document.getElementById("t8").value=0;
      document.getElementById("t9").value=0;
      document.getElementById("t10").value=1;
      document.getElementById("t11").value=0;
      document.getElementById("t12").value=2;
      ctx.beginPath();
      ctx.arc(Grid_Size *0,-Grid_Size * 0,Grid_Size *(1/2), 0, Math.PI * 2, true);
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(Grid_Size *0,-Grid_Size * 0, Grid_Size *(2/2), 0, Math.PI * 2, true);
      ctx.strokeStyle= "red";
      ctx.stroke();
      previous_x=x;
    }  
    else
    {
      if(previous_x==="T2")
        {
          ctx.clearRect(-Grid_Size* y_axis_distance_grid_lines,-25*x_axis_distance_grid_lines,canvas.width,canvas.height);
          ctx.translate(-Grid_Size* y_axis_distance_grid_lines,-25*x_axis_distance_grid_lines);          
        }
        else
        {
          ctx.clearRect(-Grid_Size* y_axis_distance_grid_lines,-Grid_Size*x_axis_distance_grid_lines,canvas.width,canvas.height);     
          ctx.translate(-Grid_Size* y_axis_distance_grid_lines,-Grid_Size*x_axis_distance_grid_lines);
        }
      script();
      document.getElementById("t1").value=2;
      document.getElementById("t2").value=1;
      document.getElementById("t3").value=0;
      document.getElementById("t4").value=0;
      document.getElementById("t5").value=2;
      document.getElementById("t6").value=0.5;
      document.getElementById("t7").value=1;
      document.getElementById("t8").value=0;
      document.getElementById("t9").value=0.5;
      document.getElementById("t10").value=1;
      document.getElementById("t11").value=0;
      document.getElementById("t12").value=1;
      ctx.beginPath();
      ctx.ellipse(Grid_Size*2,-Grid_Size*1,Grid_Size*(2/2),Grid_Size*(1/2),-0.5, 0, 2 * Math.PI);
      ctx.stroke();
       ctx.beginPath();
       ctx.ellipse(Grid_Size*2,-Grid_Size*1,0,Grid_Size*(1/2),-0.5, 0, 2 * Math.PI);
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse(Grid_Size*2,-Grid_Size*1,Grid_Size*(2/2),0,-0.5, 0, 2 * Math.PI);
       ctx.stroke();
       ctx.beginPath();
      ctx.arc(Grid_Size *0,-Grid_Size * 0, Grid_Size *(1/2), 0, Math.PI * 2, true);
      ctx.strokeStyle= "red";
      ctx.stroke();
      previous_x=x;
    }  
}
function Generate_For_T2_Dataset()
{
  ctx.clearRect(-Grid_Size* y_axis_distance_grid_lines,-25*x_axis_distance_grid_lines,canvas.width,canvas.height);
    ctx.translate(-Grid_Size* y_axis_distance_grid_lines,-25*x_axis_distance_grid_lines);
    script_for_T2_dataset();
  var value1=document.getElementById("t1").value;
  var value2=document.getElementById("t2").value;
  var value3=document.getElementById("t3").value;
  var value4=document.getElementById("t4").value;
  var value5=document.getElementById("t5").value;
  var value6=document.getElementById("t6").value;
  var value7=document.getElementById("t7").value;
  var value8=document.getElementById("t8").value;
  var value9=document.getElementById("t9").value;
  var value10=document.getElementById("t10").value;
  var value11=document.getElementById("t11").value;
  var value12=document.getElementById("t12").value;
  var digit= /^\d+$/;
  if((value1!==="" && value1.match(digit)) ||(value2!==="" && value2.match(digit)) ||(value3!==="" && value3.match(digit)) ||(value4!==="" && value4.match(digit)) ||(value5!==="" && value5.match(digit)) ||(value6!==="" && value6.match(digit)) ||(value7!==="" && value7.match(digit)) ||(value8!==="" && value8.match(digit)) ||(value9!==="" && value9.match(digit)) ||(value10!==="" && value10.match(digit)) ||(value11!==="" && value11.match(digit)) ||(value12!==="" && value12.match(digit)) )
  {
   //condition to check whether circle is to be drawn or ellipse.For that the values of major and minor axis is compared.If equal then it is circle otherwise it is ellipse
   //for class 1
   if (value5===value10 && value5===1)
   {
    load();
   }
   else if(value5===value10 && value5>'0')
   {
    ctx.beginPath();
    ctx.arc(Grid_Size *value1,-25 * value2,Grid_Size *(value5/2), 0, Math.PI * 2, true);
    ctx.stroke();
   }
   else
   {
   //for ellipse
   if (value9===0 && value6===0)
   {
      if(value5<value10)
      {
        ctx.beginPath();
        ctx.ellipse(Grid_Size*value1,-25*value2,Grid_Size*(value10/2),25*(value5/2),0, 0, 2 * Math.PI);
        ctx.stroke();
      }
      else
      {
       ctx.beginPath();
       ctx.ellipse(Grid_Size*value1,-25*value2,Grid_Size*(value5/2),25*(value10/2),0, 0, 2 * Math.PI);
       ctx.stroke();
     
      }
   }
   else if(value9===0)
   {
    if(value5>value10)
     {
      ctx.beginPath();
      ctx.ellipse(Grid_Size*value1,-25*value2,Grid_Size*(value10/2),25*(value5/2),0, 0, 2 * Math.PI);
      ctx.stroke();
     }
     else
      {
       ctx.beginPath();
       ctx.ellipse(Grid_Size*value1,-25*value2,Grid_Size*(value10/2),25*(value5/2),-value6, 0, 2 * Math.PI);
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse(Grid_Size*value1,-25*value2,0,25*(value5/2),-value6, 0, 2 * Math.PI);
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse(Grid_Size*value1,-25*value2,Grid_Size*(value10/2),0,-value6, 0, 2 * Math.PI);
       ctx.stroke();
     }
   }
   else if (value6===0)
   {
    if(value5<value10)
    {
      ctx.beginPath();
      ctx.ellipse(Grid_Size*value1,-25*value2,Grid_Size*(value5/2),25*(value10/2),0, 0, 2 * Math.PI);
      ctx.stroke();
    }
    else
    {
       ctx.beginPath();
       ctx.ellipse(Grid_Size*value1,-25*value2,Grid_Size*(value10/2),25*(value5/2),-value9, 0, 2 * Math.PI);
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse(Grid_Size*value1,-25*value2,0,25*(value5/2),-value9, 0, 2 * Math.PI);
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse(Grid_Size*value1,-25*value2,Grid_Size*(value10/2),0,-value9, 0, 2 * Math.PI);
       ctx.stroke();
    }
   }
   else
   {
     if(value6===value9)
     {
      if(value10>value5)
       {
        ctx.beginPath();
        ctx.ellipse(Grid_Size*value1,-25*value2,Grid_Size*(value10/2),25*(value5/2),-value9, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.beginPath();
       ctx.ellipse(Grid_Size*value1,-25*value2,0,25*(value5/2),-value9, 0, 2 * Math.PI);
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse(Grid_Size*value1,-25*value2,Grid_Size*(value10/2),0,-value9, 0, 2 * Math.PI);
       ctx.stroke();
       }
       else
       {
        ctx.beginPath();
        ctx.ellipse(Grid_Size*value1,-25*value2,Grid_Size*(value5/2),25*(value10/2),-value9, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.beginPath();
       ctx.ellipse(Grid_Size*value1,-25*value2,0,25*(value10/2),-value9, 0, 2 * Math.PI);
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse(Grid_Size*value1,-25*value2,Grid_Size*(value5/2),0,-value9, 0, 2 * Math.PI);
       ctx.stroke();
       }
       
     }
     else
     {
       if(value5>value10)
       {
        ctx.beginPath();
        ctx.ellipse(Grid_Size*value1,-25*value2,Grid_Size*(value10/2),25*(value5/2),-value9, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.beginPath();
       ctx.ellipse(Grid_Size*value1,-25*value2,0,25*(value5/2),-value9, 0, 2 * Math.PI);
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse(Grid_Size*value1,-25*value2,Grid_Size*(value10/2),0,-value9, 0, 2 * Math.PI);
       ctx.stroke(); 
       }
       else
       {
         ctx.beginPath();
        ctx.ellipse(Grid_Size*value1,-25*value2,Grid_Size*(value5/2),25*(value10/2),value6, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.beginPath();
       ctx.ellipse(Grid_Size*value1,-25*value2,0,25*(value10/2),value6, 0, 2 * Math.PI);
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse(Grid_Size*value1,-25*value2,Grid_Size*(value5/2),0,value6, 0, 2 * Math.PI);
       ctx.stroke(); 
       }
     }
   }
   }
   //for Class2 
   if (value7===value12 && value7===1)
   {
    load();
   }
   else if(value7===value12 && value7>'0')
   {
    ctx.beginPath();
    ctx.arc(Grid_Size *value3,-25 * value4,Grid_Size *(value7/2), 0, Math.PI * 2, true);
    ctx.strokeStyle= "red";
    ctx.stroke();
   }
   else
   {
    //for ellipse
   if (value8===0 && value11===0)
   {
      if(value7<value12)
      {
        ctx.beginPath();
        ctx.ellipse(Grid_Size*value3,-25*value4,Grid_Size*(value12/2),25*(value7/2),0, 0, 2 * Math.PI);
        ctx.strokeStyle= "red";
        ctx.stroke();
      }
      else
      {
       ctx.beginPath();
       ctx.ellipse(Grid_Size*value3,-25*value4,Grid_Size*(value7/2),25*(value12/2),0, 0, 2 * Math.PI);
       ctx.strokeStyle= "red";
       ctx.stroke();
     
      }
   }
   else if(value11===0)
   {
    if(value7>value12)
     {
      ctx.beginPath();
      ctx.ellipse(Grid_Size*value3,-25*value4,Grid_Size*(value12/2),25*(value7/2),0, 0, 2 * Math.PI);
      ctx.strokeStyle= "red";
      ctx.stroke();
     }
     else
     {
       ctx.beginPath();
       ctx.ellipse(Grid_Size*value3,-25*value4,Grid_Size*(value12/2),25*(value7/2),-value8, 0, 2 * Math.PI);
       ctx.strokeStyle= "red";
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse(Grid_Size*value3,-25*value4,0,25*(value7/2),-value8, 0, 2 * Math.PI);
       ctx.strokeStyle= "red";
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse(Grid_Size*value3,-25*value4,Grid_Size*(value12/2),0,-value8, 0, 2 * Math.PI);
       ctx.strokeStyle= "red";
       ctx.stroke();
     }
   }
   else if (value8===0)
   {
    if(value7<value12)
    {
      ctx.beginPath();
      ctx.ellipse(Grid_Size*value3,-25*value4,Grid_Size*(value7/2),25*(value12/2),0, 0, 2 * Math.PI);
      ctx.stroke();
    }
    else
    {
       ctx.beginPath();
       ctx.ellipse(Grid_Size*value3,-25*value4,Grid_Size*(value12/2),25*(value7/2),-value11, 0, 2 * Math.PI);
       ctx.strokeStyle= "red";
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse(Grid_Size*value3,-25*value4,0,25*(value7/2),-value11, 0, 2 * Math.PI);
       ctx.strokeStyle= "red";
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse(Grid_Size*value3,-25*value4,Grid_Size*(value12/2),0,-value11, 0, 2 * Math.PI);
       ctx.strokeStyle= "red";
       ctx.stroke();
    }
   }
   else
   {
     if(value7>value12)
       {
        ctx.beginPath();
        ctx.ellipse(Grid_Size*value3,-25*value4,Grid_Size*(value12/2),25*(value7/2),-value11, 0, 2 * Math.PI);
        ctx.strokeStyle="red";
        ctx.stroke();
        ctx.beginPath();
       ctx.ellipse(Grid_Size*value3,-25*value4,0,25*(value7/2),-value11, 0, 2 * Math.PI);
       ctx.strokeStyle="red";
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse(Grid_Size*value3,-25*value4,Grid_Size*(value12/2),0,-value11, 0, 2 * Math.PI);
       ctx.strokeStyle="red";
       ctx.stroke(); 
       }
       else
       {
         ctx.beginPath();
        ctx.ellipse(Grid_Size*value3,-25*value4,Grid_Size*(value7/2),25*(value12/2),value8, 0, 2 * Math.PI);
        ctx.strokeStyle="red";
        ctx.stroke();
        ctx.beginPath();
       ctx.ellipse(Grid_Size*value3,-25*value4,0,25*(value12/2),value8, 0, 2 * Math.PI);
       ctx.strokeStyle="red";
        ctx.stroke();
       ctx.beginPath();
       ctx.ellipse(Grid_Size*value3,-25*value4,Grid_Size*(value7/2),0,value8, 0, 2 * Math.PI);
       ctx.strokeStyle="red";
        ctx.stroke(); 
       }
   }
   }

  }
}
function generate()
{
  var x=document.getElementById("s1").value;
  flag=1;
  if(x!==="T2")
  {
    ctx.clearRect(-Grid_Size* y_axis_distance_grid_lines,-Grid_Size*x_axis_distance_grid_lines,canvas.width,canvas.height);
    ctx.translate(-Grid_Size* y_axis_distance_grid_lines,-Grid_Size*x_axis_distance_grid_lines);
    script();
  var value1=document.getElementById("t1").value;
  var value2=document.getElementById("t2").value;
  var value3=document.getElementById("t3").value;
  var value4=document.getElementById("t4").value;
  var value5=document.getElementById("t5").value;
  var value6=document.getElementById("t6").value;
  var value7=document.getElementById("t7").value;
  var value8=document.getElementById("t8").value;
  var value9=document.getElementById("t9").value;
  var value10=document.getElementById("t10").value;
  var value11=document.getElementById("t11").value;
  var value12=document.getElementById("t12").value;
  var digit= /^\d+$/;
  if((value1!=="" && value1.match(digit)) ||(value2!=="" && value2.match(digit)) ||(value3!=="" && value3.match(digit)) ||(value4!=="" && value4.match(digit)) ||(value5!=="" && value5.match(digit)) ||(value6!=="" && value6.match(digit)) ||(value7!=="" && value7.match(digit)) ||(value8!=="" && value8.match(digit)) ||(value9!=="" && value9.match(digit)) ||(value10!=="" && value10.match(digit)) ||(value11!=="" && value11.match(digit)) ||(value12!=="" && value12.match(digit)) )
  {
   //condition to check whether circle is to be drawn or ellipse.For that the values of major and minor axis is compared.If equal then it is circle otherwise it is ellipse
   //for class 1
   if(value5===value10 && value5>'0' && value5!==1)
   {
    ctx.beginPath();
    ctx.arc(Grid_Size *value1,-Grid_Size * value2,Grid_Size *(value5/2), 0, Math.PI * 2, true);
    ctx.stroke();
   }
   else
   {
   //for ellipse
   if (value9===0 && value6===0)
   {
      if(value5<value10)
      {
        ctx.beginPath();
        ctx.ellipse(Grid_Size*value1,-Grid_Size*value2,Grid_Size*(value10/2),Grid_Size*(value5/2),0, 0, 2 * Math.PI);
        ctx.stroke();
      }
      else
      {
       ctx.beginPath();
       ctx.ellipse(Grid_Size*value1,-Grid_Size*value2,Grid_Size*(value5/2),Grid_Size*(value10/2),0, 0, 2 * Math.PI);
       ctx.stroke();
     
      }
   }
   else if(value9===0)
   {
    if(value5>value10)
     {
      ctx.beginPath();
      ctx.ellipse(Grid_Size*value1,-Grid_Size*value2,Grid_Size*(value10/2),Grid_Size*(value5/2),0, 0, 2 * Math.PI);
      ctx.stroke();
     }
     else
      {
       ctx.beginPath();
       ctx.ellipse(Grid_Size*value1,-Grid_Size*value2,Grid_Size*(value10/2),Grid_Size*(value5/2),-value6, 0, 2 * Math.PI);
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse(Grid_Size*value1,-Grid_Size*value2,0,Grid_Size*(value5/2),-value6, 0, 2 * Math.PI);
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse(Grid_Size*value1,-Grid_Size*value2,Grid_Size*(value10/2),0,-value6, 0, 2 * Math.PI);
       ctx.stroke();
     }
   }
   else if (value6===0)
   {
    if(value5<value10)
    {
      ctx.beginPath();
      ctx.ellipse(Grid_Size*value1,-Grid_Size*value2,Grid_Size*(value5/2),Grid_Size*(value10/2),0, 0, 2 * Math.PI);
      ctx.stroke();
    }
    else
    {
       ctx.beginPath();
       ctx.ellipse(Grid_Size*value1,-Grid_Size*value2,Grid_Size*(value10/2),Grid_Size*(value5/2),-value9, 0, 2 * Math.PI);
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse(Grid_Size*value1,-Grid_Size*value2,0,Grid_Size*(value5/2),-value9, 0, 2 * Math.PI);
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse(Grid_Size*value1,-Grid_Size*value2,Grid_Size*(value10/2),0,-value9, 0, 2 * Math.PI);
       ctx.stroke();
    }
   }
   else
   {
     if(value6===value9)
     {
      if(value10>value5)
       {
        ctx.beginPath();
        ctx.ellipse(Grid_Size*value1,-Grid_Size*value2,Grid_Size*(value10/2),Grid_Size*(value5/2),-value9, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.beginPath();
       ctx.ellipse(Grid_Size*value1,-Grid_Size*value2,0,Grid_Size*(value5/2),-value9, 0, 2 * Math.PI);
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse(Grid_Size*value1,-Grid_Size*value2,Grid_Size*(value10/2),0,-value9, 0, 2 * Math.PI);
       ctx.stroke();
       }
       else
       {
        ctx.beginPath();
        ctx.ellipse(Grid_Size*value1,-Grid_Size*value2,Grid_Size*(value5/2),Grid_Size*(value10/2),-value9, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.beginPath();
       ctx.ellipse(Grid_Size*value1,-Grid_Size*value2,0,Grid_Size*(value10/2),-value9, 0, 2 * Math.PI);
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse(Grid_Size*value1,-Grid_Size*value2,Grid_Size*(value5/2),0,-value9, 0, 2 * Math.PI);
       ctx.stroke();
       }
       
     }
     else
     {
       if(value5>value10)
       {
        ctx.beginPath();
        ctx.ellipse(Grid_Size*value1,-Grid_Size*value2,Grid_Size*(value10/2),Grid_Size*(value5/2),-value9, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.beginPath();
       ctx.ellipse(Grid_Size*value1,-Grid_Size*value2,0,Grid_Size*(value5/2),-value9, 0, 2 * Math.PI);
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse(Grid_Size*value1,-Grid_Size*value2,Grid_Size*(value10/2),0,-value9, 0, 2 * Math.PI);
       ctx.stroke(); 
       }
       else
       {
         ctx.beginPath();
        ctx.ellipse(Grid_Size*value1,-Grid_Size*value2,Grid_Size*(value5/2),Grid_Size*(value10/2),value6, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.beginPath();
       ctx.ellipse(Grid_Size*value1,-Grid_Size*value2,0,Grid_Size*(value10/2),value6, 0, 2 * Math.PI);
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse(Grid_Size*value1,-Grid_Size*value2,Grid_Size*(value5/2),0,value6, 0, 2 * Math.PI);
       ctx.stroke(); 
       }
     }
   }
   }
   //for Class2 
   if(value7===value12 && value7>'0' && value7!==1)
   {
    ctx.beginPath();
    ctx.arc(Grid_Size *value3,-Grid_Size * value4,Grid_Size *(value7/2), 0, Math.PI * 2, true);
    ctx.strokeStyle= "red";
    ctx.stroke();
   }
   else
   {
    //for ellipse
   if (value8===0 && value11===0)
   {
      if(value7<value12)
      {
        ctx.beginPath();
        ctx.ellipse(Grid_Size*value3,-Grid_Size*value4,Grid_Size*(value12/2),Grid_Size*(value7/2),0, 0, 2 * Math.PI);
        ctx.strokeStyle= "red";
        ctx.stroke();
      }
      else
      {
       ctx.beginPath();
       ctx.ellipse(Grid_Size*value3,-Grid_Size*value4,Grid_Size*(value7/2),Grid_Size*(value12/2),0, 0, 2 * Math.PI);
       ctx.strokeStyle= "red";
       ctx.stroke();
     
      }
   }
   else if(value11===0)
   {
    if(value7>value12)
     {
      ctx.beginPath();
      ctx.ellipse(Grid_Size*value3,-Grid_Size*value4,Grid_Size*(value12/2),Grid_Size*(value7/2),0, 0, 2 * Math.PI);
      ctx.strokeStyle= "red";
      ctx.stroke();
     }
     else
     {
       ctx.beginPath();
       ctx.ellipse(Grid_Size*value3,-Grid_Size*value4,Grid_Size*(value12/2),Grid_Size*(value7/2),-value8, 0, 2 * Math.PI);
       ctx.strokeStyle= "red";
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse(Grid_Size*value3,-Grid_Size*value4,0,Grid_Size*(value7/2),-value8, 0, 2 * Math.PI);
       ctx.strokeStyle= "red";
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse(Grid_Size*value3,-Grid_Size*value4,Grid_Size*(value12/2),0,-value8, 0, 2 * Math.PI);
       ctx.strokeStyle= "red";
       ctx.stroke();
     }
   }
   else if (value8===0)
   {
    if(value7<value12)
    {
      ctx.beginPath();
      ctx.ellipse(Grid_Size*value3,-Grid_Size*value4,Grid_Size*(value7/2),Grid_Size*(value12/2),0, 0, 2 * Math.PI);
      ctx.stroke();
    }
    else
    {
       ctx.beginPath();
       ctx.ellipse(Grid_Size*value3,-Grid_Size*value4,Grid_Size*(value12/2),Grid_Size*(value7/2),-value11, 0, 2 * Math.PI);
       ctx.strokeStyle= "red";
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse(Grid_Size*value3,-Grid_Size*value4,0,Grid_Size*(value7/2),-value11, 0, 2 * Math.PI);
       ctx.strokeStyle= "red";
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse(Grid_Size*value3,-Grid_Size*value4,Grid_Size*(value12/2),0,-value11, 0, 2 * Math.PI);
       ctx.strokeStyle= "red";
       ctx.stroke();
    }
   }
   else
   {
     if(value7>value12)
       {
        ctx.beginPath();
        ctx.ellipse(Grid_Size*value3,-Grid_Size*value4,Grid_Size*(value12/2),Grid_Size*(value7/2),-value11, 0, 2 * Math.PI);
        ctx.strokeStyle="red";
        ctx.stroke();
        ctx.beginPath();
       ctx.ellipse(Grid_Size*value3,-Grid_Size*value4,0,Grid_Size*(value7/2),-value11, 0, 2 * Math.PI);
       ctx.strokeStyle="red";
       ctx.stroke();
       ctx.beginPath();
       ctx.ellipse(Grid_Size*value3,-Grid_Size*value4,Grid_Size*(value12/2),0,-value11, 0, 2 * Math.PI);
       ctx.strokeStyle="red";
       ctx.stroke(); 
       }
       else
       {
         ctx.beginPath();
        ctx.ellipse(Grid_Size*value3,-Grid_Size*value4,Grid_Size*(value7/2),Grid_Size*(value12/2),value8, 0, 2 * Math.PI);
        ctx.strokeStyle="red";
        ctx.stroke();
        ctx.beginPath();
       ctx.ellipse(Grid_Size*value3,-Grid_Size*value4,0,Grid_Size*(value12/2),value8, 0, 2 * Math.PI);
       ctx.strokeStyle="red";
        ctx.stroke();
       ctx.beginPath();
       ctx.ellipse(Grid_Size*value3,-Grid_Size*value4,Grid_Size*(value7/2),0,value8, 0, 2 * Math.PI);
       ctx.strokeStyle="red";
        ctx.stroke(); 
       }
   }
   }

  }
}
else
{
  Generate_For_T2_Dataset();
}
}
function mark_all_points()
{
  var slider_value=document.getElementById("myRange").value;
  var x=document.getElementById("s1").value;
  load();
  if(x==="T2")
  {
    // Add behind elements.
    ctx.globalCompositeOperation = 'destination-over';
    ctx.fillStyle= "#A9A9A9";
    ctx.fillRect(-Grid_Size* y_axis_distance_grid_lines,-25*x_axis_distance_grid_lines,slider_value,canvas.height);
   var x_coordinate=(Number(-(Grid_Size* y_axis_distance_grid_lines))+Number(slider_value));
   ctx.fillStyle="#CD5C5C";
    ctx.fillRect(x_coordinate,-25*x_axis_distance_grid_lines,canvas.width,canvas.height);
  }
  else
  {
    // Add behind elements.
    ctx.globalCompositeOperation = 'destination-over';
    ctx.fillStyle= "#A9A9A9";
    ctx.fillRect(-Grid_Size* y_axis_distance_grid_lines,-Grid_Size*x_axis_distance_grid_lines,slider_value,canvas.height);
    var x_coordinate=(Number(-(Grid_Size* y_axis_distance_grid_lines))+Number(slider_value));
    ctx.fillStyle="#CD5C5C";
    ctx.fillRect(x_coordinate,-Grid_Size*x_axis_distance_grid_lines,canvas.width,canvas.height);
  }
}
function Clear()
{
  flag2=-1;
  if(flag===0)
    load();
  else(flag===1)
    generate();
}
var flag2=-1;
function markpoints(event)
{
  if(flag!==-1 && flag2===0)
  {
  var x_coordinate=event.clientX;
  var y_coordinate=event.clientY;
  var x=document.getElementById("s1").value;
  if(x==="T2")
  {
    x_coordinate=Number(x_coordinate)-310;
    y_coordinate=Number(y_coordinate)-225;
    if(x_coordinate%2===0)
     {
      ctx.fillStyle = "black";
      ctx.fillRect(x_coordinate,y_coordinate,10,10);
     }
    else
     {
      ctx.fillStyle = "red";
      ctx.fillRect(x_coordinate,y_coordinate,10,10); 
     }
  }
  else
  {
    x_coordinate=Number(x_coordinate)-310;
    y_coordinate=Number(y_coordinate)-380;
    if(x_coordinate%2===0)
     {
      ctx.fillStyle = "black";
      ctx.fillRect(x_coordinate,y_coordinate,10,10);
     }
    else
     {
      ctx.fillStyle = "red";
      ctx.fillRect(x_coordinate,y_coordinate,10,10); 
     }
  }
  }
}
function mark(event)
{
 flag2=0;
 markpoints(event);
}
function resize_axis() 
{
  var x=document.getElementById('s1').value;
  if(x==='T2')
  {
    ctx.clearRect(-Grid_Size* y_axis_distance_grid_lines,-25*x_axis_distance_grid_lines,Grid_Size* (Number(y_axis_distance_grid_lines)-1),canvas.height); 
   ctx.clearRect(-Grid_Size* y_axis_distance_grid_lines,25,canvas.width,canvas.height);
  }
  else
  {
   ctx.clearRect(-Grid_Size* y_axis_distance_grid_lines,-Grid_Size*x_axis_distance_grid_lines,Grid_Size* (Number(y_axis_distance_grid_lines)-1),canvas.height); 
   ctx.clearRect(-Grid_Size* y_axis_distance_grid_lines,Grid_Size,canvas.width,canvas.height);
  }
          
}
document.getElementById("b1").addEventListener('click',load);
document.getElementById("b5").addEventListener('click',generate);
document.getElementById("b3").addEventListener('click',mark_all_points);
document.getElementById("b4").addEventListener('click',Clear);
document.getElementById("b2").addEventListener('click',mark);
document.getElementById("b6").addEventListener('click',resize_axis);

