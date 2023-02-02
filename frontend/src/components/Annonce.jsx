/* eslint-disable react/prop-types */
import {
  BuildingOfficeIcon,
  CircleStackIcon,
  HomeModernIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import useGetFlag from "../hooks/annonces/useGetFlag";
import DeleteAnnonceConfirm from "./DeleteAnnonceConfirm";
import OverlayUpdate from "./OverlayUpdate";

function Annonce({ data }) {
  const { isLoading, isError, data: flag } = useGetFlag(data.pays);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const handleDeleteAnnonce = () => {
    setShowDeleteModal(true);
  };
  const handleUpdateAnnonce = () => {
    setOpenUpdate(true);
  };

  const handleCloseModal = () => setShowDeleteModal(false);
  return (
    <>
      <DeleteAnnonceConfirm
        showDeleteModal={showDeleteModal}
        onCloseModal={handleCloseModal}
        id={data.id}
      />
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
                {!isLoading && !isError && flag.length === 1 && (
                  <img
                    src={flag[0].flags.png}
                    alt="drapeau"
                    className="w-6 h-6 rounded-full"
                  />
                )}
                <h1 className="uppercase font-semibold text-xl">
                  {data.ville} -{" "}
                </h1>
                <h2>{data.titre}</h2>
              </div>
              <div>
                <div className="flex gap-4">
                  <div className="flex gap-2">
                    <CircleStackIcon className="w-6 h-6" />
                    <p>
                      {data.nb_pieces} {data.nb_pieces > 1 ? "pièces" : "pièce"}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    {data.id_type === 1 ? (
                      <BuildingOfficeIcon className="w-6 h-6" />
                    ) : (
                      <HomeModernIcon className="w-6 h-6" />
                    )}
                    <p>{data.surface} m2</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className="font-semibold text-2xl">
                Loyer : {data.prix_hc + data.prix_charges} €/mois
              </p>
            </div>
          </div>
          <div className="my-auto flex flex-col gap-4 mt-8 md:my-auto">
            <button
              type="button"
              className="inline-flex gap-2 justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400"
              onClick={handleUpdateAnnonce}
            >
              <PencilSquareIcon className="h-5 w-5" />
              Modifier l'annonce
            </button>
            <button
              type="button"
              className="inline-flex gap-2 justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              onClick={handleDeleteAnnonce}
            >
              <TrashIcon className="h-5 w-5" />
              Supprimer l'annonce
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Annonce;
