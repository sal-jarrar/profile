import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

const FundStoryModel = ({ isOpen, toggle }) => {
  return (
    <Modal isOpen={isOpen} toggle={toggle} style={{ background: "#444" }}>
      <ModalHeader toggle={toggle}>
        <h5 style={{ color: "#000" }}>
          Please use these credentials for login!
        </h5>
      </ModalHeader>
      <ModalBody>
        <p style={{ color: "#000" }}>Email: john@demo.io</p>
        <p style={{ color: "#000" }}>Password: pass_good</p>
      </ModalBody>
      <ModalFooter>
        <a
          className="btn btn-secondary px-4 ml-1"
          type="button"
          href="https://app.fundstory.com/login"
          target="_blank"
          rel="noreferrer"
        >
          Go to wbsite
        </a>
        <button className="btn btn-danger" type="button" onClick={toggle}>
          Close
        </button>
      </ModalFooter>
    </Modal>
  );
};

export default FundStoryModel;
