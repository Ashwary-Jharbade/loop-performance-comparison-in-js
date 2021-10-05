# loop-performance-comparison-in-js

### Comparing results after doing 1 crore additions on array inside following loop's body

Sr. No. | Loop Name | Sum Result | Time Consumed (seconds)
--------|-----------|------------|------------------------
1 | While pre decrement | 49999995000000 |  0.02280000001192093
2 | While post decrement | 49999995000000 |  0.024899999976158143
3 | Simple for loop (Cached) | 49999995000000 | 0.02689999997615814
4 | Do while post decrement | 50000005000000 |  0.027200000047683717
5 | Simple for loop (Uncached) | 49999995000000 |  0.040800000011920926
6 | Do while pre decrement | 50000005000000 |  0.14210000002384185
7 | Map | 49999995000000 |  0.7286000000238418
8 | ForEach | 49999995000000 |  0.7324000000357628
9 | For in  | 49999995000000 | 6.2085
10 | For of (type conversion Number) | 49999995000000 | 6.338199999988079
11 | For of (type conversion parseInt) | 49999995000000 | 8.704199999988079
12 | For of (string iterator) | 49999995000000 | 9.782800000011921

### Comparing results after doing 1 crore additions on object inside following loop's body

Sr. No. | Loop Name | Sum Result | Time Consumed (seconds)
--------|-----------|------------|------------------------
1 | Do while pre decrement | 49999995000000 | 0.031100000023841858
2 | Do while post decrement | 49999995000000 |  0.03170000004768372
3 | While pre decrement | 49999995000000 |  0.033300000011920926
4 | While post decrement | 49999995000000 |  0.03459999996423721
5 | Simple for loop (Cached) | 49999995000000 | 0.19639999997615815
6 | For of | 49999995000000 | 6.485300000011921
7 | ForEach | 49999995000000 |  7.519300000011921
8 | Map | 49999995000000 | 7.650899999976158
9 | For in  | 49999995000000 | 9.031099999964237

