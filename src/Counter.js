import React, {Component} from 'react';

class Counter extends Component {

    state = {
        number: 0,
        fixedNumber: 0
    };

    render() {
        const { number, fixedNumber } = this.state;

        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값: {fixedNumber}</h2>
                <button
                    onClick={()=>{
                        // this.setState({number: number+1});
                        // this.setState({number: this.state.number+1});
                        this.setState( (prevState) => {
                            return {
                                number: prevState.number + 1
                            }
                        }, () => {
                            console.log('방금 seState가 1호출 되었습니다.');
                        });

                        this.setState( (prevState) => ({
                            number: prevState.number +1
                        }), () => {
                            console.log('방금 seState가 2호출 되었습니다.');
                        });
                    }}
                    >
                    +1
                </button>
            </div>
        );
    }
}

export default Counter;