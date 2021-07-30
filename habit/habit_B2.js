define(['pipAPI', 'https://maclabhub.github.io/moralcognition/habit/habit_full_B2.js'], function(APIConstructor, ampExtension){

	var API = new APIConstructor();


	return ampExtension({
		primeCats :  [
			{
				nameForFeedback : 'fun_1',  //Will be used in the user feedback
				nameForLogging : 'fun_1', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'go to a movie'}]

			},
			{
				nameForFeedback : 'fun_2',  //Will be used in the user feedback
				nameForLogging : 'fun_2', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'play a board game'}]

			},
			{
				nameForFeedback : 'fun_3',  //Will be used in the user feedback
				nameForLogging : 'fun_3', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'watch TV'}]

			},
			{
				nameForFeedback : 'fun_4',  //Will be used in the user feedback
				nameForLogging : 'fun_4', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'play video games'}]

	},
			{
				nameForFeedback : 'fun_5',  //Will be used in the user feedback
				nameForLogging : 'fun_5', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'spend time with friends'}]

			},
			{
				nameForFeedback : 'fun_6',  //Will be used in the user feedback
				nameForLogging : 'fun_6', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'play sports'}]

			},
			{
				nameForFeedback : 'fun_7',  //Will be used in the user feedback
				nameForLogging : 'fun_7', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'go on a date'}]

			},
			{
				nameForFeedback : 'fun_8',  //Will be used in the user feedback
				nameForLogging : 'fun_8', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'mow your neighbor’s grass'}]

			},
			{
				nameForFeedback : 'fun_9',  //Will be used in the user feedback
				nameForLogging : 'fun_9', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'eat whole grain foods'}]

			},
			{
				nameForFeedback : 'fun_10',  //Will be used in the user feedback
				nameForLogging : 'fun_10', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'get plenty of sleep'}]

			},
			{
				nameForFeedback : 'fun_11',  //Will be used in the user feedback
				nameForLogging : 'fun_11', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'volunteer your time'}]

			},
			{
				nameForFeedback : 'fun_12',  //Will be used in the user feedback
				nameForLogging : 'fun_12', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'go grocery shopping'}]

			},
			{
				nameForFeedback : 'fun_13',  //Will be used in the user feedback
				nameForLogging : 'fun_13', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'sit in a chair'}]

			},
			{
				nameForFeedback : 'fun_14',  //Will be used in the user feedback
				nameForLogging : 'fun_14', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'eat fruits and vegetables'}]

			}
		],

		base_url : 'https://maclabhub.github.io/moralcognition/habit'

	});
});
