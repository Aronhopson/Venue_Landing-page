import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = (props) => {
    return (
        <Drawer
            anchor="right"
            open={props.open}
            onClose={() => props.onClose(false)}
        >
            <List className="nav">
                <ListItem button onClick={() => console.log("main")}>
                 EVENTS
            </ListItem>
            <ListItem button onClick={() => console.log("main")}>
                 Venue
            </ListItem>
            <ListItem button onClick={() => console.log("main")}>
                    Location
            </ListItem>
            <ListItem button onClick={() => console.log("main")}>
                Pricing
            </ListItem>
            <ListItem button onClick={() => console.log("main")}>
                 Location
            </ListItem>
            </List>
        </Drawer>
    );
};

export default SideDrawer;