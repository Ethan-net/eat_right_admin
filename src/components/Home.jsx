"use client";

import { useContext, useEffect, useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import Logo from "../assets/LOGO.png";
import { AuthContext } from "../context/ContextProvider";
import { FaUserCircle } from "react-icons/fa";
import axios from "axios";

import Sidebar from "./Sidebar";

import { StatCards } from "./DashboardCard";

export default function Home() {
  const { admin } = useContext(AuthContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [menuItem, setMenuItem] = useState([]);

  useEffect(() => {
    const getMenuItem = async () => {
      try {
        const response = await axios.get(
          "https://eat-right-server.onrender.com/app/getitems",
          {
            withCredentials: true,
          }
        );
        const itemsData = response.data.Item;

        setMenuItem(itemsData);
      } catch (error) {
        console.log(error);
      }
    };
    getMenuItem();
  }, []);

  const handleDeleteItem = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/app/deletemenu/${id}`,
        {
          withCredentials: true,
        }
      );
      setMenuItem((prevItems) => prevItems.filter((item) => item._id !== id));
      console.log(response.data);
      response;
    } catch (error) {
      console.log(error);
      console.log(error.data);
    }
  };

  return (
    <div className="  bg-zinc-800 h-screen ">
      <Sidebar />
      <StatCards />
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-yellow-400"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-2">
            <FaUserCircle size={20} color="#FFD700" />

            <p className="text-sm/6 font-semibold text-yellow-500">
              {admin.name}
            </p>
          </div>
        </nav>

        <Dialog
          open={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
          className="md:hidden"
        >
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            aria-hidden="true"
          />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-zinc-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <img alt="logo" src={Logo} className="h-8 w-auto" />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-yellow-300"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <Sidebar overrideVisibility />
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>

        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
        </div>
      </div>

      {/* // Table to display Items */}

      <div className="bg-white p-4 shadow w-[80vw] mx-auto rounded">
        <h2 className="text-lg font-bold mb-4">Food and Items For Order</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  NAME
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  PRICE
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  AVAILABILITY
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ACTION
                </th>
              </tr>
            </thead>
            {menuItem.map((items) => (
              <tbody
                key={items._id}
                className="bg-white divide-y divide-gray-200"
              >
                <tr>
                  <td className="px-6 py-4 text-sm">
                    <p>{items.name}</p>
                    <p className="text-xs text-gray-400">{items.description}</p>
                  </td>
                  <td className="px-6 py-4 text-sm">{items.price}</td>
                  <td className="px-6 py-4 text-sm text-green-500 flex items-center">
                    <svg
                      className="w-5 h-5 mr-1"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {items.available}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <div className="flex space-x-4">
                      <button className="text-blue-500 hover:text-blue-600 flex items-center">
                        <svg
                          className="w-5 h-5 mr-1"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                          />
                        </svg>
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteItem(items._id)}
                        className="text-red-500 hover:text-red-600 flex items-center"
                      >
                        <svg
                          className="w-5 h-5 mr-1"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}
