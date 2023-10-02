const decode = (input) =>
  input
    .replace(/(\.|\-)(\d+)/g, (_, x, digit) =>
      x == '.' ? '1'.repeat(digit) : '0'.repeat(digit),
    )
    .match(/(0+|1+)/g)
    .map((str) => (str.length === 1 ? '.' : (str.length - 2) / 2))
    .join('')
    .match(/\d+\.\d+/g)
    .map((x) => x.split('.'))
    .sort((a, b) => a[1] - b[1])
    .map((x) => String.fromCharCode(x[0]))
    .join('');
