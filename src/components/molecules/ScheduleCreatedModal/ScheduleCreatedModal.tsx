import { useDispatch } from 'react-redux';
import { Modal } from '../Modal';
import { AppDispatch } from '../../../store';
import { closeModal } from '../../../store/slices/modal';
import { resetAll } from '../../../store/slices/schedule';

export const ScheduleCreatedModal = () => {
  const dispatch: AppDispatch = useDispatch();

  const handleModalClose = () => {
    dispatch(closeModal());
  };

  const handleSubmit = () => {
    dispatch(resetAll());
  };

  return (
    <Modal
      title='Schedule successfully created.'
      buttonTitle='Create another plan'
      isOpen={true}
      onClose={handleModalClose}
      onSubmit={handleSubmit}
    />
  );
};
