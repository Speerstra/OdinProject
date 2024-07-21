const initialProjectList = [
  {
    id: 1111,
    name: "Odin Javascript",
    tasks: [
      {
        id: 101,
        name: "Library",
        isComplete: true,
        dueDate: new Date(
          new Date().setMonth(new Date().getMonth() - 2)
        ).toISOString(),
      },
      {
        id: 102,
        name: "TicTacToe",
        isComplete: true,
        dueDate: new Date(
          new Date().setMonth(new Date().getMonth() - 1)
        ).toISOString(),
      },
      {
        id: 103,
        name: "Restaurant Page",
        isComplete: true,
        dueDate: new Date(
          new Date().setMonth(new Date().getMonth() - 1)
        ).toISOString(),
      },
      {
        id: 104,
        name: "To Do List",
        isComplete: false,
        dueDate: new Date(
          new Date().setDate(new Date().getDate() + 7)
        ).toISOString(),
      },
      {
        id: 105,
        name: "Weather App",
        isComplete: false,
        dueDate: new Date(
          new Date().setMonth(new Date().getMonth() + 1)
        ).toISOString(),
      },
    ],
  },
  {
    id: 2222,
    name: "Garden",
    tasks: [
      { id: 201, name: "Plant tomatoes", isComplete: false, dueDate: null },
    ],
  },
];

export default initialProjectList;
