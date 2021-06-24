import Item from './index'
import { render, act } from '@testing-library/react'
import * as requests from '../../requests'
import '@testing-library/jest-dom/extend-expect'



jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
   useParams: () => ({
      id: 1009368
   }),
   useLocation: () => ({
      pathname: '/characters/1009368'
   })
}));

const ironMan = {
   "id": 1009368,
   "name": "Iron Man",
   "description": "Wounded, captured and forced to build a weapon by his enemies, billionaire industrialist Tony Stark instead created an advanced suit of armor to save his life and escape captivity. Now with a new outlook on life, Tony uses his money and intelligence to make the world a safer, better place as Iron Man.",
   "modified": "2016-09-28T12:08:19-0400",
   "thumbnail": {
      "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55",
      "extension": "jpg"
   },
   "comics": {
      "available": 2578,
      "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009368/comics",
      "items": [
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/43495",
            "name": "A+X (2012) #2"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/43506",
            "name": "A+X (2012) #7"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/22461",
            "name": "Adam: Legend of the Blue Marvel (2008) #1"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/22856",
            "name": "Adam: Legend of the Blue Marvel (2008) #2"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/23733",
            "name": "Adam: Legend of the Blue Marvel (2008) #5"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/76359",
            "name": "Aero (2019) #11"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/76360",
            "name": "Aero (2019) #12"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/30090",
            "name": "Age of Heroes (2010) #1"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/33566",
            "name": "Age of Heroes (2010) #2"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/30092",
            "name": "Age of Heroes (2010) #3"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/30093",
            "name": "Age of Heroes (2010) #4"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/67603",
            "name": "Age of Innocence: The Rebirth of Iron Man (1996) #1"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/38524",
            "name": "Age of X: Universe (2011) #1"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/38523",
            "name": "Age of X: Universe (2011) #2"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/21280",
            "name": "All-New Iron Manual (2008) #1"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/55363",
            "name": "All-New, All-Different Avengers (2015) #10"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/55364",
            "name": "All-New, All-Different Avengers (2015) #11"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/12653",
            "name": "Alpha Flight (1983) #113"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/12668",
            "name": "Alpha Flight (1983) #127"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/55311",
            "name": "The Amazing Spider-Man (2015) #13"
         }
      ],
      "returned": 20
   },
   "series": {
      "available": 631,
      "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009368/series",
      "items": [
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/16450",
            "name": "A+X (2012 - 2014)"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/6079",
            "name": "Adam: Legend of the Blue Marvel (2008)"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/27392",
            "name": "Aero (2019 - Present)"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/9790",
            "name": "Age of Heroes (2010)"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/24380",
            "name": "Age of Innocence: The Rebirth of Iron Man (1996)"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/13896",
            "name": "Age of X: Universe (2011)"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/4897",
            "name": "All-New Iron Manual (2008)"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/20443",
            "name": "All-New, All-Different Avengers (2015 - 2016)"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2116",
            "name": "Alpha Flight (1983 - 1994)"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/454",
            "name": "Amazing Spider-Man (1999 - 2013)"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/15540",
            "name": "Amazing Spider-Man Annual (2012)"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2984",
            "name": "Amazing Spider-Man Annual (1964 - 2018)"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1489",
            "name": "AMAZING SPIDER-MAN VOL. 10: NEW AVENGERS TPB (2005)"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/318",
            "name": "Amazing Spider-Man Vol. 6 (2004)"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/23446",
            "name": "Amazing Spider-Man: Worldwide Vol. 2 (2017)"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/6056",
            "name": "ANNIHILATION CLASSIC HC (2008)"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/14818",
            "name": "Annihilators: Earthfall (2011)"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/14779",
            "name": "Art of Marvel Studios TPB Slipcase (2011 - Present)"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/9792",
            "name": "Astonishing Spider-Man & Wolverine (2010 - 2011)"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/6792",
            "name": "Astonishing Tales (2009)"
         }
      ],
      "returned": 20
   },
   "events": {
      "available": 31,
      "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009368/events",
      "items": [
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/116",
            "name": "Acts of Vengeance!"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/303",
            "name": "Age of X"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/231",
            "name": "Armor Wars"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/233",
            "name": "Atlantis Attacks"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/234",
            "name": "Avengers Disassembled"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/310",
            "name": "Avengers VS X-Men"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/296",
            "name": "Chaos War"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/238",
            "name": "Civil War"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/239",
            "name": "Crossing"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/318",
            "name": "Dark Reign"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/245",
            "name": "Enemy of the State"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/249",
            "name": "Fatal Attractions"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/302",
            "name": "Fear Itself"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/251",
            "name": "House of M"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/315",
            "name": "Infinity"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/29",
            "name": "Infinity War"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/317",
            "name": "Inhumanity"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/255",
            "name": "Initiative"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/37",
            "name": "Maximum Security"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/events/154",
            "name": "Onslaught"
         }
      ],
      "returned": 20
   },

}

beforeEach(() => {
   jest.spyOn(requests, 'getSingleCharacterById').mockImplementation(() => {
      return Promise.resolve(ironMan)
   })
})

describe('tests for Item component', () => {
   test('should have been called once', async () => {
      let component;
      await act(async () => {
         component = render(<Item />)
      })
      expect(requests.getSingleCharacterById).toHaveBeenCalledTimes(1)
   });
   test('should have been called with id we got by params in our react-router-dom', async () => {
      let component;
      await act(async () => {
         component = render(<Item />)
      })
      expect(requests.getSingleCharacterById).toHaveBeenCalledWith(1009368)
   });
});