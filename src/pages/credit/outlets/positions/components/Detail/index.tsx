import { Icon } from "@inubekit/icon";
import { MdOutlineMoreVert } from "react-icons/md";
import { DetailActions } from "../DetailActions";

interface DetailsProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export function Details(props: DetailsProps) {
  const { isOpen, onOpen, onClose } = props;

  return (
    <>
      <Icon
        icon={<MdOutlineMoreVert />}
        size="12px"
        cursorHover
        appearance="primary"
        onClick={isOpen ? onClose : onOpen}
        shape="circle"
        variant="filled"
      />
      {isOpen && <DetailActions onClose={onClose} />}
    </>
  );
}
