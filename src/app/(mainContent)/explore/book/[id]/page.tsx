interface BookPageProps {
  params: {
    id: string;
  };
}

export default function BookPage({ params }: BookPageProps) {
  return <div className="container mx-auto my-10 ">{params.id}</div>;
}
