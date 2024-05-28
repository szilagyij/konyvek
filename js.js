function main(){
    document.getElementById(`container`).innerHTML=""
    fetch("http://localhost:5000/Konyv")
    .then(function(datas) {
        return datas.json(); 
    })
    .then(function(datas) {
        console.log(datas);

        for (let i = 0; i < datas.length; i++) {
            document.getElementById("container").innerHTML += `<div class="card" style="width: 18rem;">
            <div class="card-body">
              <h6 class="card-subtitle mb-2 text-muted">Könyv neve: ${datas[i].nev}</h6>
              <p class="card-text">Kiadás éve: ${datas[i].kiadasEve}</p>
              <p class="card-text">Értékelés: ${datas[i].ertekeles}</p>
              <img src="${datas[i].kepneve}" class="img-fluid" onClick=More(${datas[i].id})>
              <a class="button" onClick=Edit(${datas[i].id})><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
              <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z"/>
            </svg></a>
              <a class="button" onClick=Delete(${datas[i].id})><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
              <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
            </svg></a>

            </div>
          </div>`
        }      
})
}

function Delete(id) {
    if(confirm("Biztosan törlöd?")) {
      fetch("http://localhost:5000/Konyv/"+id, {
          method: "DELETE",
          headers: {
            'Content-Type': 'application/json'
          }
        }).then(function() {
          location.reload()
        }).catch(error => {
            console.error('Hiba történt a kérés során:', error);
            alert('Hiba történt az adatok lekérése közben.');
        });
      }
  }



function More(id) {
    fetch(`http://localhost:5000/Konyv/${id}`)
    .then(function(datas) {
        return datas.json();
    })
    .then(function(data) {
        document.getElementById("container").innerHTML =`
        <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${data.id}</h5>
              <h6 class="card-subtitle mb-2 text-muted">Név: ${data.nev}</h6>
              <p class="card-text">Kiadás éve: ${data.kiadasEve}</p>
              <p class="card-text">Értékelés: ${data.ertekeles}</p>
              <img src="${data.kepneve}" class="img-fluid">
              <a class="button" onClick=Edit(${data.id})><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
              <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z"/>
            </svg></a>
              <a class="button" onClick=Delete(${data.id})><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
              <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
            </svg></a>
            <a class="button" onClick=main()><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-skip-backward" viewBox="0 0 16 16">
            <path d="M.5 3.5A.5.5 0 0 1 1 4v3.248l6.267-3.636c.52-.302 1.233.043 1.233.696v2.94l6.267-3.636c.52-.302 1.233.043 1.233.696v7.384c0 .653-.713.998-1.233.696L8.5 8.752v2.94c0 .653-.713.998-1.233.696L1 8.752V12a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5m7 1.133L1.696 8 7.5 11.367zm7.5 0L9.196 8 15 11.367z"/>
          </svg></a>
              </div>
              </div>
        `

    }).catch(error => {
        console.error('Hiba történt a kérés során:', error);
        alert('Hiba történt az adatok lekérése közben.');
    });
};
function NewBook(){
    let container= document.getElementById(`container`);
    container.innerHTML=""
    container.innerHTML+=`
    <div id="edit">
        <label>A könyv neve:</label>
        <input type="text" id="megadnev"><br>
        <label>Kiadás éve</label>
        <input type="number" id="megadev"><br>
        <label>Értékelése:</label>
        <input type="number" id="megadertekeles"><br>
        <label>Kép link</label>
        <input type="text" id="megadimg"><br>
        <button id="save">Mentés</button>
        <button id="Modositback" onClick="main()">Mégsem</button>
    </div>
    `


    document.getElementById("save").onclick = function() {
        if (document.getElementById(`megadnev`).value!=""&& document.getElementById(`megadev`).value!=""&&document.getElementById(`megadertekeles`).value!="" &&document.getElementById(`megadimg`).value!="") {
                let bodyForPost = JSON.stringify({ 
                    nev: document.getElementById("megadnev").value,
                    kiadasEve: document.getElementById("megadev").value,
                    ertekeles: document.getElementById("megadertekeles").value,
                    kepneve: document.getElementById("megadimg").value,
                })
            

                fetch("http://localhost:5000/Konyv", {
                        method: "POST",
                        body: bodyForPost,
                        headers: {
                            "Content-Type": "application/json"
                        }
                })
                .then(function() {
                        location.reload()
                }).catch(error => {
                        console.error('Hiba történt a kérés során:', error);
                        alert('Hiba történt az adatok lekérése közben.');
                });
        }
        else{
            alert("Mindent ki kell tölteni")
        }

    }
            
}




function Edit(id) {
    document.getElementById(`container`).innerHTML=""
    let szerkeszt = document.getElementById('modosit');
    szerkeszt.style.display = 'block';

        fetch(`http://localhost:5000/Konyv/${id}`)
        .then(function(datas) {
            return datas.json();
        })
        .then(function(data) {
            document.getElementById('megadnev').value = data.nev;
            document.getElementById('megadev').value = data.kiadasEve;
            document.getElementById('megadertekeles').value = data.ertekeles;
            document.getElementById('megadimg').value = data.kepneve;
        }).catch(error => {
            console.error('Hiba történt a kérés során:', error);
            alert('Hiba történt az adatok lekérése közben.');
        });

    document.getElementById('Modositfinal').addEventListener('click', () => {
        let bodyforput = JSON.stringify({
            id: Number(id),
            nev: document.getElementById('megadnev').value,
            kiadasEve: Number(document.getElementById('megadev').value),
            ertekeles: Number(document.getElementById('megadertekeles').value),
            kepneve: document.getElementById('megadimg').value
        });

 
        fetch(`http://localhost:5000/Konyv/`+id, {
            method: "PUT",
            body: bodyforput,
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(() => {
            location.reload();
        })
        .catch(error => {
            console.error('Hiba történt a módosítás során:', error);
            alert('Hiba történt a módosítás során.');
        });
    });

    document.getElementById('Modositback').addEventListener('click', () => {
        document.getElementById('modosit').style.display = 'none';
    });
}






main();