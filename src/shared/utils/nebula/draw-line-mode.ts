import {
  DrawLineStringMode,
  FeatureCollection,
  LineString,
  ModeProps,
} from '@nebula.gl/edit-modes';

export class SimpleDrawLineMode extends DrawLineStringMode {
  handleKeyUp(event: KeyboardEvent, props: ModeProps<FeatureCollection>) {
    if (event.key === 'Escape') {
      this.resetClickSequence();
      props.onEdit({
        editContext: {},
        editType: 'cancelFeature',
        // Because the new drawing feature is dropped, so the data will keep as the same.
        updatedData: props.data,
      });
    }
    if (event.key === 'Enter') {
      const clickSequence = this.getClickSequence();
      if (clickSequence.length > 1) {
        const lineStringToAdd: LineString = {
          coordinates: [...clickSequence],
          type: 'LineString',
        };
        this.resetClickSequence();
        const editAction = this.getAddFeatureAction(
          lineStringToAdd,
          props.data
        );
        if (editAction) {
          props.onEdit(editAction);
        }
      }
    }
  }
}
