// Importações globais
import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import Intranet from "./components/pages/Intranet";
import FacilitiesObras from "./components/pages/Catalogos/FacilitiesObras";
import PatrimonioSeguranca from "./components/pages/Catalogos/PatrimonioSeguranca";
import ViagensFrotaMobilidadeTransportes from "./components/pages/Catalogos/ViagensFrotaMobilidadeTransportes";

import CadastroInativacaoColaborador from "./components/pages/Catalogos/vfmt/CadastroInativacaoColaborador";
import CadastroInativacaoColaboradorUber from "./components/pages/Catalogos/vfmt/CadastroInativacaoColaboradorUber";
import CadastroNovoColaboradorCarsharing from "./components/pages/Catalogos/vfmt/CadastroNovoColaboradorCarsharing";
import CadastroAprovadorCentroCusto from "./components/pages/Catalogos/vfmt/CadastroAprovadorCentroCusto";
import MovimentacaoPoolsCarsharing from "./components/pages/Catalogos/vfmt/MovimentacaoPoolsCarsharing";
import NovoColaboradorMudancaEstadual from "./components/pages/Catalogos/vfmt/NovoColaboradorMudancaEstadual";
import OrientacaoCancelamentoViagens from "./components/pages/Catalogos/vfmt/OrientacaoCancelamentoViagens";
import RegistroAcionamentoSeguroVeiculo from "./components/pages/Catalogos/vfmt/RegistroAcionamentoSeguroVeiculo";
import Solicitacao2ViaCartaoCombustivel from "./components/pages/Catalogos/vfmt/Solicitacao2ViaCartaoCombustivel";
import SolicitacaoManutencaoVeiculo from "./components/pages/Catalogos/vfmt/SolicitacaoManutencaoVeiculo";
import SolicitacaoOnibusVanVeiculosExecutivos from "./components/pages/Catalogos/vfmt/SolicitacaoOnibusVanVeiculosExecutivos";
import SolicitacaoVeiculoViagens from "./components/pages/Catalogos/vfmt/SolicitacaoVeiculoViagens";
import SolicitacoesDuvidasVeiculos from "./components/pages/Catalogos/vfmt/SolicitacoesDuvidasVeiculos";
import SolicitacoesDuvidasViagens from "./components/pages/Catalogos/vfmt/SolicitacoesDuvidasViagens";
import SuporteExclusivoViagensExecutivas from "./components/pages/Catalogos/vfmt/SuporteExclusivoViagensExecutivas";

// Rotas gerais
export const generalRoutes = [
  { path: "/", Component: Home },
  { path: "/company", Component: Company },
  { path: "/contact", Component: Contact },
  { path: "/intranet", Component: Intranet },
];

// Rotas de Catálogo
export const catalogRoutes = [
  { path: "/facilitiesObras", Component: FacilitiesObras },
  { path: "/patrimonioSeguranca", Component: PatrimonioSeguranca },
  {
    path: "/viagensFrotaMobilidadeTransportes",
    Component: ViagensFrotaMobilidadeTransportes,
  },
];

// Rotas Catálogo VFMT
export const catalogVfmtRoutes = [
  {
    path: "/cadastroInativacaoColaborador",
    Component: CadastroInativacaoColaborador,
  },
  {
    path: "/cadastroInativacaoColaboradorUber",
    Component: CadastroInativacaoColaboradorUber,
  },
  {
    path: "/cadastroNovoColaboradorCarsharing",
    Component: CadastroNovoColaboradorCarsharing,
  },
  {
    path: "/cadastroAprovadorCentroCusto",
    Component: CadastroAprovadorCentroCusto,
  },
  {
    path: "/movimentacaoPoolsCarsharing",
    Component: MovimentacaoPoolsCarsharing,
  },
  {
    path: "/novoColaboradorMudancaEstadual",
    Component: NovoColaboradorMudancaEstadual,
  },
  {
    path: "/orientacaoCancelamentoViagens",
    Component: OrientacaoCancelamentoViagens,
  },
  {
    path: "/registroAcionamentoSeguroVeiculo",
    Component: RegistroAcionamentoSeguroVeiculo,
  },
  {
    path: "/solicitacao2ViaCartaoCombustivel",
    Component: Solicitacao2ViaCartaoCombustivel,
  },
  {
    path: "/solicitacaoManutencaoVeiculo",
    Component: SolicitacaoManutencaoVeiculo,
  },
  {
    path: "/solicitacaoOnibusVanVeiculosExecutivos",
    Component: SolicitacaoOnibusVanVeiculosExecutivos,
  },
  { path: "/solicitacaoVeiculoViagens", Component: SolicitacaoVeiculoViagens },
  {
    path: "/solicitacoesDuvidasVeiculos",
    Component: SolicitacoesDuvidasVeiculos,
  },
  {
    path: "/solicitacoesDuvidasViagens",
    Component: SolicitacoesDuvidasViagens,
  },
  {
    path: "/suporteExclusivoViagensExecutivas",
    Component: SuporteExclusivoViagensExecutivas,
  },
];
