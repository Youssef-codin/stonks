import { Card } from "~/components/ui/card";
import brandLogo from '/Stonks-Guy-PNG.webp'

export function StonksCard() {
  return (
    <Card className="border rounded-2xl">
      <div className="flex justify-center translate-x-8">
        <img src={brandLogo} className="h-78 w-75"></img>
      </div>
    </Card>
  );
}
