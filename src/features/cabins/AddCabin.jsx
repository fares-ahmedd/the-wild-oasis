import styled from "styled-components";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CabinTable from "./CabinTable";
import CreateCabinForm from "./CreateCabinForm";
const StyledModal = styled.div`
  text-align: center;
`;
function AddCabin() {
  return (
    <Modal>
      <StyledModal>
        <Modal.Open opens="cabin-form">
          <Button>Add new cabin </Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>

        <Modal.Open opens="table">
          <Button>Show table</Button>
        </Modal.Open>
        <Modal.Window name="table">
          <CabinTable name="table" />
        </Modal.Window>
      </StyledModal>
    </Modal>
  );
}

// function AddCabin() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div>
//       <Button onClick={() => setIsOpen((show) => !show)}>Add new cabin</Button>
//       {isOpen && (
//         <Modal onClose={() => setIsOpen(false)}>
//           <CreateCabinForm onClose={() => setIsOpen(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// }

export default AddCabin;
