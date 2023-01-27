

const LogOutModal = () => {

    // hideModal = e => {
    //     if (e.code === 'Escape') {
    //       this.props.hideModal();
    //     }
    //   };
    
    //   onBackdropClick = e => {
    //     if (e.currentTarget !== e.target) {
    //       return;
    //     }
    //     this.props.hideModal();
    //   };
    
    //   componentDidMount() {
    //     window.addEventListener('keydown', this.hideModal);
    //   }
    
    //   componentWillUnmount() {
    //     window.removeEventListener('keydown', this.hideModal);
    // }

  return (
    <div onClick={this.onBackdropClick} className={styles.overlay}>
        <div className={styles.modal}>
            <img src={url} alt="Some pic" width="800" />
        </div>
    </div>
  );
};

export default LogOutModal;

// ----------------------------------------------------------

// import PropTypes from 'prop-types';
// import styles from './Modal.module.css';
// import { Component } from 'react';

// export default class Modal extends Component {
//   hideModal = e => {
//     if (e.code === 'Escape') {
//       this.props.hideModal();
//     }
//   };

//   onBackdropClick = e => {
//     if (e.currentTarget !== e.target) {
//       return;
//     }
//     this.props.hideModal();
//   };

//   componentDidMount() {
//     window.addEventListener('keydown', this.hideModal);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.hideModal);
//   }

//   render() {
//     const { url } = this.props;
//     return (
//       <div onClick={this.onBackdropClick} className={styles.overlay}>
//         <div className={styles.modal}>
//           <img src={url} alt="Some pic" width="800" />
//         </div>
//       </div>
//     );
//   }
// }

// Modal.propTypes = {
//   hideModal: PropTypes.func.isRequired,
//   url: PropTypes.string.isRequired,
// };
