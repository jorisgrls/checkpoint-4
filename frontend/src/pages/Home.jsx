import { InformationCircleIcon } from "@heroicons/react/24/outline";
import React from "react";
import Annonce from "../components/Annonce";
import useGetAnnonces from "../hooks/annonces/useGetAnnonces";
import SkeletonAnnonce from "../components/SkeletonAnnonce";

function Home() {
  const { isLoading, isError, data } = useGetAnnonces();
  if (isLoading) {
    return <SkeletonAnnonce />;
  }
  if (isError) {
    return <div>Erreur lors du chargement des annonces</div>;
  }
  return (
    <div className="mt-6">
      <p className="text-xl font-semibold pt-6">
        Liste des locations disponibles ({data.length})
      </p>
      {data.length > 0 ? (
        data.map((annonce) => <Annonce key={annonce.id} data={annonce} />)
      ) : (
        <div className="w-full bg-white shadow-md rounded-md p-6 flex justify-center gap-2 items-center opacity-70 font-medium">
          <InformationCircleIcon className="w-5 h-5" />
          <p>Il n'y a aucune annonce de disponible</p>
        </div>
      )}
    </div>
  );
}

export default Home;
