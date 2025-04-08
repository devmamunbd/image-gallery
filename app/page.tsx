"use client";
import ImageCart from "@/component/ImageCart";
import { useState } from "react";

export default function Home() {
  const [images, setImages] = useState<unknown[]>([]);

  const handleUploadImage = () => {
    const fileInput = document.getElementById("image") as HTMLInputElement;
    if (fileInput.files) {
      const filesArray = Array.from(fileInput.files);
      setImages(filesArray);
    }
  };
  console.log(images);

  return (
    <>
      <div className="max-w-4xl container mx-auto px-4 sm:px-6 lg:px-8 bg-white py-16">
        <div className="py-6 flex justify-between items-center gap-5">
          <div>
            <h2 className="text-2xl text-black font-bold ">Image Gallery</h2>
          </div>
          <div className="flex gap-5 items-baseline-last">
            <input
              className="border-2 border-black rounded-md py-2 px-4 cursor-pointer"
              type="file"
              name="image"
              id="image"
              multiple
              onChange={(e) => e.target.value}
            />
            <button
              onClick={handleUploadImage}
              className="px-10 py-2 bg-blue-500 text-white font-bold rounded-md cursor-pointer"
            >
              Upload
            </button>
          </div>
        </div>


        <ImageCart Img={images} />
      </div>
    </>
  );
}
