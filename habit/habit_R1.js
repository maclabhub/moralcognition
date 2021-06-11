define(['pipAPI', 'https://maclabhub.github.io/moralcognition/habit/habit_full_R1.js'], function(APIConstructor, ampExtension){

	var API = new APIConstructor();


	return ampExtension({
		primeCats :  [
			{
				nameForFeedback : 'give money to charity',  //Will be used in the user feedback
				nameForLogging : 'give money to charity', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'give money to charity'}]

			},
			{
				nameForFeedback : 'donate money',  //Will be used in the user feedback
				nameForLogging : 'donate money', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'donate money'}]

			},
			{
				nameForFeedback : 'give to those in need',  //Will be used in the user feedback
				nameForLogging : 'give to those in need', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'give to those in need'}]

			},
			{
				nameForFeedback : 'volunteer your time',  //Will be used in the user feedback
				nameForLogging : 'volunteer your time', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'volunteer your time'}]

	},
			{
				nameForFeedback : 'mow your neighbor’s grass',  //Will be used in the user feedback
				nameForLogging : 'mow your neighbor’s grass', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'mow your neighbor’s grass'}]

			},
			{
				nameForFeedback : 'spend time with someone',  //Will be used in the user feedback
				nameForLogging : 'spend time with someone', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'spend time with someone'}]

			},
			{
				nameForFeedback : 'make someone laugh',  //Will be used in the user feedback
				nameForLogging : 'make someone laugh', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'make someone laugh'}]

			}
		],

		base_url : 'https://maclabhub.github.io/moralcognition/habit'

	});
});
