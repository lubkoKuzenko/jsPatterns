var Iterator = (function() {

	var index = 0,
		data = ["skier", "snowboarder", "human"],
		length = data.length;

	return {
		next: function() {
			var element;

			if ( !this.hasNext() ) {
				return false;
			}

			element = data[index];
			index += 1;

			return element;
		},
		hasNext: function() {
			return index < length;
		},
		getCurrentState: function(){
			return data[index];
		}
	};
}());

// How to use
var i = 0;
while (Iterator.hasNext()) {
	if(i === 1)
		console.log("current state: " + Iterator.getCurrentState());
	
	console.log(Iterator.next());
	i++;
}

/*

Шаблон итератора применяется, когда имеется объект, содержащий совокупность данных. 
Эти данные могут храниться в виде сложной структуры, а вам необходимо обеспечить удобный доступ к каждому элементу этой структуры. 
Пользователи вашего объекта не обязаны знать, как организованы ваши данные, – им необходим доступ к отдельным элементам.

Объект, реализующий шаблон итератора, должен предоставить метод next(). 
При последующем обращении метод next() должен вернуть следующий элемент, и только вам решать, что означает понятие «следующий» для вашей конкретной структуры данных.

Объект с данными, реализующий шаблон итератора, обычно предоставляет еще один удобный метод hasNext(), чтобы пользователи объекта имели возможность определить, не был ли достигнут конец данных.

*/