import { useAppDispatch, useAppSelector } from './useAppSelector'
import { handleToggleMenu } from '../store'

export const useUi = () => {
    const { isMenuOpen } = useAppSelector(state => state.ui)
    const dispatch = useAppDispatch()

    const handleToggleDesktopMenu = () => {
        dispatch(handleToggleMenu())
    }

    return {
        isMenuOpen,
        handleToggleDesktopMenu
    }
}
