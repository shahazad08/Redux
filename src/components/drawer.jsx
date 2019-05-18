import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { MenuItem , MuiThemeProvider,createMuiTheme} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import { connect } from 'react-redux';
function mapStateToProps(state){
    console.log("in mafsfdsf====----"+state.Displaypage.open)
    return {
        open:state.Displaypage.open
    }
}
const theme = createMuiTheme({
    overrides: {
        MuiDrawer: {
            paperAnchorLeft: {
                top: 70,
                width: 240,
            },
        },
    }
});


class Sidemenu extends React.Component {
    
    render() {
        console.log("open in dash board"+this.props.open)
        return (
            <MuiThemeProvider theme={theme}>
            <Drawer
                variant="persistent"
                open={this.props.open}
                width={250}
            >
                <MenuItem id="noteMenu">
                    Notes
                </MenuItem>

                <MenuItem id="reminderMenu">
                    Reminders
                </MenuItem>
                < Divider />
                <MenuItem id="labelMenu" onClick={this.handleEditLabel}>

                    Edit Labels
                  </MenuItem>
                <MenuItem id="archiveMenu">
                    Archive
                    </MenuItem>

                <MenuItem id="trashIcon">

                    Bin
                    </MenuItem>

            </Drawer>
            </MuiThemeProvider>

        );
    }
}

export default connect(mapStateToProps,null)(Sidemenu)
