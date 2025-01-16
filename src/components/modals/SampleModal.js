import Modal from './modal';
import { hideModal } from '../../../../LMS-FE/src/redux/actions';
import { useDispatch } from 'react-redux';
const SampleModal = () => {
  const dispatch = useDispatch();
  return (
    <Modal onClose={() => dispatch(hideModal())}>
      <></>
    </Modal>
  );
};

export default SampleModal;
