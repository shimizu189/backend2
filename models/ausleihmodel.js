class Ausleihartikel {
    constructor(id, artikelnummer, titel, bild, beschreibung, anzahl, benutzerId) {
      this.id = id; // Eindeutige Kennung für jeden Ausleihartikel
      this.artikelnummer = artikelnummer; // Nummer des Artikels
      this.titel = titel; // Titel des Artikels
      this.bild = bild; // Bild des Artikels (optional)
      this.beschreibung = beschreibung; // Beschreibung des Artikels
      this.anzahl = anzahl; // Anzahl der verfügbaren Artikel
      this.benutzerId = benutzerId; // ID des Benutzers, dem der Artikel gehört oder der ihn verwaltet
    }
  }
  