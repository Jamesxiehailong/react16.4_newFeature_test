import * as React from 'react'
// 创建context实例
const ThemeContext = React.createContext({
  background: 'red',
  color: 'white',
  text:'哈哈哈哈哈',
  changes:()=>{}
});


class Addvalue extends React.Component{
  render(){
      return(
          <div>          
               <Title>Hello React Context API</Title>
          </div>
      )
  }
}

class Title extends React.Component {
  /**
   * handleChange
   */
  public handleChange = (changes,event)=> {
    changes({
      background:'#f36',
      color:'#ccc',
      text:event.target.value
    })
  }
  render () {
    return (
      <ThemeContext.Consumer>
        { ({changes,...theme}) => (
          <div>  
            <div>
              这是孙子组件
            </div>
            <h1 style={{background: theme.background, color: theme.color}}>
              {this.props.children}
            </h1>
            <input onChange={this.handleChange.bind(this,changes)} style={{height:28}} value={theme.text}></input>
            <div>
             {theme.text}
            </div>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}
export default class Contenxtcom extends React.Component<any,any>{
  
  constructor(props){
    super(props)
    this.state = {
      values:{
        background:'#39f',
        color:'#fff',
        text:'略略略略',
        changes:this.handleChange
      }
    }
  }
  /**
   * handleChange
   */
  public handleChange =(value)=> {
    console.log({
      ...this.state.values,
      ...value
    })
    this.setState({
      values:{
        ...this.state.values,
        ...value
      }
    })
  }
  render(){
    const {values} = this.state
    const new_context = Object.assign({},...values,this.handleChange)
    return(
      <ThemeContext.Provider value={new_context}>
      <div>
          这是祖先组件对应的context值为
          <span>{JSON.stringify(values)}</span>
      </div>
      <Addvalue />
      </ThemeContext.Provider>  
      
    )
  }
}