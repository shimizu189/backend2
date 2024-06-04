class Benutzer {
    constructor(id, name, email, rolle, passwort, erstellungsdatum) {
      this.id = id; // Eindeutige Kennung für jeden Benutzer
      this.name = name; // Name des Benutzers
      this.email = email; // E-Mail-Adresse des Benutzers
      this.rolle = rolle; // Rolle des Benutzers (z.B. Admin, Standardbenutzer)
      this.passwort = passwort; // Passwort des Benutzers
      this.erstellungsdatum = erstellungsdatum; // Datum, an dem der Benutzer erstellt wurde
    }
  }
  

