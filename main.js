function main() {
  var canvas = document.getElementById("myCanvas");
  var gl = canvas.getContext("webgl");

  var vertices = [];
  var objectPoints = [
    [-0.975, -0.8,  0.8], // 0
    [-0.975,  0.8,  0.8], // 1
    [-0.8,    0.8,  0.8], // 2
    [-0.8,   -0.8,  0.8], // 3

    [-0.8,    0.65, 0.8], // 4
    [-0.35,   0.65, 0.8], // 5
    [-0.25,   0.8,  0.8], // 6
    
    [-0.1,    0.65, 0.8], // 7
    [-0.25,   0.55, 0.8], // 8

    [-0.25,   0.15, 0.8], // 9
    [-0.1,    0.05, 0.8], // 10
    
    [-0.25,  -0.1,  0.8],  // 11
    [-0.35,   0.05, 0.8],  // 12
    
    [-0.8,    0.05, 0.8], // 13
    [-0.8,   -0.1,  0.8], // 14

    [-0.5,   -0.1,  0.8], // 15
    [-0.1,   -0.8,  0.8], // 16
    [-0.25,  -0.8,  0.8], // 17
    [-0.7,   -0.1,  0.8], // 18

    [-0.975+1.075, -0.8,  0.8], // 0
    [-0.975+1.075,  0.8,  0.8], // 1
    [-0.8+1.075,    0.8,  0.8], // 2
    [-0.8+1.075,   -0.8,  0.8], // 3

    [-0.8+1.075,    0.65, 0.8], // 4
    [-0.35+1.075,   0.65, 0.8], // 5
    [-0.25+1.075,   0.8,  0.8], // 6
    
    [-0.1+1.075,    0.65, 0.8], // 7
    [-0.25+1.075,   0.55, 0.8], // 8

    [-0.25+1.075,   0.15, 0.8], // 9
    [-0.1+1.075,    0.05, 0.8], // 10
    
    [-0.25+1.075,  -0.1,  0.8],  // 11
    [-0.35+1.075,   0.05, 0.8],  // 12
    
    [-0.8+1.075,    0.05, 0.8], // 13
    [-0.8+1.075,   -0.1,  0.8], // 14

    [-0.5+1.075,   -0.1,  0.8], // 15
    [-0.1+1.075,   -0.8,  0.8], // 16
    [-0.25+1.075,  -0.8,  0.8], // 17
    [-0.7+1.075,   -0.1,  0.8], // 18
  ];
  var objectColors = [
    [],
    [1.0, 0.0, 0.0],    // merah
    [1.0, 0.0, 0.0],    // merah
    [1.0, 0.0, 0.0],    // merah
    [1.0, 0.0, 0.0],    // merah
    [1.0, 0.0, 0.0],    // merah
    [1.0, 0.0, 0.0],    // merah
    [1.0, 0.0, 0.0],    // merah
    [1.0, 0.0, 0.0],    // merah
    [1.0, 0.0, 0.0],    // merah
    [1.0, 0.0, 0.0],    // merah
    [1.0, 0.0, 0.0],    // merah
    [1.0, 0.0, 0.0],    // merah
    [1.0, 0.0, 0.0],    // merah
    [1.0, 0.0, 0.0],    // merah
    [1.0, 0.0, 0.0],    // merah
    [1.0, 0.0, 0.0],    // merah
    [1.0, 0.0, 0.0],    // merah
    [1.0, 0.0, 0.0],    // merah
    [1.0, 0.0, 0.0],    // merah
    [1.0, 0.0, 0.0],    // merah
    [1.0, 0.0, 0.0],    // merah
    [1.0, 0.0, 0.0],    // merah
    [1.0, 0.0, 0.0],    // merah
    [1.0, 0.0, 0.0],    // merah
    [1.0, 0.0, 0.0],    // merah
    [1.0, 0.0, 0.0],    // merah
    [1.0, 0.0, 0.0],    // merah
    [1.0, 0.0, 0.0],    // merah
    [1.0, 0.0, 0.0],    // merah
    [1.0, 0.0, 0.0],    // merah
    [1.0, 0.0, 0.0],    // merah
    [1.0, 0.0, 0.0],    // merah
    [1.0, 0.0, 0.0],    // merah
    [1.0, 0.0, 0.0],    // merah
    []
  ];

  var objectNormals = [
    [],
    [0.0, 0.0, 1.0],    // depan
    [0.0, 0.0, 1.0],    // depan
    [0.0, 0.0, 1.0],    // depan
    [0.0, 0.0, 1.0],    // depan
    [0.0, 0.0, 1.0],    // depan
    [0.0, 0.0, 1.0],    // depan
    [0.0, 0.0, 1.0],    // depan
    [0.0, 0.0, 1.0],    // depan
    [0.0, 0.0, 1.0],    // depan
    [0.0, 0.0, 1.0],    // depan
    [0.0, 0.0, 1.0],    // depan
    [0.0, 0.0, 1.0],    // depan
    [0.0, 0.0, 1.0],    // depan
    [0.0, 0.0, 1.0],    // depan
    [0.0, 0.0, 1.0],    // depan
    [0.0, 0.0, 1.0],    // depan
    [0.0, 0.0, 1.0],    // depan
    [0.0, 0.0, 1.0],    // depan
    [0.0, 0.0, 1.0],    // depan
    [0.0, 0.0, 1.0],    // depan
    [0.0, 0.0, 1.0],    // depan
    [0.0, 0.0, 1.0],    // depan
    [0.0, 0.0, 1.0],    // depan
    [0.0, 0.0, 1.0],    // depan
    [0.0, 0.0, 1.0],    // depan
    [0.0, 0.0, 1.0],    // depan
    [0.0, 0.0, 1.0],    // depan
    [0.0, 0.0, 1.0],    // depan
    [0.0, 0.0, 1.0],    // depan
    [0.0, 0.0, 1.0],    // depan
    [0.0, 0.0, 1.0],    // depan
    [0.0, 0.0, 1.0],    // depan
    [0.0, 0.0, 1.0],    // depan
    [0.0, 0.0, 1.0],    // depan
    []
  ];

  function quad(a, b, c, d) {
    var indices = [a, b, c, c, d, a];
    for (var i=0; i<indices.length; i++) {
      var point = objectPoints[indices[i]];  // [x, y, z]
      for (var j=0; j<point.length; j++) {
        vertices.push(point[j]);
      }
      var color = objectColors[a]; // [r, g, b]
      for (var j=0; j<color.length; j++) {
        vertices.push(color[j]);
      }
      var normal = objectNormals[a];
      for (var j=0; j<normal.length; j++) {
        vertices.push(normal[j]);
      }
    }
  }
  quad(1, 2, 3, 0); // DEPAN, merah
  quad(2, 4, 5, 6); // DEPAN, merah
  quad(5, 6, 7, 8); // DEPAN, merah
  quad(7, 8, 9, 10); // DEPAN, merah
  quad(9, 10, 11, 12); // DEPAN, merah
  quad(11, 12, 13, 14); // DEPAN, merah
  quad(15, 16, 17, 18); // DEPAN, merah
  quad(1+19, 2+19, 3+19, 0+19); // DEPAN, merah
  quad(2+19, 4+19, 5+19, 6+19); // DEPAN, merah
  quad(5+19, 6+19, 7+19, 8+19); // DEPAN, merah
  quad(7+19, 8+19, 9+19, 10+19); // DEPAN, merah
  quad(9+19, 10+19, 11+19, 12+19); // DEPAN, merah
  quad(11+19, 12+19, 13+19, 14+19); // DEPAN, merah
  quad(15+19, 16+19, 17+19, 18+19); // DEPAN, merah

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
  var nVertex = 84;

  var u_Model = gl.getUniformLocation(shaderProgram, 'u_Model');
  var u_View = gl.getUniformLocation(shaderProgram, 'u_View');
  var u_Projection = gl.getUniformLocation(shaderProgram, 'u_Projection');
  var model = glMatrix.mat4.create();
  var view = glMatrix.mat4.create();
  var projection = glMatrix.mat4.create();
  gl.uniformMatrix4fv(u_Projection, false, projection);

  var linearspeed = 0.01;
  var angularspeed = glMatrix.glMatrix.toRadian(0.1);
  function onKeyDown(event) {
    console.log(event.keyCode);
    if (event.keyCode == 65) {
      glMatrix.mat4.translate(model, model, [-linearspeed, 0.0, 0.0]);
    } // A = 65
    else if (event.keyCode == 68) {
      glMatrix.mat4.translate(model, model, [linearspeed, 0.0, 0.0]);
    } // D = 68
    if (event.keyCode == 87) {
      glMatrix.mat4.translate(model, model, [0.0, linearspeed, 0.0]);
    } // W = 87
    if (event.keyCode == 83) {
      glMatrix.mat4.translate(model, model, [0.0, -linearspeed, 0.0]);
    } // S = 83
  }
  document.addEventListener('keydown', onKeyDown);

  var uNormalModel = gl.getUniformLocation(shaderProgram, 'u_NormalModel');
  var uAmbientColor = gl.getUniformLocation(shaderProgram, 'u_AmbientColor');
  gl.uniform3fv(uAmbientColor, [0.5, 0.5, 0.5]);
  var uLightColor = gl.getUniformLocation(shaderProgram, 'u_LightColor');
  gl.uniform3fv(uLightColor, [1, 1, 1]);
  var uLightPosition = gl.getUniformLocation(shaderProgram, 'u_LightPosition');
  gl.uniform3fv(uLightPosition, [2, -3, 3]);

  // glMatrix.mat4.rotate(model, model, glMatrix.glMatrix.toRadian(45), [1.0, 1.0, 1.0]);
  
  function render() {
    // glMatrix.mat4.rotate(model, model, angularspeed, [1.0, 1.0, 1.0]);
    gl.uniformMatrix4fv(u_Model, false, model);
    gl.uniformMatrix4fv(u_View, false, view);
    var normalModel = glMatrix.mat3.create();
    glMatrix.mat3.normalFromMat4(normalModel, model);
    gl.uniformMatrix3fv(uNormalModel, false, normalModel);
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    gl.drawArrays(primitive, offset, nVertex);
    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);

  function resizer(){
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
    var minimumSize = Math.min(gl.canvas.height, gl.canvas.width); // buat nyari yang paling kecil yang mana
    gl.viewport(canvas.width/2-minimumSize/2, canvas.height/2-minimumSize/2, minimumSize, minimumSize);
    draw();
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