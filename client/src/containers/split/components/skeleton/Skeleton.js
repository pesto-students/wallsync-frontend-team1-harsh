import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

const SkeletonComp = () => {
  return (
    <div>
      <Stack spacing={1}>
        {/* For variant="text", adjust the height via font-size */}
        <Skeleton animation="wave" sx={{ bgcolor: '#4f5250' }} variant="rounded" width={"auto"} height={120} />
        <Skeleton animation="wave" sx={{ bgcolor: '#4f5250' }} variant="rounded" width={"auto"} height={120} />
        <Skeleton animation="wave" sx={{ bgcolor: '#4f5250' }} variant="rounded" width={"auto"} height={120} />
        <Skeleton animation="wave" sx={{ bgcolor: '#4f5250' }} variant="rounded" width={"auto"} height={120} />
        <Skeleton animation="wave" sx={{ bgcolor: '#4f5250' }} variant="rounded" width={"auto"} height={120} />
      </Stack>
    </div>
  );
};

export default SkeletonComp;
