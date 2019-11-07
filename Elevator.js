function Start(props) {
    return (
        <button 
            className=""
            onClick={() => props.startClick()}
        >
            {props.start}
        </button>
    );
}

class Controll extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            startFloor: 0,
            floorCurr: 0
        }
    }

    startClick(i){
        this.setState({
            startFloor: i,
            floorCurr: this.state.startFloor,
        });
    }

    renderStart(i) {
        return(
            <Start 
                start={i} 
                startClick={() => this.startClick(i)}
            />
        )
    }

    render() {
        const start = this.state.startFloor;
        const current = this.state.floorCurr;
        let status;
        let curr;
        while(true){
            curr = 'Tầng hiện tại: ' +current;
            if (start < current) 
            {
                status = ' Thang máy đi xuống tầng: '+start;
                break;
            } 
            else if(start > current) 
            {
                status = ' Thang máy đi lên tầng: '+start;
                break;
            } 
            else 
            {
                status = 'Đón khách ở tầng: '+current;
                break;
            }
        }
        return (
            <div>
                <div className="board-row">
                    {curr}
                    <br></br>
                    {status}
                </div>
                <hr></hr>
                <div className="board-row"> 
                    {this.renderStart(9)}
                    {this.renderStart(8)}
                </div>
                <div className="board-row"> 
                    {this.renderStart(7)}
                    {this.renderStart(6)}
                </div>
                <div className="board-row"> 
                    {this.renderStart(5)}
                    {this.renderStart(4)}
                </div>
                <div className="board-row">
                    {this.renderStart(3)}
                    {this.renderStart(2)}
                </div>
                <div className="board-row">
                    {this.renderStart(1)}
                    {this.renderStart(0)}
                </div>
            </div>
        )
    }
}

class App extends React.Component{
    
}

ReactDOM.render(
    <Controll />,
    document.getElementById('root')
)