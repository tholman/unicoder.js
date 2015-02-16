function Unicoder() {

	var characterOrders = {
		'lowercase': 'abcdefghijklmnopqrstuvwxyz',
		'uppercase': 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
	}

	var unicodePrefix = '&#x';
	var unicodeSuffix = ';'

	var dictionary = {
		'parenthesized': {
			'generate': {
				'lowercase': 9372  //249C
			},
		},
		'circled': {
			'generate': {
				'lowercase': 9424, //24D0
				'uppercase': 9398  //24B6
			},
		},
		'negative-circled': {
			'a': '',
			'b': '',
			'c': '',
			'd': '',
			'e': '',
			'f': '',
			'g': '',
			'h': '',
			'i': '',
			'j': '',
			'k': '',
			'l': '',
			'm': '',
			'n': '',
			'o': '',
			'p': '',
			'q': '',
			'r': '',
			's': '',
			't': '',
			'u': '',
			'v': '',
			'w': '',
			'x': '',
			'y': '',
			'z': '',
			'0': '',
			'1': '',
			'2': '',
			'3': '',
			'4': '',
			'5': '',
			'6': '',
			'7': '',
			'8': '',
			'9': ''
		},
		'squared': {
			'a': '',
			'b': '',
			'c': '',
			'd': '',
			'e': '',
			'f': '',
			'g': '',
			'h': '',
			'i': '',
			'j': '',
			'k': '',
			'l': '',
			'm': '',
			'n': '',
			'o': '',
			'p': '',
			'q': '',
			'r': '',
			's': '',
			't': '',
			'u': '',
			'v': '',
			'w': '',
			'x': '',
			'y': '',
			'z': '',
			'0': '',
			'1': '',
			'2': '',
			'3': '',
			'4': '',
			'5': '',
			'6': '',
			'7': '',
			'8': '',
			'9': ''
		},
		'negative-squared': {
			'a': '',
			'b': '',
			'c': '',
			'd': '',
			'e': '',
			'f': '',
			'g': '',
			'h': '',
			'i': '',
			'j': '',
			'k': '',
			'l': '',
			'm': '',
			'n': '',
			'o': '',
			'p': '',
			'q': '',
			'r': '',
			's': '',
			't': '',
			'u': '',
			'v': '',
			'w': '',
			'x': '',
			'y': '',
			'z': '',
			'0': '',
			'1': '',
			'2': '',
			'3': '',
			'4': '',
			'5': '',
			'6': '',
			'7': '',
			'8': '',
			'9': ''
		},
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

				if( item.generate.uppercase ) {
					for( var j = 0; j < characterOrders.uppercase.length; j++ ) {
						dictionary[key][characterOrders.uppercase[j]] = unicodePrefix + (item.generate.uppercase + j).toString(16) + unicodeSuffix;
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

		// var hasCapitals = ( dictionary['a'] && dictionary['A'] );

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
		dictionary: dictionary,
		getDictionaryKeys: getDictionaryKeys
	}
}