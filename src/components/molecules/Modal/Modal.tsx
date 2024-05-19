import {
  DialogHTMLAttributes,
  forwardRef,
  useImperativeHandle,
  useRef,
} from 'react';
import { createPortal } from 'react-dom';
import { Button } from '../../atoms/Button';
import { ModalTitle } from '../../atoms/ModalTitle/ModalTitle';

import styles from './Modal.module.scss';

type Props = DialogHTMLAttributes<HTMLDialogElement> & {
  title: string;
  buttonTitle: string;
};

export const Modal = forwardRef(function Modal(
  { title, buttonTitle, ...props }: Props,
  ref
) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => {
    return {
      open() {
        if (dialogRef.current) {
          dialogRef.current.showModal();
        }
      },
    };
  });

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
});
