import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";

type PriceCardProps = {
  type: string;
  description: string;
  price: string;
  priceDescription: string;
  onClick?: () => void;
};

export default function PriceCard({ type, description, price, priceDescription, onClick }: PriceCardProps) {
  return (
    <Card className="max-w-sm rounded-2xl shadow-md p-6 transition hover:shadow-lg hover:-translate-y-1 m-auto text-white bg-[#286C91]">
      <CardContent className="flex flex-col items-center text-center gap-4">
        <h3 className="text-2xl font-semibold">Forfait {type}</h3>
        <p className="text-sm">{description}</p>
        <div className="flex items-end my-9">
            <p className="text-[4em] font-bold">{price}</p>
            <p className="text-xs text-gray-200 mb-4 pl-3">{priceDescription}</p>
        </div>
        {onClick && <Button onClick={onClick}>Je m'inscris</Button>}
      </CardContent>
    </Card>
  );
}
