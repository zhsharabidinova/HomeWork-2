import React from 'react';

class Square extends React.Component {
  constructor() {
    super();
    this.state = {
      square1Color: 'red',
      square2Color: 'blue'
    };
  }

  SquareOnClick = () => {
    this.setState({
      square1Color: this.state.square1Color === 'red' ? 'blue' : 'red',
      square2Color: this.state.square2Color === 'red' ? 'blue' : 'red'
    });
  }

  render() {
    const { square1Color, square2Color } = this.state;

    return (
      <div>
        <div className='square' style={{background: square1Color}}
          onClick={this.SquareOnClick}
        />
        <div className='square' style={{background: square2Color}}
          onClick={this.SquareOnClick}
        />
      </div>
    );
  }
}

export default Square;
