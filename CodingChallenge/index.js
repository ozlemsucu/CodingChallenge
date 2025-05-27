// Denna funktion skapar 5 uppgifter i JSON-format
function generateTasks(objSlug) {
  const today = new Date(); // Dagens datum
  const currentYear = today.getFullYear(); // Nuvarande år, t.ex. 2025
  const objectiveNumber = "999"; // Enligt uppgiften är det alltid 999
  const tasks = []; // Tom lista där vi sparar uppgifterna

  // Lista med 5 uppgiftstitlar
  const titles = [
    "Draft ICP Brief",
    "Define KPIs",
    "Research Target Market",
    "Outline Outreach Plan",
    "Prepare Presentation"
  ];

  // Skapa 5 uppgifter med olika ID och datum
  for (let i = 0; i < 5; i++) {
    // Unikt ID i formatet OBJ-ÅÅÅÅ-999-T01 osv.
    const taskId = `OBJ-${currentYear}-${objectiveNumber}-T0${i + 1}`;

    // Skapa nytt datum: idag + (i * 2) dagar
    const due = new Date();
    due.setDate(today.getDate() + (i * 2));
    const dueDate = due.toISOString().split("T")[0]; // Format: YYYY-MM-DD

    // Lägg till uppgift i listan
    tasks.push({
      taskId,
      title: titles[i],
      dueDate
    });
  }

  return tasks; // Returnerar listan med uppgifter
}

// Exporterar funktionen så att den kan användas i testfilen
module.exports = { generateTasks };
