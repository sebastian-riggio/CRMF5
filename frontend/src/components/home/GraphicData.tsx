import { PureComponent } from 'react'
import { ResponsiveContainer, PieChart, Pie } from 'recharts'

const data = [
  { name: 'Solicitud', value: 40 }, // traer la cantidad de convocatorias en etapa de solicitud
  { name: 'Negociación', value: 10 }, // traer la cantidad de convocatorias en etapa de negociación
  { name: 'Otorgamiento', value: 8 }, // traer la cantiddad de convocatorias en etapa de otorgamiento
  { name: 'Justificación', value: 2 }, // traer la cantidad de convocatorias en etapa de justificacion
  { name: 'Cierre', value: 20 } // traer la cantidad de convocatorias en etapa de cierre
]

export default class Example extends PureComponent {
  render () {
    return (
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie dataKey='value' data={data} fill='#FF4600' label />
          </PieChart>
        </ResponsiveContainer>
      </div>
    )
  }
}
