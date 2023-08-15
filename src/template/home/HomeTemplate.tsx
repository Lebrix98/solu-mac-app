import { Experiencia, Multimedia, Navbar, Recomendaciones, TrabajosGarantizados } from "../../components";

const HomeTemplate = () => {
  return (
    <>
      <Navbar />
      <Multimedia />
      <Experiencia />
      <Recomendaciones />
      <TrabajosGarantizados />
    </>
  );
};

export default HomeTemplate;
