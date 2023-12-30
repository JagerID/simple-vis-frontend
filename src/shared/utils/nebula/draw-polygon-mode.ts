import {
  DrawPolygonMode,
  FeatureCollection,
  ModeProps,
  Polygon
} from '@nebula.gl/edit-modes'

export class SimpleDrawPolygonMode extends DrawPolygonMode {
  handleKeyUp(event: KeyboardEvent, props: ModeProps<FeatureCollection>) {
    if (event.key === 'Escape') {
      this.resetClickSequence()
      props.onEdit({
        editContext: {},
        editType: 'cancelFeature',
        // Because the new drawing feature is dropped, so the data will keep as the same.
        updatedData: props.data
      })
    }
    if (event.key === 'Enter') {
      const clickSequence = this.getClickSequence()
      if (clickSequence.length > 2) {
        const polygonToAdd: Polygon = {
          coordinates: [[...clickSequence, clickSequence[0]]],
          type: 'Polygon'
        }
        this.resetClickSequence()

        const editAction = this.getAddFeatureOrBooleanPolygonAction(
          polygonToAdd,
          props
        )
        if (editAction) {
          props.onEdit(editAction)
        }
      }
    }
  }
}
