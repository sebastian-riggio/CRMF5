import { PureComponent } from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  {
    name: '',
    uv: 200 // traer total de convoctorias
  },
  {
    name: 'Sin asignar',
    uv: 120 // traer convoctorias sin proyecto asignado
  },
  {
    name: 'Solicitud',
    uv: 10 // traer convoctorias en etapa de solicitud
  },
  {
    name: 'Negociación',
    uv: 50 // traer convoctorias en etapa de negociagión
  },
  {
    name: 'Otorgamiento',
    uv: 10 // traer convoctorias en etapa de otorgamiento
  },
  {
    name: 'Justificación',
    uv: 5 // traer convoctorias en etapa de justificación
  },
  {
    name: 'Cierre',
    uv: 5 // traer convoctorias en etapa de cierre
  }
]

export default class GraphicData extends PureComponent {
  render () {
    return (
      <div style={{ width: '100%', height: 350 }}>
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0
            }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis fontSize={11} dataKey='name' className='tracking-tighter' />
            <YAxis />
            <Tooltip />
            <Area type='monotone' dataKey='uv' stroke='#FF4600' fill='#FF4600' />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    )
  }
}
