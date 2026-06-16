import { AnimatePresence, motion } from "framer-motion";

const Modal = ({
  isOpen,
  image,
  onClose,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            onClick={onClose}
            className="fixed inset-0 bg-black/70 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 p-5"
            initial={{
              scale: 0.8,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            exit={{
              scale: 0.8,
              opacity: 0,
            }}
          >
            <img
              src={image}
              alt="Gallery"
              className="max-h-[90vh] rounded-xl"
            />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;