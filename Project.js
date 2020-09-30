import React from 'react'
import {Bar, Line, Pie, Doughnut, HorizontalBar, Radar, Polar} from 'react-chartjs-2';

const Project = () => {
  const bg={
    backgroundColor:'white',
    height:"350px",
    width:"350px",
    padding:"0px 0px 0px 0px",
    margin:"0px 0px 0px 0px",
    border:"15px solid #e6fff7",
    
  }
  const head = {
    fontSize:"15px",
    padding:"7px 0px 7px 5px",
    borderBottom:"inset 1.5px lightgrey",
    marginBottom:"50px"
  }
  const charStyle = {
    marginTop:"35px",
    align:"left",
    margin:"auto"
  }
  var charttData={
    labels: ['EChallan','RLVD','SLVD','VOC','Traffic Sentinals'],
    datasets:[
      {
        label:'Xopulation',
        data:[
          15,
          46,
          30,
          8,
          1,
        ],
        backgroundColor:[
          '#7575d7',
          '#e65c00',
          '#b8b8ad',
          '#ffbf00',
          '#00bfff',
        ],
        // borderWidth:30,
        // borderAlign:'inner',
        borderColor:'white',
        // hoverBorderWidth:3,
        hoverBorderColor:'white',
      
      }],
  }
  return <React.Fragment>
    <div style={bg} className="col-md-4">
      <div style={head}>
        Challan Generated through channels
      </div>
      <div style={charStyle}>
      <Doughnut
          data={charttData}
          options={{
            title:{
            display:false,
            text:'',
            fontSize:20,
            position:'left'
          },
          legend:{
            display:true,
            position:'bottom',
            align:'center',
            labels:{
              // fontColor:'white',
              boxWidth:5,
              fontSize:8,
              padding:15,
            },
          },
          layout:{
            padding:{
              left:20,
              right:0,
              bottom:0,
              top:0,
            },
            
          },
          tooltips:{
            enabled:false
          },
          responsive:true,
          cutoutPercentage:73,
          
          
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
    </div> 
  </React.Fragment>
} 
export default Project