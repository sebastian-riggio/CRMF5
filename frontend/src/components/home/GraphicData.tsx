/* eslint-disable @typescript-eslint/no-explicit-any */
import { PureComponent, ReactNode } from 'react'
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts'

interface DataItem {
  name: string;
  value: number;
  fill?: string;
}

// TODO Colores
const data: DataItem[] = [
  { name: 'Solicitud', value: 10, fill: '#ffd6d1' },
  { name: 'Negociación', value: 30, fill: '#fdf9f7' },
  { name: 'Otorgamiento', value: 20, fill: '#f4eeb3' },
  { name: 'Justificación', value: 2, fill: '#caf7b6' },
  { name: 'Cierre', value: 200, fill: '#8aa1f5' }
]

// eslint-disable-next-line react-refresh/only-export-components
const CustomActiveShape = ({
  cx = 0,
  cy = 0,
  midAngle = 0,
  innerRadius = 0,
  outerRadius = 0,
  startAngle = 0,
  endAngle = 0,
  fill = '',
  payload,
  percent = 0,
  value = 0
}: any) => {
  const RADIAN = Math.PI / 180
  const sin = Math.sin(-RADIAN * midAngle)
  const cos = Math.cos(-RADIAN * midAngle)
  const sx = cx + (outerRadius + 10) * cos
  const sy = cy + (outerRadius + 10) * sin
  const mx = cx + (outerRadius + 30) * cos
  const my = cy + (outerRadius + 30) * sin
  const ex = mx + (cos >= 0 ? 1 : -1) * 22
  const ey = my
  const textAnchor = cos >= 0 ? 'start' : 'end'

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor='middle' fill={fill}>
        {payload!.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill='none' />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke='none' />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill='#333'>{`PV ${value}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill='#999'>
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  )
}

interface GraphicDataState {
  activeIndex: number;
}

export default class GraphicData extends PureComponent<GraphicDataState> {
  state: GraphicDataState = {
    activeIndex: 0
  }

  handlePieEnter = (_: unknown, index: number) => {
    this.setState({
      activeIndex: index
    })
  }

  render (): ReactNode {
    return (
      <ResponsiveContainer width='100%' height={300}>
        <PieChart width={500} height={500}>
          <Pie
            activeIndex={this.state.activeIndex}
            activeShape={CustomActiveShape}
            data={data}
            cx='50%'
            cy='50%'
            innerRadius={60}
            outerRadius={80}
            fill={'#FF4600' ?? data.fill}
            dataKey='value'
            onMouseEnter={this.handlePieEnter}
          />
        </PieChart>
      </ResponsiveContainer>
    )
  }
}
