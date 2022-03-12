var body = document.getElementsByTagName("body")[0]
var table = document.createElement("table")
table.setAttribute("class","_table")






for(var i = 0 ; i < 1; i++){
    var tr = document.createElement("tr")
   for(var j = 0 ; j < 4; j++){
       var th = document.createElement("th");
       th.innerHTML = "Rank"
       var th_2 = document.createElement("th");
       th_2.innerHTML = "Name"
       var th_3 = document.createElement("th");
       th_3.innerHTML = "Points"
       var th_4 = document.createElement("th");
       th_4.innerHTML = "Team"
     
   }
}
for(var i = 0 ; i < 1; i++){
    var tr_2 = document.createElement("tr")
   for(var j = 0 ; j < 4; j++){
    var td = document.createElement("td");
    td.innerHTML = "1"
    var td_2 = document.createElement("td");
    td_2.innerHTML = "Domenic"
    var td_3 = document.createElement("td");
    td_3.innerHTML = "88,110"
    var td_4 = document.createElement("td");
    td_4.innerHTML = "dcode"
  
}
}

for(var i = 0 ; i < 4; i++){
    var tr_3 = document.createElement("tr")
   for(var j = 0 ; j < 4; j++){
    var td_5 = document.createElement("td");
    td_5.innerHTML = "2"
    var td_6 = document.createElement("td");
    td_6.innerHTML = "Sally"
    var td_7 = document.createElement("td");
    td_7.innerHTML = "72,400"
    var td_8 = document.createElement("td");
    td_8.innerHTML = "Students"
  
}
}
for(var i = 0 ; i < 4; i++){
    var tr_4 = document.createElement("tr")
   for(var j = 0 ; j < 4; j++){
    var td_9 = document.createElement("td");
    td_9.innerHTML = "3"
    var td_10 = document.createElement("td");
    td_10.innerHTML = "Nick"
    var td_11 = document.createElement("td");
    td_11.innerHTML = "52,300"
    var td_12 = document.createElement("td");
    td_12.innerHTML = "dcode"
  
}
}





body.appendChild(table);
table.appendChild(tr)
table.appendChild(tr_2)
table.appendChild(tr_3)
table.appendChild(tr_4)


tr.appendChild(th)
tr.appendChild(th_2)
tr.appendChild(th_3)
tr.appendChild(th_4)

tr_2.appendChild(td)
tr_2.appendChild(td_2)
tr_2.appendChild(td_3)
tr_2.appendChild(td_4)

tr_3.appendChild(td_5)
tr_3.appendChild(td_6)
tr_3.appendChild(td_7)
tr_3.appendChild(td_8)

tr_4.appendChild(td_9)
tr_4.appendChild(td_10)
tr_4.appendChild(td_11)
tr_4.appendChild(td_12)

tr.setAttribute("id","_tr")
tr_2.setAttribute("id","_tr_2")
tr_3.setAttribute("id","_tr_3")
tr_4.setAttribute("id","_tr_4")

tr.setAttribute("class", "_tr_class")
td.setAttribute("class", "_td_class")
td_2.setAttribute("class", "_td_class")
td_3.setAttribute("class", "_td_class")
td_4.setAttribute("class", "_td_class")
td_5.setAttribute("class", "_td_class")
td_6.setAttribute("class", "_td_class")
td_6.setAttribute("class", "_td_class")
td_7.setAttribute("class", "_td_class")
td_8.setAttribute("class", "_td_class")
td_9.setAttribute("class", "_td_class")
td_10.setAttribute("class", "_td_class")
td_11.setAttribute("class", "_td_class")
td_12.setAttribute("class", "_td_class")






