# QA Docs – Project 54

Detta repo innehåller testverktyg, dokumentation och scripts för QA-teamet i Project 54.

## Innehåll

- ✅ Automatisk testning med Jest
- 📦 `gas-local` för att testa Google Apps Script lokalt
- 🧪 Täckningsrapport via Codecov
- 🔄 GitHub Actions för testautomation
- 📚 Dokumentation via MkDocs (kommer i nästa steg)

## 🚀 GitHub Actions & testautomation

Detta repo innehåller automatiserad testning med Jest och rapportering till Codecov.

| Filnamn     | Syfte                                                                 |
|-------------|------------------------------------------------------------------------|
| `test.yml`  | Kör tester automatiskt och skickar testtäckning till Codecov vid push eller PR mot `main` |

### 🧪 Så här körs testerna automatiskt:

```bash
npm install
npm test
npm run coverage







