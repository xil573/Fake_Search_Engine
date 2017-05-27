var data = require('../question2.json');

exports.view = function (req, res) {
	//var id = req.params.id;
	var id = req.params.id;
	console.log("The item id is: " + id);

	for (i = 0; i < data.item.length; i++){
      if (data.item[i].id == id){
            var content = data.item[i].content;
            //console.log(content);
            var image = data.item[i].image;
            var link = data.item[i].link;
        }
    }

    res.render('question2_items', {
    	'content': content,
        'image': image,
        'link': link
    });
};
