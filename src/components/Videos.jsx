import { Stack, Box } from "@mui/material";
import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";

const Videos = ({ videos }) => {
  return (
    <Stack direction="row" flexWrap="wrap" justifyContent="start" gap="2">
      {videos.map((video, index) => (
        <Box key={index}>
          {video.id.videoId && <VideoCard video={video} />}
          {video.id.channelId && <ChannelCard channelDetail={video} />}
        </Box>
      ))}{" "}
    </Stack>
  );
};

export default Videos;
