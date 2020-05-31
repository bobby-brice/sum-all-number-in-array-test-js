/* eslint-disable func-style */
// eslint-disable-next-line func-style

function sumItems(array) {
  let sum = 0;
  array.forEach((item) => {
    if (Array.isArray(item)) {
      sum += sumItems(item);
    } else {
      sum += item;
    }
  });
  return sum;

}
console.log(sumItems([
  [
    [
      [
        [
          [
            [
              [
                [
                  [
                    [
                      [
                        [1]
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ]
      ]
    ]
  ]
]));

