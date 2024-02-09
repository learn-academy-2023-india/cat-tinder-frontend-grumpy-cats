import React, { useState } from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Button, Modal, ModalHeader, ModalBody } from "reactstrap"
import { NavLink } from "react-router-dom"
const CatIndex = ({ cats }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCat, setSelectedCat] = useState(null);

  const toggleModal = () => setModalOpen(!modalOpen);

  const handleSeeDetailsClick = (cat) => {
    console.log(cat)
    setSelectedCat(cat);
    toggleModal();
  };

  return (
    <main className="cat-index-cards">
      {cats.map((cat, index) => (
        <Card
          style={{
            width: "14rem"
          }}
          key={index}
        >
          <img alt={`profile of a cat named ${cat.name}`} src={cat.image} onClick={() => handleSeeDetailsClick(cat)} />
          <CardBody>
            <CardTitle tag="h5">{cat.name}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Age: {cat.age}
            </CardSubtitle>
            <Button className="card-button" >
              <NavLink to={`/catshow/${cat.id}`}className="nav-link">
                See More Details
              </NavLink> 
            </Button>
          </CardBody>
        </Card>
      ))}

      <Modal isOpen={modalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>{selectedCat?.name}</ModalHeader>
        <ModalBody>
          {selectedCat && (
            <div>
              <img alt={`profile of a cat named ${selectedCat.name}`} src={selectedCat.image} />
            </div>
          )}
        </ModalBody>
      </Modal>
    </main>
  );
};

export default CatIndex;