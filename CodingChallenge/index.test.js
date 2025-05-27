// Testar att varje uppgift har rätt taskId och datum
test('tasks have correct taskIds and dueDates', () => {
  const tasks = generateTasks("Test-Slug"); // Kör funktionen med ett testnamn
  const currentYear = new Date().getFullYear(); // Tar fram aktuellt år

  // Loopar genom alla 5 uppgifter
  for (let i = 0; i < tasks.length; i++) {
    // Jämför att varje taskId har rätt format, t.ex. OBJ-2025-999-T01
    expect(tasks[i].taskId).toBe(`OBJ-${currentYear}-999-T0${i + 1}`);
  }

  // Kollar att första uppgiftens datum är dagens datum
  expect(tasks[0].dueDate).toBe(new Date().toISOString().split("T")[0]);
});
