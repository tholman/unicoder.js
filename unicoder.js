function Unicoder() {

	var characterOrders = {
		'lowercase': 'abcdefghijklmnopqrstuvwxyz',
		'uppercase': 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
	}

	var unicodePrefix = '&#x';
	var unicodeSuffix = ';'

	var dictionary = {
		'italic sans': {
			'generate': {
				'uppercase': 120328,
				'lowercase': 120354,
			},
		},
		'bold sans': {
			'generate': {
				'uppercase': 120276,
				'lowercase': 120302,
			},
		},
		'bold': {
			'generate': {
				'uppercase': 119808,
				'lowercase': 119834,
			},
		},
		'bold italic sans': {
			'generate': {
				'uppercase': 120380,
				'lowercase': 120406,
			},
		},
		'bold italic': {
			'generate': {
				'uppercase': 119912,
				'lowercase': 119938,
			},
		},
		'circled': {
			'generate': {
				'uppercase': 9398,    //24B6
				'lowercase': 9424     //24D0
			},
		},
		'negative-circled': {
			'generate': {
				'uppercase': 127312   //1F150
			},
			
		},
		'squared': {
			'generate': {
				'uppercase': 127280   //1F130
			},
		},
		'negative-squared': {
			'generate': {
				'uppercase': 127344   //1F170
			},
		},
		'script': {
			'generate': {
				'uppercase': 120016,  //1D4D0
				'lowercase': 120042   //1D4EA
			},
		},
		'fraktur': {
			'generate': {
				'uppercase': 120172,  //1D56C
				'lowercase': 120198   //1D586
			},
		},
		'parenthesized': {
			'generate': {
				'lowercase': 9372     //249C
			},
		},
		'monospace': {
			'generate': {
				'uppercase': 120432,  //1D670
				'lowercase': 120458   //1D68A
			}
		}
	};

	// Loop through the dictionary, and generate any sets that have generation rules.
	function generateDictionary() {
		
		var keys = Object.keys(dictionary);
		var i = 0;
		for( i; i < keys.length; i++ ) {
			var key = keys[i];
			var item = dictionary[key];

			// If dictionary item has generation rules.
			if( item.generate ) {

				// Check lower case letters
				if( item.generate.lowercase ) {

					for( var j = 0; j < characterOrders.lowercase.length; j++ ) {
						dictionary[key][characterOrders.lowercase[j]] = unicodePrefix + (item.generate.lowercase + j).toString(16) + unicodeSuffix;
					}
				}

				// Check for upper case
				if( item.generate.uppercase ) {
					for( var j = 0; j < characterOrders.uppercase.length; j++ ) {
						dictionary[key][characterOrders.uppercase[j]] = unicodePrefix + (item.generate.uppercase + j).toString(16) + unicodeSuffix;
					}
				}

				// Check items a second time, and add in a set of upper or lower case items if they don't exist.
				if( !item.generate.lowercase ) {
					for( var j = 0; j < characterOrders.lowercase.length; j++ ) {
						dictionary[key][characterOrders.lowercase[j]] = unicodePrefix + (item.generate.uppercase + j).toString(16) + unicodeSuffix;
					}
				}

				if( !item.generate.uppercase ) {
					for( var j = 0; j < characterOrders.uppercase.length; j++ ) {
						dictionary[key][characterOrders.uppercase[j]] = unicodePrefix + (item.generate.lowercase + j).toString(16) + unicodeSuffix;
					}
				}

				// Remove generation rules from dictionary
				delete dictionary[key]['generate'];
			}
		}
	}

	// Return the text, in the selected unicode format.
	// Hmm, I wonder if this is the most efficient way to do this?
	function translate( text, type ) {

		return bruteForceTranslate( text, dictionary[type] );
	};

	// Returns the types of data that can be translated.
	function getDictionaryKeys() {
		return Object.keys(dictionary);
	};

	// Hi there mystery shopper! Kapow, this algorithm (if you can call it that)
	// sure is bad. There must (MUST!) be a better way to do this. You should definitely
	// fork this repository, and try to figure it out!
	function bruteForceTranslate( text, dictionary ) {

		// Capitals, or Lowercase, or Both?
		var hasCapitals = ( dictionary['A'] !== undefined );
		var hasLower    = ( dictionary['a'] !== undefined );

		var i = 0;
		var letters = text.split('');
		for( i; i< letters.length; i++ ) {
			var letter = letters[i];

			if( letter in dictionary ) {
				letters[i] = dictionary[letter];
			}
		}

		return letters.join('');;
	};

	// Generates the dictionary when created.
	generateDictionary();
	return {
		translate: translate,
		getDictionaryKeys: getDictionaryKeys
	}
}
