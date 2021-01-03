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
      [0.47, 0.59, 1.0],    // birupastel, bawah, b, 11
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
      [0.47, 0.59, 1.0],    // birupastel, bawah, e, 3
      [0.47, 0.59, 1.0],    // birupastel, bawah, a, 4
      [0.9, 0.94, 0.3],    // kuning, kiribawah, a, 5
      [0.47, 0.59, 1.0],    // birupastel, depan, c, 6
      [0.47, 0.59, 1.0],    // birupastel, depan, d, 7
      [0.9, 0.94, 0.3],    // kuning, kiri, b, 8
      [0.47, 0.59, 1.0],    // birupastel, depan, e, 9
      [0.9, 0.94, 0.3],    // kuning, kananbawah, 10
      [0.47, 0.59, 1.0],    // birupastel, depan, f, 11
      [0.9, 0.94, 0.3],    // kuning, atas, b, 12
      [], // 13
      [0.47, 0.59, 1.0],    // birupastel, bawah, d, 14
      [0.47, 0.59, 1.0],    // birupastel, depan, g, 15
      [0.47, 0.59, 1.0],    // birupastel, bawah, c, 16
      [0.9, 0.94, 0.3],    // kuning, kiribawah, b, 17
      [], // 18
      // + 38
      //R2
      [],
      [0.98, 0.6, 0.24],    // hijau, belakang, a, 1
      [0.98, 0.6, 0.24],    // hijau, belakang, b, 2
      [], // 3
      [0.05, 0.1, 0.4],    // biru, kanan, a, 4
      [0.98, 0.6, 0.24],    // hijau, belakang, c, 5
      [0.05, 0.1, 0.4],    // biru, atas, a, 6
      [0.05, 0.1, 0.4],    // biru, ataskanan, a, 7 
      [0.98, 0.6, 0.24],    // hijau, belakang, d, 8
      [0.98, 0.6, 0.24],    // hijau, belakang, e, 9
      [0.05, 0.1, 0.4],    // biru, kanan, b, 10
      [0.05, 0.1, 0.4],    // biru, bawah, b, 11
      [0.05, 0.1, 0.4],    // biru, ataskiri, 12
      [0.98, 0.6, 0.24],    // hijau, belakang, f, 13
      [0.05, 0.1, 0.4],    // biru, kanan, c, 14
      [0.05, 0.1, 0.4],    // biru, ataskanan, b, 15
      [0.98, 0.6, 0.24],    // hijau, belakang, g, 16
      [], // 17
      [], // 18
      // + 19
      [0.05, 0.1, 0.4],    // biru, kiri, a, 0
      [0.98, 0.6, 0.24],    // hijau, depan, a, 1
      [0.98, 0.6, 0.24],    // hijau, depan, b, 2
      [0.05, 0.1, 0.4],    // biru, bawah, e, 3
      [0.05, 0.1, 0.4],    // biru, bawah, a, 4
      [0.05, 0.1, 0.4],    // biru, kiribawah, a, 5
      [0.98, 0.6, 0.24],    // hijau, depan, c, 6
      [0.98, 0.6, 0.24],    // hijau, depan, d, 7
      [0.05, 0.1, 0.4],    // biru, kiri, b, 8
      [0.98, 0.6, 0.24],    // hijau, depan, e, 9
      [0.05, 0.1, 0.4],    // biru, kananbawah, 10
      [0.98, 0.6, 0.24],    // hijau, depan, f, 11
      [0.05, 0.1, 0.4],    // biru, atas, b, 12
      [], // 13
      [0.05, 0.1, 0.4],    // biru, bawah, d, 14
      [0.98, 0.6, 0.24],    // hijau, depan, g, 15
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
      [1.0, 0.0, 0.0],    // kananbawah, 10
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
      [1.0, 0.0, 0.0],    // kananbawah, 10
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
  quad(1, 2, 3, 0, cube, cubeVertices); // DEPAN, merah
  quad(2, 6, 7, 3, cube, cubeVertices); // KANAN, hijau
  quad(3, 7, 4, 0, cube, cubeVertices); // ATAS, biru
  quad(4, 5, 1, 0, cube, cubeVertices); // KIRI, putih
  quad(5, 4, 7, 6, cube, cubeVertices); // BELAKANG, oranye
  quad(6, 2, 1, 5, cube, cubeVertices); // BAWAH, kuning

  // //R 1
  let quadOffset = 19;
  quad(1, 2, 3, 0, rLetters, firstRVertices); //// merah, belakang, a
  quad(2, 4, 5, 6, rLetters, firstRVertices); // merah, belakang, b
  quad(4, 13, 13+quadOffset, 4+quadOffset, rLetters, firstRVertices); // merah, kanan, a
  quad(5, 6, 7, 8, rLetters, firstRVertices); // merah, belakang, c
  quad(6, 6+quadOffset, 1+quadOffset, 1, rLetters, firstRVertices); // merah, atas, a
  quad(7, 7+quadOffset, 6+quadOffset, 6, rLetters, firstRVertices); // merah, ataskanan, a
  quad(8, 9, 10, 7, rLetters, firstRVertices); // merah, belakang, d
  quad(9, 10, 11, 12, rLetters, firstRVertices); // merah, belakang, e
  quad(10, 10+quadOffset, 7+quadOffset, 7, rLetters, firstRVertices); // merah, kanan, b
  quad(11, 15, 15+quadOffset, 11+quadOffset, rLetters, firstRVertices); // merah, bawah, b
  quad(12, 12+quadOffset, 9+quadOffset, 9, rLetters, firstRVertices); // merah, ataskiri
  quad(13, 14, 11, 12, rLetters, firstRVertices); // merah, belakang, f
  quad(14, 3, 3+quadOffset, 14+quadOffset, rLetters, firstRVertices); // merah, kanan, c
  quad(15, 16, 16+quadOffset, 15+quadOffset, rLetters, firstRVertices); // merah, ataskanan, b
  quad(16, 17, 18, 15, rLetters, firstRVertices); // merah, belakang, g

  quad(0+quadOffset, 0, 1, 1+quadOffset, rLetters, firstRVertices); // merah, kiri, a
  quad(1+quadOffset, 2+quadOffset, 3+quadOffset, 0+quadOffset, rLetters, firstRVertices); // merah, depan, a
  quad(2+quadOffset, 4+quadOffset, 5+quadOffset, 6+quadOffset, rLetters, firstRVertices); // merah, depan, b
  quad(3+quadOffset, 3, 0, 0+quadOffset, rLetters, firstRVertices); // merah, bawah, e
  quad(4+quadOffset, 4, 5, 5+quadOffset, rLetters, firstRVertices); // merah, bawah, a
  quad(5+quadOffset, 5, 8, 8+quadOffset, rLetters, firstRVertices); // merah, kiribawah, a
  quad(6+quadOffset, 7+quadOffset, 8+quadOffset, 5+quadOffset, rLetters, firstRVertices); // merah, depan, c
  quad(7+quadOffset, 8+quadOffset, 9+quadOffset, 10+quadOffset, rLetters, firstRVertices); // merah, depan, d
  quad(8+quadOffset, 8, 9, 9+quadOffset, rLetters, firstRVertices); // merah, kiri, b
  quad(9+quadOffset, 10+quadOffset, 11+quadOffset, 12+quadOffset, rLetters, firstRVertices); // merah, depan, e
  quad(10+quadOffset, 10, 11, 11+quadOffset, rLetters, firstRVertices); // merah, kananbawah
  quad(11+quadOffset, 12+quadOffset, 13+quadOffset, 14+quadOffset, rLetters, firstRVertices); // merah, depan, f
  quad(12+quadOffset, 12, 13, 13+quadOffset, rLetters, firstRVertices); // merah, atas, b
  quad(14+quadOffset, 14, 18, 18+quadOffset, rLetters, firstRVertices); // merah, bawah, d
  quad(15+quadOffset, 16+quadOffset, 17+quadOffset, 18+quadOffset, rLetters, firstRVertices); // merah, depan, g
  quad(16+quadOffset, 16, 17, 17+quadOffset, rLetters, firstRVertices); // merah, bawah, c
  quad(17+quadOffset, 17, 18, 18+quadOffset, rLetters, firstRVertices); // merah, kiribawah, b

  // //R2
  let objectOffset = quadOffset + 19;
  quadOffset = objectOffset + 19;
  quad(1+objectOffset, 2+objectOffset, 3+objectOffset, 0+objectOffset, rLetters, secondRVertices); //// merah, belakang, a
  quad(2+objectOffset, 4+objectOffset, 5+objectOffset, 6+objectOffset, rLetters, secondRVertices); // merah, belakang, b
  quad(4+objectOffset, 13+objectOffset, 13+quadOffset, 4+quadOffset, rLetters, secondRVertices); // merah, kanan, a
  quad(5+objectOffset, 6+objectOffset, 7+objectOffset, 8+objectOffset, rLetters, secondRVertices); // merah, belakang, c
  quad(6+objectOffset, 6+quadOffset, 1+quadOffset, 1+objectOffset, rLetters, secondRVertices); // merah, atas, a
  quad(7+objectOffset, 7+quadOffset, 6+quadOffset, 6+objectOffset, rLetters, secondRVertices); // merah, ataskanan, a
  quad(8+objectOffset, 9+objectOffset, 10+objectOffset, 7+objectOffset, rLetters, secondRVertices); // merah, belakang, d
  quad(9+objectOffset, 10+objectOffset, 11+objectOffset, 12+objectOffset, rLetters, secondRVertices); // merah, belakang, e
  quad(10+objectOffset, 10+quadOffset, 7+quadOffset, 7+objectOffset, rLetters, secondRVertices); // merah, kanan, b
  quad(11+objectOffset, 15+objectOffset, 15+quadOffset, 11+quadOffset, rLetters, secondRVertices); // merah, bawah, b
  quad(12+objectOffset, 12+quadOffset, 9+quadOffset, 9+objectOffset, rLetters, secondRVertices); // merah, ataskiri
  quad(13+objectOffset, 14+objectOffset, 11+objectOffset, 12+objectOffset, rLetters, secondRVertices); // merah, belakang, f
  quad(14+objectOffset, 3+objectOffset, 3+quadOffset, 14+quadOffset, rLetters, secondRVertices); // merah, kanan, c
  quad(15+objectOffset, 16+objectOffset, 16+quadOffset, 15+quadOffset, rLetters, secondRVertices); // merah, ataskanan, b
  quad(16+objectOffset, 17+objectOffset, 18+objectOffset, 15+objectOffset, rLetters, secondRVertices); // merah, belakang, g

  quad(0+quadOffset, 0+objectOffset, 1+objectOffset, 1+quadOffset, rLetters, secondRVertices); // merah, kiri, a
  quad(1+quadOffset, 2+quadOffset, 3+quadOffset, 0+quadOffset, rLetters, secondRVertices); // merah, depan, a
  quad(2+quadOffset, 4+quadOffset, 5+quadOffset, 6+quadOffset, rLetters, secondRVertices); // merah, depan, b
  quad(3+quadOffset, 3+objectOffset, 0+objectOffset, 0+quadOffset, rLetters, secondRVertices); // merah, bawah, e
  quad(4+quadOffset, 4+objectOffset, 5+objectOffset, 5+quadOffset, rLetters, secondRVertices); // merah, bawah, a
  quad(5+quadOffset, 5+objectOffset, 8+objectOffset, 8+quadOffset, rLetters, secondRVertices); // merah, kiribawah, a
  quad(6+quadOffset, 7+quadOffset, 8+quadOffset, 5+quadOffset, rLetters, secondRVertices); // merah, depan, c
  quad(7+quadOffset, 8+quadOffset, 9+quadOffset, 10+quadOffset, rLetters, secondRVertices); // merah, depan, d
  quad(8+quadOffset, 8+objectOffset, 9+objectOffset, 9+quadOffset, rLetters, secondRVertices); // merah, kiri, b
  quad(9+quadOffset, 10+quadOffset, 11+quadOffset, 12+quadOffset, rLetters, secondRVertices); // merah, depan, e
  quad(10+quadOffset, 10+objectOffset, 11+objectOffset, 11+quadOffset, rLetters, secondRVertices); // merah, kananbawah
  quad(11+quadOffset, 12+quadOffset, 13+quadOffset, 14+quadOffset, rLetters, secondRVertices); // merah, depan, f
  quad(12+quadOffset, 12+objectOffset, 13+objectOffset, 13+quadOffset, rLetters, secondRVertices); // merah, atas, b
  quad(14+quadOffset, 14+objectOffset, 18+objectOffset, 18+quadOffset, rLetters, secondRVertices); // merah, bawah, d
  quad(15+quadOffset, 16+quadOffset, 17+quadOffset, 18+quadOffset, rLetters, secondRVertices); // merah, depan, g
  quad(16+quadOffset, 16+objectOffset, 17+objectOffset, 17+quadOffset, rLetters, secondRVertices); // merah, bawah, c
  quad(17+quadOffset, 17+objectOffset, 18+objectOffset, 18+quadOffset, rLetters, secondRVertices); // merah, kiribawah, b

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
  var projection = glMatrix.mat4.create();
  gl.uniformMatrix4fv(u_Projection, false, projection);

  var uNormalModel = gl.getUniformLocation(shaderProgram, 'u_NormalModel');
  var uAmbientColor = gl.getUniformLocation(shaderProgram, 'u_AmbientColor');
  gl.uniform3fv(uAmbientColor, [0.3, 0.3, 0.3]);
  var uLightColor = gl.getUniformLocation(shaderProgram, 'u_LightColor');
  gl.uniform3fv(uLightColor, [1, 1, 1]);
  var uLightPosition = gl.getUniformLocation(shaderProgram, 'u_LightPosition');
  var uSpecularColor = gl.getUniformLocation(shaderProgram, 'u_Specularcolor');
  var shininessVal = gl.getUniformLocation(shaderProgram, 'shininessVal');

  const moveCubeY = (distance) => {
    for (let i = 1; i <= 36; i++) {
      cubeVertices[1 + (9 * (i - 1))] += distance;
    };
  };

  let lightYPosition = 0;
  const distanceYMovement = 0.01;
  const boundaryYMovement = 0.95;
  function onKeyDown(event) {
    console.log(event.keyCode);
    if (event.keyCode == 68) {  // D = 68
      glMatrix.mat4.rotate(model, model, glMatrix.glMatrix.toRadian(1), [0, -1.0, 0.0]);
    } // A = 65
    else if (event.keyCode == 65) {
      glMatrix.mat4.rotate(model, model, glMatrix.glMatrix.toRadian(1), [0, 1.0, 0.0]);
    } 
    else if (event.keyCode == 87 && lightYPosition < boundaryYMovement) { // W = 87
      lightYPosition += distanceYMovement;
      moveCubeY(distanceYMovement);
    } 
    else if (event.keyCode == 83 && lightYPosition > -boundaryYMovement) { // S = 83
      lightYPosition -= distanceYMovement;
      moveCubeY(-distanceYMovement);
    } 
  }
  document.addEventListener('keydown', onKeyDown);

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
    gl.uniform3fv(uLightPosition, [0, lightYPosition, 0]);
    gl.uniform3fv(uSpecularColor, [1.0, 1.0, 1.0]);
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
    gl.clearColor(0.055, 0.01, 0.09, 1.0);
    drawVertices(cubeVertices, 1, true);
    drawVertices(firstRVertices, 1, false);
    drawVertices(secondRVertices, 300, false);
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