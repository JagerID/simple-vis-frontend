import { cx } from 'class-variance-authority'
import { FC, SVGProps, SyntheticEvent } from 'react'
import { useEditStore } from '../../shared/store/edit/useEditStore'
import { Mode } from '../../shared/types'
import { modes } from '@shared/store/edit/config'

interface DrawTypeProps {
  icon?: FC<SVGProps<SVGSVGElement>>
  label: string
  mode: Mode
}

export const DrawType: FC<DrawTypeProps> = (type) => {
  const { mode: currentMode, setMode } = useEditStore()

  const changeDrawType = (e: SyntheticEvent) => {
    e.stopPropagation()
    if (currentMode.name === type.mode.name) {
      setMode(modes.editMode)
    } else {
      setMode(type.mode)
    }
  }

  return (
    <div
      className={cx(
        'flex gap-2 justify-center rounded cursor-pointer min-h-max items-center w-[30px] h-[30px]',
        currentMode.name === type.mode.name ? 'bg-green-500' : 'bg-green-800'
      )}
      onClick={changeDrawType}
    >
      {type.icon && <type.icon className={cx('w-5 h-5')} />}
    </div>
  )
}
