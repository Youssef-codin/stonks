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
    <div className="flex flex-row w-full h-14 pt-2 relative bg-neutral-100 dark:bg-neutral-800 " >
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={onChange}
        onSubmit={onSubmit}
      >
      </PlaceholdersAndVanishInput>
    </div>
  );
}
