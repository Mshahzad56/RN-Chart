/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
// /* eslint-disable react-native/no-inline-styles */
// import React from 'react';
// import {View} from 'react-native';
// import {LineChart} from 'react-native-chart-kit';
// import {Dimensions} from 'react-native';

// const LineCharts = () => {
//   return (
//     <View>
//       <LineChart
//         data={{
//           labels: ['January', 'February', 'March', 'April', 'May', 'June'],
//           datasets: [
//             {
//               data: [0, 1, 2, 3, 4, 3],
//             },
//           ],
//         }}
//         width={Dimensions.get('window').width} // from react-native
//         height={220}
//         yAxisLabel={'$'}
//         chartConfig={{
//           backgroundColor: '#e26a00',
//           backgroundGradientFrom: '#fb8c00',
//           backgroundGradientTo: '#ffa726',
//           decimalPlaces: 2, // optional, defaults to 2dp
//           color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//           style: {
//             borderRadius: 16,
//           },
//         }}
//         bezier
//         style={{
//           marginVertical: 8,
//           borderRadius: 16,
//         }}
//       />
//     </View>
//   );
// };

// export default LineCharts;
import React, {useState} from 'react';
import {View, Dimensions, Text} from 'react-native';
import {LineChart} from 'react-native-chart-kit';

const MyLineChart = () => {
  const [selectedDot, setSelectedDot] = useState(null);

  const chartConfig = {
    backgroundColor: '#e26a00',
    backgroundGradientFrom: '#fb8c00',
    backgroundGradientTo: '#ffa726',
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    // Update the line color to #00AFEF
    propsForDots: {
      stroke: '#00AFEF',
      strokeWidth: '2', // You can adjust the strokeWidth for the line
    },
  };

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [0, 1, 2, 3, 4, 3],
        // Set the color of the line to #00AFEF
        color: (opacity = 1) => `rgba(0, 175, 239, ${opacity})`, // optional
        strokeWidth: 2, // optional
      },
    ],
  };

  return (
    <View>
      <LineChart
        data={data}
        width={Dimensions.get('window').width}
        height={220}
        yAxisLabel={'$'}
        chartConfig={chartConfig}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
        // eslint-disable-next-line react/no-unstable-nested-components
        decorator={() => {
          if (selectedDot) {
            return (
              <>
                <View
                  style={{
                    position: 'absolute',
                    left:
                      (Dimensions.get('window').width /
                        data.datasets[0].data.length) *
                      selectedDot.index,
                    top: 0,
                    bottom: 0,
                    borderColor: '#94A3B8',
                    borderWidth: 1,
                    borderLeftWidth: 0,
                    borderRightWidth: 0,
                    borderTopWidth: 0,
                  }}
                />
                <Text
                  style={{
                    position: 'absolute',
                    left:
                      (Dimensions.get('window').width /
                        data.datasets[0].data.length) *
                        selectedDot.index -
                      10,
                    top: '100%',
                  }}>
                  {selectedDot.value}
                </Text>``
              </>
            );
          }
        }}
        onDataPointClick={({value, dataset, getColor}) => {
          setSelectedDot({value, index: dataset.data.indexOf(value)});
        }}
      />
    </View>
  );
};

export default MyLineChart;
