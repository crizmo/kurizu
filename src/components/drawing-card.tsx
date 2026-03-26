import {
  Card,
  CardContent,
} from "./ui/card";
import Image from "next/image";
import { useState } from "react";

interface Props {
  title: string;
  image: string;
  onClick?: () => void;
}

export function DrawingCard({ title, image, onClick }: Props) {
  const [hasError, setHasError] = useState(false);

  const fallbackContent = (
    <div className="flex h-[300px] w-full items-center justify-center bg-gray-100 text-sm text-gray-500 dark:bg-gray-700 dark:text-gray-300">
      Image unavailable
    </div>
  );

  if (hasError) {
    return (
      <Card className="flex flex-col overflow-hidden border border-gray-200 rounded-lg cursor-pointer" onClick={onClick}>
        <CardContent className="p-0">{fallbackContent}</CardContent>
      </Card>
    );
  }

  return (
    <Card className="flex flex-col overflow-hidden border border-gray-200 rounded-lg cursor-pointer" onClick={onClick}>
      <CardContent className="p-0">
        <Image
          src={image}
          alt={title}
          width={300}
          height={300}
          className="w-full h-auto rounded-md object-cover"
          onError={() => setHasError(true)}
        />
      </CardContent>
    </Card>
  );
}