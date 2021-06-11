define(['pipAPI', 'https://maclabhub.github.io/moralcognition/habit/habit_full_B3.js'], function(APIConstructor, ampExtension){

	var API = new APIConstructor();


	return ampExtension({
		primeCats :  [
			{
				nameForFeedback : 'HAB_HEAL1',  //Will be used in the user feedback
				nameForLogging : 'HAB_HEAL1', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'eat fruits and vegetables'}]

			},
			{
				nameForFeedback : 'HAB_HEAL2',  //Will be used in the user feedback
				nameForLogging : 'HAB_HEAL2', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'go for a run'}]

			},
			{
				nameForFeedback : 'HAB_HEAL3',  //Will be used in the user feedback
				nameForLogging : 'HAB_HEAL3', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'get regular medical check-ups'}]

			},
			{
				nameForFeedback : 'HAB_HEAL4',  //Will be used in the user feedback
				nameForLogging : 'HAB_HEAL4', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'brush your teeth'}]

	},
			{
				nameForFeedback : 'HAB_HEAL5',  //Will be used in the user feedback
				nameForLogging : 'HAB_HEAL5', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'get plenty of sleep'}]

			},
			{
				nameForFeedback : 'HAB_HEAL6',  //Will be used in the user feedback
				nameForLogging : 'HAB_HEAL6', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'eat whole grain foods'}]

			},
			{
				nameForFeedback : 'HAB_HEAL7',  //Will be used in the user feedback
				nameForLogging : 'HAB_HEAL7', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'bathe regularly'}]

			}
		],

		base_url : 'https://maclabhub.github.io/moralcognition/habit'

	});
});
