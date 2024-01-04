function calculate() {
  var base = parseFloat(document.getElementById('base').value);
  var height = parseFloat(document.getElementById('height').value);
  var calculationType = document.getElementById('calculationType').value;

  if (isNaN(base) || isNaN(height)) {
      document.getElementById('result').innerHTML = 'Masukkan angka yang valid.';
  } else {
      if (calculationType === 'area') {
          var area = 0.5 * base * height;
          document.getElementById('result').innerHTML = 'Luas: ' + area.toFixed(2);
      } else if (calculationType === 'perimeter') {
          var perimeter = base + height + Math.sqrt(base**2 + height**2);
          document.getElementById('result').innerHTML = 'Keliling: ' + perimeter.toFixed(2);
      }
  }
}
