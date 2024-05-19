import { useEffect } from 'react';
import styles from './ScheduleDashboard.module.scss';
import { ScheduleButtons } from '../../molecules/ScheduleButtons';
import { ScheduleHeader } from '../../molecules/ScheduleHeader/ScheduleHeader';
import { ScheduleCalendar } from '../../organisms/ScheduleCalendar';
import { Divider } from '../../atoms/Divider';
import { Title } from '../../atoms/Title';
import { Modal } from '../../molecules/Modal';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';

type ModalRef = {
  open: () => void;
};

export const ScheduleDashboard = () => {
  const modalRef = useRef<ModalRef>(null);
  const { modal } = useSelector((state: RootState) => state.modal);

  useEffect(() => {
    if (modalRef.current && modal.isOpen) {
      modalRef.current.open();
    }
  }, [modal]);

  return (
    <div className={styles.container}>
      <Title title='Create new Schedule' />
      <Divider size='xl' />
      <ScheduleHeader />
      <Divider size='m' />
      <ScheduleCalendar />
      <Divider size='l' />
      <ScheduleButtons />

      <Modal
        ref={modalRef}
        onSubmit={() => console.log('asd')}
        buttonTitle={modal.buttonTitle}
        title={modal.title}
      />
    </div>
  );
};
