const subjects = [
  { id: 1, subject: "Математика" },
  { id: 2, subject: "Українська мова" },
  { id: 3, subject: "Англійська мова" },
  { id: 4, subject: "Фізика" },
  { id: 5, subject: "Хімія" },
  { id: 6, subject: "Біологія" },
  { id: 7, subject: "Історія" },
  { id: 8, subject: "Географія" },
  { id: 9, subject: "Література" },
  { id: 10, subject: "Інформатика" },
];
function getSubjectById(subjectId) {
  return subjects.find((subject) => subject.id == subjectId);
}
export { subjects, getSubjectById };
