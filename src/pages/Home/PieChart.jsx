import React from 'react';
import { PieChart } from '@mui/x-charts';

const IngChart = () => {
  const data1 = [
  ];
  const data2 = [
    { label: '글로벌 경제', value: 1 },
    { label: '채권', value: 3 },
    { label: '부동산', value: 1 },
    { label: '금융', value: 8 },
    { label: '증권', value: 4 },
  ];

  // 합계 계산
  const totalValue = data2.reduce((acc, cur) => acc + cur.value, 0);

  return (
    <>
    <TotalValueDisplay total={totalValue} />
      <PieChart
        margin={{ top: 120, bottom: 220, left: 100, right: 100 }}
        series={[
          {
            data : data1
          },
          {
            innerRadius: 100,
            outerRadius: 120,
            data: data2,
          },
        ]}
        slotProps={{
          labelStyle: {
            fontWeight: 500,
          },
          legend: {
            direction: 'row',
            position: { vertical: 'bottom', horizontal: 'middle' },
            padding: 0,
            labelStyle: {
              fontSize:17,
              fontWeight:900,
            },
          },
        }}
      />
      {/* 총합을 표시하는 커스텀 컴포넌트 */}
      
    </>
  );
};

// 총합을 표시하는 커스텀 컴포넌트
const TotalValueDisplay = ({ total }) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: '1870px',
        left: '545px',
        fontSize: '50px',
        fontWeight: 'bold',
      }}
    >
      {total}
    </div>
  );
};

export default IngChart;
