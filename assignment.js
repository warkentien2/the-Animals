function showTemplate(template, data){
	var html = template(data);
	$('#content').html(html);
}

$(document).ready(function(){
  /* creating templates */
  var source = $("#animal-template").html();
  var animal_template = Handlebars.compile(source);

  source = $("#class-template").html();
  var class_template = Handlebars.compile(source);

	source = $("#info-template").html();
	var info_template = Handlebars.compile(source);

  /* starting template */
	showTemplate(animal_template, animals);
  /* /starting template */

	var categoriesIndex = 0;
	var animalsIndex = 0;

	$(document).on("click", ".menu", function(){
		$(".active").removeClass("active");
		$(this).addClass("active");

		/* handling menu tab */
		switch(this.id){
			case "animals":
				showTemplate(animal_template, animals);
				$("#title").text("Animals");
				break;
			case "reptiles":
				categoriesIndex = 0;
				showTemplate(class_template, animals.class[0]);
				$("#title").text("Reptiles");
				break;
			case "mammals":
				categoriesIndex = 1;
				showTemplate(class_template, animals.class[1]);
				$("#title").text("Mammals");
				break;
			case "birds":
				categoriesIndex = 2;
				showTemplate(class_template, animals.class[2]);
				$("#title").text("Birds");
				break;
		}
	});

	$(document).on("click", ".categories", function(){
		categoriesIndex = $(this).data("id");
		var current_class = animals.class[categoriesIndex];

		/* changing menu tab */
		$(".active").removeClass("active");
		var idName = "#" + current_class.name.toLowerCase();
		$(idName).addClass("active");
		/* changing title */
		$('#title').text(current_class.name);

		showTemplate(class_template, current_class);
	});

	$(document).on('click', ".animals", function(){
		var animalsIndex = $(this).data("id");
		var current_animal = animals.class[categoriesIndex].animals[animalsIndex];
		/* changing title */
		$('#title').text(current_animal.name);

		showTemplate(info_template, current_animal);
	});
});
