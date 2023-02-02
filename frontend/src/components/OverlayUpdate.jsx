/* eslint-disable react/prop-types */
import React, { Fragment, useState } from "react";
import { useQueryClient } from "react-query";
import { Dialog, Transition } from "@headlessui/react";
import { PencilSquareIcon, XMarkIcon } from "@heroicons/react/24/outline";
import useGetTypeLogement from "../hooks/type_logement/useGetTypeLogement";
import useGetTypeEnergie from "../hooks/type_energie/useGetTypeEnergie";
import useUpdateAnnonce from "../hooks/annonces/useUpdateAnnonce";
import queryKeys from "../constants/queryKeys";

function OverlayUpdate({ open, setOpen, data }) {
  const queryClient = useQueryClient();
  const { mutate: updateAnnonce } = useUpdateAnnonce();
  const [annonceInfo, setAnnonceInfo] = useState({
    id: data.id,
    code_postal: data.code_postal,
    ville: data.ville,
    titre: data.titre,
    url_image: data.url_image,
    description: data.description,
    id_type: data.id_type,
    id_type_energie: data.id_type_energie,
    prix_hc: data.prix_hc,
    prix_charges: data.prix_charges,
    prix_energie: data.prix_energie,
    nb_pieces: data.nb_pieces,
    surface: data.surface,
    garage: data.garage,
    dpe: data.dpe,
    ges: data.ges,
    pays: data.pays,
  });

  const {
    isLoading: isLoadingLogement,
    isError: isErrorLogement,
    data: typesLogement,
  } = useGetTypeLogement();
  const {
    isLoading: isLoadingEnergie,
    isError: isErrorEnergie,
    data: typesEnergie,
  } = useGetTypeEnergie();

  const handleOnSubmit = (event) => {
    event.preventDefault();
    updateAnnonce(
      {
        id: annonceInfo.id,
        code_postal: annonceInfo.code_postal,
        ville: annonceInfo.ville,
        titre: annonceInfo.titre,
        url_image: annonceInfo.url_image,
        description: annonceInfo.description,
        id_type: parseInt(annonceInfo.id_type, 10),
        id_type_energie: parseInt(annonceInfo.id_type_energie, 10),
        prix_hc: parseInt(annonceInfo.prix_hc, 10),
        prix_charges: parseInt(annonceInfo.prix_charges, 10),
        prix_energie: parseInt(annonceInfo.prix_energie, 10),
        nb_pieces: parseInt(annonceInfo.nb_pieces, 10),
        surface: parseInt(annonceInfo.surface, 10),
        garage: parseInt(annonceInfo.garage, 10),
        dpe: parseInt(annonceInfo.dpe, 10),
        ges: parseInt(annonceInfo.ges, 10),
        pays: annonceInfo.pays,
      },
      {
        onSuccess: () =>
          queryClient.refetchQueries([queryKeys.ANNONCE(annonceInfo.id)]),
      }
    );
    setOpen(false);
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 overflow-hidden bg-gray-500 bg-opacity-75"
        onClose={setOpen}
      >
        <div className="absolute inset-0 overflow-hidden">
          <Dialog.Overlay className="absolute inset-0" />

          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="pointer-events-auto w-screen max-w-md">
                <form
                  onSubmit={handleOnSubmit}
                  className="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl"
                >
                  <div className="flex min-h-0 flex-1 flex-col overflow-y-scroll py-6">
                    <div className="px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900 flex gap-2">
                          <PencilSquareIcon className="w-6 h-6 font-bold" />
                          Modifier une annonce
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            onClick={() => setOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      {/* Replace with your content */}
                      <p className="font-semibold border-b border-gray-200 pb-2 mb-6">
                        Localisation
                      </p>
                      <div className="flex gap-3">
                        <div className="w-full">
                          <label
                            htmlFor="codePostal"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Code postal
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="codePostal"
                              id="codePostal"
                              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                              required
                              value={annonceInfo.code_postal}
                              onChange={(e) =>
                                setAnnonceInfo({
                                  ...annonceInfo,
                                  code_postal: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                        <div className="w-full">
                          <label
                            htmlFor="ville"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Ville
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="ville"
                              id="ville"
                              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                              required
                              value={annonceInfo.ville}
                              onChange={(e) =>
                                setAnnonceInfo({
                                  ...annonceInfo,
                                  ville: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                      </div>
                      <div className="mt-2 w-full">
                        <label
                          htmlFor="pays"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Pays (en anglais)
                        </label>
                        <div className="mt-1">
                          <input
                            type="text"
                            name="pays"
                            id="pays"
                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                            required
                            value={annonceInfo.pays}
                            onChange={(e) =>
                              setAnnonceInfo({
                                ...annonceInfo,
                                pays: e.target.value,
                              })
                            }
                          />
                        </div>
                      </div>
                      <p className="font-semibold border-b border-gray-200 pb-2 mb-6 mt-10">
                        Information de l'annonce
                      </p>
                      <div className="flex flex-col gap-4">
                        <div className="w-full">
                          <label
                            htmlFor="titre"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Titre de l'annonce
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="titre"
                              id="titre"
                              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                              required
                              value={annonceInfo.titre}
                              onChange={(e) =>
                                setAnnonceInfo({
                                  ...annonceInfo,
                                  titre: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                        <div className="w-full">
                          <label
                            htmlFor="image"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Url de l'image de l'annonce
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="image"
                              id="image"
                              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                              placeholder="https://monimage.com"
                              required
                              value={annonceInfo.url_image}
                              onChange={(e) =>
                                setAnnonceInfo({
                                  ...annonceInfo,
                                  url_image: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="comment"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Description de l'annonce
                          </label>
                          <div className="mt-1">
                            <textarea
                              rows={4}
                              name="comment"
                              id="comment"
                              className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                              required
                              value={annonceInfo.description}
                              onChange={(e) =>
                                setAnnonceInfo({
                                  ...annonceInfo,
                                  description: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <div className="w-full">
                            <label
                              htmlFor="typeLogements"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Type de logement
                            </label>
                            {!isLoadingLogement && !isErrorLogement && (
                              <select
                                id="typeLogements"
                                name="typeLogements"
                                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                                value={annonceInfo.id_type}
                                onChange={(e) =>
                                  setAnnonceInfo({
                                    ...annonceInfo,
                                    id_type: e.target.value,
                                  })
                                }
                              >
                                <option value="">Sélectionner un type</option>
                                {typesLogement.map((type) => (
                                  <option key={type.id} value={type.id}>
                                    {type.nom}
                                  </option>
                                ))}
                              </select>
                            )}
                          </div>
                          <div className="w-full">
                            <label
                              htmlFor="typeEnergie"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Type d'énergie
                            </label>
                            {!isLoadingEnergie && !isErrorEnergie && (
                              <select
                                id="typeEnergie"
                                name="typeEnergie"
                                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                                value={annonceInfo.id_type_energie}
                                onChange={(e) =>
                                  setAnnonceInfo({
                                    ...annonceInfo,
                                    id_type_energie: e.target.value,
                                  })
                                }
                              >
                                <option value="">Sélectionner un type</option>
                                {typesEnergie.map((type) => (
                                  <option value={type.id} key={type.id}>
                                    {type.nom}
                                  </option>
                                ))}
                              </select>
                            )}
                          </div>
                        </div>
                        <p className="font-semibold border-b border-gray-200 pb-2 mb-2 mt-10">
                          Information sur la location
                        </p>
                        <div className="flex gap-3">
                          <div className="w-full">
                            <label
                              htmlFor="priceHc"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Prix hors charge
                            </label>
                            <div className="mt-1">
                              <input
                                type="text"
                                name="priceHc"
                                id="priceHc"
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                required
                                value={annonceInfo.prix_hc}
                                onChange={(e) =>
                                  setAnnonceInfo({
                                    ...annonceInfo,
                                    prix_hc: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                          <div className="w-full">
                            <label
                              htmlFor="charges"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Charges forfaitaires
                            </label>
                            <div className="mt-1">
                              <input
                                type="text"
                                name="charges"
                                id="charges"
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                required
                                value={annonceInfo.prix_charges}
                                onChange={(e) =>
                                  setAnnonceInfo({
                                    ...annonceInfo,
                                    prix_charges: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <div className="w-full">
                            <label
                              htmlFor="priceEnergie"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Estimation prix de l'énergie
                            </label>
                            <div className="mt-1">
                              <input
                                type="text"
                                name="priceEnergie"
                                id="priceEnergie"
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                required
                                value={annonceInfo.prix_energie}
                                onChange={(e) =>
                                  setAnnonceInfo({
                                    ...annonceInfo,
                                    prix_energie: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                          <div className="w-full">
                            <label
                              htmlFor="pieces"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Nombre de pièces
                            </label>
                            <div className="mt-1">
                              <input
                                type="text"
                                name="pieces"
                                id="pieces"
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                required
                                value={annonceInfo.nb_pieces}
                                onChange={(e) =>
                                  setAnnonceInfo({
                                    ...annonceInfo,
                                    nb_pieces: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <div className="w-full">
                            <label
                              htmlFor="surface"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Surface (en m2)
                            </label>
                            <div className="mt-1">
                              <input
                                type="text"
                                name="surface"
                                id="surface"
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                required
                                value={annonceInfo.surface}
                                onChange={(e) =>
                                  setAnnonceInfo({
                                    ...annonceInfo,
                                    surface: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                          <div className="w-full">
                            <label
                              htmlFor="garage"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Y a-t-il un garage ?
                            </label>
                            <select
                              id="garage"
                              name="garage"
                              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                              value={annonceInfo.garage}
                              onChange={(e) =>
                                setAnnonceInfo({
                                  ...annonceInfo,
                                  garage: e.target.value,
                                })
                              }
                            >
                              <option value={1}>Oui</option>
                              <option value={2}>Non</option>
                            </select>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <div className="w-full">
                            <label
                              htmlFor="dpe"
                              className="block text-sm font-medium text-gray-700"
                            >
                              DPE (en kWh)
                            </label>
                            <div className="mt-1">
                              <input
                                type="text"
                                name="dpe"
                                id="dpe"
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                required
                                value={annonceInfo.dpe}
                                onChange={(e) =>
                                  setAnnonceInfo({
                                    ...annonceInfo,
                                    dpe: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                          <div className="w-full mb-6">
                            <label
                              htmlFor="ges"
                              className="block text-sm font-medium text-gray-700"
                            >
                              GES (en kWh)
                            </label>
                            <div className="mt-1">
                              <input
                                type="text"
                                name="ges"
                                id="ges"
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                required
                                value={annonceInfo.ges}
                                onChange={(e) =>
                                  setAnnonceInfo({
                                    ...annonceInfo,
                                    ges: e.target.value,
                                  })
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* /End replace */}
                    </div>
                  </div>
                  <div className="flex flex-shrink-0 justify-end px-4 py-4">
                    <button
                      type="button"
                      className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      onClick={() => setOpen(false)}
                    >
                      Retour
                    </button>
                    <button
                      type="submit"
                      className="ml-4 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Publier l'annonce
                    </button>
                  </div>
                </form>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default OverlayUpdate;
