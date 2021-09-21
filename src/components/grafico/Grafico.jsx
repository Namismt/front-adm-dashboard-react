import "./Grafico.css"
import { LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Grafico({titulo, data, dataKey, grid}) {

      
    return (
        <div className="grafico">
            <h3 className="graficoTitulo">{titulo}</h3>
            <ResponsiveContainer width="100%" aspect={4/1}>
                    <LineChart data={data}>
                        <XAxis dataKey="name" stroke="rgb(127, 211, 241)"/>
                        <Line type="monotone" dataKey={dataKey} stroke="rgb(127, 211, 241)"/>
                        <Tooltip/>
                        {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>}
                    </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
