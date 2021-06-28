const itActsAsFavoriteRestaurantModel = (favoriteRestaurant) => {
  it('should return the restaurant that has been added', async () => {
    favoriteRestaurant.put({ id: 1 });
    favoriteRestaurant.put({ id: 2 });

    expect(await favoriteRestaurant.get(1))
      .toEqual({ id: 1 });
    expect(await favoriteRestaurant.get(2))
      .toEqual({ id: 2 });
    expect(await favoriteRestaurant.get(3))
      .toEqual(undefined);
  });

  it('should refuse a restaurant from being added if it does not have the correct property', async () => {
    favoriteRestaurant.put({ aProperty: 'property' });

    expect(await favoriteRestaurant.getAll())
      .toEqual([]);
  });

  it('can return all of the restaurants that have been added', async () => {
    favoriteRestaurant.put({ id: 1 });
    favoriteRestaurant.put({ id: 2 });

    expect(await favoriteRestaurant.getAll())
      .toEqual([
        { id: 1 },
        { id: 2 },
      ]);
  });

  it('should remove favorite restaurant', async () => {
    favoriteRestaurant.put({ id: 1 });
    favoriteRestaurant.put({ id: 2 });
    favoriteRestaurant.put({ id: 3 });

    await favoriteRestaurant.delete(1);

    expect(await favoriteRestaurant.getAll())
      .toEqual([
        { id: 2 },
        { id: 3 },
      ]);
  });

  it('should handle request to remove a restaurant even though the restaurant has not been added', async () => {
    favoriteRestaurant.put({ id: 1 });
    favoriteRestaurant.put({ id: 2 });
    favoriteRestaurant.put({ id: 3 });

    await favoriteRestaurant.delete(4);

    expect(await favoriteRestaurant.getAll())
      .toEqual([
        { id: 1 },
        { id: 2 },
        { id: 3 },
      ]);
  });
};

export { itActsAsFavoriteRestaurantModel };
