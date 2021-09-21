import "./FtInfo.css"
import {ArrowDownward, ArrowUpward} from '@material-ui/icons';

export default function FtInfo() {
    return (
        <div className="ft">
            <div className="ftItem">
                <span className="ftTitulo">Renda</span>
                <div className="ftDinheiroContainer">
                    <span className="ftDinheiro">R$2.684</span>
                    <span className="ftDinheiroRate">
                        -15.7 <ArrowDownward className="ftIcon negativo"/>
                    </span>
                </div>
                <span className="ftComp">Comparado com o mês passado</span>
            </div>
            <div className="ftItem">
                <span className="ftTitulo">Vendas</span>
                <div className="ftDinheiroContainer">
                    <span className="ftDinheiro">R$17.684</span>
                    <span className="ftDinheiroRate">
                        -1.7 <ArrowDownward className="ftIcon negativo"/>
                    </span>
                </div>
                <span className="ftComp">Comparado com o mês passado</span>
            </div>
            <div className="ftItem">
                <span className="ftTitulo">Custos</span>
                <div className="ftDinheiroContainer">
                    <span className="ftDinheiro">R$6.684</span>
                    <span className="ftDinheiroRate">
                       +4.7 <ArrowUpward className="ftIcon positivo"/>
                    </span>
                </div>
                <span className="ftComp">Comparado com o mês passado</span>
            </div>
        </div>
    )
}
