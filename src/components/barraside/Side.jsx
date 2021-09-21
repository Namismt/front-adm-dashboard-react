import "./Side.css"
import {Home, Assessment, TrendingUp, People, Storefront, MonetizationOn, Equalizer, Feedback, Chat, Work, Report} from '@material-ui/icons';

export default function Side() {
    return (
        <div className="Side">
            <div className="sideWrapper">
                <div className="sideMenu">
                    <h3 className="sideTitulo">Dashboard</h3>
                    <ul className="sideList">
                        <li className="sideListItem">
                            <Home className="sideIcon"/>
                            Home
                        </li>
                        <li className="sideListItem">
                            <Assessment className="sideIcon"/>
                            Análises
                        </li>
                        <li className="sideListItem">
                            <TrendingUp className="sideIcon"/>
                            Vendas
                        </li>
                    </ul>
                </div>
                <div className="sideMenu">
                    <h3 className="sideTitulo">Menu Rápido</h3>
                    <ul className="sideList">
                        <li className="sideListItem">
                            <People className="sideIcon"/>
                            Usuários
                        </li>
                        <li className="sideListItem">
                            <Storefront className="sideIcon"/>
                            Produtos
                        </li>
                        <li className="sideListItem">
                            <MonetizationOn className="sideIcon"/>
                            Transações
                        </li>
                        <li className="sideListItem">
                            <Equalizer className="sideIcon"/>
                            Relatórios
                        </li>
                    </ul>
                </div>
                <div className="sideMenu">
                    <h3 className="sideTitulo">Notificações</h3>
                    <ul className="sideList">
                        <li className="sideListItem">
                            <Feedback className="sideIcon"/>
                            Feedback
                        </li>
                        <li className="sideListItem">
                            <Chat className="sideIcon"/>
                            Mensagens
                        </li>
                    </ul>
                </div>
                <div className="sideMenu">
                    <h3 className="sideTitulo">Trabalhadores</h3>
                    <ul className="sideList">
                        <li className="sideListItem">
                            <Work className="sideIcon"/>
                            Administrar
                        </li>
                        <li className="sideListItem">
                            <Assessment className="sideIcon"/>
                            Análises
                        </li>
                        <li className="sideListItem">
                            <Report className="sideIcon"/>
                            Relatórios
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
