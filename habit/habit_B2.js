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

			},
			{
				nameForFeedback : 'HAB_FUN8',  //Will be used in the user feedback
				nameForLogging : 'HAB_FUN8', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'mow your neighbor’s grass'}]

			},
			{
				nameForFeedback : 'HAB_FUN9',  //Will be used in the user feedback
				nameForLogging : 'HAB_FUN9', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'eat whole grain foods'}]

			},
			{
				nameForFeedback : 'HAB_FUN10',  //Will be used in the user feedback
				nameForLogging : 'HAB_FUN10', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'get plenty of sleep'}]

			},
			{
				nameForFeedback : 'HAB_FUN11',  //Will be used in the user feedback
				nameForLogging : 'HAB_FUN11', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'volunteer your time'}]

			},
			{
				nameForFeedback : 'HAB_FUN12',  //Will be used in the user feedback
				nameForLogging : 'HAB_FUN12', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'go grocery shopping'}]

			},
			{
				nameForFeedback : 'HAB_FUN13',  //Will be used in the user feedback
				nameForLogging : 'HAB_FUN13', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'sit in a chair'}]

			},
			{
				nameForFeedback : 'HAB_FUN14',  //Will be used in the user feedback
				nameForLogging : 'HAB_FUN14', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'eat fruits and vegetables'}]

			}
		],

		base_url : 'https://maclabhub.github.io/moralcognition/habit'

	});
});
