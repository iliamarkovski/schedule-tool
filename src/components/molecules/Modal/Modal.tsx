import { DialogHTMLAttributes, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Button } from '../../atoms/Button';
import { ModalTitle } from '../../atoms/ModalTitle/ModalTitle';

import styles from './Modal.module.scss';

type Props = DialogHTMLAttributes<HTMLDialogElement> & {
  title: string;
  buttonTitle: string;
  isOpen: boolean;
};

export const Modal = ({ title, buttonTitle, isOpen, ...props }: Props) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog) {
      if (isOpen) {
        dialog.showModal();
      } else {
        dialog.close();
      }
    }
  }, [isOpen]);

  return (
    <>
      {createPortal(
        <dialog className={styles.dialog} ref={dialogRef} {...props}>
          <form method='dialog' className={styles.content}>
            <ModalTitle title={title} />
            <Button>{buttonTitle}</Button>
          </form>
        </dialog>,
        document.getElementById('modal-root')!
      )}
    </>
  );
};
