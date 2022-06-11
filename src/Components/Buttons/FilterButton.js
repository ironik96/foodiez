import filterIcon from "../../images/filter.png";
import { useState } from "react";
import FiltersModal from "../modals/FiltersModal";
import { Button } from "react-bootstrap";

const FilterButton = () => {
  const [modalShow, setModalShow] = useState(false);
  const openModal = () => setModalShow(true);
  const closeModal = () => setModalShow(false);
  return (
    <>
      <Button variant="lite" onClick={openModal}>
        <img src={filterIcon} alt="filter" className="filter-button" /> Filters
      </Button>
      <FiltersModal {...{ modalShow, closeModal }} />
    </>
  );
};

export default FilterButton;
