import FtInfo from "../../FtInfo/FtInfo"
import Grafico from "../../grafico/Grafico"
import "./Admin.css"
import {graficoData} from "../../../dummyData"
import WidgetS from "../../WidgetS/WidgetS"
import WidgetL from "../../WidgetL/WidgetL"

export default function Admin() {
    return (
        <div className="admin">
            <FtInfo/>
            <Grafico data={graficoData} titulo="Analise de Vendas" grid dataKey='Vendas'/>
            <div className="adminWidget">
                <WidgetS/>
                <WidgetL/>
            </div>
        </div>
    )
}
