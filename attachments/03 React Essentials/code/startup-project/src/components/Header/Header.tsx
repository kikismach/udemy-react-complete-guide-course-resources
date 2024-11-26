import './Header.css';

export default function Header() {
  const reactDescriptions = ["Fundamental", "Crucial", "Core"];

  function genRandomInt(maxIndex: number) {
    const randomValue = Math.random();
    const result = Math.floor(randomValue * (maxIndex + 1));
    return result;
  }

  const description = reactDescriptions[genRandomInt(2)];

  return (
    <header>
      <img src="./assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
