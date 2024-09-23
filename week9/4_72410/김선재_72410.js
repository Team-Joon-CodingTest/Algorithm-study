function solution(new_id) {
  var id = "";

  id = new_id.toLowerCase(); // 1

  id = id.replace(/[^\w-._]+/g, ""); // 2

  id = id.replace(/\.{2,}/g, "."); // 3

  id = id.replace(/^\.|\.$/g, ""); // 4

  if (id === "") {
    // 5
    id = "a";
  }

  if (id.length >= 16) {
    // 6
    id = id.substring(0, 15);
    id = id.replace(/\.$/, "");
  }

  while (id.length <= 2) {
    // 7
    id += id[id.length - 1];
  }

  return id;
}
