'use strict';
import axios from 'axios';

export default class ChordService {
	constructor(base) {
		this.base = base;
	}

  analyze(fingering, tuning) {
    return axios.get(`${this.base}/analyze/${encodeURIComponent(fingering.trim())}`,
      {
        // headers: {
        //   'Access-Control-Allow-Origin': '*',
        // },
        params: {
          chord: encodeURIComponent(fingering.trim()),
          tuning: tuning,
          condense: false,
          jazz: false
        }
      }
    ).then(r => r.data).catch(r => alert(r));
  }

  shellchord(fretspan, chord, tuning, condense, jazz) {
    return axios.get(`${this.base}/shellchord/${fretspan}`, {
        params: {
          chord: encodeURIComponent(chord.trim()),
          tuning: tuning,
          condense: false,
          jazz: jazz
        }
      }
    ).then(r => r.data).catch(r => alert(r));
  }
	
 chords(fretspan, chord, tuning, condense, jazz) {
   return axios.get(`${this.base}/chords/${fretspan}`, {
     params: {
       chord: encodeURIComponent(chord.trim()),
       tuning: tuning,
       condense: false,
       jazz: jazz
     }
   }).then(r => r.data).catch(r => alert(r));
	}

  arpeggio(chord, tuning) {
    return axios.get(`${this.base}/arpeggio`, {
      params: {
        chord: encodeURIComponent(chord),
        tuning: tuning
      }
    }).then(r => r.data).catch(r => alert(r));
  }
	
}