import React, {useState} from 'react'
import './Success.css'
import Modal from 'react-modal';

const Success = (props) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    function closeModal() {
        setIsOpen(false);
      }
      function openModal() {
        setIsOpen(true);
      }
    return (
        <div>
            {/* <button onClick={openModal}>Open Modal</button> */}
            <Modal
                isOpen={props.show}
                onRequestClose={props.close}
                contentLabel="Example Modal"
                overlayClassName="Overlay"
                className='success-modal'
            >
                <div className='d-flex'>
                    <h2 className='success-header'>Success</h2>
                    <button className='close-modal-button' onClick={props.close}><i class="fa fa-times" aria-hidden="true"></i></button>
                </div>
                <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                    <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/>
                    <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                </svg>
                <p className='mt-5'>You have successfully changed Hotel</p>
            </Modal>
        </div>
            )
}
export default Success