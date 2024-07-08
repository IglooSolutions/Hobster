import React from "react";
import { Modal, Button, Accordion } from "react-bootstrap";
import hopsStory from "@/public/content/hopsStory.json";
import "./styles.css";

interface HopsStoryModalProps {
  show: boolean;
  handleClose: () => void;
}

const HopsStoryModal: React.FC<HopsStoryModalProps> = ({
  show,
  handleClose,
}) => {
  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Hops Story</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Accordion defaultActiveKey="0">
          {hopsStory.chapters.map((chapter, index) => (
            <Accordion.Item eventKey={index.toString()} key={index}>
              <Accordion.Header>{chapter.title}</Accordion.Header>
              <Accordion.Body>
                {chapter.contentLines.map((line, i) => (
                  <React.Fragment key={i}>
                    <div className="mb-1">{line}</div>
                    <br />
                  </React.Fragment>
                ))}
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default HopsStoryModal;
