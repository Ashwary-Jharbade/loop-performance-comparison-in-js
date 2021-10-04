# loop-performance-comparison-in-js

### Comparision result after doing 1 crore additions inside following loop's body

Sr. No. | Loop Name | Sum Result | Time Consumed (seconds)
--------|-----------|------------|------------------------
1 | Do while pre decrement | 50000005000000 |  0.14210000002384185
2 | While pre decrement | 50000005000000 |  0.02280000001192093
3 | While post decrement | 49999995000000 |  0.024899999976158143
4 | Simple for loop (Cached) | 49999995000000 | 0.02689999997615814
5 | Do while post decrement | 50000005000000 |  0.027200000047683717
6 | Simple for loop (Uncached) | 49999995000000 |  0.040800000011920926
7 | Map | 49999995000000 |  0.7286000000238418
8 | ForEach | 49999995000000 |  0.7324000000357628
9 | For in  | 49999995000000 | 6.2085
10 | For of (type conversion Number) | 49999995000000 | 6.338199999988079
11 | For of (type conversion parseInt) | 49999995000000 | 8.704199999988079
12 | For of (string iterator) | 49999995000000 | 9.782800000011921