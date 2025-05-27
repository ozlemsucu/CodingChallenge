// Kopiera hit din generateTasks-funktion:
function generateTasks(objSlug) {
  const today = new Date();
  const currentYear = today.getFullYear();
  const objectiveNumber = "999";
  const tasks = [];

  const titles = [
    "Draft ICP Brief",
    "Define KPIs",
    "Research Target Market",
    "Outline Outreach Plan",
    "Prepare Presentation"
  ];

  for (let i = 0; i < 5; i++) {
    const taskId = `OBJ-${currentYear}-${objectiveNumber}-T0${i + 1}`;
    const due = new Date();
    due.setDate(today.getDate() + (i * 2));
    const dueDate = due.toISOString().split("T")[0];

    tasks.push({
      taskId,
      title: titles[i],
      dueDate
    });
  }

  return tasks;
}

// Kör funktionen:
const result = generateTasks("Test-Projekt");
console.log(result);
