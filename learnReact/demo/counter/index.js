class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.reset = this.reset.bind(this)
    this.incIfOdd = this.incIfOdd.bind(this)
    this.incAsync = this.incAsync.bind(this)
  }
  increment(){
    this.setState(preState => ({
      count: preState.count + 1
    }));
  }

  decrement(){
    this.setState({
      count: this.state.count - 1
    });
  }

  incIfOdd() {
    if(this.state.count % 2)
        this.setState({
            count: this.state.count + 1
        })
  }
  incAsync() {
	setTimeout(() => {
	    this.setState({
	        count: this.state.count + 1
	    })
	}, 1000);
  }

  reset(){
    this.setState(preState => ({
      count: 0
    }));
  }
  render() {
    return (
      <div>
      	<div>
      		ReactApp Current Count: {this.state.count} apples
      	</div>
      	<div>
      		<button className='inc' onClick={this.increment}>Increment!</button>
        	<button className='dec' onClick={this.decrement}>Decrement!</button>
        	<button className='incIfOdd' onClick={this.incIfOdd}>increment if odd</button>
        	<button className='incAsync' onClick={this.incAsync}>increment async</button>
        	<button className='reset' onClick={this.reset}>Reset</button>
      	</div>
      </div>
    );
  }
};
ReactDOM.render(
	<Counter />,
	document.getElementById('reactApp')
)