import { Show, Modal, ModalOverlay, ModalContent, Hide } from '@chakra-ui/react';
import NominateSelf from './NominateSelf';
import { CouncilSlugs } from '../../utils/councils';

export const NominateSelfContainer = ({
  activeCouncil,
  onClose,
}: {
  activeCouncil: CouncilSlugs;
  onClose: () => void;
}) => {
  return (
    <>
      <Show below="md">
        <Modal isOpen={true} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <NominateSelf activeCouncil={activeCouncil} />
          </ModalContent>
        </Modal>
      </Show>
      <Hide below="md">
        <NominateSelf activeCouncil={activeCouncil} />
      </Hide>
    </>
  );
};
