/* eslint-disable jsx-a11y/anchor-is-valid */
import { Disclosure } from "@headlessui/react";
import {
  Bars4Icon,
  XMarkIcon,
  PlusSmallIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Overlay from "./Overlay";

function Navbar() {
  const [openOverlay, setOpenOverlay] = useState(false);
  return (
    <>
      <Overlay open={openOverlay} setOpen={setOpenOverlay} />
      <Disclosure as="nav" className="fixed top-0 w-full bg-white shadow">
        {({ open }) => (
          <>
            <div className="max-w-5xl mx-auto px-6 md:px-0">
              <div className="flex justify-between h-16">
                <div className="flex">
                  <div className="-ml-2 mr-2 flex items-center md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars4Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="flex-shrink-0 flex items-center">
                    <img
                      className="block lg:hidden h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                      alt="Workflow"
                    />
                    <img
                      className="hidden lg:block h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                      alt="Workflow"
                    />
                  </div>
                  <div className="hidden md:ml-6 md:flex md:space-x-8">
                    <Link
                      to="/"
                      className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    >
                      Annonces
                    </Link>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <button
                      type="button"
                      className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      onClick={() => setOpenOverlay(true)}
                    >
                      <PlusSmallIcon
                        className="-ml-1 mr-2 h-5 w-5"
                        aria-hidden="true"
                      />
                      <span>Louer mon bien</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="pt-2 pb-3 space-y-1">
                <Disclosure.Button
                  as="a"
                  href="/"
                  className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium sm:pl-5 sm:pr-6"
                >
                  Annonces
                </Disclosure.Button>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <main className="max-w-5xl mx-auto mt-20">
        <Outlet />
      </main>
    </>
  );
}

export default Navbar;
