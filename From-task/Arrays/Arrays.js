

// const members = [
//     { id: 1,name: "Hari", age: 25 ,palce: "Penukonda"},
//     { id: 2,name: "Harika", age: 22 ,palce: "banglore"},
//     { id: 3,name: "Rio", age: 18 ,palce: "Delhi"},
//     { id: 4,name: "Scotch", age: 12 ,palce: "Ananthapur"},
//     { id: 5,name: "Bharathi", age: 45 ,palce: "kadapa"},
//     { id: 6,name: "sai", age: 26 ,palce: "pulivendela"},
//     { id: 7,name: "Honey", age: 3 ,palce: "bansawadi"},
//     { id: 8,name: "Nagesh", age: 34 ,palce: "hindupur"},
//     { id: 9,name: "Megha", age: 30 ,palce: "darmavaram"},
//     { id: 10,name: "Huskey", age: 22 ,palce: "Penukonda"},
    
// ];
// drawTable(memebrs);
// function drawTable(members){
//     const table = document.createElement("table");

//     const thead = document.createElement("thead");
//     const tr = document.createElement("tr");

//     const thForId = document.createElement("th");
//     thForId.innerText = "Id";

//     const thForName = document.createElement("th");
//     thForName.innerText = "Name";

//     const thForAge = document.createElement("th");
//     thForAge.innerText = "Age";

//     const thForPlace = document.createElement("th");
//     thForPlace.innerText = "Place";

//     tr.append(thForId,thForName,thForAge,thForPlace);
//     thead.appendChild(tr);

//     table.appendChild(thead);

//     const tbody = document.createElement("tbody");
//     table.appendChild(tbody);

//     for (let member of members){
//        const tr = document.createElement("tr");

//        const tdForId = document.createElement("td");
//        tdForId.innerText = member.id;
//        tr.appendChild(tdForId)

//        const tdForName = document.createElement("td");
//        tdForId.innerText = member.name;
//        tr.appendChild(tdForName)

//        const tdForAge = document.createElement("td");
//        tdForId.innerText = member.age;
//        tr.appendChild(tdForAge)

//        const tdForPlace = document.createElement("td");
//        tdForId.innerText = member.place;
//        tr.appendChild(tdForPlace)
//        tbody.appendChild(tr);

//     }
//     result.innerText="",
//     result.appendChild(table);
    


// }