import React from "react";
import "./App.css";
import marked from "marked";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
    this.preview = React.createRef();
  }

  componentDidMount() {
    marked.setOptions({
      breaks: true,
    });
    const def =
      "# Level 1 Header \n\n ## Level 2 Header \n\n [inline link](#) \n\n `inline code` \n\n ```\na code block\n```\n\n - a list item \n\n ![inline image](https://jerkeller.com/img/avatar.jpg) \n\n\n \u003E this is a blockquote \n\n **bolded text** **aa**";
    this.setState(
      {
        input: def,
      },
      () => {
        if (this.preview.current) {
          this.preview.current.innerHTML = marked(this.state.input);
        }
      }
    );
  }
  handleChange(value) {
    this.setState(
      {
        input: value,
      },
      () => {
        if (this.preview.current) {
          this.preview.current.innerHTML = marked(this.state.input);
        }
      }
    );
  }

  render() {
    return (
      <div className="App">
        <textarea
          row="100"
          cols="100"
          name="textinput"
          onChange={(event) => {
            this.handleChange(event.target.value);
          }}
          id="editor"
          value={this.state.input}
        ></textarea>
        <div id="preview" ref={this.preview}></div>
      </div>
    );
  }
}

export default App;
