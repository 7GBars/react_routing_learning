import './dragTest.scss'
export function DragTest() {
  function dragStartHandler(e: any) {
    console.log('drag start', e)
    document.body.style.cursor = 'move';
  }
  function dragEndHandler() {
    document.body.style.cursor = 'auto';
  }

  return (
      <div
          draggable
          onDragStart={dragStartHandler}
          onDragEnd={dragEndHandler}
          id="dragTarget"
          className="draggable-element"
      >
        Drag me!
      </div>
  );
}