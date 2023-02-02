/* eslint-disable react/prop-types */
import React, { useState } from "react";
import {
  ChevronDownIcon,
  CircleStackIcon,
  HomeModernIcon,
  KeyIcon,
} from "@heroicons/react/24/outline";
import useGetAnnonceById from "../hooks/annonces/useGetAnnonceById";
import getGes from "../services/getGes";
import getDpe from "../services/getDpe";
import SkeletonAnnonce from "./SkeletonAnnonce";

function CompleteAnnonce({ id }) {
  const [openDropdownPrice, setOpenDropdownPrice] = useState(false);
  const { isLoading, isError, data } = useGetAnnonceById(id);
  if (isLoading) {
    return <SkeletonAnnonce />;
  }
  if (isError) {
    return <div>Erreur lors du chargement</div>;
  }
  return (
    <div className="w-full flex flex-col gap-8 bg-white rounded-md shadow-md p-8 mb-10">
      <div className="flex flex-col md:flex-row  gap-8">
        <img
          src={data[0].url_image}
          alt={data[0].titre}
          className="w-96 rounded-md"
        />
        <div className="flex w-full justify-between">
          <div className="flex flex-col gap-8 my-auto">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 items-center">
                <h1 className="uppercase font-semibold text-xl">
                  {data[0].ville} -{" "}
                </h1>
                <h2>{data[0].titre}</h2>
              </div>
            </div>
            <div>{data[0].description}</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="border border-gray-200 rounded-md p-4 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-lg font-bold">Détails du prix</p>
              <p className="font-medium">
                {data[0].prix_hc + data[0].prix_charges} €/mois
              </p>
            </div>
            <ChevronDownIcon
              className={`w-6 h-6 transition-transform duration-300 cursor-pointer ${
                openDropdownPrice && "rotate-180"
              }`}
              onClick={() => setOpenDropdownPrice(!openDropdownPrice)}
            />
          </div>
          <div
            className={`${
              openDropdownPrice ? "flex flex-col" : "hidden"
            } gap-3`}
          >
            <div className="flex justify-between font-bold text-lg">
              <p>Loyer charges comprises</p>
              <p>{data[0].prix_hc + data[0].prix_charges} €/mois</p>
            </div>
            <p className="text-gray-600 text-sm">Dont</p>
            <div className="flex justify-between">
              <p>Charges forfaitaires</p>
              <p>{data[0].prix_charges} €</p>
            </div>
          </div>
        </div>
        <div className="border border-gray-200 rounded-md p-4 flex justify-between text-md">
          <p>Facture d'énergie estimée :</p>
          <p>{data[0].prix_energie} €</p>
        </div>
        <div className="flex gap-4 mt-4 flex-wrap md:flex-nowrap">
          <div>
            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
              {data[0].nom_type_logement}
            </span>
          </div>
          <div className="w-full flex justify-between flex-wrap">
            <div className="flex gap-12">
              <div className="flex gap-2">
                <CircleStackIcon className="w-6 h-6" />
                <p>{data[0].nb_pieces} pièces</p>
              </div>
              <div className="flex gap-2">
                <HomeModernIcon className="w-6 h-6" />
                <p>{data[0].surface} m2</p>
              </div>
              <div className="flex gap-2">
                <KeyIcon className="w-6 h-6" />
                <p>{data[0].garage ? "Garage" : "Pas de garage"}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <span
                style={{ backgroundColor: getDpe(data[0].dpe).color }}
                className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium text-white"
              >
                <div className="flex gap-2">
                  <p className="font-medium">DPE :</p>
                  <p className="font-semibold">{getDpe(data[0].dpe).label}</p>
                </div>
              </span>

              <span
                style={{ backgroundColor: getDpe(data[0].ges).color }}
                className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium text-white"
              >
                <div className="flex gap-2">
                  <p className="font-medium">GES :</p>
                  <p className="font-semibold">{getGes(data[0].ges).label}</p>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompleteAnnonce;
