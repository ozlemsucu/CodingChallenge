function generateTasks(objSlug) {
  const today = new Date();
  const currentYear = today.getFullYear();
  const objectiveNumber = "999"; // alltid 999 i detta test
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

    // Skapa nytt datum + (i * 2 dagar)
    const due = new Date();
    due.setDate(today.getDate() + (i * 2));
    const dueDate = due.toISOString().split("T")[0]; // yyyy-mm-dd

    tasks.push({
      taskId: taskId,
      title: titles[i],
      dueDate: dueDate
    });
  }

  return tasks;
}
