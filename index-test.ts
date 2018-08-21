
describe("test", () => {
  describe('orderByOrderArray', () => {
    const orderByOrderArray = (find, orderArray) => {
      return orderArray.reduce((stack, orderNumber) => {
        const existElement = find(orderNumber);
        if (existElement != null) stack.push(existElement);
        return stack;
      }, []);
    }
    
    
    test('order depends on first arg', async () => {
      const input = [1, 2, 3, 4];
      const RoleOrder = [3, 2, 1, 4];
      const findElement = (num) => {
        return input.find((element) => element === num);
      };

      const ret = [3, 2, 1, 4];
      expect(orderByOrderArray(findElement, RoleOrder)).toEqual(ret);
    });

    test('avoid failed to find element', async () => {
      const input = [1, 3, 4];
      const RoleOrder = [3, 2, 1, 4];
      const findElement = (num) => {
        return input.find((element) => element === num);
      };

      const ret = [3, 1, 4];
      expect(orderByOrderArray(findElement, RoleOrder)).toEqual(ret);
    });

    test('sort object array', async () => {
      const input = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
      const RoleOrder = [3, 2, 1, 4];
      const findElement = (num) => {
        return input.find((element) => element.id === num);
      };

      const ret = [{ id: 3 }, { id: 2 }, { id: 1 }, { id: 4 }];
      expect(orderByOrderArray(findElement, RoleOrder)).toEqual(ret);
    });
  });
});
