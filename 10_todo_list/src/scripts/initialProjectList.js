const initialProjectList = JSON.stringify([
  {
    id: 1111,
    name: "1. Odin Javascript",
    tasks: [
      {
        id: 101,
        name: "Library",
        isComplete: true,
        dueDate: new Date(
          new Date().setDate(new Date().getDate() - 88)
        ).toISOString(),
      },
      {
        id: 102,
        name: "TicTacToe",
        isComplete: true,
        dueDate: new Date(
          new Date().setDate(new Date().getDate() - 56)
        ).toISOString(),
      },
      {
        id: 103,
        name: "Restaurant Page",
        isComplete: true,
        dueDate: new Date(
          new Date().setDate(new Date().getDate() - 33)
        ).toISOString(),
      },
      {
        id: 104,
        name: "To Do List",
        isComplete: false,
        dueDate: new Date(
          new Date().setDate(new Date().getDate() - 7)
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
    name: "2. Garden",
    tasks: [
      { id: 201, name: "Plant tomatoes", isComplete: false, dueDate: null },
    ],
  },
]);

export default initialProjectList;
