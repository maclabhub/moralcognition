define(['pipAPI', 'https://maclabhub.github.io/moralcognition/habit/habit_full_B1.js'], function(APIConstructor, ampExtension){

	var API = new APIConstructor();


	return ampExtension({
		primeCats :  [
			{
				nameForFeedback : 'HAB_HELP1',  //Will be used in the user feedback
				nameForLogging : 'HAB_HELP1', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'give money to charity'}]

			},
			{
				nameForFeedback : 'HAB_HELP2',  //Will be used in the user feedback
				nameForLogging : 'HAB_HELP2', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'donate money'}]

			},
			{
				nameForFeedback : 'HAB_HELP3',  //Will be used in the user feedback
				nameForLogging : 'HAB_HELP3', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'give to those in need'}]

			},
			{
				nameForFeedback : 'HAB_HELP4',  //Will be used in the user feedback
				nameForLogging : 'HAB_HELP4', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'volunteer your time'}]

	},
			{
				nameForFeedback : 'HAB_HELP5',  //Will be used in the user feedback
				nameForLogging : 'HAB_HELP5', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'mow your neighbor’s grass'}]

			},
			{
				nameForFeedback : 'HAB_HELP6',  //Will be used in the user feedback
				nameForLogging : 'HAB_HELP6', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'spend time with someone'}]

			},
			{
				nameForFeedback : 'HAB_HELP7',  //Will be used in the user feedback
				nameForLogging : 'HAB_HELP7', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'make someone laugh'}]

			},
			{
				nameForFeedback : 'HAB_HELP8',  //Will be used in the user feedback
				nameForLogging : 'HAB_HELP8', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'brush your teeth'}]

			},
			{
				nameForFeedback : 'HAB_HELP9',  //Will be used in the user feedback
				nameForLogging : 'HAB_HELP9', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'watch TV'}]

			},
			{
				nameForFeedback : 'HAB_HELP10',  //Will be used in the user feedback
				nameForLogging : 'HAB_HELP10', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'bathe regularly'}]

			},
			{
				nameForFeedback : 'HAB_HELP11',  //Will be used in the user feedback
				nameForLogging : 'HAB_HELP11', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'sit in a chair'}]

			},
			{
				nameForFeedback : 'HAB_HELP12',  //Will be used in the user feedback
				nameForLogging : 'HAB_HELP12', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'take a picture of yourself'}]

			},
			{
				nameForFeedback : 'HAB_HELP13',  //Will be used in the user feedback
				nameForLogging : 'HAB_HELP13', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'play sports'}]

			},
			{
				nameForFeedback : 'HAB_HELP14',  //Will be used in the user feedback
				nameForLogging : 'HAB_HELP14', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'go for a run'}]

			}
		],

		base_url : 'https://maclabhub.github.io/moralcognition/habit'

	});
});
