import {
  Experiencia,
  HardSoft,
  Informacion,
  LogoFloat,
  Multimedia,
  Recomendaciones,
  Reparacion,
  SocialMedia,
  SolucionesMac,
  TrabajosGarantizados,
} from "../../components";

const HomeTemplate = () => {
  return (
    <>
      <LogoFloat />
      <SocialMedia />
      <Multimedia />
      <Experiencia />
      <Recomendaciones />
      <TrabajosGarantizados />
      <Reparacion />
      <HardSoft />
      <SolucionesMac />
      <Informacion />
    </>
  );
};

export default HomeTemplate;
