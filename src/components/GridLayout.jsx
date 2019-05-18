import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { MenuItem , MuiThemeProvider,createMuiTheme, Card, Button} from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import { connect } from 'react-redux';
import newStyle from '../Style.less'
class GridLayout extends React.Component {
    
    render() {

        return (
            <div className={newStyle.cardview} >
            <Card >
        
              <Button size="small">Learn More</Button>
    
          </Card>
          </div>
        );
      }
    }


export default connect(null,null)(GridLayout)
