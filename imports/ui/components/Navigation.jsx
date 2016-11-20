import React from 'react';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default class Navigation extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {open: false};
  }
  
  handleToggle = () => this.setState({open: !this.state.open});
  handleClose = () => this.setState({open: false})
  openSource = () => window.open("https://github.com/NoahVlncrt/Astronomical")
  
  render(){
    return (
      <div>
        <AppBar
          title="Astronomical"
          onLeftIconButtonTouchTap={this.handleToggle}/>
        <Drawer
          docked={false}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}>
          <MenuItem onTouchTap={this.handleClose,this.openSource}>Source</MenuItem>
        </Drawer>
      </div>
    );
  }
}