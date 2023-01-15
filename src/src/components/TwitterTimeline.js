import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import "../components/styles/twittertimeline.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function TwitterTimeline () {
  return (
    <div className="centerContent">
      <div className="selfCenter spaceBetween">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2} columns={16}>
            <Grid xs={8}>
              <Item>
                {" "}
                <TwitterTimelineEmbed
                  sourceType="profile"
                  screenName="gigazine"
                  onLoad={function noRefCheck() {}}
                  options={{
                    height: 300,
                    width: 400,
                  }}
                  theme="light"
                />
              </Item>
            </Grid>
            <Grid xs={8}>
              <Item>
                <TwitterTimelineEmbed
                  sourceType="profile"
                  screenName="nikkei"
                  onLoad={function noRefCheck() {}}
                  options={{
                    height: 300,
                    width: 400,
                  }}
                  theme="light"
                />
              </Item>
            </Grid>
            <Grid xs={8}>
              <Item>
                <TwitterTimelineEmbed
                  sourceType="profile"
                  screenName="sak_07_"
                  onLoad={function noRefCheck() {}}
                  options={{
                    height: 300,
                    width: 400,
                  }}
                  theme="light"
                />
              </Item>
              </Grid>
              <Grid xs={8}>
              <Item>
                <TwitterTimelineEmbed
                  sourceType="profile"
                  screenName="zerohedge"
                  onLoad={function noRefCheck() {}}
                  options={{
                    height: 300,
                    width: 400,
                  }}
                  theme="light"
                />
              </Item>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
}

export default TwitterTimeline;
