import React,{Component} from 'react';
import { TextField, Card, Divider } from '@material-ui/core';
import newStyle from '../Style.less';
import { INPUT_EMAIL, INPUT_PASSWORD } from '../constants/actionTypes';
import { connect } from 'react-redux';
const mapDispatchToProps=dispatch=>({
    inputEmail:(value)=>dispatch({
        type:INPUT_EMAIL,payload:value
    }),
    inputPassword:(value)=>dispatch({
        type:INPUT_PASSWORD,payload:value
    })
})

function mapStateToProps(state){
    console.log("Login Props",state.Login)
    return{
        email:state.Login.email,
        password:state.Login.password
    }
}
class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            emailError:"",
            passwordError:""
        }
    }

    handleEmailChange(event){
        var a=event.target.value
        if (a.length===0){
            this.setState({
                emailError:"required"
            })}
        else if(a.length>=3  ){
            this.setState({
                emailError:""
            })}
        this.props.inputEmail(event.target.value)
    }
    handlePasswordChange(event){
        var b=event.target.value
        if (b.length===0){
            this.setState({
                passwordError:"required"
            })
        }
        else if(b.length<7){
            this.setState({
                passwordError:"min 8 char required"
            })
        }
        else if(b.length>=8)
        {
            this.setState({
                passwordError:""
            })
        }
        this.props.inputPassword(event.target.value)

    }
render(){
    return(
        <div className={newStyle.loginmaindiv} >
            <Card>
        <div className={newStyle.innerlogin}>
        <div className={newStyle.nameslogin}>
            <h1>Login Page</h1>
            <TextField
          id="outlined-name"
          label="Name"
        //   className={classes.textField}
          value={this.props.email}
          onChange={(event)=>this.handleEmailChange(event)}
          margin="normal"
          variant="outlined"
          error={this.state.emailError}
          helperText={this.state.emailError}
            />
            <TextField
          id="outlined-name"
          label="Password"
        //   className={classes.textField}
          value={this.props.password}
          onChange={(event)=>this.handlePasswordChange(event)}
          margin="normal"
          variant="outlined"
          error={this.state.passwordError}
          helperText={this.state.passwordError}
            />
            <div>
        <button>
            Login
        </button>
        </div>
            </div>

        </div>
        </Card>
        </div>
        

    )}
}
export default connect(mapStateToProps,mapDispatchToProps)(Login)