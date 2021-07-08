import createPost from "../helpers/createPost";

describe("detail basic post object creation", () => {
  test("reject post with no info", () => {
    expect(createPost()).toBeUndefined();
  });

  test("create post with basic info provided", () => {
    expect(
      typeof createPost(
        "Fui a las vegas y te lo muestro",
        "Mucha info por aqui",
        "diegoromero",
        "deportes"
      )
    ).toBe("object");
  });
  test("create post with basic info provided", () => {
    const postObject = createPost(
      "Fui a las vegas y te lo muestro",
      "Mucha info por aqui",
      "diegoromero",
      "deportes"
    );
    expect(postObject.shortTitle).not.toBeUndefined();
    expect(postObject.title).not.toBeUndefined();
    expect(postObject.body).not.toBeUndefined();
    expect(postObject.author).not.toBeUndefined();
    expect(postObject.category).not.toBeUndefined();
    expect(postObject.points).not.toBeUndefined();
    expect(postObject.comments).not.toBeUndefined();
  });

  test("should shorten title", () => {
    const postObject = createPost(
      "TITULO SUPER HIPER MEGA LAAAAAAAAAAAAAAARGO CON MUCHOS DETALLES, MAS DE 50 CHARS",
      "Mucha info por aqui",
      "diegoromero",
      "deportes"
    );
    expect(postObject.shortTitle.length).toBeLessThanOrEqual(50);
  });
});
