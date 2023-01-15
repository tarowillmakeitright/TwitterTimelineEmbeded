import React from "react";
// import "../components/styles/RedditMatome.css";
// import "@material/tooltip/styles";

import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";


// custom hook to get the current pathname in React

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
//   >
//     •
//   </Box>
// );




class RedditMatome extends React.Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }

  // ComponentDidMount is used to
  // execute the code
  componentDidMount() {
    fetch("https://github.com/tarowillmakeitright/TwitterTimelineEmbeded/db.json")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true,
        });
      });
  }
  render() {
    const { DataisLoaded, items, card} = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1> Pleses wait some time.... </h1>{" "}
        </div>
      );

     

    return (
      <>
        <div className="App">
          <h1>Reddit Matome</h1>
          {items.map((item) => (
            <React.Fragment>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                 Number of Items {item.id};
                </Typography>
                <Typography variant="h5" component="div">
                  Title: {item.Title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Score: {item.Score}
                </Typography>
                <Typography variant="body2">
                  Total Comments: {item.TotalComments}
                  <br />
                  Post Text: {item.PostText}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">
                  <a href={item.PostURL}> Learn More</a>
                </Button>
              </CardActions>
            </React.Fragment>
          ))}
        </div>
        <Box sx={{ minWidth: 275 }}>
          <Card variant="outlined">{card}</Card>
        </Box>
      </>
    );
  }
}

export default RedditMatome;
