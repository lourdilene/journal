interface IPostProps {
    id: number | null;
    name: string;
    message: string;
    imageUrl: string | null;
    onDelete: (id: number | null) => void;
  }