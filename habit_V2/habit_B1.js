define(['pipAPI', 'https://maclabhub.github.io/moralcognition/habit/habit_full_B1.js'], function(APIConstructor, ampExtension){

	var API = new APIConstructor();


	return ampExtension({
		primeCats :  [
			{
				nameForFeedback : 'help_1',  //Will be used in the user feedback
				nameForLogging : 'help_1', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'give money to charity'}]

			},
			{
				nameForFeedback : 'help_2',  //Will be used in the user feedback
				nameForLogging : 'help_2', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'donate money'}]

			},
			{
				nameForFeedback : 'help_3',  //Will be used in the user feedback
				nameForLogging : 'help_3', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'give to those in need'}]

			},
			{
				nameForFeedback : 'help_4',  //Will be used in the user feedback
				nameForLogging : 'help_4', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'volunteer your time'}]

	},
			{
				nameForFeedback : 'help_5',  //Will be used in the user feedback
				nameForLogging : 'help_5', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'mow your neighbor’s grass'}]

			},
			{
				nameForFeedback : 'help_6',  //Will be used in the user feedback
				nameForLogging : 'help_6', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'spend time with someone'}]

			},
			{
				nameForFeedback : 'help_7',  //Will be used in the user feedback
				nameForLogging : 'help_7', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'make someone laugh'}]

			},
			{
				nameForFeedback : 'help_8',  //Will be used in the user feedback
				nameForLogging : 'help_8', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'brush your teeth'}]

			},
			{
				nameForFeedback : 'help_9',  //Will be used in the user feedback
				nameForLogging : 'help_9', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'watch TV'}]

			},
			{
				nameForFeedback : 'help_10',  //Will be used in the user feedback
				nameForLogging : 'help_10', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'bathe regularly'}]

			},
			{
				nameForFeedback : 'help_11',  //Will be used in the user feedback
				nameForLogging : 'help_11', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'sit in a chair'}]

			},
			{
				nameForFeedback : 'help_12',  //Will be used in the user feedback
				nameForLogging : 'help_12', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'take a picture of yourself'}]

			},
			{
				nameForFeedback : 'help_13',  //Will be used in the user feedback
				nameForLogging : 'help_13', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'play sports'}]

			},
			{
				nameForFeedback : 'help_14',  //Will be used in the user feedback
				nameForLogging : 'help_14', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'go for a run'}]

			}
		],

		base_url : 'https://maclabhub.github.io/moralcognition/habit'

	});
});
