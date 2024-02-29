
import './dragTest.scss';



export function DragTest() {
  function dragStartHandler(e: any) {
    e.dataTransfer.setData('text/plain', e.target.id);
    e.dataTransfer.dropEffect = 'move';
  }

  return (
    <div
      draggable
      onDragStart={dragStartHandler}
      id="dragTarget"
      className="draggable-element"
    >
      Drag me!
    </div>
  );

}