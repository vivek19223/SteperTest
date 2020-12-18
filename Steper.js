import React from 'react';

class Steper extends React.Component {
  state = {
    index: 0,
  };

  renderHelper = () => {
    if (this.state.index >= this.props.children.length) {
      return <div>Finished</div>;
    }
    return <div>{this.props.children[this.state.index]}</div>;
  };

  onButtonClick = e => {
    e.preventDefault ();
    this.setState ({index: this.state.index + 1});
  };
  render () {
    return (
      <div>
        {this.renderHelper ()}
        <button onClick={e => this.onButtonClick (e)}>
          Finish
        </button>
      </div>
    );
  }
}

export default Steper;
