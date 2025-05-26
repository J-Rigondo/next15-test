import { TriangleAlert } from 'lucide-react';

type InputErrorProps = {
  message?: string;
};

export default function InputError({ message }: InputErrorProps) {
  return (
    <div className="bg-destructive/15 text-destructive flex items-center gap-x-2 rounded-md p-2.5 text-sm">
      <TriangleAlert className="size-4" />
      <p>{message}</p>
    </div>
  );
}
