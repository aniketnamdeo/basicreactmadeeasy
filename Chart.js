import React, {Component} from 'react';
import {Bar, Line, Pie, Doughnut, HorizontalBar, Radar, Polar} from 'react-chartjs-2';

const Chart = () => {
  var charttData={
    labels: ['Jhansi','Lucknow','Noida','Delhi','Kota','Bangalore'],
    
    datasets:[
      {
        label:'Xopulation',
        data:[
          30,
          20,
          20,
          15,
          25,
          20
        ],
        backgroundColor:[
          'rgba(255,99,132,0.6)',
          'rgba(54,162,235,0.6)',
          'rgba(75,192,192,0.6)',
          'rgba(153,102,255,0.6)',
          'rgba(255,159,64,0.6)',
          'rgba(255,99,232,0.6)'
        ],
        // borderWidth:30,
        borderAlign:'inner',
        borderColor:'white',
        // hoverBorderWidth:3,
        hoverBorderColor:'white',
        weight:10,
        
        
      }],
  }
  const charstyle = {
    height:"500px",
    width:"500px"
  }
    return (
      <div className="chart" style={charstyle}>
        <Pie
          data={charttData}
          options={{
            title:{
            display:true,
            text:'Best Cities in India',
            fontSize:20,
            position:'left'
          },
          legend:{
            display:true,
            position:'right',
            align:'end',
            labels:{
              fontColor:'red'
            }
          },
          layout:{
            padding:{
              left:20,
              right:0,
              bottom:0,
              top:0,
              width:10
            }
          },
          tooltips:{
            enabled:false
          },
          responsive:true
          // scales:{
          //   yAxes:[{
          //     ticks:{
          //       beginAtZero:true
          //     }
          //   }]
          // }
        }}
        />
      </div>
    )
  
}

export default Chart;