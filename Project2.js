import React from 'react';
import {Line} from 'react-chartjs-2'


const Project2 = () => {
  const bg={
    backgroundColor:'white',
    height:"350px",
    // width:"auto",
    padding:"0px 30px 0px 0px",
    margin:"0px 0px 0px 0px",
    border:"15px solid #e6fff7"
  }
  const head = {
    fontSize:"15px",
    // width:"auto",
    padding:"7px 0px 7px 5px",
    borderBottom:"inset 1.5px lightgrey",
    marginBottom:"40px"
  }
  var charttData={
    labels: ['','','','',''],
    datasets:[
      {
        label:'',
        data:[
          0,
          100,
          80,
          225,
          150,
        ],
        backgroundColor:[
        'rgb(26, 178, 255,0.35)'
        ],
        // borderWidth:30,
        // borderAlign:'inner',
        borderColor:'white',
        // hoverBorderWidth:3,
        hoverBorderColor:'white',
      },
      {
        label:'',
        data:[
          200,
          22,
          200,
          42,
          20,
        ],
        backgroundColor:[
        'rgb(207, 207, 201,0.35)',
        ],
        // borderWidth:30,
        // borderAlign:'inner',
        borderColor:'white',
        // hoverBorderWidth:3,
        hoverBorderColor:'white',
      
      }],
      
  }
return <React.Fragment>
  <div className="col-md-8" style={bg}>
    <div style={head} >
      Challans issued against with no entry
    </div>
    <div> 
    <Line
          data={charttData}
          options={{
            title:{
            display:false,
            text:'',
            fontSize:20,
            position:'left'
          },
          maintainAspectRatio:false,
          legend:{
            display:true,
            position:'bottom',
            align:'center',
            labels:{
              // fontColor:'white',
              boxWidth:0,
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
          // cutoutPercentage:73,
          scales:{
            yAxes:[{
              ticks:{
                beginAtZero:true,
                display:true,
                stepSize:75
              },
              gridLines:{
                display:true,
                lineWidth:[2,1.5,1,0.5]
              }
            }],
            xAxes:[{
              gridLines:{
                display:false
              }
            }]

          }
        }}
        height={270}
        />
    </div>
  </div>
</React.Fragment>
}

export default Project2