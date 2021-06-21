import Events from './index'
import { render, act } from '@testing-library/react'
import * as requests from '../../requests'
import '@testing-library/jest-dom/extend-expect'



jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
   useParams: () => ({
      id: 116
   })
}));

const actsOfVengance = {
   "id": 116,
   "title": "Acts of Vengeance!",
   "description": "Loki sets about convincing the super-villains of Earth to attack heroes other than those they normally fight in an attempt to destroy the Avengers to absolve his guilt over inadvertently creating the team in the first place.",
   "modified": "2013-06-28T16:31:24-0400",
   "start": "1989-12-10 00:00:00",
   "end": "2008-01-04 00:00:00",
   "thumbnail": {
      "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/40/51ca10d996b8b",
      "extension": "jpg"
   },
   "characters": {
      "available": 103,
      "collectionURI": "http://gateway.marvel.com/v1/public/events/116/characters",
      "items": [
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009435",
            "name": "Alicia Masters"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010370",
            "name": "Alpha Flight"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009152",
            "name": "Ancient One"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009156",
            "name": "Apocalypse"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009159",
            "name": "Archangel"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009165",
            "name": "Avengers"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009168",
            "name": "Banshee"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009175",
            "name": "Beast"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009179",
            "name": "Beetle (Abner Jenkins)"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009329",
            "name": "Ben Grimm"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009186",
            "name": "Black Knight (Sir Percy of Scandia)"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009189",
            "name": "Black Widow"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010366",
            "name": "Boom Boom"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009167",
            "name": "Bruce Banner"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009213",
            "name": "Bushwacker"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009220",
            "name": "Captain America"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011027",
            "name": "Captain Universe"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009234",
            "name": "Chameleon"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009239",
            "name": "Clea"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009243",
            "name": "Colossus"
         }
      ],
      "returned": 20
   },
   "stories": {
      "available": 160,
      "collectionURI": "http://gateway.marvel.com/v1/public/events/116/stories",
      "items": [
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/12960",
            "name": "Fantastic Four (1961) #334",
            "type": "cover"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/12961",
            "name": "Shadows of Alarm..!",
            "type": "interiorStory"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/12962",
            "name": "Fantastic Four (1961) #335",
            "type": "cover"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/12963",
            "name": "Death by Debate",
            "type": "interiorStory"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/12964",
            "name": "Fantastic Four (1961) #336",
            "type": "cover"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/12965",
            "name": "Dark Congress!",
            "type": ""
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/14056",
            "name": "Amazing Spider-Man (1963) #326",
            "type": "cover"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/14057",
            "name": "Amazing Spider-Man (1963) #326",
            "type": "interiorStory"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/14058",
            "name": "Amazing Spider-Man (1963) #327",
            "type": "cover"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/14059",
            "name": "Cunning Attractions!",
            "type": "interiorStory"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/14060",
            "name": "Amazing Spider-Man (1963) #328",
            "type": "cover"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/14061",
            "name": "Shaw's Gambit",
            "type": "interiorStory"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/14062",
            "name": "Amazing Spider-Man (1963) #329",
            "type": "cover"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/14063",
            "name": "Amazing Spider-Man (1963) #329",
            "type": "interiorStory"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/14916",
            "name": "AVENGERS (1963) #311",
            "type": "cover"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/14917",
            "name": "The Weakest Point",
            "type": "interiorStory"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/14918",
            "name": "AVENGERS (1963) #312",
            "type": "cover"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/14919",
            "name": "Has the Whole World Gone Mad?!?",
            "type": "interiorStory"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/14920",
            "name": "AVENGERS (1963) #313",
            "type": "cover"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/stories/14921",
            "name": "Thieves Honor",
            "type": "interiorStory"
         }
      ],
      "returned": 20
   },
   "comics": {
      "available": 52,
      "collectionURI": "http://gateway.marvel.com/v1/public/events/116/comics",
      "items": [
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/12744",
            "name": "Alpha Flight (1983) #79"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/12746",
            "name": "Alpha Flight (1983) #80"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/7188",
            "name": "Avengers (1963) #311"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/7189",
            "name": "Avengers (1963) #312"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/7190",
            "name": "Avengers (1963) #313"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/6933",
            "name": "Avengers Annual (1967) #19"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/17795",
            "name": "West Coast Avengers (1985) #53"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/17796",
            "name": "West Coast Avengers (1985) #54"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/17797",
            "name": "West Coast Avengers (1985) #55"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/17695",
            "name": "AVENGERS WEST COAST: DARKER THAN SCARLET TPB (Trade Paperback)"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/7746",
            "name": "Captain America (1968) #365"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/7747",
            "name": "Captain America (1968) #366"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/7748",
            "name": "Captain America (1968) #367"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/8268",
            "name": "Daredevil (1964) #275"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/8269",
            "name": "Daredevil (1964) #276"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/20170",
            "name": "Doctor Strange, Sorcerer Supreme (1988) #11"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/20171",
            "name": "Doctor Strange, Sorcerer Supreme (1988) #12"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/20172",
            "name": "Doctor Strange, Sorcerer Supreme (1988) #13"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/13155",
            "name": "Fantastic Four (1961) #334"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/13156",
            "name": "Fantastic Four (1961) #335"
         }
      ],
      "returned": 20
   },
   "series": {
      "available": 22,
      "collectionURI": "http://gateway.marvel.com/v1/public/events/116/series",
      "items": [
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2116",
            "name": "Alpha Flight (1983 - 1994)"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1991",
            "name": "Avengers (1963 - 1996)"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1988",
            "name": "Avengers Annual (1967 - 1994)"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/3462",
            "name": "AVENGERS WEST COAST: DARKER THAN SCARLET TPB (2008)"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1996",
            "name": "Captain America (1968 - 1996)"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2002",
            "name": "Daredevil (1964 - 1998)"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/3741",
            "name": "Doctor Strange, Sorcerer Supreme (1988 - 1996)"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2121",
            "name": "Fantastic Four (1961 - 1998)"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2021",
            "name": "Incredible Hulk (1962 - 1999)"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2029",
            "name": "Iron Man (1968 - 1996)"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2055",
            "name": "New Mutants (1983 - 1991)"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2271",
            "name": "Peter Parker, the Spectacular Spider-Man (1976 - 1998)"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/5860",
            "name": "Punisher War Journal (1988 - 1995)"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/3695",
            "name": "Quasar (1989 - 1994)"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2288",
            "name": "Silver Surfer (1987 - 1998)"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/1987",
            "name": "The Amazing Spider-Man (1963 - 1998)"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2083",
            "name": "Thor (1966 - 1996)"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2258",
            "name": "Uncanny X-Men (1963 - 2011)"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/2092",
            "name": "Web of Spider-Man (1985 - 1995)"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/series/3630",
            "name": "West Coast Avengers (1985 - 1994)"
         }
      ],
      "returned": 20
   }
}


beforeEach(() => {
   jest.spyOn(requests, 'getSingleEventById').mockImplementation(() => {
      return Promise.resolve(actsOfVengance)
   })
})

describe('tests for events component', () => {
   test('should have been called once', async () => {
      let component;
      await act(async () => {
         component = render(<Events items={actsOfVengance.characters.items} />)
      })
      expect(requests.getSingleEventById).toHaveBeenCalledTimes(1)
   });
   test('should have been called with the id we got by params in our react-router-dom', async () => {
      let component;
      await act(async () => {
         component = render(<Events items={actsOfVengance.characters.items} />)
      })
      expect(requests.getSingleEventById).toHaveBeenCalledWith(116)
   });
});