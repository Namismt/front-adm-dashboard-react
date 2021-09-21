import "./WidgetL.css"

export default function WidgetL() {
    const Button = ({type}) =>{
        return <button className={"widgetLButton " + type}>{type}</button>
    };

    return (
        <div className="widgetL">
            <h3 className="widgetLTitulo">Ultimas Transações</h3>
            <table className="widgetLTable">
                <tr className="widgetLTr">
                    <th className="widgetLTh">Cliente</th>
                    <th className="widgetLTh">Data</th>
                    <th className="widgetLTh">Quantidade</th>
                    <th className="widgetLTh">Status</th>
                </tr>
                <tr className="widgetLTr">
                    <td className="widgetLUsuario">
                        <img src="https://avatars.githubusercontent.com/u/88510972?s=400&u=3238c6b6ceb0ed84fc259a450719ff95a7cccd06&v=4" alt="" className="widgetLImg" />
                        <span className="widgetUsuarioNome">Nami Tamataya</span>
                    </td>
                    <td className="widgetLData">20/09/2021</td>
                    <td className="widgetLQuantidade">R$120,99</td>
                    <td className="widgetLStatus"><Button type="Aprovado"/></td>
                </tr>
                <tr className="widgetLTr">
                    <th className="widgetLTh">Cliente</th>
                    <th className="widgetLTh">Data</th>
                    <th className="widgetLTh">Quantidade</th>
                    <th className="widgetLTh">Status</th>
                </tr>
                <tr className="widgetLTr">
                    <td className="widgetLUsuario">
                        <img src="https://avatars.githubusercontent.com/u/88510972?s=400&u=3238c6b6ceb0ed84fc259a450719ff95a7cccd06&v=4" alt="" className="widgetLImg" />
                        <span className="widgetUsuarioNome">Nami Tamataya</span>
                    </td>
                    <td className="widgetLData">20/09/2021</td>
                    <td className="widgetLQuantidade">R$120,99</td>
                    <td className="widgetLStatus"><Button type="Recusado"/></td>
                    
                </tr>
                <tr className="widgetLTr">
                    <th className="widgetLTh">Cliente</th>
                    <th className="widgetLTh">Data</th>
                    <th className="widgetLTh">Quantidade</th>
                    <th className="widgetLTh">Status</th>
                </tr>
                <tr className="widgetLTr">
                    <td className="widgetLUsuario">
                        <img src="https://avatars.githubusercontent.com/u/88510972?s=400&u=3238c6b6ceb0ed84fc259a450719ff95a7cccd06&v=4" alt="" className="widgetLImg" />
                        <span className="widgetUsuarioNome">Nami Tamataya</span>
                    </td>
                    <td className="widgetLData">20/09/2021</td>
                    <td className="widgetLQuantidade">R$120,99</td>
                    <td className="widgetLStatus"><Button type="Em Andamento"/></td>
                    
                </tr>
            </table>
        </div>
    )
}
