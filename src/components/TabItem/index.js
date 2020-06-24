import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

export default function TabItem({ children, tab, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={!(tab === index)}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {tab === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
