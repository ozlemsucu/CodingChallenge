// Importerar funktionen vi ska testa
const { generateTasks } = require('./index');

// Testar att taskId och dueDate är korrekt för varje uppgift
test('tasks have correct taskIds and dueDates', () => {
  const tasks = generateTasks("Test-Slug"); // Kör funktionen
  const currentYear = new Date().getFullYear(); // Hämtar aktuellt år

  // Loopar genom alla uppgifter
  for (let i = 0; i < tasks.length; i++) {
    // Kontroll att taskId har rätt format, t.ex. OBJ-2025-999-T01
    expect(tasks[i].taskId).toBe(`OBJ-${currentYear}-999-T0${i + 1}`);
  }

  // Kontroll att första datumet är dagens datum
  const today = new Date().toISOString().split("T")[0];
  expect(tasks[0].dueDate).toBe(today);
});
