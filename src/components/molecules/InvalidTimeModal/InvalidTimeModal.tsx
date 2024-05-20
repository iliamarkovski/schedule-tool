import { useDispatch } from 'react-redux';
import { Modal } from '../Modal';
import { AppDispatch } from '../../../store';
import { closeModal } from '../../../store/slices/modal';

export const InvalidTimeModal = () => {
  const dispatch: AppDispatch = useDispatch();

  const handleModalClose = () => {
    dispatch(closeModal());
  };

  return (
    <Modal
      title='Please select a valid time!'
      buttonTitle='OK'
      isOpen={true}
      onClose={handleModalClose}
    />
  );
};
