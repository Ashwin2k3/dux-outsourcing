import React from 'react';
import { Grid, Typography, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={3}>
        <Typography variant="h6" color="white" gutterBottom>
          Our Services
        </Typography>
        <List>
          <ListItem disablePadding>
            <ListItemButton component={RouterLink} to="/services#accounting">
              <ListItemText primary="Accounting Solutions" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={RouterLink} to="/services#bas">
              <ListItemText primary="BAS Returns" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={RouterLink} to="/services#payroll">
              <ListItemText primary="Payroll Compliances" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={RouterLink} to="/services#tax">
              <ListItemText primary="Tax Returns" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={RouterLink} to="/services#smsf">
              <ListItemText primary="SMSF Compliance" />
            </ListItemButton>
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
};

export default Footer; 