import Image from "next/image";
import Link from "next/link";


type ProductCardProps = {
  images: { large: string }[];
  title: string;
  subtitle: string;
  description: string | undefined;
  link: string;
  width: number;
  height: number;
  alt: string;
};

export function ProductCard({
  images,
  title,
  subtitle,
  description,
  link,
  width,
  height,
  alt,
}: ProductCardProps) {
  const updatedImages = images.map((i) => {
    const hasMoreImage = i.large.search("foto2");
    return {
      ...i,
      large: hasMoreImage ? i.large.replace("http://localhost:1111", "https://api-play-magia-production.up.railway.app") : ''
    }
  });

  console.log(updatedImages)
  return (
    <li className="w-[25%] list-none rounded-md relative  transition-all duration-300 hover:-translate-y-[3%]">
      <div className="w-full h-[300px] rounded-t-md overflow-hidden">
        {updatedImages.map((image, index) => (
          <Image
            key={index}
            src={image.large}
            alt={alt}
            width={width}
            height={height}
            className="w-full h-full object-cover rounded-t-md"
          />
        ))}
      </div>

      <div className="w-full p-4 bg-white rounded-b-md">
        <h2 className="text-xl font-semibold">{title}</h2>
        <h3 className="text-sm font-bold">{subtitle}</h3>
        <p className="my-2 text-sm text-gray-900 font-light">{description}</p>
        <button className="w-1/2 py-2 mt-2 border bg-[#444A19] text-white rounded-md cursor-pointer transition-colors">
          <Link href={link} className="block w-full text-center font-light">
            Saiba mais
          </Link>
        </button>
      </div>
    </li>
  );
}
