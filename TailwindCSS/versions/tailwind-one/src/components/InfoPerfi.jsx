const InfoPerfil = (props) => {
  const { name, email } = props;
  return (
    <>
      <div>
        <h1> {name}</h1>
        <h1> {email}</h1>
      </div>
    </>
  );
};

export default InfoPerfil;
