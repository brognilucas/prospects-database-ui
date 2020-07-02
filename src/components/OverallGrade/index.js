import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function OverallGrade({ overall, color, ...props }) {
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress
        variant="static"
        size={150}
        style={{ color }}
        value={overall * 10}
        {...props}
      />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          style={{
            color,
            fontWeight: "bold",
            fontSize: 30
          }}>
          {overall}
        </Typography>
      </Box>
    </Box>
  );
}

export default OverallGrade;
