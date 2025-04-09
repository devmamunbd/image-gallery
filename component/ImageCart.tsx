import Image from "next/image";
// import { useState } from "react";

interface ImageCartProps {
  Img: File[];
  handleDelete: (index: number) => void;
}

export default function ImageCart({ Img, handleDelete }: ImageCartProps) {
//   const [image, setImage] = useState<File[]>(Img);


  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Img.map((image, index) => (
          <div key={index}>
            <Image
              className="rounded-md w-[200px] h-[200px] object-cover cursor-pointer"
              src={URL.createObjectURL(image as Blob)}
              alt={`Uploaded ${index}`}
              width={500}
              height={500}
            />
            <button
              onClick={() => handleDelete(index)}
              className="bg-blue-500 py-2 w-[200px] rounded-md mt-4 cursor-pointer"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
