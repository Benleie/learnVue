// const JSX = <h1>Hello JSX!</h1>

const JSX = (
    <div>
        <h1>hh</h1>
        <p>hhh</p>
        <ul>
            <li>lalala</li>
            <li>lalala</li>
            <li>lalala</li>
        </ul>
    </div>
)

ReactDOM.render(JSX, document.getElementById('challenge-node'))

class MyComponent extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <h1>My First React Component!</h1>
            </div>
        );
    }
}
ReactDOM.render(<MyComponent />, document.getElementById('challenge-node'))


