
EventListener('çlick',function(){
	document.getElementById('field_input').value;
	getElementById('field_input').value = "";

	(localStorage.getItem('count') == null)?0:localStorage.getItem('count');
	(setItem('count',(count*1)+1);
		count);

	concole.log(count);
	localStorage.setItem('input-${(count)}',input);

	retrieve();


});




function retrieve(){
	let data = [];
	let count = Number(localStorage.getItem('count'));

for(let x = 0; x<count; x++){
	data.push(localStorage.getItem('input-${x}'));
}

list(data);
}

function list(data){
	let content = "";
	for(let value of data){
		content += '<li>${value}</li>';

	}
	document.getElementById('display_list').innerHTML = '<ol>${content}</ol>';
}