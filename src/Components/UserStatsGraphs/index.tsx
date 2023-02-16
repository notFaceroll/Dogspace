import React, { useEffect, useState } from 'react';
import { VictoryPie, VictoryChart, VictoryBar } from 'victory';

import { Container } from './styles';

const UserStatsGraphs: React.FC<{ data: any }> = ({ data }) => {
  const [graph, setGraph] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const graphData = data?.map((item: any) => {
      return {
        x: item.title,
        y: Number(item.acessos),
      }
    })

    setTotal(data?.map(({ acessos }: { acessos: string }) => Number(acessos)).reduce((a: number, b: number) => a + b, 0));
    setGraph(graphData);
  }, [data])

  return (
    <Container className="slideRight">
      <div className='total item'>
        <p>Acessos: {total}</p>
      </div>
      <div className='item'>
        <VictoryPie
          data={graph}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          style={{
            data: {
              fillOpacity: .9,
              stroke: '#fff',
              strokeWidth: 2,
            },
            labels: {
              fontSize: 14,
              fill: '#333'
            }
          }}
        />
      </div>
      <div className='item'>
        <VictoryChart>
          <VictoryBar alignment='start' data={graph}></VictoryBar>
        </VictoryChart>
      </div>
    </Container>
  );
}

export default UserStatsGraphs;
