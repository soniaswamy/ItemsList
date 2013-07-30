$(function () {
  		
			// Add Name
			$('.add-name').on('click', function (e) {
				var newName = $('.new-name').val();
				// Create new list item
				$('<li/>')
					.append('<input type="text" class="name" value = "' + newName + '"/>')
					.append('<input type="button" class="remove-name" value="Remove" />')
					.append('<input type="button" class="move-up" value="Up" />')
					.append('<input type="button" class="move-down" value="Down" />')
					.appendTo('.name-list');
					
				$('.new-name').val('').focus();
			});
			
			//Remove name
			$('.name-list').on('click', '.remove-name', function(){
				
				$(this).parents('li').remove();
			});
			
			// Move Up
			$('.name-list').on('click', '.move-up', function(){
				var li = $(this).parents('li');
				var prevEl = li.prev();
				li.insertBefore(prevEl);
			});
			// Move Down
			$('.name-list').on('click', '.move-down', function(){
				var li = $(this).parents('li');
				var nextEl = li.next();
				li.insertAfter(nextEl);
			});
		  
});

