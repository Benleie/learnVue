class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  toggleDisplay() {
    this.setState({
      display: !this.state.display
    });
  }
  render() {
    // change code below this line
    let header = null;
    if(this.state.display)
        header = <h1>Displayed!</h1>
    else 
        header = null

    return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
         { header }
         
       </div>
    );
  }
};

ReactDOM.render(
  <MyComponent />,
  document.getElementById('root')
)