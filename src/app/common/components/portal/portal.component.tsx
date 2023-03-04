import { ReactNode } from "react";
import { createPortal } from "react-dom";

type PortalPropsType = {
  children: ReactNode 
}

const Portal = ({children} : PortalPropsType) => {

  const PORTAL_ROOT_ELEMENT : HTMLElement = document.getElementById("portal-root")!;

  return (
    createPortal(
      children,
      PORTAL_ROOT_ELEMENT
    )
  )

}

export default Portal;