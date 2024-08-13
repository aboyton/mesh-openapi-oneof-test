import { Cat, Dog } from "./models";

export const pets: { [id: string]: Cat | Dog } = {
  "1": {
    name: "Fluffy",
    petType: "cat",
    color: "climber",
  },
  "2": {
    name: "Buddy",
    petType: "dog",
    age: "23",
  },
};
