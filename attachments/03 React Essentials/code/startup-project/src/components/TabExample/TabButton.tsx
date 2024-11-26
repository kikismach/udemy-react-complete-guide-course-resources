export default function TabButton({ children, onSelect, isSelected }: any) {
  function handleClick() {
    onSelect();
  }

  return (
    <li>
      <button
        onClick={handleClick}
        className={isSelected ? "active" : undefined}
      >
        {children}
      </button>
    </li>
  );
}
