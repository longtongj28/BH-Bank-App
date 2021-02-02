import React, { Component } from "react";
import Modal from "react-modal";
class WithdrawButton extends Component {
  state = {
    modalIsOpen: false,
  };

  toggleModal = () => {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen,
    });
  };
  render() {
    return (
      <>
        <button onClick={this.toggleModal} className="account-actions">
          Withdraw
        </button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.toggleModal}
          ariaHideApp={false}
          style={{
              overlay:{
                  background:"rgba(0,0,0,0.6)",
              },
              content:{
                  left: "30%",
                  right: "30%",
                  top: "30%",
                  bottom: "30%",
              }
          }}
        >
            <div>Withdraw Cash</div>
            <div>
                <div>Account Name:</div>
                <input type="select"/>
            </div>
        </Modal>
      </>
    );
  }
}

export default WithdrawButton;
