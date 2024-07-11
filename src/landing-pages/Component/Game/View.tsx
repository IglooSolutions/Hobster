import React from "react";
import { Modal, Button, Tabs, Tab } from "react-bootstrap";
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
    <Modal show={show} onHide={handleClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Hops Story</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Tabs defaultActiveKey="0" id="hops-story-tabs">
          {hopsStory.chapters.map((chapter, index) => (
            <Tab eventKey={index.toString()} title={chapter.header} key={index}>
              <div className="modal-title mt-4 mb-2">{chapter.title}</div>
              {chapter.contentLines.map((line, i) => (
                <React.Fragment key={i}>
                  <div className="mb-1">{line}</div>
                  <br />
                </React.Fragment>
              ))}
            </Tab>
          ))}
        </Tabs>
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
