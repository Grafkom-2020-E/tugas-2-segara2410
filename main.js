function main() {
  var canvas = document.getElementById("myCanvas");
  var gl = canvas.getContext("webgl");

  var vertices = [];

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
      [1.0, 0.0, 0.0],    // merah, belakang, a, 1
      [1.0, 0.0, 0.0],    // merah, belakang, b, 2
      [], // 3
      [1.0, 0.0, 0.0],    // merah, kanan, a, 4
      [1.0, 0.0, 0.0],    // merah, belakang, c, 5
      [1.0, 0.0, 0.0],    // merah, atas, a, 6
      [1.0, 0.0, 0.0],    // merah, ataskanan, a, 7 
      [1.0, 0.0, 0.0],    // merah, belakang, d, 8
      [1.0, 0.0, 0.0],    // merah, belakang, e, 9
      [1.0, 0.0, 0.0],    // merah, kanan, b, 10
      [1.0, 0.0, 0.0],    // merah, bawah, b, 11
      [1.0, 0.0, 0.0],    // merah, ataskiri, 12
      [1.0, 0.0, 0.0],    // merah, belakang, f, 13
      [1.0, 0.0, 0.0],    // merah, kanan, c, 14
      [1.0, 0.0, 0.0],    // merah, ataskanan, b, 15
      [1.0, 0.0, 0.0],    // merah, belakang, g, 16
      [], // 17
      [], // 18
      // + 19
      [1.0, 0.0, 0.0],    // merah, kiri, a, 0
      [1.0, 0.0, 0.0],    // merah, depan, a, 1
      [1.0, 0.0, 0.0],    // merah, depan, b, 2
      [1.0, 0.0, 0.0],    // merah, bawah, e, 3
      [1.0, 0.0, 0.0],    // merah, bawah, a, 4
      [1.0, 0.0, 0.0],    // merah, kiribawah, a, 5
      [1.0, 0.0, 0.0],    // merah, depan, c, 6
      [1.0, 0.0, 0.0],    // merah, depan, d, 7
      [1.0, 0.0, 0.0],    // merah, kiri, b, 8
      [1.0, 0.0, 0.0],    // merah, depan, e, 9
      [1.0, 0.0, 0.0],    // merah, kananbawah, 10
      [1.0, 0.0, 0.0],    // merah, depan, f, 11
      [1.0, 0.0, 0.0],    // merah, atas, b, 12
      [], // 13
      [1.0, 0.0, 0.0],    // merah, bawah, d, 14
      [1.0, 0.0, 0.0],    // merah, depan, g, 15
      [1.0, 0.0, 0.0],    // merah, bawah, c, 16
      [1.0, 0.0, 0.0],    // merah, kiribawah, b, 17
      [], // 18
      // + 38
      //R2
      [],
      [1.0, 0.0, 0.0],    // merah, belakang, a, 1
      [1.0, 0.0, 0.0],    // merah, belakang, b, 2
      [], // 3
      [1.0, 0.0, 0.0],    // merah, kanan, a, 4
      [1.0, 0.0, 0.0],    // merah, belakang, c, 5
      [1.0, 0.0, 0.0],    // merah, atas, a, 6
      [1.0, 0.0, 0.0],    // merah, ataskanan, a, 7 
      [1.0, 0.0, 0.0],    // merah, belakang, d, 8
      [1.0, 0.0, 0.0],    // merah, belakang, e, 9
      [1.0, 0.0, 0.0],    // merah, kanan, b, 10
      [1.0, 0.0, 0.0],    // merah, bawah, b, 11
      [1.0, 0.0, 0.0],    // merah, ataskiri, 12
      [1.0, 0.0, 0.0],    // merah, belakang, f, 13
      [1.0, 0.0, 0.0],    // merah, kanan, c, 14
      [1.0, 0.0, 0.0],    // merah, ataskanan, b, 15
      [1.0, 0.0, 0.0],    // merah, belakang, g, 16
      [], // 17
      [], // 18
      // + 19
      [1.0, 0.0, 0.0],    // merah, kiri, a, 0
      [1.0, 0.0, 0.0],    // merah, depan, a, 1
      [1.0, 0.0, 0.0],    // merah, depan, b, 2
      [1.0, 0.0, 0.0],    // merah, bawah, e, 3
      [1.0, 0.0, 0.0],    // merah, bawah, a, 4
      [1.0, 0.0, 0.0],    // merah, kiribawah, a, 5
      [1.0, 0.0, 0.0],    // merah, depan, c, 6
      [1.0, 0.0, 0.0],    // merah, depan, d, 7
      [1.0, 0.0, 0.0],    // merah, kiri, b, 8
      [1.0, 0.0, 0.0],    // merah, depan, e, 9
      [1.0, 0.0, 0.0],    // merah, kananbawah, 10
      [1.0, 0.0, 0.0],    // merah, depan, f, 11
      [1.0, 0.0, 0.0],    // merah, atas, b, 12
      [], // 13
      [1.0, 0.0, 0.0],    // merah, bawah, d, 14
      [1.0, 0.0, 0.0],    // merah, depan, g, 15
      [1.0, 0.0, 0.0],    // merah, bawah, c, 16
      [1.0, 0.0, 0.0],    // merah, kiribawah, b, 17
      [], // 18
    ],

    objectNormals: [
      //R1
      [],
      [0.0, 0.0, 1.0],    // merah, belakang, a, 1
      [0.0, 0.0, 1.0],    // merah, belakang, b, 2
      [], // 3
      [1.0, 0.0, 0.0],    // merah, kanan, a, 4
      [0.0, 0.0, 1.0],    // merah, belakang, c, 5
      [0.0, 1.0, 0.0],    // merah, atas, a, 6
      [0.5, 0.5, 0.0],    // merah, ataskanan, a, 7 
      [0.0, 0.0, 1.0],    // merah, belakang, d, 8
      [0.0, 0.0, 1.0],    // merah, belakang, e, 9
      [1.0, 0.0, 0.0],    // merah, kanan, b, 10
      [0.0, -1.0, 0.0],    // merah, bawah, b, 11
      [-0.5, 0.5, 0.0],    // merah, ataskiri, 12
      [0.0, 0.0, 1.0],    // merah, belakang, f, 13
      [1.0, 0.0, 0.0],    // merah, kanan, c, 14
      [0.5, 0.5, 0.0],    // merah, ataskanan, b, 15
      [0.0, 0.0, 1.0],    // merah, belakang, g, 16
      [], // 17
      [], // 18
      // + 19
      [-1.0, 0.0, 0.0],    // merah, kiri, a, 0
      [0.0, 0.0, -1.0],    // merah, depan, a, 1
      [0.0, 0.0, -1.0],    // merah, depan, b, 2
      [0.0, -1.0, 0.0],    // merah, bawah, e, 3
      [0.0, -1.0, 0.0],    // merah, bawah, a, 4
      [-0.5, -0.5, 0.0],    // merah, kiribawah, a, 5
      [0.0, 0.0, -1.0],    // merah, depan, c, 6
      [0.0, 0.0, -1.0],    // merah, depan, d, 7
      [-1.0, 0.0, 0.0],    // merah, kiri, b, 8
      [0.0, 0.0, -1.0],    // merah, depan, e, 9
      [1.0, 0.0, 0.0],    // merah, kananbawah, 10
      [0.0, 0.0, -1.0],    // merah, depan, f, 11
      [0.0, 1.0, 0.0],    // merah, atas, b, 12
      [], // 13
      [0.0, -1.0, 0.0],    // merah, bawah, d, 14
      [0.0, 0.0, -1.0],    // merah, depan, g, 15
      [0.0, -1.0, 0.0],    // merah, bawah, c, 16
      [-0.5, -0.5, 0.0],    // merah, kiribawah, b, 17
      [], // 18
      // + 38
      //R1
      [],
      [0.0, 0.0, 1.0],    // merah, belakang, a, 1
      [0.0, 0.0, 1.0],    // merah, belakang, b, 2
      [], // 3
      [1.0, 0.0, 0.0],    // merah, kanan, a, 4
      [0.0, 0.0, 1.0],    // merah, belakang, c, 5
      [0.0, 1.0, 0.0],    // merah, atas, a, 6
      [0.5, 0.5, 0.0],    // merah, ataskanan, a, 7 
      [0.0, 0.0, 1.0],    // merah, belakang, d, 8
      [0.0, 0.0, 1.0],    // merah, belakang, e, 9
      [1.0, 0.0, 0.0],    // merah, kanan, b, 10
      [0.0, -1.0, 0.0],    // merah, bawah, b, 11
      [-0.5, 0.5, 0.0],    // merah, ataskiri, 12
      [0.0, 0.0, 1.0],    // merah, belakang, f, 13
      [1.0, 0.0, 0.0],    // merah, kanan, c, 14
      [0.5, 0.5, 0.0],    // merah, ataskanan, b, 15
      [0.0, 0.0, 1.0],    // merah, belakang, g, 16
      [], // 17
      [], // 18
      // + 19
      [-1.0, 0.0, 0.0],    // merah, kiri, a, 0
      [0.0, 0.0, -1.0],    // merah, depan, a, 1
      [0.0, 0.0, -1.0],    // merah, depan, b, 2
      [0.0, -1.0, 0.0],    // merah, bawah, e, 3
      [0.0, -1.0, 0.0],    // merah, bawah, a, 4
      [-0.5, -0.5, 0.0],    // merah, kiribawah, a, 5
      [0.0, 0.0, -1.0],    // merah, depan, c, 6
      [0.0, 0.0, -1.0],    // merah, depan, d, 7
      [-1.0, 0.0, 0.0],    // merah, kiri, b, 8
      [0.0, 0.0, -1.0],    // merah, depan, e, 9
      [1.0, 0.0, 0.0],    // merah, kananbawah, 10
      [0.0, 0.0, -1.0],    // merah, depan, f, 11
      [0.0, 1.0, 0.0],    // merah, atas, b, 12
      [], // 13
      [0.0, -1.0, 0.0],    // merah, bawah, d, 14
      [0.0, 0.0, -1.0],    // merah, depan, g, 15
      [0.0, -1.0, 0.0],    // merah, bawah, c, 16
      [-0.5, -0.5, 0.0],    // merah, kiribawah, b, 17
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
      [0.0, 0.0, 1.0],    // depan
      [1.0, 0.0, 0.0],    // kanan
      [0.0, 1.0, 0.0],    // atas
      [-1.0, 0.0, 0.0],   // kiri
      [0.0, 0.0, -1.0],   // belakang
      [0.0, -1.0, 0.0],   // bawah
      []
    ],
  }

  function quad(a, b, c, d, object) {
    var indices = [a, b, c, c, d, a];
    for (var i=0; i<indices.length; i++) {
      var point = object.objectPoints[indices[i]];  // [x, y, z]
      for (var j=0; j<point.length; j++) {
        vertices.push(point[j]);
      }
      var color = object.objectColors[a]; // [r, g, b]
      for (var j=0; j<color.length; j++) {
        vertices.push(color[j]);
      }
      var normal = object.objectNormals[a];
      for (var j=0; j<normal.length; j++) {
        vertices.push(normal[j]);
      }
    }
  }
  
  //Cube
  quad(1, 2, 3, 0, cube); // DEPAN, merah
  quad(2, 6, 7, 3, cube); // KANAN, hijau
  quad(3, 7, 4, 0, cube); // ATAS, biru
  quad(4, 5, 1, 0, cube); // KIRI, putih
  quad(5, 4, 7, 6, cube); // BELAKANG, oranye
  quad(6, 2, 1, 5, cube); // BAWAH, kuning

  //R 1
  let quadOffset = 19;
  quad(1, 2, 3, 0, rLetters); //// merah, belakang, a
  quad(2, 4, 5, 6, rLetters); // merah, belakang, b
  quad(4, 13, 13+quadOffset, 4+quadOffset, rLetters); // merah, kanan, a
  quad(5, 6, 7, 8, rLetters); // merah, belakang, c
  quad(6, 6+quadOffset, 1+quadOffset, 1, rLetters); // merah, atas, a
  quad(7, 7+quadOffset, 6+quadOffset, 6, rLetters); // merah, ataskanan, a
  quad(8, 9, 10, 7, rLetters); // merah, belakang, d
  quad(9, 10, 11, 12, rLetters); // merah, belakang, e
  quad(10, 10+quadOffset, 7+quadOffset, 7, rLetters); // merah, kanan, b
  quad(11, 15, 15+quadOffset, 11+quadOffset, rLetters); // merah, bawah, b
  quad(12, 12+quadOffset, 9+quadOffset, 9, rLetters); // merah, ataskiri
  quad(13, 14, 11, 12, rLetters); // merah, belakang, f
  quad(14, 3, 3+quadOffset, 14+quadOffset, rLetters); // merah, kanan, c
  quad(15, 16, 16+quadOffset, 15+quadOffset, rLetters); // merah, ataskanan, b
  quad(16, 17, 18, 15, rLetters); // merah, belakang, g

  quad(0+quadOffset, 0, 1, 1+quadOffset, rLetters); // merah, kiri, a
  quad(1+quadOffset, 2+quadOffset, 3+quadOffset, 0+quadOffset, rLetters); // merah, depan, a
  quad(2+quadOffset, 4+quadOffset, 5+quadOffset, 6+quadOffset, rLetters); // merah, depan, b
  quad(3+quadOffset, 3, 0, 0+quadOffset, rLetters); // merah, bawah, e
  quad(4+quadOffset, 4, 5, 5+quadOffset, rLetters); // merah, bawah, a
  quad(5+quadOffset, 5, 8, 8+quadOffset, rLetters); // merah, kiribawah, a
  quad(6+quadOffset, 7+quadOffset, 8+quadOffset, 5+quadOffset, rLetters); // merah, depan, c
  quad(7+quadOffset, 8+quadOffset, 9+quadOffset, 10+quadOffset, rLetters); // merah, depan, d
  quad(8+quadOffset, 8, 9, 9+quadOffset, rLetters); // merah, kiri, b
  quad(9+quadOffset, 10+quadOffset, 11+quadOffset, 12+quadOffset, rLetters); // merah, depan, e
  quad(10+quadOffset, 10, 11, 11+quadOffset, rLetters); // merah, kananbawah
  quad(11+quadOffset, 12+quadOffset, 13+quadOffset, 14+quadOffset, rLetters); // merah, depan, f
  quad(12+quadOffset, 12, 13, 13+quadOffset, rLetters); // merah, atas, b
  quad(14+quadOffset, 14, 18, 18+quadOffset, rLetters); // merah, bawah, d
  quad(15+quadOffset, 16+quadOffset, 17+quadOffset, 18+quadOffset, rLetters); // merah, depan, g
  quad(16+quadOffset, 16, 17, 17+quadOffset, rLetters); // merah, bawah, c
  quad(17+quadOffset, 17, 18, 18+quadOffset, rLetters); // merah, kiribawah, b

  //R2
  let objectOffset = quadOffset + 19;
  quadOffset = objectOffset + 19;
  quad(1+objectOffset, 2+objectOffset, 3+objectOffset, 0+objectOffset, rLetters); //// merah, belakang, a
  quad(2+objectOffset, 4+objectOffset, 5+objectOffset, 6+objectOffset, rLetters); // merah, belakang, b
  quad(4+objectOffset, 13+objectOffset, 13+quadOffset, 4+quadOffset, rLetters); // merah, kanan, a
  quad(5+objectOffset, 6+objectOffset, 7+objectOffset, 8+objectOffset, rLetters); // merah, belakang, c
  quad(6+objectOffset, 6+quadOffset, 1+quadOffset, 1+objectOffset, rLetters); // merah, atas, a
  quad(7+objectOffset, 7+quadOffset, 6+quadOffset, 6+objectOffset, rLetters); // merah, ataskanan, a
  quad(8+objectOffset, 9+objectOffset, 10+objectOffset, 7+objectOffset, rLetters); // merah, belakang, d
  quad(9+objectOffset, 10+objectOffset, 11+objectOffset, 12+objectOffset, rLetters); // merah, belakang, e
  quad(10+objectOffset, 10+quadOffset, 7+quadOffset, 7+objectOffset, rLetters); // merah, kanan, b
  quad(11+objectOffset, 15+objectOffset, 15+quadOffset, 11+quadOffset, rLetters); // merah, bawah, b
  quad(12+objectOffset, 12+quadOffset, 9+quadOffset, 9+objectOffset, rLetters); // merah, ataskiri
  quad(13+objectOffset, 14+objectOffset, 11+objectOffset, 12+objectOffset, rLetters); // merah, belakang, f
  quad(14+objectOffset, 3+objectOffset, 3+quadOffset, 14+quadOffset, rLetters); // merah, kanan, c
  quad(15+objectOffset, 16+objectOffset, 16+quadOffset, 15+quadOffset, rLetters); // merah, ataskanan, b
  quad(16+objectOffset, 17+objectOffset, 18+objectOffset, 15+objectOffset, rLetters); // merah, belakang, g

  quad(0+quadOffset, 0+objectOffset, 1+objectOffset, 1+quadOffset, rLetters); // merah, kiri, a
  quad(1+quadOffset, 2+quadOffset, 3+quadOffset, 0+quadOffset, rLetters); // merah, depan, a
  quad(2+quadOffset, 4+quadOffset, 5+quadOffset, 6+quadOffset, rLetters); // merah, depan, b
  quad(3+quadOffset, 3+objectOffset, 0+objectOffset, 0+quadOffset, rLetters); // merah, bawah, e
  quad(4+quadOffset, 4+objectOffset, 5+objectOffset, 5+quadOffset, rLetters); // merah, bawah, a
  quad(5+quadOffset, 5+objectOffset, 8+objectOffset, 8+quadOffset, rLetters); // merah, kiribawah, a
  quad(6+quadOffset, 7+quadOffset, 8+quadOffset, 5+quadOffset, rLetters); // merah, depan, c
  quad(7+quadOffset, 8+quadOffset, 9+quadOffset, 10+quadOffset, rLetters); // merah, depan, d
  quad(8+quadOffset, 8+objectOffset, 9+objectOffset, 9+quadOffset, rLetters); // merah, kiri, b
  quad(9+quadOffset, 10+quadOffset, 11+quadOffset, 12+quadOffset, rLetters); // merah, depan, e
  quad(10+quadOffset, 10+objectOffset, 11+objectOffset, 11+quadOffset, rLetters); // merah, kananbawah
  quad(11+quadOffset, 12+quadOffset, 13+quadOffset, 14+quadOffset, rLetters); // merah, depan, f
  quad(12+quadOffset, 12+objectOffset, 13+objectOffset, 13+quadOffset, rLetters); // merah, atas, b
  quad(14+quadOffset, 14+objectOffset, 18+objectOffset, 18+quadOffset, rLetters); // merah, bawah, d
  quad(15+quadOffset, 16+quadOffset, 17+quadOffset, 18+quadOffset, rLetters); // merah, depan, g
  quad(16+quadOffset, 16+objectOffset, 17+objectOffset, 17+quadOffset, rLetters); // merah, bawah, c
  quad(17+quadOffset, 17+objectOffset, 18+objectOffset, 18+quadOffset, rLetters); // merah, kiribawah, b

  var vertexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
  gl.bindBuffer(gl.ARRAY_BUFFER, null);

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

  // Ajarkan attribute a_Position di GPU
  //  tentang pengambilan data verteks dari ARRAY_BUFFER
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
  var aPositionLoc = gl.getAttribLocation(shaderProgram, "a_Position");
  var aColorLoc = gl.getAttribLocation(shaderProgram, "a_Color");
  var aNormalLoc = gl.getAttribLocation(shaderProgram, "a_Normal");
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

  gl.viewport(100, 0, canvas.height, canvas.height);
  gl.enable(gl.DEPTH_TEST);

  var primitive = gl.TRIANGLES;
  var offset = 0;
  var nVertex = 420;

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

  const moveCubeY = (distance) => {
    for (let i = 1; i <= 36; i++) {
      vertices[1 + (9 * (i - 1))] += distance;
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
    else if (event.keyCode == 83 && lightYPosition < boundaryYMovement) { // S = 83
      lightYPosition -= distanceYMovement;
      moveCubeY(-distanceYMovement);
    } 
  }
  document.addEventListener('keydown', onKeyDown);

  // glMatrix.mat4.rotate(model, model, glMatrix.glMatrix.toRadian(15), [1.0, 1.0, 1.0]);
  
  function render() {
    // glMatrix.mat4.rotate(model, model, angularspeed, [1.0, 1.0, 1.0]);
    gl.uniformMatrix4fv(u_Model, false, model);
    gl.uniformMatrix4fv(u_View, false, view);
    gl.uniform3fv(uLightPosition, [0, lightYPosition, 0]);
    var normalModel = glMatrix.mat3.create();
    glMatrix.mat3.normalFromMat4(normalModel, model);
    gl.uniformMatrix3fv(uNormalModel, false, normalModel);
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    gl.drawArrays(primitive, offset, nVertex);
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