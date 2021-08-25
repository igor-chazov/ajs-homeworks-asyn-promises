import GameSavingLoader from '../gamesavingloader';

test('Должна создавать объект типа GameSaving', (done) => {
  GameSavingLoader.load().then((saving) => expect(JSON.parse(saving)).toEqual({
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1, name: 'Hitman', level: 10, points: 2000,
    },
  }));
  done();
});

test('Если promise будет выполнен с ошибкой', () => {
  expect.assertions(1);
  return GameSavingLoader.load().catch((e) => expect(e).toMatch('error'));
});
