import "./WidgetS.css"
import {Visibility} from "@material-ui/icons"

export default function WidgetS() {
    return (
        <div className="widgetS">
            <span className="widgetSTitulo">Novos Usuários</span>
            <ul className="widgetSList">
                <li className="widgetSListItem">
                    <img src="https://avatars.githubusercontent.com/u/88510972?s=400&u=3238c6b6ceb0ed84fc259a450719ff95a7cccd06&v=4" alt="" className="widgetSImg" />
                    <div className="widgetSUsuario">
                        <span className="widgetSUsuarioNome">Nami Tamataya</span>
                        <span className="widgetSUsuarioTitulo">Desempregada</span>
                    </div>
                    <button className="widgetSButton">
                    <Visibility className="widgetSIcon"/> Mostrar
                    </button>
                </li>
                <li className="widgetSListItem">
                    <img src="https://avatars.githubusercontent.com/u/88510972?s=400&u=3238c6b6ceb0ed84fc259a450719ff95a7cccd06&v=4" alt="" className="widgetSImg" />
                    <div className="widgetSUsuario">
                        <span className="widgetSUsuarioNome">Nami Tamataya</span>
                        <span className="widgetSUsuarioTitulo">Desempregada</span>
                    </div>
                    <button className="widgetSButton">
                    <Visibility className="widgetSIcon"/> Mostrar
                    </button>
                </li>
                <li className="widgetSListItem">
                    <img src="https://avatars.githubusercontent.com/u/88510972?s=400&u=3238c6b6ceb0ed84fc259a450719ff95a7cccd06&v=4" alt="" className="widgetSImg" />
                    <div className="widgetSUsuario">
                        <span className="widgetSUsuarioNome">Nami Tamataya</span>
                        <span className="widgetSUsuarioTitulo">Desempregada</span>
                    </div>
                    <button className="widgetSButton">
                    <Visibility className="widgetSIcon"/> Mostrar
                    </button>
                </li>
                <li className="widgetSListItem">
                    <img src="https://avatars.githubusercontent.com/u/88510972?s=400&u=3238c6b6ceb0ed84fc259a450719ff95a7cccd06&v=4" alt="" className="widgetSImg" />
                    <div className="widgetSUsuario">
                        <span className="widgetSUsuarioNome">Nami Tamataya</span>
                        <span className="widgetSUsuarioTitulo">Desempregada</span>
                    </div>
                    <button className="widgetSButton">
                    <Visibility className="widgetSIcon"/> Mostrar
                    </button>
                </li>
            </ul>
        </div>
    )
}
