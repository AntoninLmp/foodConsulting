import { Briefcase } from "lucide-react";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";

type ServiceCardProps = {
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  onClick?: () => void;
};

export default function ServiceCard({ icon: Icon = Briefcase, title, description, onClick }: ServiceCardProps) {
  return (
    <Card className="max-w-sm rounded-2xl shadow-md p-6 transition hover:shadow-lg hover:-translate-y-1 m-auto">
      <CardContent className="flex flex-col items-center text-center gap-4">
        <div className="bg-gray-200 text-black p-3 rounded-full">
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
        {onClick && <Button onClick={onClick}>En savoir plus</Button>}
      </CardContent>
    </Card>
  );
}
