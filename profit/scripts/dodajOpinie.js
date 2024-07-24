document.addEventListener("DOMContentLoaded", function() {
    const dodajOpinieButton = document.getElementById("dodaj-opinie-button");
    const formularzOpinii = document.getElementById("formularz-opinii");
    const formularz = document.getElementById("formularz");
    const opinieContainer = document.getElementById("opinie-container");

    dodajOpinieButton.addEventListener("click", function() {
        formularzOpinii.style.display = "block";
    });

    formularz.addEventListener("submit", function(event) {
        event.preventDefault();

        const imie = document.getElementById("imie").value;
        const ocena = document.getElementById("ocena").value;
        const opinia = document.getElementById("opinia").value;
        const data = new Date().toLocaleDateString(); // Aktualna data

        // Zapisz opinię do localStorage
        const opiniaObj = { imie: imie, ocena: ocena, opinia: opinia, data: data };
        zapiszOpinieLocalStorage(opiniaObj);

        // Wyświetl nową opinię na stronie
        dodajOpinieNaStronie(imie, ocena, opinia, data);

        // Resetuj formularz
        formularz.reset();

        // Ukryj formularz
        formularzOpinii.style.display = "none";
    });

    // Funkcja do zapisywania opinii do localStorage
    function zapiszOpinieLocalStorage(opinia) {
        let opinie = JSON.parse(localStorage.getItem('opinie')) || [];
        opinie.push(opinia);
        localStorage.setItem('opinie', JSON.stringify(opinie));
    }

    // Funkcja do dodawania opinii na stronie
    function dodajOpinieNaStronie(imie, ocena, opinia, data) {
        // Konwertowanie oceny na gwiazdki
        let gwiazdkiHTML = '';
        for (let i = 0; i < ocena; i++) {
            gwiazdkiHTML += '&#9733;'; // Dodajemy gwiazdkę
        }
    
        const nowaOpiniaHTML = `
            <div class="opinion">
                <div class="opinia-content">
                    <div class="opinia-left">
                        <h3>${imie}</h3>
                    </div>
                    <div class="opinia-right">
                        <div class="opinia-data">${data}</div>
                    </div>
                </div>
                <div class="rating">
                    ${gwiazdkiHTML} <!-- Wyświetlamy gwiazdki zamiast liczby oceny -->
                </div>
                <p>"${opinia}"</p>
            </div>
        `;
        opinieContainer.insertAdjacentHTML("afterbegin", nowaOpiniaHTML);

    }

    // Funkcja do odczytywania opinii z localStorage
    function odczytajOpinieZLocalStorage() {
        const opinie = JSON.parse(localStorage.getItem('opinie')) || [];
        opinie.forEach(opinia => {
            dodajOpinieNaStronie(opinia.imie, opinia.ocena, opinia.opinia, opinia.data);
        });
    }

    // Wywołanie funkcji odczytującej opinie z localStorage
    odczytajOpinieZLocalStorage();
    
});