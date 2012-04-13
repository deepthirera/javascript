var TWU = TWU || {};

TWU.todo = function(id, name, status) {
	
	var markup = function() {
		return "<li class='todo_item' id='todo_"+id+"'> <input type='checkbox' data=" + id + " id='todo_item_"+id+"'/>" + name + "</li>";
	}
	
	var isCompleted = function() {
		return status;
	}
        var done = function(){
                status = true;
        }
	
        var print = function(){
                return id+1+". " + name + " - "+(status?"Completed":"Incompleted");
        }

	return {
		isCompleted: isCompleted,
                done: done,
                print: print,
		markup: markup
	}
};
