var TWU = TWU || {};

TWU.todoRepository = function() {
var items=[];
var add = function(todo){
     items.push(todo);
}

var getItem = function(id){
     return items[id-1];
}

var removeItem = function(id){
    items.splice(id,1);
}

var totalDone = function(){
	var count=0;
	for (var i = 0; i < items.length; i++){
		if(items[i].isCompleted()){
			count++;			
		}	
	}
	return count + " done Todos of a total " + items.length;
}



return{
  add: add,
  getItem: getItem,
  remove: removeItem,
  totalDone: totalDone

}

};
