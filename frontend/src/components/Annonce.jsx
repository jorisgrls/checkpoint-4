/* eslint-disable react/prop-types */
import { CircleStackIcon, HomeModernIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useDeleteAnnonce from "../hooks/annonces/useDeleteAnnonce";
import OverlayUpdate from "./OverlayUpdate";

function Annonce({ data }) {
  const [openUpdate, setOpenUpdate] = useState(false);
  const { mutate: deleteAnnonce } = useDeleteAnnonce();
  const handleDeleteAnnonce = () => {
    deleteAnnonce(data.id);
  };
  const handleUpdateAnnonce = () => {
    setOpenUpdate(true);
  };

  return (
    <>
      <OverlayUpdate open={openUpdate} setOpen={setOpenUpdate} data={data} />
      <div className="w-full flex flex-col md:flex-row gap-8 bg-white rounded-md shadow-md p-8 hover:shadow-lg my-6 items-center md:items-start">
        <Link to={`/annonces/${data.id}`}>
          <img
            src={data.url_image}
            alt={data.titre}
            className="w-96 h-44 rounded-md"
          />
        </Link>
        <div className="flex flex-col md:flex-row w-full justify-between my-auto">
          <div className="flex flex-col gap-8 my-auto items-center md:items-start">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <h1 className="uppercase font-semibold text-xl">
                  {data.ville} -{" "}
                </h1>
                <h2>{data.titre}</h2>
              </div>
              <div>
                <div className="flex gap-4">
                  <div className="flex gap-2">
                    <CircleStackIcon className="w-6 h-6" />
                    <p>{data.nb_pieces} pièces</p>
                  </div>
                  <div className="flex gap-2">
                    <HomeModernIcon className="w-6 h-6" />
                    <p>{data.surface} m2</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className="font-semibold text-2xl">
                Loyer : {data.prix_hc + data.prix_charges} €
              </p>
            </div>
          </div>
          <div className="my-auto flex flex-col gap-4 mt-8">
            <button
              type="button"
              className="inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
              onClick={handleUpdateAnnonce}
            >
              Modifier l'annonce
            </button>
            <button
              type="button"
              className="inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              onClick={handleDeleteAnnonce}
            >
              Supprimer l'annonce
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Annonce;
