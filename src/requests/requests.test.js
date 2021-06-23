import { getAllItems, getSingleCharacterById, getAllCharactersByStartName, getSingleComicById, getSingleEventById, getSingleSerieById } from './index'


describe('tests for getAllItems', () => {
   test('should have an array with length of 20', async () => {
      const result = await getAllItems(0, "/characters");
      expect(result.length).toBe(20)
   });
   test('sholud return error no se pudo obtener invalid section', async () => {
      await expect(getAllItems(0, '/character')).rejects.toEqual('no se pudo obtener')
   })
})



describe('tests for getSingleCharacterById', () => {
   test('should have property id', async () => {
      const result = await getSingleCharacterById(1017100)
      expect(result).toHaveProperty('id', 1017100)
   });

   test('should have property name', async () => {
      const result = await getSingleCharacterById(1017100)
      expect(result).toHaveProperty('name', 'A-Bomb (HAS)')
   });
   test('should have property modified', async () => {
      const result = await getSingleCharacterById(1017100)
      expect(result).toHaveProperty('modified', '2013-09-18T15:54:04-0400')
   });

   test('should have property comics', async () => {
      const result = await getSingleCharacterById(1017100)
      expect(result).toHaveProperty('comics')
   });

   test('shouldnt accept string ', async () => {
      const result = getSingleCharacterById('true')
      await expect(result).rejects.toBe('no se pudo obtener')
   });
});

describe('tests for getSingleCharacterByStartName', () => {
   test("numbers aren't accepted", async () => {
      const result = getAllCharactersByStartName(1009368)
      await expect(result).rejects.toBe('no se pudo obtener')
   })
   test("booleans are not accepted", async () => {
      const result = getAllCharactersByStartName(true)
      await expect(result).rejects.toBe('no se pudo obtener')
   })
})

describe('tests for getSingleComicById', () => {
   test('should has a propertly id', async () => {
      const result = await getSingleComicById(3627)
      expect(result).toHaveProperty('id', 3627)
   });

   test('shouldnt accept booleans', async () => {
      const result = getSingleComicById(true)
      await expect(result).rejects.toBe('no se pudo obtener')
   });
   test('should has a propertly title', async () => {
      const result = await getSingleComicById(3627)
      expect(result).toHaveProperty('title', 'Storm (2006)')
   });

})

describe('tests for getSingleEventById', () => {
   test('should the same id', async () => {
      const result = await getSingleEventById(314)
      expect(result).toHaveProperty('id', 314)
   });

   test("shouldn't accept strings", async () => {
      const result = getSingleEventById('hola')
      await expect(result).rejects.toBe('no se pudo obtener')
   });
})

describe('tests for getSingleSerieById', () => {
   test('should have property id', async () => {
      const result = await getSingleSerieById(29697)
      expect(result).toHaveProperty('id', 29697)
   })

   test('shouldnt accept booleans', async () => {
      const result = getSingleSerieById(true)
      await expect(result).rejects.toBe('no se pudo obtener')
   })
})
