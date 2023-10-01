import React from 'react'
import { PieChart, Pie, /* Legend, */ Tooltip, ResponsiveContainer } from 'recharts'

type DataCategoryChart = {
  name: string;
  value: number;
  fill: string;
  legendColor: string;
};

const data: DataCategoryChart[] = [
  { name: 'Solicitud', value: 60, fill: '#FF2300', legendColor: '#FF2300' },
  { name: 'Negociación', value: 10, fill: '#3A5FD8', legendColor: '#3A5FD8' },
  { name: 'Otorgamiento', value: 10, fill: '#E5C40E', legendColor: '#E5C40E' },
  { name: 'Justificación', value: 10, fill: '#0D7D4A', legendColor: '#0D7D4A' },
  { name: 'Cierre', value: 10, fill: '#FF9600', legendColor: '#FF9600' }
]

/* const CustomLegend: React.FC = () => {
  return (
    <div className='flex items-center justify-center space-x-5'>
      {data.map((entry, index) => (
        <div key={`legend-item-${index}`} className='flex items-center  space-x-2'>
          <div style={{ backgroundColor: entry.legendColor, width: '12px', height: '12px' }} />
          <span className='text-xs' style={{ color: entry.legendColor }}>
            {entry.name}
          </span>
        </div>
      ))}
    </div>
  )
} */

const Example: React.FC = () => {
  return (
    <div className='w-full h-[300px] text-sm'>
      <ResponsiveContainer>
        <PieChart className='w-full h-full'>
          <Pie
            data={data}
            dataKey='value'
            label
            labelLine={false}
            fill='#FF4600'
            stroke='#ffffff'
          />
          <Tooltip />
          {/* <Legend iconSize={12} content={<CustomLegend />} /> */}
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Example

/* import React, { PureComponent, ReactNode } from 'react'
import { PieChart, Pie, Sector, ResponsiveContainer } from 'recharts'

interface DataItem {
  name: string;
  value: number;
}

interface RenderActiveShapeProps {
  cx?: number;
  cy?: number;
  midAngle?: number;
  innerRadius?: number;
  outerRadius?: number;
  startAngle?: number;
  endAngle?: number;
  fill?: string;
  payload?: DataItem | null;
  percent?: number;
  value?: number;
}

const data: DataItem[] = [
  { name: 'Solicitud', value: 10 },
  { name: 'Negociación', value: 30 },
  { name: 'Otorgamiento', value: 20 },
  { name: 'Justificación', value: 2 },
  { name: 'Cierre', value: 200 }
]

const CustomActiveShape: React.FC<RenderActiveShapeProps> = ({
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
}) => {
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

interface ExampleState {
  activeIndex: number;
}

export default class Example extends PureComponent<ExampleState> {
  state: ExampleState = {
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
            fill='#FF4600'
            dataKey='value'
            onMouseEnter={this.handlePieEnter}
          />
        </PieChart>
      </ResponsiveContainer>
    )
  }
}
 */
