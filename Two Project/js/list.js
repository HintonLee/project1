
//ajax请求json数据
$.ajax({
	type:"get",
	url:"json/list.json",
	async:true,
	success:function(data){
		var conStr = "";
		for(var i = 0;i < data.length;i++){
			var json = data[i];
		console.log(json);
		conStr += `
			<li>
				<a href="detail.html?id=${json.id}">
					<img src="${json.src}"/>
					<p>${json.con}</p>
					<h3>${json.pri}</h3>
					<span>${json.sale}</span>
				
				</li>
		`;
			
		}
		$("#lists").html(conStr)
	}
});
