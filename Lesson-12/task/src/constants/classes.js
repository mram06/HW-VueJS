const classesList = [
  { id: 1, classTitle: "5-А" },
  { id: 2, classTitle: "6-Б" },
  { id: 3, classTitle: "7-В" },
  { id: 4, classTitle: "8-Г" },
  { id: 5, classTitle: "9-Д" },
  { id: 6, classTitle: "10-Е" },
  { id: 7, classTitle: "11-Ж" },
];
function getClassById(classId) {
  return classesList.find((_class) => _class.id == classId);
}
export { classesList, getClassById };
