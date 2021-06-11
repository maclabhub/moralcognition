define(['pipAPI', 'https://maclabhub.github.io/moralcognition/habit/habit_full_R0.js'], function(APIConstructor, ampExtension){

	var API = new APIConstructor();


	return ampExtension({
		primeCats :  [
			{
				nameForFeedback : 'go to college',  //Will be used in the user feedback
				nameForLogging : 'go to college', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'go to college'}]

			},
			{
				nameForFeedback : 'eat healthy foods',  //Will be used in the user feedback
				nameForLogging : 'eat healthy foods', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'eat healthy foods'}]

			},
			{
				nameForFeedback : 'watch soap operas',  //Will be used in the user feedback
				nameForLogging : 'watch soap operas', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'watch soap operas'}]

			},
			{
				nameForFeedback : 'read a book',  //Will be used in the user feedback
				nameForLogging : 'read a book', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'read a book'}]

	},
			{
				nameForFeedback : 'take a shower',  //Will be used in the user feedback
				nameForLogging : 'take a shower', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'take a shower'}]

			},
			{
				nameForFeedback : 'go for a walk',  //Will be used in the user feedback
				nameForLogging : 'go for a walk', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'go for a walk'}]

			},
			{
				nameForFeedback : 'meditate every day',  //Will be used in the user feedback
				nameForLogging : 'meditate every day', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'meditate every day'}]

			},
			{
				nameForFeedback : 'stay up late',  //Will be used in the user feedback
				nameForLogging : 'stay up late', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'stay up late'}]

			},
			{
				nameForFeedback : 'take mind-altering drugs',  //Will be used in the user feedback
				nameForLogging : 'take mind-altering drugs', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'take mind-altering drugs'}]

			},
			{
				nameForFeedback : 'assemble bookshelves',  //Will be used in the user feedback
				nameForLogging : 'assemble bookshelves', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'assemble bookshelves'}]

			}
		],

		examplePrimeStimulus :
		{
			nameForLogging : 'examplePrime', //Will be used in the logging
			//An array of all media objects for this category.
			mediaArray : [{word : 'table'}, {word : 'chair'}, {word : 'desk'}, {word : 'paper'}, {word : 'lamp'}, {word : 'pen'}, {word : 'pencil'}, {word : 'shelf'}, {word : 'floor'}, {word : 'wall'}]
		},

		base_url : 'https://maclabhub.github.io/moralcognition/habit'

	});
});
