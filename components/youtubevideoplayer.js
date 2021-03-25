import ReactPlayer from "react-player";
import { Box } from "@chakra-ui/react";

const YoutubeVideoPlayer = (props) => {
  const { id, thumb } = props;
  const url = `https://www.youtube.com/watch?v=${id}`;
  return (
    <Box className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url={url}
        light={thumb}
        width="100%"
        height="100%"
      />
    </Box>
  );
};
export default YoutubeVideoPlayer;
