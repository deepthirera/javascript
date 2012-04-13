var TWU = TWU || {};
describe("todoRepository", function() {
  var todos = ["Breakfast", "Lunch", "Dinner"];
    
  beforeEach(function() {
	todoRepo=TWU.todoRepository();
	for (var i=0; i<todos.length; i++) { 	
		todoRepo.add(TWU.todo(i,todos[i],false));
	}
  });
  
  afterEach(function() {
	for (var i=0; i<todos.length; i++) { 
		todoRepo.remove(i);
	}
  });

  it("should be able to get a Todo with a given id", function() {
	todoRepo.getItem(1).done();
      expect(todoRepo.getItem(1).print()).toEqual("1. Breakfast - Completed");
  });  
  
  it("should be able to mark a Todo as completed", function(){
	todoRepo.getItem(1).done();
      expect(todoRepo.getItem(1).isCompleted()).toEqual(true);
  });

  it("should return the current status with 0 done as no todos are marked as completed", function(){
	  expect(todoRepo.totalDone()).toEqual(0 + " done Todos of a total " + todos.length);
  });

  it("should return the current status with 1 done when 1 todo is marked as completed", function(){
	  //Mark the first todo as complete
	  todoRepo.getItem(1).done();
	  //assert that
	  expect(todoRepo.totalDone()).toEqual(1 + " done Todos of a total " + todos.length);
  });

});
