import React from "react"
import { useDispatch, useSelector} from "react-redux";
import { toggleSidebar } from "../../redux/reducers/sidebarReducer";

import { 
  MdKeyboardDoubleArrowRight as ArrowRight,
  MdOutlineKeyboardDoubleArrowLeft as ArrowLeft 
} from "react-icons/md";


const SidebarToggle = () => {
  
  const dispatch = useDispatch();
  const {isOpen } = useSelector((state) => state.sidebar)

  return (
    <div className="p-4 mt-12 flex items-center justify-between">
        
        <button onClick={() => dispatch(toggleSidebar())} className="icon-header flex text-3xl mt-4">
          {isOpen ? 
          <ArrowLeft  size={48} /> 
          : <ArrowRight size={48} />}
        </button>
      </div>
  )
};

export default SidebarToggle;
