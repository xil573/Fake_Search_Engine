var data = require('../question1.json');

exports.view = function (req, res) {
	//var id = req.params.id;
	var id = req.params.id;
	console.log("The item id is: " + id);

	for (i = 0; i < data.item.length; i++){
      if (data.item[i].id == id){
            var content = data.item[i].content;
            console.log(content);
        }
    }

    res.render('question1_items', {
    	'content': content
    });
};