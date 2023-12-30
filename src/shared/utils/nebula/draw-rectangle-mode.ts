import {
  DrawRectangleMode,
  FeatureCollection,
  ModeProps,
} from '@nebula.gl/edit-modes';

export class SimpleDrawRectangleMode extends DrawRectangleMode {
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
  }
}
