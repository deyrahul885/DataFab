import { Drawer, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { useState } from 'react'

const DrawerComp = ({openDrawer}) => {

    // const [openDrawer,setOpenDrawer] = useState(false)

  return (
    <>
    <Drawer open={openDrawer} >
        <List sx={{top:'80px'}}>
            <ListItemButton>
                <ListItemIcon>
                    <ListItemText>
                        Platform
                    </ListItemText>
                </ListItemIcon>
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <ListItemText>
                        Services
                    </ListItemText>
                </ListItemIcon>
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    <ListItemText>
                        Products
                    </ListItemText>
                </ListItemIcon>
            </ListItemButton>
        </List>
    </Drawer>
    </>
  )
}

export default DrawerComp