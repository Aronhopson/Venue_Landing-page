import React from 'react';
import {scroller} from 'react-scroll';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = (props) => {

    const scrollToElement = (element) =>{
        scroller.scrollTo(element, {
            duration:1500,
            delay:100,
            smooth:true,
            offset: -92,
        })
        props.onClose(false)
    }
    return (
        <Drawer
            anchor="right"
            open={props.open}
            onClose={() => props.onClose(false)}
        >
            <List className="nav">
                <ListItem button onClick={() => scrollToElement("feature")}>
                 EVENTS
            </ListItem>
            <ListItem button onClick={() => scrollToElement("venue")}>
                 Venue
            </ListItem>
            <ListItem button onClick={() => scrollToElement("location")}>
                    Location
            </ListItem>
            <ListItem button onClick={() => scrollToElement("pricing")}>
                Pricing
            </ListItem>
            <ListItem button onClick={() => scrollToElement("highlight")}>
                Highlight
            </ListItem>
            </List>
        </Drawer>
    );
};

export default SideDrawer;