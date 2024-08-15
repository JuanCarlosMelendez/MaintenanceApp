import { useDispatch, useSelector } from "react-redux"
import { IconButton } from "@mui/material"
import { AddOutlined } from "@mui/icons-material"

import { NoteView, NothingSelectedView } from "../views"
import { MaintenanceLayout } from "../layout/MaintenanceLayout"
import { startNewNote } from "../../store/journal/thunks"


export const MaintenancePage = () => {

  const dispatch = useDispatch();
  const { isSaving, active } = useSelector( state => state.journal );

  const onClickNewNote = () => {
    dispatch( startNewNote() );
  }

  
  return (
    <MaintenanceLayout >

      {
        (!!active)
          ? <NoteView/>
          :<NothingSelectedView/>
      }
      

      <IconButton
        disabled = { isSaving }
        onClick={ onClickNewNote }
        size="'large"
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>

    </MaintenanceLayout>

  )
}
