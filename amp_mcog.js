define(['pipAPI', 'https://maclabhub.github.io/moralcognition/qamp_mcog.js'], function(APIConstructor, ampExtension){

	var API = new APIConstructor();


	return ampExtension({
		primeCats :  [
			{
				nameForFeedback : 'positive words',  //Will be used in the user feedback
				nameForLogging : 'positive', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'donate'},
					{word : 'contribute'},
					{word : 'provide'},
					{word : 'help'},
					{word : 'generous'},
					{word : 'charity'},
					{word : 'non-profit'},
					{word : 'share'},
					{word : 'give'},
					{word : 'support'},
					{word : 'sponsor'},
					{word : 'charitable'},
					{word : 'sharing'},
					{word : 'compassion'}]

			},
			{
				nameForFeedback : 'negative words',  //Will be used in the user feedback
				nameForLogging : 'negative', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'withhold'},
					{word : 'take'},
					{word : 'table'},
					{word : 'uncharitable'},
					{word : 'chair'},
					{word : 'keep'},
					{word : 'desk'},
					{word : 'greedy'},
					{word : 'apathy'},
					{word : 'for me'},
					{word : 'retain'},
					{word : 'for-profit'},
					{word : 'selfish'},
					{word : 'mine'}]
				
			},
			{
				nameForFeedback : 'neutral words',  //Will be used in the user feedback
				nameForLogging : 'neutral', //Will be used in the logging
				//An array of all media objects for this category.
				mediaArray : [
				    {word : 'table'},
					{word : 'chair'},
					{word : 'desk'},
					{word : 'paper'},
					{word : 'lamp'},
					{word : 'pen'},
					{word : 'pencil'},
					{word : 'shelf'},
					{word : 'floor'},
					{word : 'wall'},
					{word : 'ceiling'},
					{word : 'floor'},
					{word : 'book'},
					{word : 'shelf'}]
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
