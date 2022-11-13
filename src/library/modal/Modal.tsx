import { useEffect, useRef, useState } from "react";
import { findFirstFocusableElement } from "../../utilities/findFirstFocusableElement";
import { findLastFocusableElement } from "../../utilities/findLastFocusableElement";
import { isHTMLElement } from "../../utilities/isHTMLElement";
import { isEscapeKeyPressed } from "../../utilities/keyPressedDetection/isEscapeKeyPressed";
import { isTabKeyPressed } from "../../utilities/keyPressedDetection/isTabKeyPressed";
import { FocusTrap } from "../focus-trap/FocusTrap";
import { setFocusTrap } from "../focus-trap/utilities/setFocusTrap";
import Portal from "../portal/Portal";
import styles from "./Modal.module.scss";

interface ModalProps {
  children: React.ReactNode;
  setIsModalOpen?: React.Dispatch<React.SetStateAction<boolean>>;

  shouldCloseOnEsc?: boolean;
  shouldCloseOnClickOutside?: boolean;
}

const mockFn = () => {};

const Modal = ({
  setIsModalOpen = mockFn,
  shouldCloseOnEsc = true,
  shouldCloseOnClickOutside = true,
  children,
}: ModalProps) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const elementWitchOpenModalRef = useRef<Element | null>(null);

  const [isPortalAdded, setIsPortalAdded] = useState(false);

  useEffect(() => {
    if (isPortalAdded) {
      rootRef.current?.focus();
    }
  }, [isPortalAdded]);

  useEffect(() => {
    elementWitchOpenModalRef.current = document.activeElement;

    return () => {
      if (
        elementWitchOpenModalRef.current &&
        isHTMLElement(elementWitchOpenModalRef.current)
      ) {
        elementWitchOpenModalRef.current.focus();
      }
    };
  }, []);

  const rootOnKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.target === rootRef.current) {
      if (isTabKeyPressed(e)) {
        e.stopPropagation();
        e.preventDefault();

        let findFocusableElement = findFirstFocusableElement;
        if (e.shiftKey) {
          findFocusableElement = findLastFocusableElement;
        }

        setFocusTrap(containerRef, findFocusableElement);
      } else if (shouldCloseOnEsc && isEscapeKeyPressed(e)) {
        setIsModalOpen(false);
      }
    }
  };

  const rootOnClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    if (shouldCloseOnClickOutside && e.target === rootRef.current) {
      setIsModalOpen(false);
    }
  };

  return (
    <Portal setIsPortalAdded={setIsPortalAdded}>
      <div
        className={styles.root}
        tabIndex={-1}
        ref={rootRef}
        onClick={rootOnClick}
        onKeyDown={rootOnKeyDown}
      >
        <FocusTrap childRef={containerRef}>
          <div ref={containerRef}>{children}</div>
        </FocusTrap>
      </div>
    </Portal>
  );
};

export default Modal;
