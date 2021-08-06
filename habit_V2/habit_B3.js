define(['pipAPI', 'https://maclabhub.github.io/moralcognition/habit/habit_full_B3.js'], function(APIConstructor, ampExtension){

	var API = new APIConstructor();


	return ampExtension({
		primeCats :  [
			{
				nameForFeedback : 'heal_1',  //Will be used in the user feedback
				nameForLogging : 'heal_1', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'eat fruits and vegetables'}]

			},
			{
				nameForFeedback : 'heal_2',  //Will be used in the user feedback
				nameForLogging : 'heal_2', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'go for a run'}]

			},
			{
				nameForFeedback : 'heal_3',  //Will be used in the user feedback
				nameForLogging : 'heal_3', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'get regular medical check-ups'}]

			},
			{
				nameForFeedback : 'heal_4',  //Will be used in the user feedback
				nameForLogging : 'heal_4', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'brush your teeth'}]

	},
			{
				nameForFeedback : 'heal_5',  //Will be used in the user feedback
				nameForLogging : 'heal_5', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'get plenty of sleep'}]

			},
			{
				nameForFeedback : 'heal_6',  //Will be used in the user feedback
				nameForLogging : 'heal_6', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'eat whole grain foods'}]

			},
			{
				nameForFeedback : 'heal_7',  //Will be used in the user feedback
				nameForLogging : 'heal_7', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'bathe regularly'}]

			},
			{
				nameForFeedback : 'heal_8',  //Will be used in the user feedback
				nameForLogging : 'heal_8', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'read the news'}]

			},
			{
				nameForFeedback : 'heal_9',  //Will be used in the user feedback
				nameForLogging : 'heal_9', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'go to a movie'}]

			},
			{
				nameForFeedback : 'heal_10',  //Will be used in the user feedback
				nameForLogging : 'heal_10', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'donate money'}]

			},
			{
				nameForFeedback : 'heal_11',  //Will be used in the user feedback
				nameForLogging : 'heal_11', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'volunteer your time'}]

			},
			{
				nameForFeedback : 'heal_12',  //Will be used in the user feedback
				nameForLogging : 'heal_12', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'go on a date'}]

			},
			{
				nameForFeedback : 'heal_13',  //Will be used in the user feedback
				nameForLogging : 'heal_13', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'take a picture of yourself'}]

			},
			{
				nameForFeedback : 'heal_14',  //Will be used in the user feedback
				nameForLogging : 'heal_14', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'give to those in need'}]

			}
		],

		base_url : 'https://maclabhub.github.io/moralcognition/habit'

	});
});
