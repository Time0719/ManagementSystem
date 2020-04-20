import React, { memo, useState } from 'react';
import UseStyles from '../../utilities/use.styles';
import {
    ListSubheader, List, ListItem, ListItemText, Collapse, ExpandLess, ExpandMore, ListItemProps
} from '../../utilities/material-ui.index';
import { updatePage } from '../../redux/user.redux';
import { connect } from 'react-redux';


const MENU = [
    {
        name: "业务参数",
        path: "业务参数",
        open: true,
        children: [
            {
                name: "交易所",
                path: "/exchanges"
            },
            {
                name: "品种信息",
                path: "/products"
            }
        ]
    },
    {
        name: "客户配置",
        path: "客户配置",
        open: false,
        children: [
            {
                name: "客户管理",
                path: "/customers",
            }
        ]
    }
];

export const Navigation = memo(connect((s: any) => s.user, { updatePage })((props: any) => {
    const classes: any = UseStyles();
    const [openMenu, setOpenMenu] = useState(MENU);

    const handleClick = (i: number) => {
        let data = JSON.parse(JSON.stringify(openMenu));
        data[i].open = !data[i].open;
        setOpenMenu(data);
    };

    const handlePages = (c: any) => {
        props.updatePage(c.path);
    };

    return (
        <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader component="div" id="nested-list-subheader">管理系统</ListSubheader>
            }
            className={classes.navigation}
        >
            {
                openMenu.map((v: any, i: number) => {
                    return (
                        <div key={v.name}>
                            <ListItem button onClick={() => handleClick(i)}>
                                <ListItemText primary={v.name} />
                                {v.open ? <ExpandLess /> : <ExpandMore />}
                            </ListItem>

                            {
                                v.children.map((c: any) => {
                                    return (
                                        <Collapse in={v.open} timeout="auto" unmountOnExit key={c.name as any}>
                                            <List component="div" disablePadding onClick={() => handlePages(c)}>
                                                <ListItem button className={classes.navigationNested}>
                                                    <ListItemText primary={c.name} />
                                                </ListItem>
                                            </List>
                                        </Collapse>
                                    );
                                })
                            }
                        </div>
                    );
                })
            }
        </List>
    );
}));