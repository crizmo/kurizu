import {
  Card,
  CardContent,
} from "./ui/card";
import Image from "next/image";

interface Props {
  title: string;
  image: string;
  onClick?: () => void;
}

export function DrawingCard({ title, image, onClick }: Props) {
  return (
    <Card className="flex flex-col overflow-hidden border border-gray-200 rounded-lg cursor-pointer" onClick={onClick}>
      <CardContent className="p-0">
        <Image
          src={image}
          alt={title}
          width={300}
          height={300}
          className="w-full h-auto rounded-md object-cover"
        />
      </CardContent>
    </Card>
  );
}