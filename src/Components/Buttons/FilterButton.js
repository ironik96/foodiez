import filterIcon from "../../images/filter.png";
import { useState } from "react";
import FiltersModal from "../modals/FiltersModal";

const FilterButton = () => {
  const [modalShow, setModalShow] = useState(false);
  const openModal = () => setModalShow(true);
  const closeModal = () => setModalShow(false);
  return (
    <>
      <button className="btn" onClick={openModal}>
        <img src={filterIcon} alt="filter" className="filter-button" /> Filters
      </button>
      <FiltersModal {...{ modalShow, closeModal }} />
    </>
  );
};

export default FilterButton;
