define(['pipAPI', 'https://maclabhub.github.io/moralcognition/habit/habit_full_R1.js'], function(APIConstructor, ampExtension){

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

			}
		],

		examplePrimeStimulus :
		{
			nameForLogging : 'examplePrime', //Will be used in the logging
			//An array of all media objects for this category.
			mediaArray : [{word : 'go to college'}, {word : 'eat healthy foods'}, {word : 'watch soap operas'}, {word : 'read a book'}, {word : 'take a shower'}, {word : 'go for a walk'}, {word : 'meditate every day'}, {word : 'stay up late'}, {word : 'take mind-altering drug'}, {word : 'assemble bookshelves'}]
		},

		base_url : 'https://maclabhub.github.io/moralcognition/habit'

	});
});
