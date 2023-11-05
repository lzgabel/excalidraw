const copy = require('copyfiles');

// 使用 copyfiles 方法进行递归拷贝
copy(['build/*', "build/**/*", 'excalidraw-desktop/src'], { up: true }, (err) => {
  if (err) {
    console.error('Error copying files:', err);
  } else {
    console.log('Files copied successfully');
  }
});
