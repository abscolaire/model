/*
// Charge l'API Google Sheets
gapi.load('client', initClient);

function initClient() {
    gapi.client.init({
        apiKey: 'AIzaSyD_ya3b15GAUiuXo--wyQ9Uz1wgHaJZd7U',
        discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
    }).then(function() {
        getDataFromGoogleSheets();
    });
}

function getDataFromGoogleSheets() {
    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: '1IJWbQ6pvlvE-Q8mlyYfoA5F2KsyQnsdyYMof8X89SqM',
        range: 'Data!A:B', // Modifier selon vos besoins
    }).then(function(response) {
        var data = response.result.values;

        if (data.length > 0) {
            displayPublipostages(data);
        } else {
            console.error('Aucune donnée trouvée.');
        }
    });
}

function displayPublipostages(data) {
    var container = document.getElementById('publipostages-container');

    data.forEach(function(row, index) {
        if (index > 0) {
            var publipostageHtml = `
                <div class="publipostage">
                    <h1>Confirmation de commande</h1>
                    <p>Cher ${row[0]},</p>
                    <p>Merci d'avoir passé une commande. Voici les détails de votre commande :</p>
                    <ul>
                        <li><strong>Produit :</strong> ${row[1]}</li>
                        <li><strong>Quantité :</strong> ${row[2]}</li>
                    </ul>
                    <p>Merci,</p>
                    <p>L'équipe de votre entreprise</p>
                </div>
            `;

            container.innerHTML += publipostageHtml;
        }
    });
}
*/

/*
document.addEventListener('DOMContentLoaded', function() {
    // Remplacez ces données factices par les vraies données de votre feuille Google Sheets
    var data = [
        ['Nom1', 'Produit1', '5'],
        ['Nom2', 'Produit2', '10'],
        // Ajoutez d'autres lignes de données au besoin
    ];

    displayPublipostages(data);
});

function displayPublipostages(data) {
    var container = document.getElementById('publipostages-container');

    data.forEach(function(row) {
        var publipostageHtml = `
            <div class="publipostage">
                <h1>Confirmation de commande</h1>
                <p>Cher ${row[0]},</p>
                <p>Merci d'avoir passé une commande. Voici les détails de votre commande :</p>
                <ul>
                    <li><strong>Produit :</strong> ${row[1]}</li>
                    <li><strong>Quantité :</strong> ${row[2]}</li>
                </ul>
                <p>Merci,</p>
                <p>L'équipe de votre entreprise</p>
            </div>
        `;

        container.innerHTML += publipostageHtml;
    });
}
*/
document.addEventListener('DOMContentLoaded', function() {
    gapi.load('client', initClient);
});

function initClient() {
    gapi.client.init({
        apiKey: 'AIzaSyD_ya3b15GAUiuXo--wyQ9Uz1wgHaJZd7U',
        discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
    }).then(function() {
        getDataFromGoogleSheets();
    });
}

function getDataFromGoogleSheets() {
    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: '1IJWbQ6pvlvE-Q8mlyYfoA5F2KsyQnsdyYMof8X89SqM',
        range: 'Data!A:C', // Modifier selon vos besoins
    }).then(function(response) {
        var data = response.result.values;

        if (data.length > 0) {
            displayPublipostages(data);
        } else {
            console.error('Aucune donnée trouvée.');
        }
    });
}

function displayPublipostages(data) {
    var container = document.getElementById('publipostages-container');

    data.forEach(function(row, index) {
        if (index > 0) {
            var publipostageHtml = `
                <div class="publipostage">
                    <h1>Confirmation de commande</h1>
                    <p>Cher ${row[0]},</p>
                    <p>Merci d'avoir passé une commande. Voici les détails de votre commande :</p>
                    <ul>
                        <li><strong>Produit :</strong> ${row[1]}</li>
                        <li><strong>Quantité :</strong> ${row[2]}</li>
                    </ul>
                    <p>Merci,</p>
                    <p>L'équipe de votre entreprise</p>
                </div>
            `;

            container.innerHTML += publipostageHtml;
        }
    });
}
