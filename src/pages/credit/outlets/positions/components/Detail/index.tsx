import { useState } from "react";

import { Icon } from "@inubekit/icon";

import { MdOutlineMoreVert } from "react-icons/md";
import { DetailActions } from "../DetailActions";

export function Details() {
  const [ModalOpen, setModalOpen] = useState(false);
  return (
    <>
        <Icon
          icon={<MdOutlineMoreVert />}
          size="12px"
          cursorHover
          appearance="primary"
          onClick={() => setModalOpen(true)}
          shape="circle"
          variant="filled"
        />
        {ModalOpen && <DetailActions onClose={() => setModalOpen(false)} />}
    </>
  );
}
