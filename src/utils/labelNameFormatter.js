export const labelName = (preposicao, key) => {
  let object = key.replace(/([a-z])([A-Z])/g, "$1 $2");
  object = object[0].toUpperCase() + object?.slice(1);
  if (preposicao === "/") {
    const lastWord = object.split(" ").pop();
    return lastWord;
  }
  object = object.split(" ").join(preposicao);
  return object;
};
