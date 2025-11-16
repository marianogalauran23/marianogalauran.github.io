type Value = {
  x: number;
  y: number;
};

describe("animation", () => {
  it("should do something when x equals y", () => {
    const value: Value = { x: 5, y: 5 };

    if (value.x === value.y) {
      console.log("x equals y");
    }

    expect(value.x).toBe(value.y);
  });
});
