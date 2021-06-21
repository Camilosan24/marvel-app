import Comic from './index'
import { render, act } from '@testing-library/react'
import * as requests from '../../requests'
import '@testing-library/jest-dom/extend-expect'



jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
   useParams: () => ({
      id: 1886
   })
}));

const spiderMan = {
   "id": 1886,
   "title": "Official Handbook of the Marvel Universe (2004) #12 (SPIDER-MAN)",
   "description": "The spectacular sequel to last year's OFFICIAL HANDBOOK OF THE MARVEL UNIVERSE: SPIDER-MAN 2004, this Official Handbook contains in-depth bios on more than 30 of the wisecracking web-slinger's closest allies and most infamous enemies - including the Stacy Twins, fresh from the pages of AMAZING SPIDER-MAN, and Toxin, in time for this month's TOXIN #1! Plus: An all-new cover by superstar artist Tom Raney, digitally painted by Morry Hollowell.\r<br>48 PGS./Marvel PSR ...$3.99\r<br>",
   "modified": "-0001-11-30T00:00:00-0500",
   "series": {
     "resourceURI": "http://gateway.marvel.com/v1/public/series/787",
     "name": "Official Handbook of the Marvel Universe (2004)"
   },
   "thumbnail": {
     "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/4bc64020a4ccc",
     "extension": "jpg"
   },

   "characters": {
     "available": 14,
     "collectionURI": "http://gateway.marvel.com/v1/public/comics/1886/characters",
     "items": [
       {
         "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009156",
         "name": "Apocalypse"
       },
       {
         "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009197",
         "name": "Blink"
       },
       {
         "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009243",
         "name": "Colossus"
       },
       {
         "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009313",
         "name": "Gambit"
       },
       {
         "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009349",
         "name": "Holocaust (Age of Apocalypse)"
       },
       {
         "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009417",
         "name": "Magneto"
       },
       {
         "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009447",
         "name": "Mister Sinister"
       },
       {
         "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009546",
         "name": "Rogue"
       },
       {
         "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010969",
         "name": "Sabretooth (Age of Apocalypse)"
       },
       {
         "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010975",
         "name": "Shadowcat (Age of Apocalypse)"
       },
       {
         "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010976",
         "name": "Silver Samurai (Age of Apocalypse)"
       },
       {
         "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010979",
         "name": "Storm (Age of Apocalypse)"
       },
       {
         "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009636",
         "name": "Sunfire"
       },
       {
         "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009718",
         "name": "Wolverine"
       }
     ],
     "returned": 14
   },
   "events": {
     "available": 0,
     "collectionURI": "http://gateway.marvel.com/v1/public/comics/1886/events",
     "items": [],
     "returned": 0
   }
 }


beforeEach(() => {
   jest.spyOn(requests, 'getSingleComicById').mockImplementation(() => {
      return Promise.resolve(spiderMan)
   })
})

describe('tests for comic component', () => {
   test('should have been called once', async () => {
      let component;
      await act(async () => {
         component = render(<Comic items={spiderMan.characters.items} />)
      })
      expect(requests.getSingleComicById).toHaveBeenCalledTimes(1)
   });
   test('should have been called with the id we got by params in our react-router-dom', async () => {
      let component;
      await act(async () => {
         component = render(<Comic items={spiderMan.characters.items} />)
      })
      expect(requests.getSingleComicById).toHaveBeenCalledWith(1886)
   });
});