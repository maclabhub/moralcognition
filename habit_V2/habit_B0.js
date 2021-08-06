define(['pipAPI', 'https://maclabhub.github.io/moralcognition/habit/habit_full_B0.js'], function(APIConstructor, ampExtension){

	var API = new APIConstructor();


	return ampExtension({
		primeCats :  [
			{
				nameForFeedback : 'HAB_PR1',  //Will be used in the user feedback
				nameForLogging : 'HAB_PR1', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'go to college'}]

			},
			{
				nameForFeedback : 'HAB_PR2',  //Will be used in the user feedback
				nameForLogging : 'HAB_PR2', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'eat healthy foods'}]

			},
			{
				nameForFeedback : 'HAB_PR3',  //Will be used in the user feedback
				nameForLogging : 'HAB_PR3', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'watch soap operas'}]

			},
			{
				nameForFeedback : 'HAB_PR4',  //Will be used in the user feedback
				nameForLogging : 'HAB_PR4', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'read a book'}]

	},
			{
				nameForFeedback : 'HAB_PR5',  //Will be used in the user feedback
				nameForLogging : 'HAB_PR5', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'take a shower'}]

			},
			{
				nameForFeedback : 'HAB_PR6',  //Will be used in the user feedback
				nameForLogging : 'HAB_PR6', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'go for a walk'}]

			},
			{
				nameForFeedback : 'HAB_PR7',  //Will be used in the user feedback
				nameForLogging : 'HAB_PR7', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'meditate every day'}]

			},
			{
				nameForFeedback : 'HAB_PR8',  //Will be used in the user feedback
				nameForLogging : 'HAB_PR8', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'stay up late'}]

			},
			{
				nameForFeedback : 'HAB_PR9',  //Will be used in the user feedback
				nameForLogging : 'HAB_PR9', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'take mind-altering drugs'}]

			},
			{
				nameForFeedback : 'HAB_PR10',  //Will be used in the user feedback
				nameForLogging : 'HAB_PR10', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'assemble bookshelves'}]

			}
		],

		base_url : 'https://maclabhub.github.io/moralcognition/habit'

	});
});
