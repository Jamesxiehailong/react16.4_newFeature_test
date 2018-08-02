import * as React from 'react';
import './Input.scss'
import PPHOC  from '../form'

interface IStateStander{
  lable:string,
  form:any
}
class Input extends React.Component<IStateStander,any>{
  render(){ 
    const {lable, form} = this.props;
    return (
      <div className='input-body'>
        <span>{this.props.lable}</span>
        <input type="text"  {...this.props.form('text')}/>
      </div>
    )
  }
}

const New_Input = PPHOC(Input)

export default New_Input
