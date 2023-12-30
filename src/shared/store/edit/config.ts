/* eslint-disable perfectionist/sort-objects */
import {
  GeoJsonEditMode,
  ModifyMode,
  TransformMode,
  TranslateMode,
  ViewMode
} from '@nebula.gl/edit-modes'
import { Mode } from '@shared/types'
import { BiRectangle } from 'react-icons/bi'
import { BsArrowsMove } from 'react-icons/bs'
import { IoResizeOutline } from 'react-icons/io5'
import { TbEdit, TbPointFilled } from 'react-icons/tb'
import { VscCircleLarge } from 'react-icons/vsc'
import { PiPolygonDuotone } from 'react-icons/pi'
import { IoGitMergeOutline } from 'react-icons/io5'
import { SimpleDrawPolygonMode } from '@shared/utils/nebula'
import { SimpleDrawLineMode } from '@shared/utils/nebula/draw-line-mode'
import { SimpleDrawPointMode } from '@shared/utils/nebula/draw-point-mode'
import { SimpleDrawCircleMode } from '@shared/utils/nebula/draw-circle-mode'
import { SimpleDrawRectangleMode } from '@shared/utils/nebula/draw-rectangle-mode'

export const modes: Record<string, Mode> = {
  editMode: {
    editMode: new GeoJsonEditMode(),
    name: 'Редактирование',
    type: 'edit'
  },
  viewMode: {
    editMode: new ViewMode(),
    name: 'Просмотр',
    type: 'view'
  }
}

export const editModes: Record<string, Mode> = {
  drawLineMode: {
    editMode: new SimpleDrawLineMode(),
    icon: IoGitMergeOutline,
    name: 'Линия',
    type: 'edit'
  },
  drawPolygonMode: {
    editMode: new SimpleDrawPolygonMode(),
    icon: PiPolygonDuotone,
    name: 'Полигон',
    type: 'edit'
  },
  drawPointMode: {
    editMode: new SimpleDrawPointMode(),
    icon: TbPointFilled,
    name: 'Точка',
    type: 'edit'
  },
  drawCircleMode: {
    editMode: new SimpleDrawCircleMode(),
    icon: VscCircleLarge,
    name: 'Круги',
    type: 'edit'
  },
  drawRectangleMode: {
    editMode: new SimpleDrawRectangleMode(),
    icon: BiRectangle,
    name: 'Прямоугольник',
    type: 'edit'
  }
}

export const modifyModes: Record<string, Mode> = {
  modifyMode: {
    editMode: new ModifyMode(),
    icon: TbEdit,
    name: 'Изменить элемент',
    type: 'edit'
  },
  scaleMode: {
    editMode: new TransformMode(),
    icon: IoResizeOutline,
    name: 'Изменить размер',
    type: 'edit'
  },
  translateMode: {
    editMode: new TranslateMode(),
    icon: BsArrowsMove,
    name: 'Переместить элемент',
    type: 'edit'
  }
}
