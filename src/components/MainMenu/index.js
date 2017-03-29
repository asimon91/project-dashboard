import React from 'react';
import Menu from 'material-ui/Menu';
import Paper from 'material-ui/Paper';
import MenuItem from 'material-ui/MenuItem';
import FontIcon from 'material-ui/FontIcon';
import { redirectToRoute } from '../../utils/http_functions'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions/ui';

function mapStateToProps(state) {
    return {
        menu_open: state.ui.menu_open
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

const style = {
    paper: {
        display: 'inline-block',
        height: '100.7%',
        width: '224px',
    },
    hidden: {
        display: 'inline-block',
        height: '100.7%',
        width: '224px',
        marginLeft: '-16em'
    }
};

@connect(mapStateToProps, mapDispatchToProps)
export default class MainMenu extends React.Component {
    render() {
        let actualStyle=style.paper;
        if(!this.props.menu_open){
            actualStyle=style.hidden
        }
        return (
            <div>
                <Paper style={actualStyle} zDepth={2}>
                    <Menu disableAutoFocus={true}>
                        <MenuItem primaryText="Timer" leftIcon={<FontIcon className="material-icons">watch_later</FontIcon>} />
                        <MenuItem primaryText="Dashboard" leftIcon={<FontIcon className="material-icons">dashboard</FontIcon>} />
                        <MenuItem primaryText="Projectes" onTouchTap={redirectToRoute("/projects")} leftIcon={<FontIcon className="material-icons">folder</FontIcon>} />
                        <MenuItem primaryText="Usuaris" leftIcon={<FontIcon className="material-icons">account_circle</FontIcon>} />
                        <MenuItem primaryText="Empreses" leftIcon={<FontIcon className="material-icons">business_center</FontIcon>} />
                        <MenuItem primaryText="Configuració" leftIcon={<FontIcon className="material-icons">settings</FontIcon>}/>
                    </Menu>
                </Paper>
            </div>
        );
    }
}