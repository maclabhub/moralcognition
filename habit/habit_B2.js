define(['pipAPI', 'https://maclabhub.github.io/moralcognition/habit/habit_full_B2.js'], function(APIConstructor, ampExtension){

	var API = new APIConstructor();


	return ampExtension({
		primeCats :  [
			{
				nameForFeedback : 'HAB_FUN1',  //Will be used in the user feedback
				nameForLogging : 'HAB_FUN1', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'go to a movie'}]

			},
			{
				nameForFeedback : 'HAB_FUN2',  //Will be used in the user feedback
				nameForLogging : 'HAB_FUN2', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'play a board game'}]

			},
			{
				nameForFeedback : 'HAB_FUN3',  //Will be used in the user feedback
				nameForLogging : 'HAB_FUN3', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'watch TV'}]

			},
			{
				nameForFeedback : 'HAB_FUN4',  //Will be used in the user feedback
				nameForLogging : 'HAB_FUN4', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'play video games'}]

	},
			{
				nameForFeedback : 'HAB_FUN5',  //Will be used in the user feedback
				nameForLogging : 'HAB_FUN5', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'spend time with friends'}]

			},
			{
				nameForFeedback : 'HAB_FUN6',  //Will be used in the user feedback
				nameForLogging : 'HAB_FUN6', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'play sports'}]

			},
			{
				nameForFeedback : 'HAB_FUN7',  //Will be used in the user feedback
				nameForLogging : 'HAB_FUN7', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'go on a date'}]

			}
		],

		base_url : 'https://maclabhub.github.io/moralcognition/habit'

	});
});
