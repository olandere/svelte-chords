'use strict';
import 'whatwg-fetch';

export default class ChordService {
	constructor(base) {
		this.base = base;
	}
	
	serialize(data) {
		return Object.keys(data).map(keyName => encodeURIComponent(keyName) + '=' + encodeURIComponent(data[keyName])).join('&');
	}
	
	analyze(fingering, tuning) {
		return fetch(this.base + '/analyze/' + encodeURIComponent(fingering.trim()) + "?" + this.serialize({
      chord: encodeURIComponent(fingering.trim()),
      tuning: tuning,
      condense: false,
      jazz: false
		})).then(r => r.json());
	}
	
	shellchord(fretspan, chord, tuning, condense, jazz) {
		return fetch(this.base +'/shellchord/' + fretspan + '?' + this.serialize({
      chord: encodeURIComponent(chord.trim()),
      tuning: tuning,
      condense: condense,
      jazz: jazz
		})
		).then(r => r.json());
	}
	
 chords(fretspan, chord, tuning, condense, jazz) {
		return fetch(this.base +'/chords/' + fretspan + '?' + this.serialize({
      chord: encodeURIComponent(chord.trim()),
      tuning: tuning,
      condense: condense,
      jazz: jazz
		})).then(r => r.json());
	}

  arpeggio(chord, tuning) {
    return fetch(this.base + '/arpeggio' + '?' + this.serialize({
      chord: encodeURIComponent(chord),
      tuning: tuning
    })).then(r => r.json());
  }
	
}