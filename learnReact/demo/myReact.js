class MyComponent2 extends React.Component {
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
    return (
       <div>
         <button onClick={this.toggleDisplay}>Toggle Display</button>
         {this.state.display && <h1>Displayed!</h1>}
       </div>
    );
  }
};

class MySection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // display: true
    }
  }
  render() {
    // change code below this line
    return (
    	<div>
	    	<section class="click blue">
				<p>blue</p>
			</section>
    	</div>
        
    );
  }
};

const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};
const Fruits = () => {
  return (
    <div>
    	<TypesOfFruit />
    </div>
  );
};


class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true
    }
  }
  
  render() {
    return (
       <div>
       		<header>React</header>
         	{/*<MySection />
         	<MySection />
         	<MySection />*/}
         	<Fruits />
         	<Fruits />
         	<Fruits />
       </div>
    );
  }
};

console.log(">>>")
ReactDOM.render(
    <MyComponent />,
    document.getElementById('React')
);
