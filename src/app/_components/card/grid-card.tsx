import Image from "next/image";

interface IGridCardProps {
  img: string;
  title: string;
}

export default function GridCard(props: IGridCardProps) {
  const { img, title } = props;
  return (
    <div className="grid-card">
      <div className="grid-card-img-container">
        <Image height="64" width="64" src={img} alt={title} />
      </div>
      <div className="grid-card-title-container p-2">
        <p className="text-[#C0C0C0] text-center font-bricolage font-medium text-lg">
          {title}
        </p>
      </div>
    </div>
  );
}
