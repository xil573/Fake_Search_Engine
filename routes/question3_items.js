var data = require('../question3.json');

exports.view = function (req, res) {
	//var id = req.params.id;
	var id = req.params.id;
	console.log("The item id is: " + id);

	for (i = 0; i < data.item.length; i++){
      if (data.item[i].id == id){
            //var content = data.item[i].content;
            //console.log(content);
            var image = data.item[i].img;
            //var link = data.item[i].link;
        }
    }

    res.render('question3_items', {
        'image': image
    });
};