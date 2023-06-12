import { useAppDispatch, useAppSelector } from './useAppSelector'
import { handleToggleMenu, useOpenModal, useCloseModal } from '../store'

export const useUi = () => {
    const { isMenuOpen, isModalOpen } = useAppSelector(state => state.ui)
    const dispatch = useAppDispatch()

    const handleToggleDesktopMenu = () => {
        dispatch(handleToggleMenu())
    }

    const handleOpenModal = () => {
        dispatch(useOpenModal());
    }

    const handleCloseModal = () => {
        dispatch(useCloseModal());
    }

    return {
        isMenuOpen,
        isModalOpen,
        handleToggleDesktopMenu,
        handleCloseModal,
        handleOpenModal
    }
}
