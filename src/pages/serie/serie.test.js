import Serie from './index'
import { render, act } from '@testing-library/react'
import * as requests from '../../requests'
import '@testing-library/jest-dom/extend-expect'



jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
   useParams: () => ({
      id: 19245
   })
}));

const AForce = {
   "id": 19245,
   "title": "A-Force (2015)",
   "description": null,
   "startYear": 2015,
   "endYear": 2015,
   "modified": "2019-09-05T14:05:41-0400",
   "thumbnail": {
      "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/90/553a60c8bcc98",
      "extension": "jpg"
   },
   "characters": {
      items: []
   },
   "comics": {
      "available": 10,
      "collectionURI": "http://gateway.marvel.com/v1/public/series/19245/comics",
      "items": [
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/51202",
            "name": "A-Force (2015) #1"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/51203",
            "name": "A-Force (2015) #1 (Young Variant)"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/53534",
            "name": "A-Force (2015) #1 (Molina Variant)"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/51204",
            "name": "A-Force (2015) #2"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/54992",
            "name": "A-Force (2015) #2 (Anka Variant)"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/51205",
            "name": "A-Force (2015) #3"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/51206",
            "name": "A-Force (2015) #4"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/55900",
            "name": "A-Force (2015) #4 (Toshirou Manga Variant)"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/51207",
            "name": "A-Force (2015) #5"
         },
         {
            "resourceURI": "http://gateway.marvel.com/v1/public/comics/56382",
            "name": "A-Force (2015) #5 (Samnee Kirby Monster Variant)"
         }
      ],
      "returned": 10
   },
   "events": {
      "items": []
   }
}


beforeEach(() => {
   jest.spyOn(requests, 'getSingleSerieById').mockImplementation(() => {
      return Promise.resolve(AForce)
   })
})

describe('tests for Serie component', () => {
   test('should have been called once', async () => {
      let component;
      await act(async () => {
         component = render(<Serie items={AForce.comics.items} />)
      })
      expect(requests.getSingleSerieById).toHaveBeenCalledTimes(1)
   });
   test('should have been called with the id we got by params in our react router', async () => {
      let component;
      await act(async () => {
         component = render(<Serie items={AForce.comics.items} />)
      })
      expect(requests.getSingleSerieById).toHaveBeenCalledWith(19245)
   });
});