import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import newStyle from '../Style.less'
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Card from '@material-ui/core/Card';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { CLOSE_MENU, OPEN_MENU, CLOSE_PROFILE, OPEN_PROFILE } from '../constants/actionTypes';
import Popper from '@material-ui/core/Popper';
import Paper from '@material-ui/core/Paper';
import Sidemenu from './drawer';
import MenuList from '@material-ui/core/MenuList';

const mapDispatchToProps=dispatch=>({
    handleClose:()=>dispatch({
        type:CLOSE_MENU
    }),
    handleOpen:()=>dispatch({
        type:OPEN_MENU
    }),
    profileClose:()=>dispatch({
        type:CLOSE_PROFILE
    }),
    profileOpen:()=>dispatch({
        type:OPEN_PROFILE
    })
})
function mapStateToProps(state){
    console.log("in mafsfdsf====----"+state.Displaypage)
    return {
        open:state.Displaypage.open,
        profile_open:state.Displaypage.profile_open
    }
}
class AppHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl:null
        }
    }
    handleClose() {
        this.props.handleClose()
    };
    handleOpen (event) {
       
        this.props.handleOpen()
    };

    profileClose() {
        this.props.profileClose()
    }

   profileOpen(event) {
       this.setState({
            anchorEl:event.target.value
        })
        console.log("anchor el----"+this.state.anchorEl)
        this.props.profileOpen()
    }
    render() {
        console.log("open in dash board---- profukieknoji---"+this.props.profile_open)
       
        return (
            <div>
                <AppBar position="static" color="white">
                    <Toolbar>
                        <div className={newStyle.appbarmaindiv}>
                        <div className={newStyle.menuAndkeep}>
                        {this.props.open?
                        (
                            <IconButton >       
                                <MenuIcon  onClick={()=>this.handleClose()}/>
                            </IconButton>
                        ):
                        (
                            <IconButton >
                                <MenuIcon  onClick={(event)=>this.handleOpen(event)}/>
                            </IconButton>
                            )
                        }
                            
                            <div>
                                <img src={require('../../assests/keep.png')}></img>
                                </div>

                            <div className={newStyle.keep}>
                                Keep
            </div>
            </div>
                            <div className={newStyle.searchmaindiv}>
                                <div >
                                    <SearchIcon />
                                </div>
                                <InputBase className={newStyle.searchbar}
                                    placeholder="Search…"
                                />
                          </div>

            <div  className={newStyle.viewimage}>
                            <div>
                                <img src={require('../../assests/view.svg')}></img>
                            </div>



                        <div className={newStyle.profile}>
                       {this.props.profile_open?
                        <AccountCircle onClick={()=>this.profileClose()} />
                        :
                        <AccountCircle onClick={(event)=>this.profileOpen(event)} />
                       }

                        <Popper placement="bottom-start" open={this.props.profile_open} anchorEl={this.state.anchorEl} >
      
                        <Paper>
                    <MenuList>
                        <MenuItem >Profile</MenuItem>
                        <MenuItem >My account</MenuItem>
                        <MenuItem >Logout</MenuItem>
                    </MenuList>
                </Paper>
          </Popper>
 </div>
                        </div>
                        </div>
                        <Sidemenu/>
                    </Toolbar>
                </AppBar>
                     
            </div>
        )
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AppHeader)




