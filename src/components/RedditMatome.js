import React from "react";
import "../components/styles/RedditMatome.css";



// custom hook to get the current pathname in React

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
    fetch(
      "https://liljapkid.netlify.app/db.json"
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true,
        });
      });
  }
  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1> Pleses wait some time.... </h1>{" "}
        </div>
      );

    return (
      <div className="App">
        <h1> Fetch data from an api in react </h1>{" "}
        {items.map((item) => (
          <ol key={item.id}>
            TITLE: {item.Title}, POSTTEXT: {item.PostText}, SCORE:{item.Score}, TOTALCOMMENTS:{item.TotalComments},POSTURL{item.PostURL}
          </ol>
        ))}
      </div>
    );
  }
}

export default RedditMatome;
