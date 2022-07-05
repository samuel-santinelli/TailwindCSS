import React from "react";
import Loading from "../components/Loading";
import InfoPerfil from "../components/InfoPerfi";
import data from "../data/Data";

const Profile = (props) => {
  return (
    <>
      <Loading />
      {data.map((infoProfile, index) => (
        <InfoPerfil
          key={index}
          name={infoProfile.user.name}
          email={infoProfile.user.email}
        />
      ))}
      <div> Ola</div>
    </>
  );
};

export default Profile;
