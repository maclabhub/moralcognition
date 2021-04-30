define(['pipAPI', 'https://maclabhub.github.io/moralcognition/qamp_mcog.js'], function(APIConstructor, ampExtension){

	var API = new APIConstructor();


	return ampExtension({
		primeCats :  [
			{
				nameForFeedback : 'donate',  //Will be used in the user feedback
				nameForLogging : 'donate', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'donate'}]

			},
			{
				nameForFeedback : 'contribute',  //Will be used in the user feedback
				nameForLogging : 'contribute', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'contribute'}]

			},
			{
				nameForFeedback : 'withhold',  //Will be used in the user feedback
				nameForLogging : 'withhold', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'withhold'}]

			}
		],

		examplePrimeStimulus :
		{
			nameForLogging : 'examplePrime', //Will be used in the logging
			//An array of all media objects for this category.
			mediaArray : [{word : 'table'}, {word : 'chair'}, {word : 'desk'}, {word : 'paper'}, {word : 'lamp'}, {word : 'pen'}, {word : 'pencil'}, {word : 'shelf'}, {word : 'floor'}, {word : 'wall'}]
		},

		base_url : 'https://maclabhub.github.io/moralcognition/ampimages'

	});
});
