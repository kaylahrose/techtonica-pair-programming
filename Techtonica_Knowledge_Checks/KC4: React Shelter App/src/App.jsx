import AnimalCard from "./components/AnimalCard";
import "./styles.css";

export default function App() {
  let animalList = [
    {
      name: "Dog",
      url: "./pics/dog.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      name: "Cat",
      url: "./pics/cat.jpg",
      description:
        "Cat ipsum dolor sit amet, try to jump onto window and fall while scratching at wall climb into cupboard and lick the salt off rice cakes or cat sit like bread bury the poop bury it deep."
    },
    {
      name: "Squirrel",
      url: "./pics/squirrel.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
    },
    {
      name: "Rabbit",
      url: "./pics/rabbit.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
    },
    {
      name: "Deer",
      url: "./pics/deer.jpg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
    }
  ];

  return (
    <div className="App">
      {animalList.map((animal, index) => (
        <AnimalCard
          key={index}
          title={animal.name}
          imageUrl={animal.url}
          description={animal.description}
        />
      ))}
    </div>
  );
}
