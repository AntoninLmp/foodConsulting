import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase } from "lucide-react";

export default function ServiceCard({ icon: Icon = Briefcase, title, description, onClick }) {
  return (
    <Card className="max-w-sm rounded-2xl shadow-md p-6 transition hover:shadow-lg hover:-translate-y-1">
      <CardContent className="flex flex-col items-center text-center gap-4">
        <div className="bg-red-100 text-red-600 p-3 rounded-full">
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
        {onClick && <Button onClick={onClick}>En savoir plus</Button>}
      </CardContent>
    </Card>
  );
}
