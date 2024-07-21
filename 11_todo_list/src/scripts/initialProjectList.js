const initialProjectList = [
  {
    id: "1",
    name: "Odin Javascript",
    tasks: [
      {
        id: "1",
        name: "Library",
        isComplete: true,
        dueDate: new Date(
          new Date().setMonth(new Date().getMonth() - 2)
        ).toISOString(),
      },
      {
        id: "2",
        name: "TicTacToe",
        isComplete: true,
        dueDate: new Date(
          new Date().setMonth(new Date().getMonth() - 1)
        ).toISOString(),
      },
      {
        id: "3",
        name: "Restaurant Page",
        isComplete: true,
        dueDate: new Date(
          new Date().setMonth(new Date().getMonth() - 1)
        ).toISOString(),
      },
      {
        id: "4",
        name: "To Do List",
        isComplete: false,
        dueDate: new Date(
          new Date().setDate(new Date().getDate() + 7)
        ).toISOString(),
      },
      {
        id: "5",
        name: "Weather App",
        isComplete: false,
        dueDate: new Date(
          new Date().setMonth(new Date().getMonth() + 1)
        ).toISOString(),
      },
    ],
  },
  {
    id: "2",
    name: "Garden",
    tasks: [
      { id: "6", name: "Plant tomatoes", isComplete: false, dueDate: null },
    ],
  },
];

export default initialProjectList;
