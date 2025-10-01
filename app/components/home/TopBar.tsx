import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";

export const TopBar = () => {
  const placeholders = [
    "Search coins...",
    "What are we stonking today?…",
    "Coin or symbol…",
    "Search a coin… but not your life savings",
    "BTC, ETH, SOL..."
  ]

  const onChange = () => {

  }

  const onSubmit = () => {

  }

  return (
    <div className="flex p-2">
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={onChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}
