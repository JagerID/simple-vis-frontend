import { cx } from 'class-variance-authority'
import { Fragment, useState } from 'react'
import { Rnd } from 'react-rnd'
import { Box } from '../../shared/ui'
import { editModes, modifyModes } from '@shared/store/edit/config'
import { DrawType } from './DrawType'

export const EditMenu = () => {
  const [hovered, setHovered] = useState<boolean>(false)
  const [dragging, setDragging] = useState<boolean>(false)

  return (
    <Rnd
      className="z-[10] cursor-grab"
      default={{
        height: 'max-content',
        width: 'max-content',
        x: document.body.clientWidth - 105,
        y: 200
      }}
      enableResizing={false}
      onDragStart={() => setDragging(true)}
      onDragStop={() => setDragging(false)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => !dragging && setHovered(false)}
    >
      <Box className="rounded overflow-hidden flex flex-col gap-[5px] relative pt-3">
        <Box
          className={cx(
            'absolute left-1/2 -translate-x-1/2 h-[8px] w-[70%] bg-dark-500 rounded duration-200',
            hovered ? 'opacity-100 top-0' : 'opacity-0 top-2'
          )}
        ></Box>
        <Box className="p-2 bg-dark-500 grid grid-cols-2 gap-2 rounded">
          {Object.keys(editModes).map((editMode) => (
            <Fragment key={editMode}>
              {editMode !== 'viewMode' && (
                <DrawType
                  icon={editModes[editMode].icon}
                  label={editModes[editMode].name}
                  mode={editModes[editMode]}
                />
              )}
            </Fragment>
          ))}
        </Box>
        <Box className="p-2 bg-dark-500 grid grid-cols-2 gap-2 rounded">
          {Object.keys(modifyModes).map((modifyMode: any) => (
            <Fragment key={modifyMode}>
              {modifyMode !== 'viewMode' && (
                <DrawType
                  icon={modifyModes[modifyMode].icon}
                  label={modifyModes[modifyMode].name}
                  mode={modifyModes[modifyMode]}
                />
              )}
            </Fragment>
          ))}
        </Box>
      </Box>
    </Rnd>
  )
}
