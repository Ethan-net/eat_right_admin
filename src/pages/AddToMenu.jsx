import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import axios from "axios";
import loading from "../assets/loading.png";

export default function AddtoMenu() {
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loader, setLoader] = useState(false);
  const postURL = "https://eat-right-server.onrender.com/app/add_tomenu";
  // const postURL = "http://localhost:5000/app/add_tomenu";

  const [posted, setPosted] = useState({
    name: "",
    description: "",
    price: "",
    available: "",
    image: null,
  });
  const handlePost = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", posted.name);
    formData.append("description", posted.description);
    formData.append("price", posted.price);
    formData.append("image", posted.image);
    formData.append("available", posted.available);

    try {
      setLoader(true);
      const response = await axios.post(postURL, formData, {
        withCredentials: true,
      });

      setMessage(response.data.message);
      setLoader(false);
      console.log(response.data.message);
    } catch (error) {
      console.log("Full error:", error);
      setErrorMessage(error.response?.data.message);

      console.log(error.response?.data.message);
    } finally {
      setLoader(false);
    }
  };
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setPosted((prev) => ({
        ...prev,
        [name]: files[0],
      }));
    } else {
      setPosted((prev) => ({ ...prev, [name]: value }));
    }
  };

  return (
    <div className=" bg-zinc-800 p-20">
      <form onSubmit={handlePost} className="">
        <div className="space-y-12 ">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base/7  text-yellow-600 font-bold">
              Add To Menu List
            </h2>
            <p className="mt-1 text-sm/6 text-yellow-300">
              This information will be displayed on the main Website MenuList
              Page
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label className="block text-sm/6 font-medium text-yellow-500">
                  Food Item Name
                </label>
                <div className="mt-2">
                  <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-yellow-500">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      onChange={handleChange}
                      placeholder="Enter the Item You want to Display on the menu List"
                      className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                    />
                  </div>
                </div>
              </div>
              <div className="sm:col-span-4">
                <label className="block text-sm/6 font-medium text-yellow-500">
                  Price
                </label>
                <div className="mt-2">
                  <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-yellow-500">
                    <input
                      id="price"
                      name="price"
                      type="text"
                      onChange={handleChange}
                      className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-full">
                <label
                  htmlFor="about"
                  className="block text-sm/6 font-medium text-yellow-500"
                >
                  Description
                </label>
                <div className="mt-2">
                  <textarea
                    id="description"
                    name="description"
                    onChange={handleChange}
                    rows={3}
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-500 sm:text-sm/6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor=""
                  className="block text-sm/6 font-medium text-yellow-500"
                >
                  Availability
                </label>
                <div className="mt-2 grid grid-cols-1">
                  <select
                    id="available"
                    name="available"
                    autoComplete="country-name"
                    onChange={handleChange}
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-yellow-500 sm:text-sm/6"
                  >
                    <option>select</option>
                    <option>available</option>
                    <option>unavailable</option>
                  </select>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                  />
                </div>
              </div>

              <div className="col-span-full">
                <label className="block text-sm/6 font-medium text-yellow-500">
                  Food Item Image
                </label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-yellow-300 px-6 py-10">
                  <div className="text-center">
                    <PhotoIcon
                      aria-hidden="true"
                      className="mx-auto size-12 text-gray-300"
                    />
                    <div className="mt-4 flex text-sm/6 text-gray-600">
                      <label
                        htmlFor="image"
                        className="relative cursor-pointer rounded-md font-semibold text-yellow-600 focus-within:ring-2 focus-within:ring-yellow-600 focus-within:ring-offset-2 focus-within:outline-hidden hover:text-yellow-300"
                      >
                        <span>Upload a file</span>
                        <input
                          id="image"
                          name="image"
                          type="file"
                          className="sr-only"
                          onChange={handleChange}
                        />
                      </label>
                      <p className="pl-1 text-zinc-300">or drag and drop</p>
                    </div>
                    <p className="text-xs/5 text-zinc-300">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm/6 font-semibold text-yellow-200"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-yellow-500 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-yellow-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500"
          >
            Post Item
            {loader && (
              <img
                className="animate-spin w-4 inline"
                src={loading}
                alt="loader"
              />
            )}
          </button>
        </div>
        <div>
          {message ? (
            <p className="text-green-500">{message}</p>
          ) : (
            errorMessage && <p className="text-red-500">{errorMessage}</p>
          )}
        </div>
      </form>
    </div>
  );
}
