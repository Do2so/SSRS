const express = require('express');
const app = express();
const path = require('path');

// Route pour servir le fichier HTML
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Route pour générer le rapport avec un paramètre
app.get('/rapport', (req, res) => {
    const paramValue = req.query.param1 || 'Dosso'; // Valeur par défaut si aucun paramètre n'est fourni
    const reportUrl = `http://desktop-859f20o/ReportServer?/NodeJsReports/DepensesTest&rs:Format=PDF&param=${paramValue}`;

    // Rediriger vers l'URL du rapport
    res.redirect(reportUrl);
});

// Démarrage du serveur
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Serveur démarré : http://localhost:${PORT}/`);
});
