var TWU = TWU || {};

describe("Todo", function() {
  var todo;
  beforeEach(function() { 
	todo = TWU.todo(1, "Breakfast", false)
  });

  it("should be able to return a markup", function() {
    expect(todo.markup()).toEqual("<li class='todo_item' id='todo_1'> <input type='checkbox' data=1 id='todo_item_1'/>Breakfast</li>");
  });
  
  it("should be able to be marked as Completed", function() {
      todo.done();
      expect(todo.isCompleted()).toEqual(true);
  });

});
