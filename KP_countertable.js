/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function splitByLine(){
     var text =document.getElementById('txtarea').value.replace(/\r\n|\r|\t/g,"\n");
     var lines =text.split('\n');
     var outArray=new Array();
     
     for(var i=0;i<lines.length;i++){
        if(lines[i]==''){
           continue;
        }
        outArray.push(lines[i]);
     }
     
     var sorta=[];
     var daburi=[];
     var flag;
     for(var i=0; i<outArray.length;i++){
       flag=true;
       for(var j=0;j<sorta.length;j++){
       if(outArray[i]===sorta[j]){
          flag=false;
          daburi[j]=daburi[j]+1;
       }
       }
       if(flag){
          sorta.push(outArray[i]);
          daburi[j]=1
          }
       }
       var sortaful=new Array();
       for(var i=0;i<sorta.length;i++){
          sortaful[i]=new Array();
          sortaful[i][0]=sorta[i];
          sortaful[i][1]=daburi[i];
       }
       sortaful.sort(function(a,b){
          if(a[1]>b[1]) return -1;
          if(a[1]<b[1]) return 1;
          return 0;
       });
       
       document.getElementById("output").innerHTML="";
       var stylestr="<style type=\"text/css\">table.tableizer-table {font-size: 12px;border: 1px solid #CCC; font-family: Arial, Helvetica, sans-serif;} .tableizer-table td {padding: 4px;margin: 3px;border: 1px solid #CCC;}.tableizer-table th {background-color: #104E8B; color: #FFF;font-weight: bold;}</style>";
       var tablestylestr_front="<table class=\"tableizer-table\"><thead><tr class=\"tableizer-firstrow\"><th>ポケモン名</th><th>KP</th></tr></thead><tbody>";
       var tablestylestr_back="</tbody></table>";
       var tabletag_tr_str_front="<tr>";
       var tabletag_tr_str_back="</tr>";
       var tabletag_td_str_front="<td>";
       var tabletag_td_str_back="</td>";
       var KPcountertable_STR="";
       KPcountertable_STR=KPcountertable_STR+stylestr+tablestylestr_front;
       for(var i=0;i<sorta.length;i++){
         KPcountertable_STR=KPcountertable_STR+tabletag_tr_str_front+tabletag_td_str_front+sortaful[i][0]+tabletag_td_str_back+tabletag_td_str_front+sortaful[i][1]+tabletag_td_str_back+tabletag_tr_str_back;
         document.getElementById("output").innerHTML=document.getElementById("output").innerHTML+"<br>"+sortaful[i][0]+";"+sortaful[i][1];  
       }
       KPcountertable_STR=KPcountertable_STR+tablestylestr_back;
       document.getElementById("KP_txtarea").innerHTML=document.getElementById("KP_txtarea").innerHTML+KPcountertable_STR;
       }

       