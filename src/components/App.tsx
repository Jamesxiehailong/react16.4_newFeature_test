import * as React from "react";
import Card from './card/card';
import Button from './button/button'
import formCreate from './forms/form'
const reactLogo = require("./../assets/img/react_logo.svg");
@formCreate
export default class App extends React.Component<any,any> {
    render() {
        return (
            <div className="app">
                <Card>
                  <p>
                    这是新建的card的子组件
                  </p>
                </Card>
                <Button type='primary' size="middle">
                  lalalala
                </Button>
                <div>
                <label id="username">
                  账户
                </label>
                <input name="username" {...this.props.getField('username')}/>
                 </div>
              <div>
                <label id="password">
                  密码
                </label>
                <input name="password" {...this.props.getField('password')}/>
              </div>
              <button onClick={this.props.handleSubmit}>提交</button>
              </div>
        );
    }
}
