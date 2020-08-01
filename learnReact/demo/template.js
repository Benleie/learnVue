/*45 use-array-map-to-dynamically-render-elements*/
const textAreaStyles = {
  width: 235,
  margin: 5
};

class MyToDoList extends React.Component {
  constructor(props) {
    super(props);
    // change code below this line
    this.state = {
      userInput: "",
      toDoList:[]
    }
    // change code above this line
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(e) {
    // console.log(e.target)
    console.log("?")
    const itemsArray = e.target.value.split(',');
    this.setState({
        userInput: e.target.value,
        toDoList: itemsArray    
    });
  }
  render() {
    const items = this.state.toDoList.map((item)=>{
      return (
        <li key={item.toString()}>
          {item}
        </li>
      )
    }
        
    ); // change code here
    return (
      <div>
        <textarea
          onChange={this.handleChange}
          value={this.state.userInput}
          style={textAreaStyles}
          placeholder="Separate Items With Commas" /><br />
        <h1>My "To Do" List:</h1>
        <ul>
          {items}
        </ul>
      </div>
    );
  }
};

ReactDOM.render(
    <MyToDoList />,
    document.getElementById('root')
);