import * as React from 'react'

const Test = (props) =>{
  return (
   <dl>
    {
      props.arrData.map((ele,index)=>{
      return(
        <React.Fragment key={ele.id}>
        <dt>{ele.id}</dt>
        <dd>{ele.name}</dd>
      </React.Fragment>
        ) 
      })
      // props.arrData.length
    }
   </dl>
  )
}

export default class Fragments extends React.Component{
  state={
    arrData:[{
      id:'1',
      name:'lalal'
    },{
      id:'2',
      name:'aa'
    },{
      id:'3',
      name:'bb'
    },{
      id:'4',
      name:'cc'
    }]
  }
  render(){
    return(   
      <div> 
          <p>这是fragments</p>
          <Test arrData={this.state.arrData}></Test>
      </div>     
    )
  }
}