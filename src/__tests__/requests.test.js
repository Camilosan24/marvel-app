import { getAllItems, getSingleCharacterById, getSingleCharacterByStartName, getSingleComicById, getSingleEventById, getSingleSerieById } from '../requests'


describe('get single character tests', () => {
   test('should have property id, name, description, modified and comics', async () => {
      const result = await getSingleCharacterById(1017100)
      expect(result).toHaveProperty('id', 1017100)
      expect(result).toHaveProperty('name', 'A-Bomb (HAS)')
      expect(result).toHaveProperty('description')
      expect(result).toHaveProperty('modified','2013-09-18T15:54:04-0400')
      expect(result).toHaveProperty('comics')
   });
});