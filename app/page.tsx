"use client";
import ImageCart from "@/component/ImageCart";
import Pagination from "@/component/Pagination";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

export default function Home() {
  const [images, setImages] = useState<File[]>([]);

  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;

  const handleUploadImage = () => {
    const fileInput = document.getElementById("image") as HTMLInputElement;
    if (fileInput.files) {
      const filesArray = Array.from(fileInput.files);
      setImages(filesArray);
      const formData = new FormData();
      formData.append("file", filesArray[0]);
      formData.append("upload_preset", uploadPreset as string);
      formData.append("cloud_name", cloudName as string);

      try {
        axios.post(
          `https://api.cloudinary.com/v1_1/${cloudName}/image/upload
                `,
          formData
        );
        fileInput.value = "";
        // console.log("Image uploaded successfully in Cloudinary");
      } catch (err) {
        if (err instanceof Error) {
          console.log("error", err.message);
        } else {
          console.log("An unknown error occurred");
        }
      }
    }
  };
  const handleDelete = (index: number) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
    console.log("Image deleted successfully", updatedImages);
    // Swal.fire({
    //   title: "Are you sure?",
    //   text: "You won't be able to revert this!",
    //   icon: "warning",
    //   showCancelButton: true,
    //   confirmButtonColor: "#3085d6",
    //   cancelButtonColor: "#d33",
    //   confirmButtonText: "Yes, delete it!",
    // }).then((result) => {
    //   if (result) {
    //     const updatedImages = images.filter((_, i) => i !== index);
    //     setImages(updatedImages);
    //     Swal.fire({
    //       title: "Deleted!",
    //       text: "Your file has been deleted.",
    //       icon: "success",
    //     });
    //   }
    // });
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfPastPost = indexOfLastPost - postsPerPage;
    const currentPosts = images?.slice(indexOfPastPost, indexOfLastPost);


  return (
    <>
      <div className="max-w-4xl container mx-auto px-4 sm:px-6 lg:px-8 bg-white py-16 h-auto">
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

        <ImageCart Img={currentPosts} handleDelete={handleDelete} />
        <Pagination totalPosts={images.length} postsPerPage={postsPerPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </>
  );
}
