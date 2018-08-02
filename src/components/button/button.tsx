import * as React from 'react'
import { render } from 'react-dom';
import './button.scss'
export interface TabsProps {
  type?:string,
  size?: 'large' | 'small' | 'middle'
}
export default class Button extends React.Component <TabsProps ,any>{

  static defaultProps = {
    type: 'primary',
    size: 'sss',
  }
   getDerivedStateFromProps(){
     debugger
   }


  render(){
    const {type} = this.props
    return (
      <div className={`buttonCup ${type}`} >
        <button className={type}>
          {this.props.children}
        </button>
      </div>
    )
  }

}