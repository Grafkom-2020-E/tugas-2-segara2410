function main() {
  var canvas = document.getElementById("myCanvas");
  var gl = canvas.getContext("webgl");

  let cubeVertices = [];
  let firstRVertices = [];
  let secondRVertices = [];

  const rLetters = {
    objectPoints: [
      [-0.975, -0.8,  0.1], // 0
      [-0.975,  0.8,  0.1], // 1
      [-0.8,    0.8,  0.1], // 2
      [-0.8,   -0.8,  0.1], // 3

      [-0.8,    0.65, 0.1], // 4
      [-0.35,   0.65, 0.1], // 5
      [-0.25,   0.8,  0.1], // 6
      
      [-0.1,    0.65, 0.1], // 7
      [-0.25,   0.55, 0.1], // 8

      [-0.25,   0.15, 0.1], // 9
      [-0.1,    0.05, 0.1], // 10
      
      [-0.25,  -0.1,  0.1],  // 11
      [-0.35,   0.05, 0.1],  // 12
      
      [-0.8,    0.05, 0.1], // 13
      [-0.8,   -0.1,  0.1], // 14

      [-0.5,   -0.1,  0.1], // 15
      [-0.1,   -0.8,  0.1], // 16
      [-0.25,  -0.8,  0.1], // 17
      [-0.7,   -0.1,  0.1], // 18

      [-0.975, -0.8,  -0.1], // 0
      [-0.975,  0.8,  -0.1], // 1
      [-0.8,    0.8,  -0.1], // 2
      [-0.8,   -0.8,  -0.1], // 3

      [-0.8,    0.65, -0.1], // 4
      [-0.35,   0.65, -0.1], // 5
      [-0.25,   0.8,  -0.1], // 6
      
      [-0.1,    0.65, -0.1], // 7
      [-0.25,   0.55, -0.1], // 8

      [-0.25,   0.15, -0.1], // 9
      [-0.1,    0.05, -0.1], // 10
      
      [-0.25,  -0.1,  -0.1],  // 11
      [-0.35,   0.05, -0.1],  // 12
      
      [-0.8,    0.05, -0.1], // 13
      [-0.8,   -0.1,  -0.1], // 14

      [-0.5,   -0.1,  -0.1], // 15
      [-0.1,   -0.8,  -0.1], // 16
      [-0.25,  -0.8,  -0.1], // 17
      [-0.7,   -0.1,  -0.1], // 18

      [-0.975+1.075, -0.8,  0.1], // 0
      [-0.975+1.075,  0.8,  0.1], // 1
      [-0.8+1.075,    0.8,  0.1], // 2
      [-0.8+1.075,   -0.8,  0.1], // 3

      [-0.8+1.075,    0.65, 0.1], // 4
      [-0.35+1.075,   0.65, 0.1], // 5
      [-0.25+1.075,   0.8,  0.1], // 6
      
      [-0.1+1.075,    0.65, 0.1], // 7
      [-0.25+1.075,   0.55, 0.1], // 8

      [-0.25+1.075,   0.15, 0.1], // 9
      [-0.1+1.075,    0.05, 0.1], // 10
      
      [-0.25+1.075,  -0.1,  0.1],  // 11
      [-0.35+1.075,   0.05, 0.1],  // 12
      
      [-0.8+1.075,    0.05, 0.1], // 13
      [-0.8+1.075,   -0.1,  0.1], // 14

      [-0.5+1.075,   -0.1,  0.1], // 15
      [-0.1+1.075,   -0.8,  0.1], // 16
      [-0.25+1.075,  -0.8,  0.1], // 17
      [-0.7+1.075,   -0.1,  0.1], // 18

      [-0.975+1.075, -0.8,  -0.1], // 0
      [-0.975+1.075,  0.8,  -0.1], // 1
      [-0.8+1.075,    0.8,  -0.1], // 2
      [-0.8+1.075,   -0.8,  -0.1], // 3

      [-0.8+1.075,    0.65, -0.1], // 4
      [-0.35+1.075,   0.65, -0.1], // 5
      [-0.25+1.075,   0.8,  -0.1], // 6
      
      [-0.1+1.075,    0.65, -0.1], // 7
      [-0.25+1.075,   0.55, -0.1], // 8

      [-0.25+1.075,   0.15, -0.1], // 9
      [-0.1+1.075,    0.05, -0.1], // 10
      
      [-0.25+1.075,  -0.1,  -0.1],  // 11
      [-0.35+1.075,   0.05, -0.1],  // 12
      
      [-0.8+1.075,    0.05, -0.1], // 13
      [-0.8+1.075,   -0.1,  -0.1], // 14

      [-0.5+1.075,   -0.1,  -0.1], // 15
      [-0.1+1.075,   -0.8,  -0.1], // 16
      [-0.25+1.075,  -0.8,  -0.1], // 17
      [-0.7+1.075,   -0.1,  -0.1], // 18
    ],

    objectColors: [
      //R1
      [],
      [0.47, 0.59, 1.0],    // birupastel, belakang, a, 1
      [0.47, 0.59, 1.0],    // birupastel, belakang, b, 2
      [], // 3
      [0.9, 0.94, 0.3],    // kuning, kanan, a, 4
      [0.47, 0.59, 1.0],    // birupastel, belakang, c, 5
      [0.9, 0.94, 0.3],    // kuning, atas, a, 6
      [0.9, 0.94, 0.3],    // kuning, ataskanan, a, 7 
      [0.47, 0.59, 1.0],    // birupastel, belakang, d, 8
      [0.47, 0.59, 1.0],    // birupastel, belakang, e, 9
      [0.9, 0.94, 0.3],    // kuning, kanan, b, 10
      [0.9, 0.94, 0.3],    // birupastel, bawah, b, 11
      [0.9, 0.94, 0.3],    // kuning, ataskiri, 12
      [0.47, 0.59, 1.0],    // birupastel, belakang, f, 13
      [0.9, 0.94, 0.3],    // kuning, kanan, c, 14
      [0.9, 0.94, 0.3],    // kuning, ataskanan, b, 15
      [0.47, 0.59, 1.0],    // birupastel, belakang, g, 16
      [], // 17
      [], // 18
      // + 19
      [0.9, 0.94, 0.3],    // kuning, kiri, a, 0
      [0.47, 0.59, 1.0],    // birupastel, depan, a, 1
      [0.47, 0.59, 1.0],    // birupastel, depan, b, 2
      [0.9, 0.94, 0.3],    // birupastel, bawah, e, 3
      [0.9, 0.94, 0.3],    // birupastel, bawah, a, 4
      [0.9, 0.94, 0.3],    // kuning, kiribawah, a, 5
      [0.47, 0.59, 1.0],    // birupastel, depan, c, 6
      [0.47, 0.59, 1.0],    // birupastel, depan, d, 7
      [0.9, 0.94, 0.3],    // kuning, kiri, b, 8
      [0.47, 0.59, 1.0],    // birupastel, depan, e, 9
      [0.9, 0.94, 0.3],    // kuning, kananbawah, 10
      [0.47, 0.59, 1.0],    // birupastel, depan, f, 11
      [0.9, 0.94, 0.3],    // kuning, atas, b, 12
      [], // 13
      [0.9, 0.94, 0.3],    // birupastel, bawah, d, 14
      [0.47, 0.59, 1.0],    // birupastel, depan, g, 15
      [0.9, 0.94, 0.3],    // birupastel, bawah, c, 16
      [0.9, 0.94, 0.3],    // kuning, kiribawah, b, 17
      [], // 18
      // + 38
      //R2
      [],
      [0.65, 0.1, 0.05],    // merah, belakang, a, 1
      [0.65, 0.1, 0.05],    // merah, belakang, b, 2
      [], // 3
      [0.05, 0.1, 0.4],    // biru, kanan, a, 4
      [0.65, 0.1, 0.05],    // merah, belakang, c, 5
      [0.05, 0.1, 0.4],    // biru, atas, a, 6
      [0.05, 0.1, 0.4],    // biru, ataskanan, a, 7 
      [0.65, 0.1, 0.05],    // merah, belakang, d, 8
      [0.65, 0.1, 0.05],    // merah, belakang, e, 9
      [0.05, 0.1, 0.4],    // biru, kanan, b, 10
      [0.05, 0.1, 0.4],    // biru, bawah, b, 11
      [0.05, 0.1, 0.4],    // biru, ataskiri, 12
      [0.65, 0.1, 0.05],    // merah, belakang, f, 13
      [0.05, 0.1, 0.4],    // biru, kanan, c, 14
      [0.05, 0.1, 0.4],    // biru, ataskanan, b, 15
      [0.65, 0.1, 0.05],    // merah, belakang, g, 16
      [], // 17
      [], // 18
      // + 19
      [0.05, 0.1, 0.4],    // biru, kiri, a, 0
      [0.65, 0.1, 0.05],    // merah, depan, a, 1
      [0.65, 0.1, 0.05],    // merah, depan, b, 2
      [0.05, 0.1, 0.4],    // biru, bawah, e, 3
      [0.05, 0.1, 0.4],    // biru, bawah, a, 4
      [0.05, 0.1, 0.4],    // biru, kiribawah, a, 5
      [0.65, 0.1, 0.05],    // merah, depan, c, 6
      [0.65, 0.1, 0.05],    // merah, depan, d, 7
      [0.05, 0.1, 0.4],    // biru, kiri, b, 8
      [0.65, 0.1, 0.05],    // merah, depan, e, 9
      [0.05, 0.1, 0.4],    // biru, kananbawah, 10
      [0.65, 0.1, 0.05],    // merah, depan, f, 11
      [0.05, 0.1, 0.4],    // biru, atas, b, 12
      [], // 13
      [0.05, 0.1, 0.4],    // biru, bawah, d, 14
      [0.65, 0.1, 0.05],    // merah, depan, g, 15
      [0.05, 0.1, 0.4],    // biru, bawah, c, 16
      [0.05, 0.1, 0.4],    // biru, kiribawah, b, 17
      [], // 18
    ],

    objectNormals: [
      //R1
      [],
      [0.0, 0.0, 1.0],    // belakang, a, 1
      [0.0, 0.0, 1.0],    // belakang, b, 2
      [], // 3
      [1.0, 0.0, 0.0],    // kanan, a, 4
      [0.0, 0.0, 1.0],    // belakang, c, 5
      [0.0, 1.0, 0.0],    // atas, a, 6
      [0.5, 0.5, 0.0],    // ataskanan, a, 7 
      [0.0, 0.0, 1.0],    // belakang, d, 8
      [0.0, 0.0, 1.0],    // belakang, e, 9
      [1.0, 0.0, 0.0],    // kanan, b, 10
      [0.0, -1.0, 0.0],    // bawah, b, 11
      [-0.5, 0.5, 0.0],    // ataskiri, 12
      [0.0, 0.0, 1.0],    // belakang, f, 13
      [1.0, 0.0, 0.0],    // kanan, c, 14
      [0.5, 0.5, 0.0],    // ataskanan, b, 15
      [0.0, 0.0, 1.0],    // belakang, g, 16
      [], // 17
      [], // 18
      // + 19
      [-1.0, 0.0, 0.0],    // kiri, a, 0
      [0.0, 0.0, -1.0],    // depan, a, 1
      [0.0, 0.0, -1.0],    // depan, b, 2
      [0.0, -1.0, 0.0],    // bawah, e, 3
      [0.0, -1.0, 0.0],    // bawah, a, 4
      [-0.5, -0.5, 0.0],    // kiribawah, a, 5
      [0.0, 0.0, -1.0],    // depan, c, 6
      [0.0, 0.0, -1.0],    // depan, d, 7
      [-1.0, 0.0, 0.0],    // kiri, b, 8
      [0.0, 0.0, -1.0],    // depan, e, 9
      [1.0, -1.0, 0.0],    // kananbawah, 10
      [0.0, 0.0, -1.0],    // depan, f, 11
      [0.0, 1.0, 0.0],    // atas, b, 12
      [], // 13
      [0.0, -1.0, 0.0],    // bawah, d, 14
      [0.0, 0.0, -1.0],    // depan, g, 15
      [0.0, -1.0, 0.0],    // bawah, c, 16
      [-0.5, -0.5, 0.0],    // kiribawah, b, 17
      [], // 18
      // + 38
      //R2
      [],
      [0.0, 0.0, 1.0],    // belakang, a, 1
      [0.0, 0.0, 1.0],    // belakang, b, 2
      [], // 3
      [1.0, 0.0, 0.0],    // kanan, a, 4
      [0.0, 0.0, 1.0],    // belakang, c, 5
      [0.0, 1.0, 0.0],    // atas, a, 6
      [0.5, 0.5, 0.0],    // ataskanan, a, 7 
      [0.0, 0.0, 1.0],    // belakang, d, 8
      [0.0, 0.0, 1.0],    // belakang, e, 9
      [1.0, 0.0, 0.0],    // kanan, b, 10
      [0.0, -1.0, 0.0],    // bawah, b, 11
      [-0.5, 0.5, 0.0],    // ataskiri, 12
      [0.0, 0.0, 1.0],    // belakang, f, 13
      [1.0, 0.0, 0.0],    // kanan, c, 14
      [0.5, 0.5, 0.0],    // ataskanan, b, 15
      [0.0, 0.0, 1.0],    // belakang, g, 16
      [], // 17
      [], // 18
      // + 19
      [-1.0, 0.0, 0.0],    // kiri, a, 0
      [0.0, 0.0, -1.0],    // depan, a, 1
      [0.0, 0.0, -1.0],    // depan, b, 2
      [0.0, -1.0, 0.0],    // bawah, e, 3
      [0.0, -1.0, 0.0],    // bawah, a, 4
      [-0.5, -0.5, 0.0],    // kiribawah, a, 5
      [0.0, 0.0, -1.0],    // depan, c, 6
      [0.0, 0.0, -1.0],    // depan, d, 7
      [-1.0, 0.0, 0.0],    // kiri, b, 8
      [0.0, 0.0, -1.0],    // depan, e, 9
      [1.0, -1.0, 0.0],    // kananbawah, 10
      [0.0, 0.0, -1.0],    // depan, f, 11
      [0.0, 1.0, 0.0],    // atas, b, 12
      [], // 13
      [0.0, -1.0, 0.0],    // bawah, d, 14
      [0.0, 0.0, -1.0],    // depan, g, 15
      [0.0, -1.0, 0.0],    // bawah, c, 16
      [-0.5, -0.5, 0.0],    // kiribawah, b, 17
      [], // 18
    ],
  }

  const cube = {
    objectPoints: [
      [-0.05,  0.05,  0.05],   // A, 0
      [-0.05, -0.05,  0.05],   // B, 1
      [ 0.05, -0.05,  0.05],   // C, 2 
      [ 0.05,  0.05,  0.05],   // D, 3
      [-0.05,  0.05, -0.05],   // E, 4
      [-0.05, -0.05, -0.05],   // F, 5
      [ 0.05, -0.05, -0.05],   // G, 6
      [ 0.05,  0.05, -0.05]    // H, 7 
    ],
  
    objectColors: [
      [],
      [1.0, 1.0, 1.0],    // putih
      [1.0, 1.0, 1.0],    // putih
      [1.0, 1.0, 1.0],    // putih
      [1.0, 1.0, 1.0],    // putih
      [1.0, 1.0, 1.0],    // putih
      [1.0, 1.0, 1.0],    // putih
      []
    ],
  
    objectNormals: [
      [],
      [0.0, 0.0, -1.0],    // depan
      [-1.0, 0.0, 0.0],    // kanan
      [0.0, -1.0, 0.0],    // atas
      [1.0, 0.0, 0.0],   // kiri
      [0.0, 0.0, 1.0],   // belakang
      [0.0, 1.0, 0.0],   // bawah
      []
    ],
  }

  function quad(a, b, c, d, object, objectVertices) {
    var indices = [a, b, c, c, d, a];
    for (var i=0; i<indices.length; i++) {
      var point = object.objectPoints[indices[i]];  // [x, y, z]
      for (var j=0; j<point.length; j++) {
        objectVertices.push(point[j]);
      }
      var color = object.objectColors[a]; // [r, g, b]
      for (var j=0; j<color.length; j++) {
        objectVertices.push(color[j]);
      }
      var normal = object.objectNormals[a];
      for (var j=0; j<normal.length; j++) {
        objectVertices.push(normal[j]);
      }
    }
  }
  
  //Cube
  quad(1, 2, 3, 0, cube, cubeVertices); // DEPAN
  quad(2, 6, 7, 3, cube, cubeVertices); // KANAN
  quad(3, 7, 4, 0, cube, cubeVertices); // ATAS
  quad(4, 5, 1, 0, cube, cubeVertices); // KIRI
  quad(5, 4, 7, 6, cube, cubeVertices); // BELAKANG
  quad(6, 2, 1, 5, cube, cubeVertices); // BAWAH

  // //R 1
  let quadOffset = 19;
  quad(1, 2, 3, 0, rLetters, firstRVertices); // belakang, a
  quad(2, 4, 5, 6, rLetters, firstRVertices); // belakang, b
  quad(4, 13, 13+quadOffset, 4+quadOffset, rLetters, firstRVertices); // kanan, a
  quad(5, 6, 7, 8, rLetters, firstRVertices); // belakang, c
  quad(6, 6+quadOffset, 1+quadOffset, 1, rLetters, firstRVertices); // atas, a
  quad(7, 7+quadOffset, 6+quadOffset, 6, rLetters, firstRVertices); // ataskanan, a
  quad(8, 9, 10, 7, rLetters, firstRVertices); // belakang, d
  quad(9, 10, 11, 12, rLetters, firstRVertices); // belakang, e
  quad(10, 10+quadOffset, 7+quadOffset, 7, rLetters, firstRVertices); // kanan, b
  quad(11, 15, 15+quadOffset, 11+quadOffset, rLetters, firstRVertices); // bawah, b
  quad(12, 12+quadOffset, 9+quadOffset, 9, rLetters, firstRVertices); // ataskiri
  quad(13, 14, 11, 12, rLetters, firstRVertices); // belakang, f
  quad(14, 3, 3+quadOffset, 14+quadOffset, rLetters, firstRVertices); // kanan, c
  quad(15, 16, 16+quadOffset, 15+quadOffset, rLetters, firstRVertices); // ataskanan, b
  quad(16, 17, 18, 15, rLetters, firstRVertices); // belakang, g

  quad(0+quadOffset, 0, 1, 1+quadOffset, rLetters, firstRVertices); // kiri, a
  quad(1+quadOffset, 2+quadOffset, 3+quadOffset, 0+quadOffset, rLetters, firstRVertices); // depan, a
  quad(2+quadOffset, 4+quadOffset, 5+quadOffset, 6+quadOffset, rLetters, firstRVertices); // depan, b
  quad(3+quadOffset, 3, 0, 0+quadOffset, rLetters, firstRVertices); // bawah, e
  quad(4+quadOffset, 4, 5, 5+quadOffset, rLetters, firstRVertices); // bawah, a
  quad(5+quadOffset, 5, 8, 8+quadOffset, rLetters, firstRVertices); // kiribawah, a
  quad(6+quadOffset, 7+quadOffset, 8+quadOffset, 5+quadOffset, rLetters, firstRVertices); // depan, c
  quad(7+quadOffset, 8+quadOffset, 9+quadOffset, 10+quadOffset, rLetters, firstRVertices); // depan, d
  quad(8+quadOffset, 8, 9, 9+quadOffset, rLetters, firstRVertices); // kiri, b
  quad(9+quadOffset, 10+quadOffset, 11+quadOffset, 12+quadOffset, rLetters, firstRVertices); // depan, e
  quad(10+quadOffset, 10, 11, 11+quadOffset, rLetters, firstRVertices); // kananbawah
  quad(11+quadOffset, 12+quadOffset, 13+quadOffset, 14+quadOffset, rLetters, firstRVertices); // depan, f
  quad(12+quadOffset, 12, 13, 13+quadOffset, rLetters, firstRVertices); // atas, b
  quad(14+quadOffset, 14, 18, 18+quadOffset, rLetters, firstRVertices); // bawah, d
  quad(15+quadOffset, 16+quadOffset, 17+quadOffset, 18+quadOffset, rLetters, firstRVertices); // depan, g
  quad(16+quadOffset, 16, 17, 17+quadOffset, rLetters, firstRVertices); // bawah, c
  quad(17+quadOffset, 17, 18, 18+quadOffset, rLetters, firstRVertices); // kiribawah, b

  // //R2
  let objectOffset = quadOffset + 19;
  quadOffset = objectOffset + 19;
  quad(1+objectOffset, 2+objectOffset, 3+objectOffset, 0+objectOffset, rLetters, secondRVertices); // belakang, a
  quad(2+objectOffset, 4+objectOffset, 5+objectOffset, 6+objectOffset, rLetters, secondRVertices); // belakang, b
  quad(4+objectOffset, 13+objectOffset, 13+quadOffset, 4+quadOffset, rLetters, secondRVertices); // kanan, a
  quad(5+objectOffset, 6+objectOffset, 7+objectOffset, 8+objectOffset, rLetters, secondRVertices); // belakang, c
  quad(6+objectOffset, 6+quadOffset, 1+quadOffset, 1+objectOffset, rLetters, secondRVertices); // atas, a
  quad(7+objectOffset, 7+quadOffset, 6+quadOffset, 6+objectOffset, rLetters, secondRVertices); // ataskanan, a
  quad(8+objectOffset, 9+objectOffset, 10+objectOffset, 7+objectOffset, rLetters, secondRVertices); // belakang, d
  quad(9+objectOffset, 10+objectOffset, 11+objectOffset, 12+objectOffset, rLetters, secondRVertices); // belakang, e
  quad(10+objectOffset, 10+quadOffset, 7+quadOffset, 7+objectOffset, rLetters, secondRVertices); // kanan, b
  quad(11+objectOffset, 15+objectOffset, 15+quadOffset, 11+quadOffset, rLetters, secondRVertices); // bawah, b
  quad(12+objectOffset, 12+quadOffset, 9+quadOffset, 9+objectOffset, rLetters, secondRVertices); // ataskiri
  quad(13+objectOffset, 14+objectOffset, 11+objectOffset, 12+objectOffset, rLetters, secondRVertices); // belakang, f
  quad(14+objectOffset, 3+objectOffset, 3+quadOffset, 14+quadOffset, rLetters, secondRVertices); // kanan, c
  quad(15+objectOffset, 16+objectOffset, 16+quadOffset, 15+quadOffset, rLetters, secondRVertices); // ataskanan, b
  quad(16+objectOffset, 17+objectOffset, 18+objectOffset, 15+objectOffset, rLetters, secondRVertices); // belakang, g

  quad(0+quadOffset, 0+objectOffset, 1+objectOffset, 1+quadOffset, rLetters, secondRVertices); // kiri, a
  quad(1+quadOffset, 2+quadOffset, 3+quadOffset, 0+quadOffset, rLetters, secondRVertices); // depan, a
  quad(2+quadOffset, 4+quadOffset, 5+quadOffset, 6+quadOffset, rLetters, secondRVertices); // depan, b
  quad(3+quadOffset, 3+objectOffset, 0+objectOffset, 0+quadOffset, rLetters, secondRVertices); // bawah, e
  quad(4+quadOffset, 4+objectOffset, 5+objectOffset, 5+quadOffset, rLetters, secondRVertices); // bawah, a
  quad(5+quadOffset, 5+objectOffset, 8+objectOffset, 8+quadOffset, rLetters, secondRVertices); // kiribawah, a
  quad(6+quadOffset, 7+quadOffset, 8+quadOffset, 5+quadOffset, rLetters, secondRVertices); // depan, c
  quad(7+quadOffset, 8+quadOffset, 9+quadOffset, 10+quadOffset, rLetters, secondRVertices); // depan, d
  quad(8+quadOffset, 8+objectOffset, 9+objectOffset, 9+quadOffset, rLetters, secondRVertices); // kiri, b
  quad(9+quadOffset, 10+quadOffset, 11+quadOffset, 12+quadOffset, rLetters, secondRVertices); // depan, e
  quad(10+quadOffset, 10+objectOffset, 11+objectOffset, 11+quadOffset, rLetters, secondRVertices); // kananbawah
  quad(11+quadOffset, 12+quadOffset, 13+quadOffset, 14+quadOffset, rLetters, secondRVertices); // depan, f
  quad(12+quadOffset, 12+objectOffset, 13+objectOffset, 13+quadOffset, rLetters, secondRVertices); // atas, b
  quad(14+quadOffset, 14+objectOffset, 18+objectOffset, 18+quadOffset, rLetters, secondRVertices); // bawah, d
  quad(15+quadOffset, 16+quadOffset, 17+quadOffset, 18+quadOffset, rLetters, secondRVertices); // depan, g
  quad(16+quadOffset, 16+objectOffset, 17+objectOffset, 17+quadOffset, rLetters, secondRVertices); // bawah, c
  quad(17+quadOffset, 17+objectOffset, 18+objectOffset, 18+quadOffset, rLetters, secondRVertices); // kiribawah, b

  var vertexShaderSource = document.getElementById("vertexShaderSource").text;
  var fragmentShaderSource = document.getElementById("fragmentShaderSource").text;

  // Buat .c di GPU
  var vertexShader = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vertexShader, vertexShaderSource);
  var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fragmentShader, fragmentShaderSource);

  // Kompilasi .c agar menjadi .o
  gl.compileShader(vertexShader);
  gl.compileShader(fragmentShader);

  // Siapkan wadah untuk .exe (shader program)
  var shaderProgram = gl.createProgram();

  // Masukkan .o ke dalam wadah .exe
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);

  // Sambungkan antar .o agar bisa menjadi
  //    runnable context di dalam wadah .exe tadi
  gl.linkProgram(shaderProgram);

  // Mulai menggunakan konteks (cat)
  gl.useProgram(shaderProgram);

  gl.viewport(100, 0, canvas.height, canvas.height);
  gl.enable(gl.DEPTH_TEST);

  var aPositionLoc = gl.getAttribLocation(shaderProgram, "a_Position");
  var aColorLoc = gl.getAttribLocation(shaderProgram, "a_Color");
  var aNormalLoc = gl.getAttribLocation(shaderProgram, "a_Normal");

  var primitive = gl.TRIANGLES;
  var offset = 0;

  var u_Model = gl.getUniformLocation(shaderProgram, 'u_Model');
  var u_View = gl.getUniformLocation(shaderProgram, 'u_View');
  var u_Projection = gl.getUniformLocation(shaderProgram, 'u_Projection');
  var model = glMatrix.mat4.create();
  var view = glMatrix.mat4.create();
  glMatrix.mat4.lookAt(view,
    [0.0, 0.0, 2.0], // di mana posisi kamera (posisi)
    [0.0, 0.0, -2.0], // ke mana kamera menghadap (vektor)
    [0.0, 1.0, 0.0] // ke mana arah atas kamera (vektor)
  );
  var projection = glMatrix.mat4.create();
  glMatrix.mat4.perspective(projection, 
      glMatrix.glMatrix.toRadian(90), // fov dalam radian
      1.0,  // rasio aspek
      0.5,  // near
      10.0  // far
  );
  gl.uniformMatrix4fv(u_Projection, false, projection);

  var uNormalModel = gl.getUniformLocation(shaderProgram, 'u_NormalModel');
  var uAmbientColor = gl.getUniformLocation(shaderProgram, 'u_AmbientColor');
  var uLightColor = gl.getUniformLocation(shaderProgram, 'u_LightColor');
  var uLightPosition = gl.getUniformLocation(shaderProgram, 'u_LightPosition');
  var shininessVal = gl.getUniformLocation(shaderProgram, 'shininessVal');

  let lightXPosition = 0;
  let lightZPosition = 0;
  let lightOn = true;
  function onKeyDown(event) {
    // console.log(event.keyCode);
    if (event.keyCode == 32) {
      lightOn = !lightOn;
    }
    if (event.keyCode == 37) {
      for(let i = 0 ; i < 36 * 9; i++){
        if(i%9 == 0){
          cubeVertices[i] -= 0.01;
        }
      }

      lightXPosition -= 0.01;
    } // Left = 37
    else if (event.keyCode == 39) {
      for(let i = 0 ; i < 36 * 9; i++){
        if(i%9 == 0){
          cubeVertices[i] += 0.01;
        }
      }

      lightXPosition += 0.01;
    } // Right = 39
    if (event.keyCode == 38) {
      for(let i = 0 ; i < 36 * 9; i++){
        if(i%9 == 0){
          cubeVertices[2 + i] -= 0.01;
        }
      }

      lightZPosition -= 0.01;
    } // Up = 38
    if (event.keyCode == 40) {
      for(let i = 0 ; i < 36 * 9; i++){
        if(i%9 == 0){
          cubeVertices[2 + i] += 0.01;
        }
      }

      lightZPosition += 0.01;
    } // Down = 40
  }
  document.addEventListener('keydown', onKeyDown);

  
  // QUATERNION SECTION
  var lastPointOnTrackBall, currentPointOnTrackBall;
  var lastQuat = glMatrix.quat.create();
  function computeCurrentQuat() {
    // Secara berkala hitung quaternion rotasi setiap ada perubahan posisi titik pointer mouse
    var axisFromCrossProduct = glMatrix.vec3.cross(glMatrix.vec3.create(), lastPointOnTrackBall, currentPointOnTrackBall);
    var angleFromDotProduct = Math.acos(glMatrix.vec3.dot(lastPointOnTrackBall, currentPointOnTrackBall));
    var rotationQuat = glMatrix.quat.setAxisAngle(glMatrix.quat.create(), axisFromCrossProduct, angleFromDotProduct);
    glMatrix.quat.normalize(rotationQuat, rotationQuat);
    return glMatrix.quat.multiply(glMatrix.quat.create(), rotationQuat, lastQuat);
  }
  // Memproyeksikan pointer mouse agar jatuh ke permukaan ke virtual trackball
  function getProjectionPointOnSurface(point) {
    var radius = canvas.width/3;  // Jari-jari virtual trackball kita tentukan sebesar 1/3 lebar kanvas
    var center = glMatrix.vec3.fromValues(canvas.width/2, canvas.height/2, 0);  // Titik tengah virtual trackball
    var pointVector = glMatrix.vec3.subtract(glMatrix.vec3.create(), point, center);
    pointVector[1] = pointVector[1] * (-1); // Flip nilai y, karena koordinat piksel makin ke bawah makin besar
    var radius2 = radius * radius;
    var length2 = pointVector[0] * pointVector[0] + pointVector[1] * pointVector[1];
    if (length2 <= radius2) pointVector[2] = Math.sqrt(radius2 - length2); // Dapatkan nilai z melalui rumus Pytagoras
    else {  // Atur nilai z sebagai 0, lalu x dan y sebagai paduan Pytagoras yang membentuk sisi miring sepanjang radius
      pointVector[0] *= radius / Math.sqrt(length2);
      pointVector[1] *= radius / Math.sqrt(length2);
      pointVector[2] = 0;
    }
    return glMatrix.vec3.normalize(glMatrix.vec3.create(), pointVector);
  }

  // QUATERNION SECTION
  var lastPointOnTrackBall, currentPointOnTrackBall;
  var lastQuat = glMatrix.quat.create();
  function computeCurrentQuat() {
    // Secara berkala hitung quaternion rotasi setiap ada perubahan posisi titik pointer mouse
    var axisFromCrossProduct = glMatrix.vec3.cross(glMatrix.vec3.create(), lastPointOnTrackBall, currentPointOnTrackBall);
    var angleFromDotProduct = Math.acos(glMatrix.vec3.dot(lastPointOnTrackBall, currentPointOnTrackBall));
    var rotationQuat = glMatrix.quat.setAxisAngle(glMatrix.quat.create(), axisFromCrossProduct, angleFromDotProduct);
    glMatrix.quat.normalize(rotationQuat, rotationQuat);
    return glMatrix.quat.multiply(glMatrix.quat.create(), rotationQuat, lastQuat);
  }
  // Memproyeksikan pointer mouse agar jatuh ke permukaan ke virtual trackball
  function getProjectionPointOnSurface(point) {
    var radius = canvas.width/3;  // Jari-jari virtual trackball kita tentukan sebesar 1/3 lebar kanvas
    var center = glMatrix.vec3.fromValues(canvas.width/2, canvas.height/2, 0);  // Titik tengah virtual trackball
    var pointVector = glMatrix.vec3.subtract(glMatrix.vec3.create(), point, center);
    pointVector[1] = pointVector[1] * (-1); // Flip nilai y, karena koordinat piksel makin ke bawah makin besar
    var radius2 = radius * radius;
    var length2 = pointVector[0] * pointVector[0] + pointVector[1] * pointVector[1];
    if (length2 <= radius2) pointVector[2] = Math.sqrt(radius2 - length2); // Dapatkan nilai z melalui rumus Pytagoras
    else {  // Atur nilai z sebagai 0, lalu x dan y sebagai paduan Pytagoras yang membentuk sisi miring sepanjang radius
      pointVector[0] *= radius / Math.sqrt(length2);
      pointVector[1] *= radius / Math.sqrt(length2);
      pointVector[2] = 0;
    }
    return glMatrix.vec3.normalize(glMatrix.vec3.create(), pointVector);
  }
  document.addEventListener('mousedown', onMouseDown);
  document.addEventListener('mouseup', onMouseUp);
  document.addEventListener('mousemove', onMouseMove);

  // Memutar kubus secara virtual trackball (teknik quaternion) menggunakan mouse
  var rotation = glMatrix.mat4.create();
  var dragging;
  function onMouseDown(event) {
    var x = event.clientX;
    var y = event.clientY;
    var rect = event.target.getBoundingClientRect();
    // Saat mouse diklik-kiri di area aktif browser,
    //  maka flag dragging akan diaktifkan
    if (
      rect.left <= x &&
      rect.right > x &&
      rect.top <= y &&
      rect.bottom > y
    ) {
      dragging = true;
    }
    // Untuk keperluan perhitungan di virtual trackball
    lastPointOnTrackBall = getProjectionPointOnSurface(glMatrix.vec3.fromValues(x, y, 0));
    currentPointOnTrackBall = lastPointOnTrackBall;
  }
  function onMouseUp(event) {
    // Ketika klik-kiri mouse dilipas
    dragging = false;
    if (currentPointOnTrackBall != lastPointOnTrackBall) {
      lastQuat = computeCurrentQuat();
    }
  }
  function onMouseMove(event) {
    if (dragging) {
      var x = event.clientX;
      var y = event.clientY;
      // Perhitungan putaran quaternion
      currentPointOnTrackBall = getProjectionPointOnSurface(glMatrix.vec3.fromValues(x, y, 0));
      glMatrix.mat4.fromQuat(rotation, computeCurrentQuat());
    }
  }

  const drawVertices = (objectVertices, shininess, clear) => {
    var vertexBuffer = gl.createBuffer();
        
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(objectVertices), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    // Ajarkan attribute a_Position di GPU
    //  tentang pengambilan data verteks dari ARRAY_BUFFER
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);

    gl.vertexAttribPointer(
      aPositionLoc, 
      3, 
      gl.FLOAT, 
      false, 
      9 * Float32Array.BYTES_PER_ELEMENT, 
      0);
    gl.vertexAttribPointer(
      aColorLoc, 
      3, 
      gl.FLOAT, 
      false, 
      9 * Float32Array.BYTES_PER_ELEMENT, 
      3 * Float32Array.BYTES_PER_ELEMENT);
    gl.vertexAttribPointer(
      aNormalLoc, 
      3, 
      gl.FLOAT, 
      false, 
      9 * Float32Array.BYTES_PER_ELEMENT, 
      6 * Float32Array.BYTES_PER_ELEMENT);
    gl.enableVertexAttribArray(aPositionLoc);
    gl.enableVertexAttribArray(aColorLoc);
    gl.enableVertexAttribArray(aNormalLoc);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
   
    gl.uniformMatrix4fv(u_Model, false, model);
    gl.uniformMatrix4fv(u_View, false, view);
    var normalModel = glMatrix.mat3.create();
    gl.uniform1f(shininessVal, shininess);
    glMatrix.mat3.normalFromMat4(normalModel, model);
    gl.uniformMatrix3fv(uNormalModel, false, normalModel);

    if (clear) {
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    }

    gl.drawArrays(primitive, offset, objectVertices.length/9);
  }

  function render() {
    gl.clearColor(0.055, 0.01, 0.09, 0.2);
    model = glMatrix.mat4.create(); // Matriks model kita reset ulang setiap kali render
    glMatrix.mat4.multiply(model, model, rotation);
    glMatrix.mat4.multiply(uLightPosition, uLightPosition, -rotation);
    gl.uniform3fv(uLightPosition, [lightXPosition, 0, lightZPosition]);
    if (lightOn) {
      gl.uniform3fv(uAmbientColor, [0.3, 0.3, 0.3]);
      gl.uniform3fv(uLightColor, [1, 1, 1]);
      drawVertices(cubeVertices, 1, true);
      drawVertices(firstRVertices, 1, false);
      drawVertices(secondRVertices, 300, false);
    } else {
      gl.uniform3fv(uAmbientColor, [0, 0, 0]);
      gl.uniform3fv(uLightColor, [0, 0, 0]);
      drawVertices(cubeVertices, 0, true);
      drawVertices(firstRVertices, 0, false);
      drawVertices(secondRVertices, 0, false);
    }

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);

  function resizer(){
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    var minimumSize = Math.min(gl.canvas.height, gl.canvas.width); // buat nyari yang paling kecil yang mana
    gl.viewport(canvas.width/2-minimumSize/2, canvas.height/2-minimumSize/2, minimumSize, minimumSize);
  }

  window.addEventListener('resize', resizer);
  resizer();
}

let full = false;

function fullscreen() {
  if (full) {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) { /* Firefox */
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE/Edge */
      document.msExitFullscreen();
    }
  } else {
    if (document.body.requestFullscreen) {
      document.body.requestFullscreen();
    } else if (document.body.mozRequestFullScreen) { /* Firefox */
      document.body.mozRequestFullScreen();
    } else if (document.body.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
      document.body.webkitRequestFullscreen();
    } else if (document.body.msRequestFullscreen) { /* IE/Edge */
      document.body.msRequestFullscreen();
    }
  }
  full = !full;
}