import React from "react";
import { useParams } from "react-router-dom";
import CompleteAnnonce from "../components/CompleteAnnonce";

function Annonces() {
  const { id } = useParams();
  return (
    <div className="mt-6">
      <CompleteAnnonce id={id} />
    </div>
  );
}

export default Annonces;
